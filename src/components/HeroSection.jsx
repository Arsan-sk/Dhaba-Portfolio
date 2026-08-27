import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Star, 
  Award, 
  Clock, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS, getDirectionsURL } from '../data/business';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/hero/hero-spread.jpg',
      title: 'A Royal Feast On The Highway',
      subtitle: 'Charcoal-fired tandoor, slow-cooked Mughlai dum handis, and authentic Dhaba flavors.',
      badge: '★ Most Celebrated Dhaba in Bhiwandi'
    },
    {
      image: '/images/dishes/pomfret-tandoori.jpg',
      title: 'Fresh Catch, Fiery Tandoor',
      subtitle: 'Whole Pomfret & Bombil fish roasted to smoky perfection with Nawab signature masalas.',
      badge: '🔥 Signature Seafood Specialties'
    },
    {
      image: '/images/hero/hero-family.jpg',
      title: 'Where Memories Are Made Together',
      subtitle: 'Spacious family seating, traditional garden charpais, and welcoming late-night hospitality.',
      badge: '👨‍👩‍👧‍👦 Family & Group Friendly Dining'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '4rem 1.5rem 6rem'
    }}>
      {/* Background Images with Crossfade */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? 'scale(1)' : 'scale(1.06)',
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out',
            zIndex: 0
          }}
        />
      ))}

      {/* Dark Vignette Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(12,10,9,0.7) 0%, rgba(12,10,9,0.85) 60%, #0C0A09 100%)',
        zIndex: 1
      }} />

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1100px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.75rem'
      }}>
        
        {/* Top Badge */}
        <div style={{
          background: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '9999px',
          padding: '0.45rem 1.25rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#FDE68A',
          fontSize: '0.85rem',
          fontWeight: 600,
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
        }}>
          <Sparkles size={16} color="#D4AF37" />
          <span>{heroSlides[currentSlide].badge}</span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          color: '#FAF5EE',
          maxWidth: '950px',
          textShadow: '0 4px 30px rgba(0, 0, 0, 0.8)'
        }}>
          {heroSlides[currentSlide].title.split(' ')[0]}{' '}
          <span className="text-gold-gradient">
            {heroSlides[currentSlide].title.split(' ').slice(1, 3).join(' ')}
          </span>{' '}
          {heroSlides[currentSlide].title.split(' ').slice(3).join(' ')}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#E5D6C5',
          maxWidth: '750px',
          lineHeight: 1.6,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
        }}>
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Key Features Pill */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.25rem',
          fontSize: '0.85rem',
          color: '#D6C7B2',
          margin: '0.5rem 0'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Flame size={15} color="#FF5722" /> 100% Charcoal Tandoor
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={15} color="#10B981" /> 100% Fresh Halal Meat
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={15} color="#D4AF37" /> Open Late Till 1:00 AM
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={15} color="#FF5722" /> Nashik Road, Bhinar
          </span>
        </div>

        {/* Hero CTAs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '0.5rem'
        }}>
          <a 
            href="/menu" 
            className="btn-ember"
            style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
          >
            <span>Explore Full Menu</span>
            <ArrowRight size={18} />
          </a>

          <a 
            href="/book" 
            className="btn-gold"
            style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
          >
            <span>Reserve a Table</span>
            <ChevronRight size={18} />
          </a>

          <a 
            href={getDirectionsURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
            style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}
          >
            <MapPin size={16} />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: currentSlide === i ? '32px' : '10px',
                height: '6px',
                borderRadius: '4px',
                background: currentSlide === i ? '#D4AF37' : 'rgba(255, 255, 255, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Highlights Bar at Bottom of Hero */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 10,
        background: 'rgba(18, 14, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ color: '#D4AF37', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>4.8 ★★★★★</div>
            <div style={{ fontSize: '0.75rem', color: '#A89F91', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Google Rating & Reviews</div>
          </div>
          <div>
            <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>25+</div>
            <div style={{ fontSize: '0.75rem', color: '#A89F91', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Secret Tandoor Recipes</div>
          </div>
          <div>
            <div style={{ color: '#10B981', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>500+</div>
            <div style={{ fontSize: '0.75rem', color: '#A89F91', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Happy Guests Every Day</div>
          </div>
          <div>
            <div style={{ color: '#FDE68A', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>3 Seating Zones</div>
            <div style={{ fontSize: '0.75rem', color: '#A89F91', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Family · Garden · AC Hall</div>
          </div>
        </div>
      </div>
    </section>
  );
}
