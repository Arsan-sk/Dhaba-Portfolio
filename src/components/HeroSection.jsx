import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { getDirectionsURL } from '../data/business';

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
        minHeight: '100vh',
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
              objectPosition: 'center 40%',
            }}
          />
        </div>
      ))}

      {/* Deep Radial Vignette Overlay — dark corners & edges framing the scene */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'radial-gradient(ellipse 85% 75% at 55% 45%, rgba(18,16,14,0.02) 0%, rgba(18,16,14,0.45) 55%, rgba(18,16,14,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Directional Left-to-Right & Top-to-Bottom Contrast Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(90deg, rgba(18,16,14,0.88) 0%, rgba(18,16,14,0.55) 42%, rgba(18,16,14,0.15) 70%, rgba(18,16,14,0.75) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(18,16,14,0.72) 0%, rgba(18,16,14,0.0) 25%, rgba(18,16,14,0.0) 50%, rgba(18,16,14,0.55) 78%, rgba(18,16,14,0.96) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content Container — Vertically Balanced Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '6.5rem 2.5rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Main Content Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem',
            width: '100%',
          }}
        >
          {/* Left: Eyebrow + Huge Bold Serif Headline + Subtitle + Action Buttons */}
          <div style={{ maxWidth: '850px' }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '1.5px',
                  background: 'var(--gold)',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--gold)',
                }}
              >
                NASHIK ROAD VILLAGE · BHIWANDI
              </span>
            </div>

            {/* Headline — Bold, commanding, Playfair serif */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.4rem, 6.4vw, 5.8rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.025em',
                color: 'var(--cream)',
                marginBottom: '1.25rem',
                textShadow: '0 3px 28px rgba(0,0,0,0.7)',
              }}
            >
              Where the road
              <br />
              ends, the feast
              <br />
              begins.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                color: 'rgba(245, 238, 226, 0.92)',
                lineHeight: 1.6,
                maxWidth: '560px',
                marginBottom: '2.25rem',
                textShadow: '0 2px 16px rgba(0,0,0,0.7)',
              }}
            >
              Bold plates. Open tables. Late-night cravings sorted.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Primary Ember Button */}
              <a
                href="/menu"
                style={{
                  background: 'var(--ember)',
                  color: 'var(--cream)',
                  padding: '0.95rem 2rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  textDecoration: 'none',
                  transition: 'background 0.25s ease, transform 0.2s ease',
                  border: 'none',
                  borderRadius: '0px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c94717';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--ember)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore the Full Menu
                <ArrowUpRight size={17} />
              </a>

              {/* Secondary Get Directions Link */}
              <a
                href={getDirectionsURL()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, opacity 0.2s ease',
                  opacity: 0.95,
                  textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cream)';
                  e.currentTarget.style.opacity = '0.95';
                }}
              >
                <MapPin size={15} color="var(--gold)" />
                GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* Right: ND Monogram (Tilted ~18deg) & Scroll Indicator */}
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              paddingBottom: '0.75rem',
              userSelect: 'none',
            }}
          >
            {/* Tilted ND Badge Cluster */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'rotate(-18deg)',
                transformOrigin: 'center center',
                marginBottom: '1.25rem',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* EST. */}
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.24em',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  marginBottom: '5px',
                }}
              >
                EST.
              </span>

              {/* Compact Stylized ND */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  lineHeight: 1,
                  margin: '2px 0',
                }}
              >
                {/* N — italic serif */}
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.7rem, 3.6vw, 3.4rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--cream)',
                    letterSpacing: '-0.04em',
                    lineHeight: 0.85,
                    textShadow: '0 2px 14px rgba(0,0,0,0.7)',
                  }}
                >
                  N
                </span>
                {/* D — bold upright serif */}
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.7rem, 3.6vw, 3.4rem)',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    color: 'var(--cream)',
                    letterSpacing: '-0.02em',
                    lineHeight: 0.85,
                    marginLeft: '-0.06em',
                    textShadow: '0 2px 14px rgba(0,0,0,0.7)',
                  }}
                >
                  D
                </span>
              </div>

              {/* COME HUNGRY */}
              <span
                style={{
                  fontSize: '0.58rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-serif)',
                  marginTop: '5px',
                }}
              >
                COME HUNGRY
              </span>
            </div>

            {/* SCROLL TO TASTE THE STORY (White text) */}
            <span
              style={{
                fontSize: '0.56rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.24em',
                color: '#ffffff',
                marginBottom: '0.55rem',
                opacity: 0.95,
                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
              }}
            >
              SCROLL TO TASTE THE STORY
            </span>

            {/* 3 Horizontal lines Indicator — Animated & synced with active slide */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {slides.map((_, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    title={`Slide ${idx + 1}`}
                    style={{
                      width: isActive ? '40px' : '34px',
                      height: isActive ? '3px' : '2px',
                      background: isActive ? 'var(--gold)' : 'rgba(245, 238, 226, 0.3)',
                      borderRadius: '1px',
                      opacity: isActive ? 1 : 0.45,
                      boxShadow: isActive ? '0 0 10px rgba(255, 184, 0, 0.45)' : 'none',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
