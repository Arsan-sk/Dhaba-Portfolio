import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  User, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { TABLES, SEATING_ZONES, getZoneById } from '../data/tables';
import { BUSINESS, buildWhatsAppBookingURL } from '../data/business';

export default function TableBookingSection() {
  const [selectedTable, setSelectedTable] = useState(TABLES[0]); // Default Table F1
  const [selectedZone, setSelectedZone] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    specialRequest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredTables = selectedZone === 'all' 
    ? TABLES 
    : TABLES.filter(t => t.zone === selectedZone);

  const handleTableSelect = (table) => {
    if (!table.available) return;
    setSelectedTable(table);
    setFormData(prev => ({
      ...prev,
      guests: String(Math.min(parseInt(prev.guests || '2'), table.capacity))
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) return;

    const zone = getZoneById(selectedTable.zone);
    const whatsappURL = buildWhatsAppBookingURL({
      table: selectedTable.id,
      section: zone ? zone.name : selectedTable.zone,
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      name: formData.name,
      phone: formData.phone
    });

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 600);
  };

  return (
    <section id="book" style={{
      padding: '6rem 1.5rem 8rem',
      background: 'linear-gradient(180deg, #0C0A09 0%, #15100D 50%, #0C0A09 100%)',
      borderTop: '1px solid rgba(212, 175, 55, 0.15)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#D4AF37',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={16} />
            <span>Interactive Dhaba Seating</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: '#FAF5EE',
            lineHeight: 1.15
          }}>
            Reserve Your <span className="text-gold-gradient">Table & Feast</span>
          </h2>

          <p style={{
            color: '#A89F91',
            fontSize: '1rem',
            maxWidth: '650px',
            margin: '0.75rem auto 0',
            lineHeight: 1.6
          }}>
            Pick your preferred zone and table on our interactive map. Your request connects directly to our host on WhatsApp for instant confirmation.
          </p>
        </div>

        {/* Main Grid: Left Map + Right Booking Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Left: Interactive Visual Floor Map */}
          <div className="glass-panel" style={{
            borderRadius: '24px',
            padding: '1.75rem',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#FAF5EE', fontWeight: 700 }}>
                  Interactive Dhaba Floor Layout
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#A89F91' }}>
                  Click an available glowing table to select
                </p>
              </div>

              {/* Status Legend */}
              <div style={{ display: 'flex', gap: '0.85rem', fontSize: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#D4AF37' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 6px #D4AF37' }} />
                  Selected
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#10B981' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  Available
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#78716C' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#444' }} />
                  Reserved
                </span>
              </div>
            </div>

            {/* Zone Filter Tabs for Map */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedZone('all')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: selectedZone === 'all' ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)',
                  color: selectedZone === 'all' ? '#000' : '#D6C7B2'
                }}
              >
                All Zones
              </button>
              {SEATING_ZONES.map(z => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: selectedZone === z.id ? z.color : 'rgba(255, 255, 255, 0.08)',
                    color: selectedZone === z.id ? '#000' : '#D6C7B2'
                  }}
                >
                  {z.icon} {z.name}
                </button>
              ))}
            </div>

            {/* Visual SVG Dhaba Floor Canvas */}
            <div style={{
              background: '#0F0C0A',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '16px',
              padding: '1rem',
              position: 'relative',
              boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.8)'
            }}>
              
              {/* Floor Plan Header Labels */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                textAlign: 'center',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#D4AF37',
                marginBottom: '0.75rem',
                borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
                paddingBottom: '0.4rem'
              }}>
                <span>👨‍👩‍👧‍👦 Family Zone</span>
                <span>✨ Charpai Garden</span>
                <span>❄️ AC Dining Hall</span>
              </div>

              {/* Grid of Tables */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(85px, 1fr))',
                gap: '0.85rem',
                minHeight: '260px'
              }}>
                {filteredTables.map((table) => {
                  const isSelected = selectedTable?.id === table.id;
                  const isAvailable = table.available;
                  const zone = getZoneById(table.zone);

                  return (
                    <div
                      key={table.id}
                      onClick={() => handleTableSelect(table)}
                      style={{
                        background: isSelected 
                          ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.35) 0%, rgba(245, 158, 11, 0.2) 100%)' 
                          : isAvailable 
                            ? 'rgba(255, 255, 255, 0.04)' 
                            : 'rgba(0, 0, 0, 0.5)',
                        border: isSelected 
                          ? '2px solid #FDE68A' 
                          : isAvailable 
                            ? `1px solid ${zone?.color || '#10B981'}` 
                            : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: table.shape === 'circle' ? '50%' : '12px',
                        aspectRatio: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isAvailable ? 'pointer' : 'not-allowed',
                        opacity: isAvailable ? 1 : 0.45,
                        transition: 'all 0.25s ease',
                        boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                        position: 'relative'
                      }}
                      title={`${table.id} - ${zone?.name} (${table.capacity} Seats)`}
                    >
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-serif)',
                        color: isSelected ? '#FDE68A' : isAvailable ? '#FAF5EE' : '#78716C'
                      }}>
                        {table.id}
                      </div>

                      <div style={{
                        fontSize: '0.65rem',
                        color: isSelected ? '#D4AF37' : '#A89F91',
                        fontWeight: 600
                      }}>
                        {table.capacity} Seats
                      </div>

                      <div style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: isSelected ? '#D4AF37' : isAvailable ? '#10B981' : '#DC2626'
                      }} />
                    </div>
                  );
                })}
              </div>

              {/* Entrance indicator */}
              <div style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.7rem',
                color: '#A89F91',
                borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                paddingTop: '0.4rem'
              }}>
                🚪 Highway Entrance & Parking Area
              </div>
            </div>

            {/* Selected Table Summary Banner */}
            {selectedTable && (
              <div style={{
                padding: '0.85rem 1rem',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <div style={{ color: '#FDE68A', fontWeight: 700, fontSize: '0.95rem' }}>
                    Selected: <strong>{selectedTable.id}</strong> ({getZoneById(selectedTable.zone)?.name})
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#D6C7B2' }}>
                    Accommodates up to {selectedTable.capacity} guests comfortably
                  </div>
                </div>

                <span style={{
                  background: '#10B981',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px'
                }}>
                  ● Available for Booking
                </span>
              </div>
            )}

          </div>

          {/* Right: Reservation Form */}
          <div className="glass-panel" style={{
            borderRadius: '24px',
            padding: '2rem',
            border: '1px solid rgba(212, 175, 55, 0.25)'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#FAF5EE',
                marginBottom: '0.3rem'
              }}>
                Reservation Details
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#A89F91' }}>
                Fill in your details below to request your table via WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#A89F91" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '10px',
                      color: '#FAF5EE',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Phone Number (WhatsApp) *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} color="#A89F91" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 077688 85646"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '10px',
                      color: '#FAF5EE',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Guests and Date Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Guests *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Users size={16} color="#A89F91" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.5rem',
                        background: '#161210',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '10px',
                        color: '#FAF5EE',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Date *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={16} color="#A89F91" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.5rem',
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '10px',
                        color: '#FAF5EE',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Time Slot Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Preferred Time Slot *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {[
                    { label: 'Lunch', time: '13:00' },
                    { label: 'Evening', time: '17:00' },
                    { label: 'Dinner', time: '20:30' },
                    { label: 'Late Night', time: '23:00' }
                  ].map(slot => (
                    <button
                      type="button"
                      key={slot.time}
                      onClick={() => setFormData(prev => ({ ...prev, time: slot.time }))}
                      style={{
                        padding: '0.55rem 0.3rem',
                        borderRadius: '8px',
                        border: formData.time === slot.time ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
                        background: formData.time === slot.time ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 0, 0, 0.3)',
                        color: formData.time === slot.time ? '#FDE68A' : '#A89F91',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <div>{slot.label}</div>
                      <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D6C7B2', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Special Request (Optional)
                </label>
                <textarea
                  name="specialRequest"
                  rows={2}
                  placeholder="e.g. Birthday decoration, high chair for toddler, extra spicy mutton..."
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '10px',
                    color: '#FAF5EE',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-gold"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem'
                }}
              >
                <MessageCircle size={18} />
                <span>Confirm & Request via WhatsApp</span>
              </button>

              <div style={{
                fontSize: '0.75rem',
                color: '#A89F91',
                textAlign: 'center',
                lineHeight: 1.4
              }}>
                🔒 No advance payment needed. Our host at Nawab Dhaba will confirm table availability immediately via WhatsApp.
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
