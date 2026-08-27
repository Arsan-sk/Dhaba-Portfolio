import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Flame, 
  Utensils, 
  MapPin, 
  Phone, 
  Calendar, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  MessageCircle,
  Clock
} from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Our Story', href: '/#story' },
    { name: 'Menu', href: '/menu' },
    { name: 'Specialties', href: '/#specialties' },
    { name: 'Ambience', href: '/#ambience' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Table', href: '/book' },
    { name: 'Visit Us', href: '/#visit' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #1C130E 0%, #2A1A12 50%, #1C130E 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        color: '#E5D6C5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto' }}>
          <Flame size={14} color="#FF5722" className="animate-glow" />
          <span><strong>Nawab Dhaba Bhiwandi</strong> — Authentic Charcoal Tandoor & Late Night Feasts</span>
          <span style={{ color: 'rgba(212, 175, 55, 0.6)', margin: '0 0.4rem' }}>•</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#10B981' }}>
            <Clock size={13} />
            <span>Open Daily 11:00 AM – 1:00 AM</span>
          </div>
        </div>
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'absolute', right: '1.5rem' }}>
          <a 
            href={getPhoneURL()} 
            style={{ color: '#F3EAD8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Phone size={12} color="#D4AF37" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(12, 10, 9, 0.94)' : 'rgba(12, 10, 9, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.6)' : 'none'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Logo & Crest */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2A1D15 0%, #150E0A 100%)',
              border: '1.5px solid #D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)',
              position: 'relative'
            }}>
              <Flame size={22} color="#FF5722" />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                color: '#FAF5EE'
              }}>
                NAWAB <span style={{ color: '#D4AF37' }}>DHABA</span>
              </div>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A89F91',
                fontWeight: 600
              }}>
                Bhiwandi · Nashik Road
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#E5D6C5',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '0.2rem 0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E5D6C5'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a 
              href={getWhatsAppURL()} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10B981',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '9999px',
                padding: '0.55rem 1.1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.12)'}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            <a 
              href="/book"
              className="btn-gold"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              <Calendar size={15} />
              <span>Book Table</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#D4AF37',
              cursor: 'pointer'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Slide-Out Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(12, 10, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FAF5EE',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: '#D4AF37' }}>›</span>
              </a>
            ))}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a 
                href={getPhoneURL()}
                className="btn-outline-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>
              <a 
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
              >
                <Calendar size={15} />
                <span>Book Table</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
