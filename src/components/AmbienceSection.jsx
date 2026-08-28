import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function AmbienceSection() {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    {
      title: 'Charpai Garden',
      subtitle: 'Traditional woven rope charpais under the night sky. Steaming hot creamy cutting chai, live tandoor aromas, and endless conversations with friends.',
      image: '/images/ambience/charpai-chai.jpg',
      features: [
        'Authentic woven charpai cots with bolsters',
        'Steaming cutting chai & late-night snacks',
        'Fairy string lights & rustic kerosene lanterns',
        'Open breeze & highway night ambience',
      ],
    },
    {
      title: 'Family Enclosures',
      subtitle: 'Private, spacious, child-friendly cabins with dedicated table service, warm lantern glow, and comfortable traditional seating for the whole family.',
      image: '/images/ambience/family-cabin.jpg',
      features: [
        '6–10 seater private wooden cabins',
        'Traditional low seating & cushioned benches',
        'Fast family & children priority service',
        'Cozy, noise-buffered atmosphere',
      ],
    },
    {
      title: 'AC Dining Hall',
      subtitle: 'Opulent Mughal-inspired air-conditioned luxury hall with velvet upholstery, ornate jaali arches, glowing chandeliers, and pristine banquet dining.',
      image: '/images/ambience/royal-ac-hall.jpg',
      features: [
        'Full air-conditioned climate comfort',
        'Plush velvet booths & carved teak tables',
        'Ideal for grand feasts & celebrations',
        'Dedicated royal dining butler service',
      ],
    },
  ];

  const zone = zones[activeZone];

  return (
    <section
      id="ambience"
      className="section-pad-lg"
      style={{ background: 'var(--cream)', color: 'var(--ink)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="headline-lg" style={{ color: 'var(--ink)', marginBottom: '0.75rem' }}>
            Three ways to <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>sit down.</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted)', maxWidth: '540px' }}>
            Whether it's an open-air charpai under the stars, a private family cabin, or the royal AC hall — every seat carries the same authentic highway hospitality.
          </p>
        </div>

        {/* Clean Animated Toggle Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.65rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {zones.map((z, i) => {
            const isActive = activeZone === i;
            return (
              <button
                key={z.title}
                onClick={() => setActiveZone(i)}
                style={{
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid var(--ink)' : '1.5px solid rgba(18, 16, 14, 0.22)',
                  background: isActive ? 'var(--ink)' : 'transparent',
                  color: isActive ? 'var(--cream)' : 'var(--ink)',
                  borderRadius: '9999px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isActive ? '0 4px 14px rgba(18, 16, 14, 0.18)' : 'none',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--ink)';
                    e.currentTarget.style.background = 'rgba(18, 16, 14, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(18, 16, 14, 0.22)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {z.title}
              </button>
            );
          })}
        </div>

        {/* Zone Display Layout — Mobile-First Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(1.75rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Photo with smooth transition */}
          <div
            style={{
              aspectRatio: '16 / 10',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(18, 16, 14, 0.12)',
              position: 'relative',
            }}
          >
            <img
              key={zone.title}
              src={zone.image}
              alt={zone.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'fadeIn 0.4s ease-in-out',
              }}
            />
          </div>

          {/* Details */}
          <div>
            <h3
              className="headline-md"
              style={{ color: 'var(--ink)', marginBottom: '0.75rem' }}
            >
              {zone.title}
            </h3>
            <p
              className="body-lg"
              style={{
                color: '#5c5449',
                marginBottom: '1.5rem',
                maxWidth: '460px',
                lineHeight: 1.6,
              }}
            >
              {zone.subtitle}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {zone.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '19px',
                      height: '19px',
                      borderRadius: '50%',
                      background: 'var(--ember)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="var(--cream)" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 500 }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/book"
              className="btn-outline-ink"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              Reserve this Zone <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0.6; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
