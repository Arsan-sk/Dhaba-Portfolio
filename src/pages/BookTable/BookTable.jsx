import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TABLES, SEATING_ZONES, getZoneById } from '../../data/tables'
import { buildWhatsAppBookingURL } from '../../data/business'
import './BookTable.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function BookTable() {
  const [selectedTable, setSelectedTable] = useState(null)
  const [hoveredTable, setHoveredTable] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    phone: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleTableClick = (table) => {
    if (table.available) {
      setSelectedTable(table)
      setFormSubmitted(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedTable) return

    const zone = getZoneById(selectedTable.zone)
    const url = buildWhatsAppBookingURL({
      table: selectedTable.id,
      section: zone?.name || selectedTable.zone,
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      name: formData.name,
      phone: formData.phone,
    })

    setFormSubmitted(true)
    
    // Small delay to show success state, then open WhatsApp
    setTimeout(() => {
      window.open(url, '_blank')
    }, 800)
  }

  const getTableColor = (table) => {
    if (selectedTable?.id === table.id) return 'var(--color-saffron)'
    if (!table.available) return 'var(--color-base-lighter)'
    const zone = getZoneById(table.zone)
    return zone?.color || 'var(--color-ember)'
  }

  const getTableOpacity = (table) => {
    if (!table.available) return 0.3
    if (selectedTable?.id === table.id) return 1
    if (hoveredTable?.id === table.id) return 0.9
    return 0.6
  }

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <motion.div className="book-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="book-hero">
        <div className="book-hero__bg" />
        <div className="book-hero__content container">
          <p className="book-hero__eyebrow">Book a Table</p>
          <h1 className="book-hero__title font-display">
            Find Your<br/>
            <span className="text-ember">Spot</span>
          </h1>
          <p className="book-hero__subtitle">
            Choose your table and send a reservation request via WhatsApp.
          </p>
          <p className="book-hero__note">
            This is a reservation request — the team will confirm your booking on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Booking Area */}
      <section className="booking-area container">
        <div className="booking-layout">
          
          {/* Seating Map */}
          <div className="seating-map">
            <div className="seating-map__header">
              <h2 className="seating-map__title font-display">Choose a Table</h2>
              {/* Legend */}
              <div className="seating-legend">
                <div className="seating-legend__item">
                  <span className="seating-legend__dot seating-legend__dot--available" />
                  <span>Available</span>
                </div>
                <div className="seating-legend__item">
                  <span className="seating-legend__dot seating-legend__dot--occupied" />
                  <span>Occupied</span>
                </div>
                <div className="seating-legend__item">
                  <span className="seating-legend__dot seating-legend__dot--selected" />
                  <span>Selected</span>
                </div>
              </div>
            </div>

            <div className="seating-map__canvas">
              <svg
                viewBox="0 0 100 100"
                className="seating-svg"
                role="img"
                aria-label="Interactive seating map of Nawab Dhaba"
              >
                {/* Background */}
                <rect x="0" y="0" width="100" height="100" fill="var(--color-base-light)" rx="2" />

                {/* Zone Labels */}
                {SEATING_ZONES.map(zone => {
                  const zoneTables = TABLES.filter(t => t.zone === zone.id)
                  const avgX = zoneTables.reduce((s, t) => s + t.x, 0) / zoneTables.length
                  return (
                    <text
                      key={zone.id}
                      x={avgX + 3}
                      y={14}
                      fill={zone.color}
                      fontSize="2.8"
                      fontWeight="700"
                      fontFamily="var(--font-display)"
                      textAnchor="middle"
                      opacity="0.7"
                    >
                      {zone.name}
                    </text>
                  )
                })}

                {/* Zone Boundaries */}
                <line x1="34" y1="18" x2="34" y2="92" stroke="rgba(245,237,224,0.06)" strokeWidth="0.3" strokeDasharray="1,1" />
                <line x1="70" y1="18" x2="70" y2="92" stroke="rgba(245,237,224,0.06)" strokeWidth="0.3" strokeDasharray="1,1" />

                {/* Tables */}
                {TABLES.map(table => {
                  const isSelected = selectedTable?.id === table.id
                  const isHovered = hoveredTable?.id === table.id
                  const fillColor = getTableColor(table)
                  const opacity = getTableOpacity(table)

                  return (
                    <g
                      key={table.id}
                      className={`table-node ${table.available ? 'table-node--available' : 'table-node--occupied'} ${isSelected ? 'table-node--selected' : ''}`}
                      onClick={() => handleTableClick(table)}
                      onMouseEnter={() => setHoveredTable(table)}
                      onMouseLeave={() => setHoveredTable(null)}
                      style={{ cursor: table.available ? 'pointer' : 'not-allowed' }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Table ${table.id}, ${table.capacity} seats, ${table.available ? 'available' : 'occupied'}`}
                      onKeyDown={(e) => e.key === 'Enter' && handleTableClick(table)}
                    >
                      {/* Glow effect for available/selected */}
                      {(isSelected || (isHovered && table.available)) && (
                        <circle
                          cx={table.x + (table.width || table.radius * 2) / 2}
                          cy={table.y + (table.height || table.radius * 2) / 2}
                          r={(table.radius || Math.max(table.width, table.height) / 2) + 3}
                          fill="none"
                          stroke={fillColor}
                          strokeWidth="0.4"
                          opacity="0.4"
                        />
                      )}

                      {/* Table Shape */}
                      {table.shape === 'circle' ? (
                        <circle
                          cx={table.x}
                          cy={table.y}
                          r={table.radius}
                          fill={fillColor}
                          opacity={opacity}
                          stroke={isSelected ? 'var(--color-warm-white)' : 'rgba(245,237,224,0.1)'}
                          strokeWidth={isSelected ? 0.6 : 0.3}
                          rx="1"
                        />
                      ) : (
                        <rect
                          x={table.x}
                          y={table.y}
                          width={table.width}
                          height={table.height}
                          fill={fillColor}
                          opacity={opacity}
                          stroke={isSelected ? 'var(--color-warm-white)' : 'rgba(245,237,224,0.1)'}
                          strokeWidth={isSelected ? 0.6 : 0.3}
                          rx="1"
                        />
                      )}

                      {/* Table Label */}
                      <text
                        x={table.shape === 'circle' ? table.x : table.x + table.width / 2}
                        y={table.shape === 'circle' ? table.y + 1 : table.y + table.height / 2 + 1}
                        fill="var(--color-warm-white)"
                        fontSize="2.2"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        opacity={table.available ? 0.9 : 0.4}
                        style={{ pointerEvents: 'none' }}
                      >
                        {table.id}
                      </text>

                      {/* Capacity indicator */}
                      <text
                        x={table.shape === 'circle' ? table.x : table.x + table.width / 2}
                        y={(table.shape === 'circle' ? table.y : table.y + table.height / 2) + 3.5}
                        fill="var(--color-warm-white)"
                        fontSize="1.5"
                        textAnchor="middle"
                        opacity={table.available ? 0.5 : 0.25}
                        style={{ pointerEvents: 'none' }}
                      >
                        {table.capacity}p
                      </text>

                      {/* Occupied cross pattern */}
                      {!table.available && table.shape === 'rect' && (
                        <>
                          <line
                            x1={table.x + 1} y1={table.y + 1}
                            x2={table.x + table.width - 1} y2={table.y + table.height - 1}
                            stroke="rgba(245,237,224,0.08)" strokeWidth="0.3"
                          />
                          <line
                            x1={table.x + table.width - 1} y1={table.y + 1}
                            x2={table.x + 1} y2={table.y + table.height - 1}
                            stroke="rgba(245,237,224,0.08)" strokeWidth="0.3"
                          />
                        </>
                      )}
                    </g>
                  )
                })}

                {/* Decorative elements */}
                <text x="50" y="97" fill="rgba(245,237,224,0.15)" fontSize="1.8" textAnchor="middle" fontFamily="var(--font-body)">
                  Entrance →
                </text>
              </svg>
            </div>

            {/* Hovered/Selected Table Info */}
            <AnimatePresence>
              {(hoveredTable || selectedTable) && (
                <motion.div
                  className="table-info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {(() => {
                    const t = hoveredTable || selectedTable
                    const zone = getZoneById(t.zone)
                    return (
                      <>
                        <span className="table-info__id font-display">Table {t.id}</span>
                        <span className="table-info__zone" style={{ color: zone?.color }}>{zone?.name}</span>
                        <span className="table-info__capacity">{t.capacity} seats</span>
                        <span className={`table-info__status ${t.available ? 'table-info__status--available' : 'table-info__status--occupied'}`}>
                          {t.available ? '● Available' : '○ Occupied'}
                        </span>
                      </>
                    )
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Booking Form Panel */}
          <div className="booking-panel">
            <AnimatePresence mode="wait">
              {!selectedTable ? (
                <motion.div
                  key="prompt"
                  className="booking-panel__prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="booking-panel__prompt-icon">🪑</div>
                  <h3 className="booking-panel__prompt-title font-display">Select a Table</h3>
                  <p className="booking-panel__prompt-text">
                    Click on an available table in the map to start your reservation request.
                  </p>
                </motion.div>
              ) : formSubmitted ? (
                <motion.div
                  key="success"
                  className="booking-panel__success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="booking-panel__success-icon">✓</div>
                  <h3 className="booking-panel__success-title font-display">Opening WhatsApp...</h3>
                  <p className="booking-panel__success-text">
                    Your reservation request is being sent. The Nawab Dhaba team will confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="booking-panel__form-wrap"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="booking-panel__selected">
                    <span className="booking-panel__selected-label">Selected</span>
                    <span className="booking-panel__selected-table font-display">
                      Table {selectedTable.id}
                    </span>
                    <span className="booking-panel__selected-info">
                      {getZoneById(selectedTable.zone)?.name} · {selectedTable.capacity} seats
                    </span>
                    <button
                      className="booking-panel__change"
                      onClick={() => setSelectedTable(null)}
                    >
                      Change table
                    </button>
                  </div>

                  <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="booking-form__field">
                      <label htmlFor="booking-name" className="booking-form__label">Your Name</label>
                      <input
                        id="booking-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Arjun Patel"
                        required
                        className="booking-form__input"
                      />
                    </div>

                    <div className="booking-form__row">
                      <div className="booking-form__field">
                        <label htmlFor="booking-guests" className="booking-form__label">Guests</label>
                        <input
                          id="booking-guests"
                          type="number"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          min="1"
                          max={selectedTable.capacity}
                          placeholder={`1–${selectedTable.capacity}`}
                          required
                          className="booking-form__input"
                        />
                      </div>
                      <div className="booking-form__field">
                        <label htmlFor="booking-phone" className="booking-form__label">Phone</label>
                        <input
                          id="booking-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="98XXXXXXXX"
                          required
                          className="booking-form__input"
                        />
                      </div>
                    </div>

                    <div className="booking-form__row">
                      <div className="booking-form__field">
                        <label htmlFor="booking-date" className="booking-form__label">Date</label>
                        <input
                          id="booking-date"
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={today}
                          required
                          className="booking-form__input"
                        />
                      </div>
                      <div className="booking-form__field">
                        <label htmlFor="booking-time" className="booking-form__label">Time</label>
                        <input
                          id="booking-time"
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="booking-form__input"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn--primary booking-form__submit">
                      📲 Send Request via WhatsApp
                    </button>

                    <p className="booking-form__disclaimer">
                      This sends a reservation request via WhatsApp. The team will confirm availability.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
