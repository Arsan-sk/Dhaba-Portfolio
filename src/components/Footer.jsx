import React from 'react';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid var(--line)',
        padding: '4rem 2rem 2.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--cream)',
                marginBottom: '1rem',
              }}
            >
              Dilli <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>Darbar</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '280px' }}>
              Bhiwandi's premier highway dining destination. Charcoal
              tandoori, dum biryanis, coastal seafood, and royal hospitality
              since day one.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Our Story', href: '/#story' },
                { name: 'The Menu', href: '/#menu' },
                { name: 'Seating', href: '/#ambience' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Book a Table', href: '/book' },
                { name: 'Find Us', href: '/#visit' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--cream)',
                    opacity: 0.6,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Hours
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.4rem' }}>
              Open Daily
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Open · Closes 3 AM
              <br />
              Family dining, late-night bites, and a relaxed roadside vibe.
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--ember)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  {BUSINESS.address.full}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} color="var(--ember)" style={{ flexShrink: 0 }} />
                <a href={getPhoneURL()} style={{ fontSize: '0.95rem', color: 'var(--cream)', fontWeight: 600 }}>
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'var(--muted)',
          }}
        >
          <span>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cream)',
              transition: 'all 0.2s ease',
            }}
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
