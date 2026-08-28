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
    background: 'transparent',
    color: 'var(--cream)',
    fontSize: '0.9rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
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
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="headline-lg" style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>
            Grab a <span style={{ fontStyle: 'italic' }}>seat.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '520px' }}>
            Pick your preferred zone and table. Your booking request goes
            straight to our host on WhatsApp.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Left — Floor Map */}
          <div style={{ border: '1px solid var(--line)', padding: '1.5rem' }}>
            {/* Zone Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => setSelectedZone('all')}
                className={`pill ${selectedZone === 'all' ? 'active' : ''}`}
                style={{ fontSize: '0.72rem' }}
              >
                All Zones
              </button>
              {SEATING_ZONES.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`pill ${selectedZone === z.id ? 'active' : ''}`}
                  style={{ fontSize: '0.72rem' }}
                >
                  {z.icon} {z.name}
                </button>
              ))}
            </div>

            {/* Table Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                gap: '0.65rem',
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
                      background: isSelected ? 'rgba(226, 88, 34, 0.12)' : 'transparent',
                      transition: 'all 0.2s ease',
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
                    <div style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>
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
                  fontSize: '0.85rem',
                }}
              >
                <span style={{ color: 'var(--cream)' }}>
                  <strong>{selectedTable.id}</strong> ·{' '}
                  {getZoneById(selectedTable.zone)?.name} ·{' '}
                  {selectedTable.capacity} seats
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--ember)',
                    fontWeight: 700,
                  }}
                >
                  SELECTED
                </span>
              </div>
            )}
          </div>

          {/* Right — Booking Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              border: '1px solid var(--line)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div>
              <label style={labelStyle}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Phone (WhatsApp)</label>
              <div style={{ position: 'relative' }}>
                <Phone size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="077688 85646"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Guests</label>
                <div style={{ position: 'relative' }}>
                  <Users size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    style={{ ...inputStyle, background: 'var(--ink)' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Date</label>
                <div style={{ position: 'relative' }}>
                  <Calendar size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
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

            {/* Time Slots */}
            <div>
              <label style={labelStyle}>Preferred Time</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {[
                  { label: 'Lunch', time: '13:00' },
                  { label: 'Evening', time: '17:00' },
                  { label: 'Dinner', time: '20:30' },
                  { label: 'Late', time: '23:00' },
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot.time}
                    onClick={() => setFormData((prev) => ({ ...prev, time: slot.time }))}
                    style={{
                      padding: '0.55rem 0.3rem',
                      border: formData.time === slot.time
                        ? '1.5px solid var(--ember)'
                        : '1px solid var(--line)',
                      background: formData.time === slot.time
                        ? 'rgba(226, 88, 34, 0.12)'
                        : 'transparent',
                      color: formData.time === slot.time
                        ? 'var(--ember)'
                        : 'var(--muted)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div>{slot.label}</div>
                    <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>{slot.time}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-ember"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.9rem',
                fontSize: '0.95rem',
                marginTop: '0.5rem',
              }}
            >
              <MessageCircle size={18} />
              Confirm via WhatsApp
            </button>

            <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center' }}>
              No advance payment needed. Our host confirms availability instantly on WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
