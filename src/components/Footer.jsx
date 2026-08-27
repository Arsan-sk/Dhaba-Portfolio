import React from 'react';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Heart, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#080605',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      color: '#A89F91',
      padding: '5rem 1.5rem 3rem',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2A1D15 0%, #150E0A 100%)',
                border: '1.5px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
              }}>
                <Flame size={22} color="#FF5722" />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  color: '#FAF5EE'
                }}>
                  NAWAB <span style={{ color: '#D4AF37' }}>DHABA</span>
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  Authentic Royal Dhaba Feast
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#D6C7B2', marginBottom: '1.5rem' }}>
              Bhiwandi's premier highway dining destination. Sizzling charcoal tandoori meats, authentic dum biryanis, fresh coastal seafood, and royal family hospitality.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={getPhoneURL()}
                className="btn-outline-gold"
                style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
              >
                <Phone size={13} />
                <span>Call Us</span>
              </a>
              <a
                href={getWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10B981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#FAF5EE',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              {[
                { name: 'Home & Welcome', href: '/#hero' },
                { name: 'Our Heritage Story', href: '/#story' },
                { name: 'Signature Cravings', href: '/#specialties' },
                { name: 'Full Dhaba Menu', href: '/menu' },
                { name: 'Dining Ambience', href: '/#ambience' },
                { name: 'Interactive Table Booking', href: '/book' },
                { name: 'Photo & Video Gallery', href: '/gallery' },
                { name: 'Location & Directions', href: '/#visit' },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: '#A89F91',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A89F91'}
                  >
                    <span style={{ color: '#D4AF37', fontSize: '0.75rem' }}>›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings & Highlights */}
          <div>
            <h4 style={{
              color: '#FAF5EE',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              Operating Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '0.85rem'
              }}>
                <div style={{ color: '#10B981', fontWeight: 700, marginBottom: '0.2rem' }}>
                  Open Every Single Day
                </div>
                <div style={{ color: '#FAF5EE', fontSize: '0.95rem', fontWeight: 700 }}>
                  11:00 AM – 1:00 AM (Midnight)
                </div>
                <div style={{ fontSize: '0.75rem', color: '#A89F91', marginTop: '0.2rem' }}>
                  Live Tandoor & Late Night Highway Kitchen
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#D6C7B2', lineHeight: 1.5 }}>
                ✨ <strong>Facilities:</strong> High-speed AC dining, open garden charpais, private family enclosures, generous car & bike parking space.
              </div>
            </div>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 style={{
              color: '#FAF5EE',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              Reach Nawab Dhaba
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#FF5722" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span style={{ color: '#D6C7B2', lineHeight: 1.5 }}>
                  {BUSINESS.address.full}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                <span style={{ color: '#FAF5EE', fontWeight: 700 }}>
                  {BUSINESS.phone}
                </span>
              </div>
              <a
                href={getDirectionsURL()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#D4AF37',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  marginTop: '0.4rem'
                }}
              >
                <span>Navigate on Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>{BUSINESS.legalName}</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Bhiwandi · Nashik Road · Maharashtra</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#D4AF37',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
