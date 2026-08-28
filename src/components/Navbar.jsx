import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS, getPhoneURL, getWhatsAppURL } from '../data/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'The Table', href: '/#story' },
    { label: 'The Feast', href: '/#menu' },
    { label: 'The Place', href: '/#ambience' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Find Us', href: '/#visit' },
  ];

  return (
    <>
      {/* Main Nav */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(18, 16, 14, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--cream)',
                letterSpacing: '-0.02em',
              }}
            >
              Nawab<span style={{ color: 'var(--ember)', fontStyle: 'italic' }}> Dhaba</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--cream)',
                  opacity: 0.7,
                  transition: 'opacity 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/book"
              className="btn-ember hide-mobile"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}
            >
              Book a Table
            </a>

            <button
              className="show-mobile"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cream)',
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
            padding: '6rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--cream)',
                borderBottom: '1px solid var(--line)',
                paddingBottom: '1rem',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="/book" className="btn-ember" style={{ justifyContent: 'center' }}>
              Book a Table
            </a>
            <a href={getPhoneURL()} className="btn-outline" style={{ justifyContent: 'center' }}>
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}

      {/* Sticky Sub-Nav (pills) — appears after hero */}
      <div
        className="nav-sticky"
        style={{
          display: scrolled ? 'block' : 'none',
          marginTop: '60px',
        }}
      >
        {/* This is invisible spacer — the actual pills are part of the hero bottom */}
      </div>
    </>
  );
}
