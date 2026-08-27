import React from 'react';
import { Flame, Users, Sparkles, Clock, Heart, Award } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function StorySection() {
  const storyPoints = [
    {
      icon: <Flame size={24} color="#FF5722" />,
      title: 'Traditional Clay Tandoor',
      desc: 'No gas grills or shortcuts. Every kebab, naan, and pomfret is charred inside authentic charcoal clay ovens at 400°C for that unmistakable smoky Dhaba aroma.'
    },
    {
      icon: <Sparkles size={24} color="#D4AF37" />,
      title: 'Secret Nawab Masalas',
      desc: 'Our spice blends are hand-ground using heritage family recipes, roasted whole spices, and pure Kashmiri chillies that deliver robust flavors without overwhelming heat.'
    },
    {
      icon: <Users size={24} color="#10B981" />,
      title: 'Built for Families & Groups',
      desc: 'Generous portion sizes, private family cabins, open-air garden charpais, and an atmosphere where loud laughs, shared handis, and memorable conversations thrive.'
    },
    {
      icon: <Clock size={24} color="#F59E0B" />,
      title: 'Late Night Highway Feast',
      desc: 'Conveniently located on the Nashik Road highway in Bhiwandi, serving sizzling hot meals and cool desserts until 1:00 AM every night of the week.'
    }
  ];

  return (
    <section id="story" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1350px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        
        {/* Left Side: Brand Story & Values */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#D4AF37',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.75rem'
          }}>
            <Award size={16} />
            <span>The Nawab Legacy</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 900,
            color: '#FAF5EE',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Where Highway Tradition Meets <span className="text-gold-gradient">Royal Hospitality</span>
          </h2>

          <p style={{ color: '#D6C7B2', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            At <strong>{BUSINESS.name}</strong>, we believe a great meal isn't just about food — it's an experience of warmth, generous hospitality, and unforgettable flavors. Nestled in Bhinar on the Nashik Road highway, our kitchen comes alive every evening with glowing charcoal embers, bubbling Mughlai handis, and sizzling tandoori platters.
          </p>

          <p style={{ color: '#A89F91', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Whether you're stopping by after a long highway drive with friends or gathering the entire family for a weekend feast, you'll find rich curries, fragrant biryanis, and crispy seafood prepared with authentic Dhaba pride.
          </p>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            padding: '1.25rem',
            background: 'rgba(212, 175, 55, 0.06)',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <div>
              <div style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}>
                100% Halal
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89F91' }}>
                Strict Quality & Fresh Meat
              </div>
            </div>
            <div>
              <div style={{ color: '#FF5722', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}>
                Open Till 1 AM
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89F91' }}>
                Late Night Cravings Welcome
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 4 Interactive Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {storyPoints.map((point, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {point.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#FAF5EE'
              }}>
                {point.title}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: '#A89F91',
                lineHeight: 1.55
              }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
