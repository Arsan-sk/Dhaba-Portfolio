import React, { useState } from 'react';
import { 
  Calendar, Clock, Users, Phone, User, MessageCircle, ArrowRight 
} from 'lucide-react';
import { TABLES, SEATING_ZONES, getZoneById } from '../data/tables';
import { BUSINESS, buildWhatsAppBookingURL } from '../data/business';

export default function TableBookingSection() {
  const [selectedTable, setSelectedTable] = useState(TABLES[0]);
  const [selectedZone, setSelectedZone] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
  });

  const filteredTables = selectedZone === 'all'
    ? TABLES
    : TABLES.filter((t) => t.zone === selectedZone);

  const handleTableSelect = (table) => {
    if (!table.available) return;
    setSelectedTable(table);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) return;
    const zone = getZoneById(selectedTable.zone);
    const url = buildWhatsAppBookingURL({
      table: selectedTable.id,
      section: zone ? zone.name : selectedTable.zone,
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      name: formData.name,
      phone: formData.phone,
    });
    window.open(url, '_blank');
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 2.5rem',
    border: '1px solid var(--line)',
    background: 'rgba(255, 255, 255, 0.03)',
    color: 'var(--cream)',
    fontSize: '16px', /* Prevents iOS auto-zoom */
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--muted)',
    marginBottom: '0.4rem',
  };

  return (
    <section
      id="book"
      className="section-pad-lg"
      style={{ background: 'var(--ink)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="headline-lg" style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>
            Grab a <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>seat.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '520px' }}>
            Pick your preferred zone and table. Your booking request goes
            straight to our host on WhatsApp for immediate confirmation.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Left — Floor Map */}
          <div style={{ border: '1px solid var(--line)', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '6px' }}>
            {/* Zone Tabs */}
            <div
              className="pills-scroll"
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                overflowX: 'auto',
                paddingBottom: '0.25rem',
              }}
            >
              <button
                onClick={() => setSelectedZone('all')}
                className={`pill ${selectedZone === 'all' ? 'active' : ''}`}
                style={{ fontSize: '0.72rem', flexShrink: 0 }}
              >
                All Zones
              </button>
              {SEATING_ZONES.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`pill ${selectedZone === z.id ? 'active' : ''}`}
                  style={{ fontSize: '0.72rem', flexShrink: 0 }}
                >
                  {z.icon} {z.name}
                </button>
              ))}
            </div>

            {/* Table Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
                gap: '0.6rem',
              }}
            >
              {filteredTables.map((table) => {
                const isSelected = selectedTable?.id === table.id;
                const isAvailable = table.available;
                return (
                  <div
                    key={table.id}
                    onClick={() => handleTableSelect(table)}
                    style={{
                      aspectRatio: '1',
                      border: isSelected
                        ? '2px solid var(--ember)'
                        : isAvailable
                          ? '1px solid var(--line)'
                          : '1px solid rgba(255,255,255,0.05)',
                      borderRadius: table.shape === 'circle' ? '50%' : '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: isAvailable ? 'pointer' : 'not-allowed',
                      opacity: isAvailable ? 1 : 0.35,
                      background: isSelected ? 'rgba(226, 88, 34, 0.15)' : 'transparent',
                      transition: 'all 0.2s ease',
                      minHeight: '44px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: isSelected ? 'var(--ember)' : 'var(--cream)',
                      }}
                    >
                      {table.id}
                    </div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--muted)' }}>
                      {table.capacity} seats
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Summary */}
            {selectedTable && (
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '0.85rem',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.82rem',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <span style={{ color: 'var(--cream)' }}>
                  <strong>Table {selectedTable.id}</strong> ·{' '}
                  {getZoneById(selectedTable.zone)?.name} ·{' '}
                  {selectedTable.capacity} seats
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--ember)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  SELECTED
                </span>
              </div>
            )}
          </div>

          {/* Right — Reservation Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Name */}
            <div>
              <label style={labelStyle}>Your Name</label>
              <div style={{ position: 'relative' }}>
                <User
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted)',
                  }}
                />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Arsan Shaikh"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone Number</label>
              <div style={{ position: 'relative' }}>
                <Phone
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted)',
                  }}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Guests & Date Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              <div>
                <label style={labelStyle}>Number of Guests</label>
                <div style={{ position: 'relative' }}>
                  <Users
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '0.85rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--muted)',
                    }}
                  />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {[1, 2, 4, 6, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num} style={{ background: 'var(--ink)' }}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Reservation Date</label>
                <div style={{ position: 'relative' }}>
                  <Calendar
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '0.85rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--muted)',
                    }}
                  />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Time */}
            <div>
              <label style={labelStyle}>Time Slot</label>
              <div style={{ position: 'relative' }}>
                <Clock
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted)',
                  }}
                />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {[
                    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
                    '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM',
                    '11:00 PM', '12:00 AM'
                  ].map((t) => (
                    <option key={t} value={t} style={{ background: 'var(--ink)' }}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-ember"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.9rem',
                marginTop: '0.5rem',
                fontSize: '0.9rem',
              }}
            >
              <MessageCircle size={16} />
              Book on WhatsApp
              <ArrowRight size={14} />
            </button>

            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', margin: 0 }}>
              Direct WhatsApp message with your selected table details will be created.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
