import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, getPhoneURL } from '../data/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Enable blurred background when scrolled past top
      setScrolled(currentScrollY > 30);

      // If at the top of the page, always show navbar
      if (currentScrollY <= 30) {
        setIsVisible(true);
      } 
      // If scrolling down, swipe navbar up (hide)
      else if (currentScrollY > prevScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } 
      // If scrolling up, swipe navbar down (reveal)
      else if (currentScrollY < prevScrollY) {
        setIsVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsVisible(true);
  }, [location]);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'MENU', href: '/menu' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'BOOK A TABLE', href: '/book' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transform: isVisible || isOpen ? 'translateY(0)' : 'translateY(-100%)',
          background: scrolled || isOpen ? 'rgba(18, 16, 14, 0.95)' : 'transparent',
          backdropFilter: scrolled || isOpen ? 'blur(14px)' : 'none',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border-color 0.3s ease',
          borderBottom: scrolled || isOpen ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: 'clamp(0.85rem, 2vh, 1.25rem) clamp(1rem, 3vw, 2rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo — Gold Circled N + NAWAB Dhaba */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1.5px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--gold)',
                flexShrink: 0,
              }}
            >
              D
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--cream)',
                  textTransform: 'uppercase',
                }}
              >
                DILLI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: 'var(--gold)',
                  marginTop: '1px',
                }}
              >
                Darbar
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: location.pathname === link.href ? 'var(--gold)' : 'var(--cream)',
                  opacity: location.pathname === link.href ? 1 : 0.85,
                  transition: 'opacity 0.2s ease, color 0.2s ease',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = location.pathname === link.href ? '1' : '0.85';
                  e.currentTarget.style.color = location.pathname === link.href ? 'var(--gold)' : 'var(--cream)';
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* CALL link */}
            <a
              href={getPhoneURL()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--cream)',
                opacity: 0.85,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.color = 'var(--cream)';
              }}
            >
              <Phone size={13} />
              CALL
            </a>
          </nav>

          {/* Mobile Burger */}
          <div className="show-mobile" style={{ display: 'none' }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cream)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'var(--ink)',
            padding: '6rem 1.75rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: location.pathname === link.href ? 'var(--gold)' : 'var(--cream)',
                borderBottom: '1px solid var(--line)',
                paddingBottom: '0.85rem',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem' }}>
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="btn-ember"
              style={{ justifyContent: 'center', textDecoration: 'none' }}
            >
              Book a Table
            </Link>
            <a
              href={getPhoneURL()}
              className="btn-outline"
              style={{ justifyContent: 'center', textDecoration: 'none' }}
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
