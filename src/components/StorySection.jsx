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
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 6vw, 6rem)',
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
              <span style={{ fontStyle: 'italic' }}>just a table.</span>
            </h2>
          </div>

          {/* Right — Body Text */}
          <div>
            <p
              className="body-lg"
              style={{ marginBottom: '1.25rem' }}
            >
              Parked on the Nashik&ndash;Mumbai highway since day one, Nawab Dhaba
              is where long hauls turn into long tables &mdash; overflowing with
              charcoal-kissed tandoori, hand-ground masalas, and the kind of
              hospitality that makes strangers share a chutney.
            </p>
            <p className="body-lg">
              Whether you arrive at noon with family or pull in past midnight
              with friends, every seat here carries the same promise: honest fire,
              honest food, honestly too much of it.
            </p>
          </div>
        </div>

        {/* Stat Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            marginTop: '4rem',
            paddingTop: '3rem',
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
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: 'var(--ember)',
                  marginBottom: '0.25rem',
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
