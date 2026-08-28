import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function AmbienceSection() {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    {
      title: 'Family Enclosures',
      subtitle: 'Private, spacious, child-friendly cabins with dedicated service.',
      image: '/images/hero/hero-family.jpg',
      features: ['6–10 seater partitioned tables', 'Air-cooled private cabins', 'Fast family service', 'High chairs available'],
    },
    {
      title: 'Charpai Garden',
      subtitle: 'Traditional woven cots under the stars. The authentic highway dhaba experience.',
      image: '/images/ambience/dhaba-night.jpg',
      features: ['Open-air seating with bolsters', 'Warm fairy lights & lanterns', 'Live tandoor view', 'Perfect for late nights'],
    },
    {
      title: 'AC Dining Hall',
      subtitle: 'Climate-controlled comfort with cushioned seating and Mughlai wall art.',
      image: '/images/hero/hero-spread.jpg',
      features: ['Full air-conditioning', 'Cushioned luxury seating', 'Ideal for celebrations', 'Premium décor'],
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
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="headline-lg" style={{ color: 'var(--ink)', marginBottom: '0.75rem' }}>
            Three ways to <span style={{ fontStyle: 'italic' }}>sit down.</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted)', maxWidth: '520px' }}>
            Whether it's a family cabin, an open-air charpai, or an AC hall — every seat has the same view: a table full of food.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {zones.map((z, i) => (
            <button
              key={i}
              onClick={() => setActiveZone(i)}
              className={`pill-ink ${activeZone === i ? 'active' : ''}`}
            >
              {z.title}
            </button>
          ))}
        </div>

        {/* Zone Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Photo */}
          <div style={{ aspectRatio: '16 / 10', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src={zone.image}
              alt={zone.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '0.5rem' }}>
              {zone.title}
            </h3>
            <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '1.5rem', maxWidth: '400px' }}>
              {zone.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {zone.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'var(--ember)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="var(--cream)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>{f}</span>
                </div>
              ))}
            </div>

            <a href="/book" className="btn-outline-ink">
              Reserve this Zone <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
