import React, { useState } from 'react';
import { Sparkles, Users, Wind, Moon, ArrowRight, Check } from 'lucide-react';

export default function AmbienceSection() {
  const [selectedZone, setSelectedZone] = useState('garden');

  const zones = [
    {
      id: 'family',
      title: 'Family Dining Enclosures',
      subtitle: 'Comfort, Space & Privacy For Family Gatherings',
      image: '/images/hero/hero-family.jpg',
      badge: '👨‍👩‍👧‍👦 Most Popular for Families',
      features: [
        'Spacious 6 to 10-seater partitioned tables',
        'Child-friendly seating & fast service',
        'Private family cabins with pleasant air cooling',
        'Dedicated attendants for large family gatherings'
      ],
      vibe: 'Warm, cozy, peaceful and comfortable'
    },
    {
      id: 'garden',
      title: 'Open-Air Charpai Garden & Gazebo',
      subtitle: 'Authentic Highway Dhaba Feeling Under The Stars',
      image: '/images/ambience/dhaba-night.jpg',
      badge: '✨ Iconic Dhaba Night Experience',
      features: [
        'Traditional woven charpai cot seating with bolsters',
        'Ambient hanging lanterns & warm fairy lights',
        'Cool night breeze & live charcoal tandoor view',
        'Lively, relaxed setting for road trips & late nights'
      ],
      vibe: 'Bustling, vibrant, authentic and breezy'
    },
    {
      id: 'ac',
      title: 'Royal AC Banquet & Indoor Hall',
      subtitle: 'Modern Climate-Controlled Comfort',
      image: '/images/hero/hero-spread.jpg',
      badge: '❄️ Climate-Controlled Dining',
      features: [
        'Full high-power air-conditioning throughout',
        'Cushioned luxury seating & royal Mughlai wall art',
        'Ideal for birthdays, celebrations & private parties',
        'Clean, elegant, premium dining ambiance'
      ],
      vibe: 'Cool, elegant, modern and celebratory'
    }
  ];

  const activeZoneData = zones.find(z => z.id === selectedZone) || zones[0];

  return (
    <section id="ambience" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          <Sparkles size={16} />
          <span>The Dhaba Atmosphere</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: '#FAF5EE',
          lineHeight: 1.15
        }}>
          Choose Your <span className="text-gold-gradient">Dining Ambience</span>
        </h2>

        <p style={{
          color: '#A89F91',
          fontSize: '1rem',
          maxWidth: '650px',
          margin: '0.75rem auto 0',
          lineHeight: 1.6
        }}>
          Whether you prefer traditional open-air charpais, private family enclosures, or cool AC halls — we have the perfect spot for you.
        </p>
      </div>

      {/* Zone Selector Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '2.5rem'
      }}>
        {zones.map((z) => {
          const isSelected = selectedZone === z.id;
          return (
            <button
              key={z.id}
              onClick={() => setSelectedZone(z.id)}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                background: isSelected 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #B45309 100%)' 
                  : 'rgba(22, 18, 16, 0.8)',
                color: isSelected ? '#0C0A09' : '#FAF5EE',
                border: isSelected ? '1px solid #FDE68A' : '1px solid rgba(212, 175, 55, 0.2)',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isSelected ? '0 4px 20px rgba(212, 175, 55, 0.35)' : 'none'
              }}
            >
              {z.title}
            </button>
          );
        })}
      </div>

      {/* Active Zone Display Card */}
      <div className="glass-panel" style={{
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
      }}>
        
        {/* Image Half */}
        <div style={{
          position: 'relative',
          minHeight: '380px',
          overflow: 'hidden'
        }}>
          <img
            src={activeZoneData.image}
            alt={activeZoneData.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            background: 'rgba(12, 10, 9, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: '#FDE68A',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            backdropFilter: 'blur(8px)'
          }}>
            {activeZoneData.badge}
          </div>
        </div>

        {/* Details Half */}
        <div style={{
          padding: 'clamp(1.75rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 800,
              color: '#FAF5EE',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              {activeZoneData.title}
            </h3>

            <p style={{
              color: '#D4AF37',
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              {activeZoneData.subtitle}
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {activeZoneData.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid #10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={12} color="#10B981" />
                  </div>
                  <span style={{ color: '#E5D6C5', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ fontSize: '0.85rem', color: '#A89F91' }}>
              Atmosphere: <strong style={{ color: '#FAF5EE' }}>{activeZoneData.vibe}</strong>
            </div>

            <a
              href={`/book?zone=${activeZoneData.id}`}
              className="btn-gold"
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.8rem' }}
            >
              <span>Reserve in this Zone</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
