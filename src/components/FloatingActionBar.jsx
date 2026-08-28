import React from 'react';
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
        padding: '0.6rem 0.75rem',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <a
        href={getPhoneURL()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.15rem',
          color: 'var(--cream)',
          textDecoration: 'none',
          fontSize: '0.65rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <Phone size={17} />
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
          gap: '0.15rem',
          color: '#4ade80',
          textDecoration: 'none',
          fontSize: '0.65rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>

      <a
        href="/#menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.15rem',
          color: 'var(--cream)',
          textDecoration: 'none',
          fontSize: '0.65rem',
          fontWeight: 600,
          flex: 1,
        }}
      >
        <Utensils size={17} />
        <span>Menu</span>
      </a>

      <a
        href="/book"
        style={{
          background: 'var(--ember)',
          color: 'var(--cream)',
          padding: '0.5rem 1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          textDecoration: 'none',
          fontSize: '0.75rem',
          fontWeight: 700,
        }}
      >
        <Calendar size={14} />
        <span>Book</span>
      </a>
    </div>
  );
}
