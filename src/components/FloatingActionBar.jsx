import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Utensils, Calendar } from 'lucide-react';
import { getPhoneURL, getWhatsAppURL } from '../data/business';

export default function FloatingActionBar() {
  return (
    <div
      className="show-mobile"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: 'rgba(18, 16, 14, 0.96)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--line)',
        padding: '0.65rem 0.75rem calc(0.65rem + env(safe-area-inset-bottom, 0px))',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)',
      }}
    >
      <a
        href={getPhoneURL()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          color: 'var(--cream)',
          textDecoration: 'none',
          fontSize: '0.68rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <Phone size={18} />
        <span>Call</span>
      </a>

      <a
        href={getWhatsAppURL()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          color: '#4ade80',
          textDecoration: 'none',
          fontSize: '0.68rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          color: 'var(--cream)',
          textDecoration: 'none',
          fontSize: '0.68rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <Utensils size={18} />
        <span>Menu</span>
      </Link>

      <Link
        to="/book"
        style={{
          background: 'var(--ember)',
          color: 'var(--cream)',
          padding: '0.55rem 1.15rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
          fontSize: '0.78rem',
          fontWeight: 700,
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(226, 88, 34, 0.35)',
        }}
      >
        <Calendar size={15} />
        <span>Book</span>
      </Link>
    </div>
  );
}
