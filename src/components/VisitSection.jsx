import React from 'react';
import { MapPin, Phone, Clock, Navigation, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function VisitSection() {
  return (
    <section
      id="visit"
      style={{
        background: 'var(--gold)',
        color: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="container section-pad-lg"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'stretch',
        }}
      >
        {/* Left — Text + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2
            className="headline-lg"
            style={{ color: 'var(--ink)', marginBottom: '1.25rem' }}
          >
            Find us
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>hungry.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.15rem' }}>{BUSINESS.name}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.5 }}>
                  {BUSINESS.address.full}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Phone size={18} style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{BUSINESS.phone}</span>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Clock size={18} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>Open Daily · 11:00 AM – 1:00 AM</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={getDirectionsURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ink"
            >
              <Navigation size={14} />
              Get Directions
            </a>
            <a href={getPhoneURL()} className="btn-outline-ink">
              <Phone size={14} />
              Call Now
            </a>
            <a
              href={getWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ink"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right — Map */}
        <div
          style={{
            borderRadius: '4px',
            overflow: 'hidden',
            minHeight: '360px',
            position: 'relative',
          }}
        >
          <iframe
            title="Nawab Dhaba Location Map"
            src="https://maps.google.com/maps?q=Nawab+Dhaba+Nashik+Road+Bhinar+Bhiwandi+Maharashtra+421302&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
    </section>
  );
}
