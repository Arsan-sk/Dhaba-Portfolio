import React from 'react';
import { MapPin, Phone, ArrowUp, Star } from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL, getReviewURL } from '../data/business';

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
              Jalsa <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Dhaba</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '280px', marginBottom: '1rem' }}>
              Bhiwandi's premier highway dining destination on Mumbai-Nashik Expressway. Charcoal
              tandoor, Friday midnight buffet @ ₹499, family dining, and royal hospitality.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  color: 'var(--gold)',
                  fontWeight: 600,
                }}
              >
                <InstagramIcon size={15} color="#e1306c" />
                {BUSINESS.social.instagramHandle}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Our Story', href: '/#story' },
                { name: 'Friday Buffet @ ₹499', href: '/#friday-buffet' },
                { name: 'The Menu', href: '/#menu' },
                { name: 'Seating Zones', href: '/#ambience' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Book a Table', href: '/book' },
                { name: 'Find Us & Map', href: '/#visit' },
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

          {/* Hours & Service */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Hours & Options
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.4rem' }}>
              Open Daily
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>Open · Closes 3 AM</span>
              <br />
              Friday Buffet: 8:00 PM – 1:00 AM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--muted)' }}>
              <span>• Outdoor seating</span>
              <span>• Private dining room</span>
              <span>• Good for watching sport</span>
            </div>
          </div>

          {/* Contact & Review */}
          <div>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
              Contact & Review
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--ember)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  {BUSINESS.address.full}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href={getPhoneURL()} style={{ fontSize: '0.95rem', color: 'var(--cream)', fontWeight: 600 }}>
                  {BUSINESS.phone}
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={getReviewURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: 'var(--gold)',
                    fontWeight: 600,
                  }}
                >
                  <Star size={14} fill="var(--gold)" />
                  Write a Google Review →
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

