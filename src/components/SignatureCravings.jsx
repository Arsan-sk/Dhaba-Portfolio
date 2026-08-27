import React, { useState } from 'react';
import { Flame, Sparkles, MessageCircle, ArrowRight, Eye, Check } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/menu';
import { BUSINESS } from '../data/business';

export default function SignatureCravings({ onSelectDish }) {
  const [activeDish, setActiveDish] = useState(null);

  const getWhatsAppDishURL = (dish) => {
    const msg = `Hello Nawab Dhaba! 👋\n\nI am interested in ordering/reserving the signature dish: *${dish.name}* (${dish.category}).\n\nPlease let me know availability. Thank you!`;
    return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="specialties" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #0C0A09 0%, #15100D 50%, #0C0A09 100%)',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#FF5722',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.75rem'
          }}>
            <Flame size={16} />
            <span>Chef's Masterpieces</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: '#FAF5EE',
            lineHeight: 1.15
          }}>
            Signature <span className="text-ember-gradient">Cravings</span>
          </h2>

          <p style={{
            color: '#A89F91',
            fontSize: '1rem',
            maxWidth: '650px',
            margin: '0.75rem auto 0',
            lineHeight: 1.6
          }}>
            Our most requested, celebrated dishes crafted with hand-ground spices and roasted over glowing charcoal.
          </p>
        </div>

        {/* Cravings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s ease',
                position: 'relative'
              }}
            >
              {/* Dish Image Container */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden'
              }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Dietary & Featured Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.5rem',
                  zIndex: 2
                }}>
                  <span style={{
                    background: dish.diet === 'veg' ? '#059669' : '#DC2626',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {dish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
                  </span>

                  <span style={{
                    background: 'rgba(12, 10, 9, 0.85)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Sparkles size={11} /> Signature
                  </span>
                </div>

                {/* Spice Level Indicator on Image */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(12, 10, 9, 0.85)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  color: '#FF8A65',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}>
                  <span>{'🌶️'.repeat(dish.spiceLevel || 1)}</span>
                </div>
              </div>

              {/* Dish Content Details */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#D4AF37',
                    fontWeight: 700,
                    marginBottom: '0.35rem'
                  }}>
                    {dish.category}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#FAF5EE',
                    lineHeight: 1.25,
                    marginBottom: '0.6rem'
                  }}>
                    {dish.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#A89F91',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {dish.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {dish.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#D6C7B2',
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div style={{
                  display: 'flex',
                  gap: '0.6rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <a
                    href={getWhatsAppDishURL(dish)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ember"
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      padding: '0.55rem 0.75rem'
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  {onSelectDish && (
                    <button
                      onClick={() => onSelectDish(dish)}
                      style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '9999px',
                        padding: '0.55rem 0.85rem',
                        color: '#D4AF37',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href="/menu"
            className="btn-gold"
            style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
          >
            <span>Explore All 20+ Dishes in Full Menu</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
