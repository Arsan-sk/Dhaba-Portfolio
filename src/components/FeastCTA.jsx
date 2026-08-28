import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeastCTA() {
  return (
    <section
      style={{
        background: 'var(--ember)',
        color: 'var(--cream)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          minHeight: '440px',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Left — Text */}
        <div
          className="section-pad"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 'clamp(1rem, 3vw, 3rem)',
          }}
        >
          <h2
            className="headline-lg"
            style={{
              color: 'var(--cream)',
              marginBottom: '1.25rem',
            }}
          >
            Start with one.
            <br />
            <span style={{ color: 'var(--ink)' }}>End with a feast.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: 1.65,
              color: 'rgba(245, 238, 226, 0.88)',
              maxWidth: '440px',
              marginBottom: '2rem',
            }}
          >
            From a single seekh kebab sizzling on charcoal to a table 
            overflowing with biryani, tandoori, and handis — every meal 
            here writes its own story.
          </p>

          <a
            href="/menu"
            className="btn-outline"
            style={{
              borderColor: 'var(--cream)',
              color: 'var(--cream)',
              alignSelf: 'flex-start',
            }}
          >
            Explore Full Menu
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Right — Tilted Photos Stack */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            minHeight: '320px',
          }}
        >
          {/* Back photo */}
          <div
            className="tilt-right"
            style={{
              position: 'absolute',
              width: 'clamp(160px, 45%, 260px)',
              aspectRatio: '3 / 4',
              top: '10%',
              right: '12%',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              zIndex: 1,
            }}
          >
            <img
              src="/images/dishes/nawab-special-chicken.jpg"
              alt="Nawab Special Chicken"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Front photo */}
          <div
            className="tilt-left"
            style={{
              position: 'relative',
              width: 'clamp(160px, 45%, 260px)',
              aspectRatio: '3 / 4',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              zIndex: 2,
            }}
          >
            <img
              src="/images/hero/hero-spread.jpg"
              alt="Grand feast spread"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
