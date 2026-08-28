import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GoodFoodSection() {
  return (
    <section
      className="section-pad-lg"
      style={{ background: 'var(--ink)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — Photo */}
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            <img
              src="/images/dishes/pomfret-tandoori.jpg"
              alt="Pomfret Tandoori plated"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right — Text */}
          <div>
            <h2
              className="headline-lg"
              style={{ color: 'var(--cream)', marginBottom: '1.25rem' }}
            >
              Good food
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>multiplies.</span>
            </h2>

            <p
              className="body-lg"
              style={{ marginBottom: '1rem', maxWidth: '440px' }}
            >
              What starts as a quick highway pit-stop turns into an
              hour-long celebration. One plate becomes three. Strangers
              share recommendations. That's the Nawab effect.
            </p>

            <p
              className="body-lg"
              style={{ marginBottom: '2rem', maxWidth: '440px' }}
            >
              Every dish is portioned to share. Every table is set
              for stories. Come for the food, stay for the chaos.
            </p>

            <a href="/menu" className="btn-text">
              See full menu <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
