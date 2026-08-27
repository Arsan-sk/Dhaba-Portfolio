import React from 'react';
import { Phone, MessageCircle, Utensils, Calendar } from 'lucide-react';
import { getPhoneURL, getWhatsAppURL } from '../data/business';

export default function FloatingActionBar() {
  return (
    <div 
      className="hide-desktop"
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 999,
        background: 'rgba(15, 12, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        padding: '0.6rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.8)'
      }}
    >
      <a
        href={getPhoneURL()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          color: '#E5D6C5',
          textDecoration: 'none',
          fontSize: '0.7rem',
          fontWeight: 600,
          flex: 1
        }}
      >
        <Phone size={18} color="#D4AF37" />
        <span>Call Us</span>
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
          color: '#10B981',
          textDecoration: 'none',
          fontSize: '0.7rem',
          fontWeight: 600,
          flex: 1
        }}
      >
        <MessageCircle size={18} color="#10B981" />
        <span>WhatsApp</span>
      </a>

      <a
        href="/menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          color: '#E5D6C5',
          textDecoration: 'none',
          fontSize: '0.7rem',
          fontWeight: 600,
          flex: 1
        }}
      >
        <Utensils size={18} color="#FF5722" />
        <span>Menu</span>
      </a>

      <a
        href="/book"
        style={{
          background: 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #B45309 100%)',
          color: '#0F0C0A',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          textDecoration: 'none',
          fontSize: '0.78rem',
          fontWeight: 700,
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
        }}
      >
        <Calendar size={15} />
        <span>Book Table</span>
      </a>
    </div>
  );
}
