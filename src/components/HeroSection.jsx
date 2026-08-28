import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/hero/hero-tandoori.jpg',
    '/images/hero/hero-spread.jpg',
    '/images/hero/hero-family.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '650px',
        maxHeight: '1000px',
        overflow: 'hidden',
        background: 'var(--ink)',
      }}
    >
      {/* Background Images (crossfade) */}
      {slides.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentSlide === i ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: 1,
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(180deg, rgba(18,16,14,0.3) 0%, rgba(18,16,14,0.15) 30%, rgba(18,16,14,0.6) 70%, rgba(18,16,14,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '6rem',
        }}
      >
        {/* Main Headline + Monogram row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Headline */}
          <h1
            className="headline-xl"
            style={{
              color: 'var(--cream)',
              maxWidth: '700px',
            }}
          >
            Where the road ends,{' '}
            <br />
            the feast{' '}
            <span style={{ fontStyle: 'italic' }}>begins.</span>
          </h1>

          {/* ND Monogram */}
          <div className="monogram hide-mobile">
            ND
          </div>
        </div>

        {/* Sub-info row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.75rem',
          }}
        >
          <span
            className="body-sm"
            style={{
              color: 'var(--cream)',
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <MapPin size={14} />
            Nashik Road, Bhiwandi
          </span>
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'var(--muted)',
            }}
          />
          <span
            className="body-sm"
            style={{
              color: 'var(--cream)',
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Clock size={14} />
            Open Daily · 11 AM – 1 AM
          </span>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/book" className="btn-ember">
            Reserve a Table
            <ArrowRight size={16} />
          </a>
          <a href="/#menu" className="btn-outline">
            Explore the Menu
          </a>
        </div>
      </div>

      {/* Bottom Pill Navigation Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          background: 'var(--ink)',
          borderTop: '1px solid var(--line)',
          padding: '0.85rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          overflowX: 'auto',
        }}
      >
        {[
          { label: 'The Table', href: '#story' },
          { label: 'The Feast', href: '#menu' },
          { label: 'The Place', href: '#ambience' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Find Us', href: '#visit' },
        ].map((item) => (
          <a key={item.label} href={`/${item.href}`} className="pill">
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
