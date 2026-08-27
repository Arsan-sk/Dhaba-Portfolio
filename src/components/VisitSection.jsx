import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Car, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function VisitSection() {
  return (
    <section id="visit" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      
      {/* Header */}
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
          <MapPin size={16} />
          <span>Location & Highway Access</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: '#FAF5EE',
          lineHeight: 1.15
        }}>
          Visit <span className="text-gold-gradient">Nawab Dhaba</span> Today
        </h2>

        <p style={{
          color: '#A89F91',
          fontSize: '1rem',
          maxWidth: '650px',
          margin: '0.75rem auto 0',
          lineHeight: 1.6
        }}>
          Conveniently situated on Nashik Road in Bhinar, Bhiwandi. Ample car and bike parking with prompt roadside access.
        </p>
      </div>

      {/* Grid: Details on Left + Embedded Live Map on Right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2.5rem',
        alignItems: 'stretch'
      }}>
        
        {/* Contact & Location Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Address Card */}
          <div className="glass-panel" style={{
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            gap: '1.25rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(230, 74, 25, 0.15)',
              border: '1px solid #FF5722',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={24} color="#FF5722" />
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Restaurant Address
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#FAF5EE', margin: '0.2rem 0 0.5rem' }}>
                {BUSINESS.name}
              </h3>
              <p style={{ color: '#D6C7B2', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {BUSINESS.address.full}
              </p>
              <div style={{ marginTop: '0.75rem' }}>
                <a
                  href={getDirectionsURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#D4AF37',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="glass-panel" style={{
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            gap: '1.25rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={24} color="#10B981" />
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Hours of Operation
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#FAF5EE', margin: '0.2rem 0 0.4rem' }}>
                Open 7 Days A Week
              </h3>
              <p style={{ color: '#FAF5EE', fontSize: '1rem', fontWeight: 700 }}>
                11:00 AM – 1:00 AM (Midnight)
              </p>
              <p style={{ color: '#A89F91', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                Live charcoal tandoor and kitchen active late into the night.
              </p>
            </div>
          </div>

          {/* Phone & Direct Contact */}
          <div className="glass-panel" style={{
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            gap: '1.25rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid #D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={24} color="#D4AF37" />
            </div>

            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Direct Phone Line
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FAF5EE', margin: '0.2rem 0 0.6rem' }}>
                {BUSINESS.phone}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={getPhoneURL()}
                  className="btn-gold"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 1.25rem' }}
                >
                  <Phone size={14} />
                  <span>Call Restaurant</span>
                </a>
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ember"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 1.25rem' }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Host</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Google Maps Embed Frame */}
        <div className="glass-panel" style={{
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          minHeight: '400px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <iframe
            title="Nawab Dhaba Location Map"
            src="https://maps.google.com/maps?q=Nawab+Dhaba+Nashik+Road+Bhinar+Bhiwandi+Maharashtra+421302&t=&z=14&ie=UTF8&iwloc=&output=embed"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '400px',
              border: 'none',
              filter: 'invert(90%) hue-rotate(180deg) contrast(110%)',
              flexGrow: 1
            }}
            loading="lazy"
          />

          {/* Quick Navigation Overlay Banner at bottom of map */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            background: 'rgba(12, 10, 9, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '14px',
            padding: '0.85rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(12px)'
          }}>
            <div>
              <div style={{ color: '#FAF5EE', fontWeight: 700, fontSize: '0.9rem' }}>
                Driving to Nawab Dhaba?
              </div>
              <div style={{ color: '#A89F91', fontSize: '0.75rem' }}>
                1-tap GPS Navigation in Google Maps
              </div>
            </div>

            <a
              href={getDirectionsURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
            >
              <Navigation size={14} />
              <span>Navigate</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
