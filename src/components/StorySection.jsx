import React from 'react';

export default function StorySection() {
  return (
    <section
      id="story"
      className="section-pad"
      style={{
        background: 'var(--ink)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'end',
          }}
        >
          {/* Left — Big Editorial Headline */}
          <div>
            <h2
              className="headline-xl"
              style={{ color: 'var(--cream)' }}
            >
              A table is never{' '}
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>just a table.</span>
            </h2>
          </div>

          {/* Right — Body Text */}
          <div>
            <p
              className="body-lg"
              style={{ marginBottom: '1.25rem' }}
            >
              Relaxed roadside dining meets warm hospitality at Jalsa Dhaba,
              where family tables, outdoor seating, private dining rooms, and live sports turn a
              quick highway stop into a proper feast. Classic dhaba favourites and grand buffets are served with
              the kind of authentic taste that keeps guests coming back.
            </p>
            <p className="body-lg">
              Whether you arrive for an afternoon meal or a late-night craving,
              every seat here carries the same promise: hearty Indian comfort food,
              welcoming service, and a laid-back setting made for gathering.
            </p>
          </div>
        </div>

        {/* Stat Strip — Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--line)',
          }}
        >
          {[
            { number: '500+', label: 'Guests Daily' },
            { number: '25+', label: 'Tandoor Recipes' },
            { number: '4.8★', label: 'Google Rating' },
            { number: '3', label: 'Seating Zones' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--ember)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.1,
                }}
              >
                {stat.number}
              </div>
              <div className="body-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
