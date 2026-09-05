import React from 'react';
import { MapPin, Phone, Clock, Navigation, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL, getReviewURL } from '../data/business';
import GoogleActionsBar from './GoogleActionsBar';

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function VisitSection() {
  return (
    <section
      id="visit"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 10%, #201a14 0%, #0e0c0a 100%)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="container section-pad-lg">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2rem, 4vw, 3rem)' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            HIGHWAY LOCATION & CONTACT
          </span>
          <h2
            className="headline-lg"
            style={{ color: 'var(--cream)', marginTop: '0.4rem', marginBottom: '0.75rem' }}
          >
            Find us on the{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Expressway.</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted)' }}>
            Conveniently located on Mumbai - Nashik Expressway, Chavindra, Bhiwandi. Stop by for charcoal tandoor, late-night bites, or our Friday buffet!
          </p>
        </div>

        {/* Google Place Profile & Action Details Card */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <GoogleActionsBar />
        </div>

        {/* Map & Direction Details Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Quick Access & Highlights */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                Direct Highway Access
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--ember)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--cream)', marginBottom: '0.2rem' }}>
                      {BUSINESS.name}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                      {BUSINESS.address.full}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Phone size={20} color="var(--gold)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Phone</div>
                    <a
                      href={getPhoneURL()}
                      style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--cream)' }}
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Clock size={20} color="#4ade80" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Operating Hours</div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4ade80' }}>
                      {BUSINESS.hours.display}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <InstagramIcon size={20} color="#e1306c" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Official Instagram</div>
                    <a
                      href={BUSINESS.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--gold)' }}
                    >
                      {BUSINESS.social.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={getDirectionsURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember"
                style={{ flex: 1, minWidth: '140px', justifyContent: 'center' }}
              >
                <Navigation size={15} />
                Get Directions
              </a>
              <a
                href={getWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ flex: 1, minWidth: '140px', justifyContent: 'center' }}
              >
                <MessageCircle size={15} color="#4ade80" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              minHeight: '360px',
              position: 'relative',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)',
              border: '1px solid var(--line)',
            }}
          >
            <iframe
              title="Jalsa Dhaba Location Map"
              src="https://maps.google.com/maps?q=Jalsa+Dhaba+Mumbai+Nashik+Expy+Chavindra+Bhiwandi+Bhinar+Maharashtra+421302&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '360px',
                border: 'none',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

