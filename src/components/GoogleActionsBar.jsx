import React, { useState } from 'react';
import { 
  Navigation, Star, Bookmark, Share2, Utensils, Check, ExternalLink, 
  MapPin, Clock, Phone, Info, Sparkles 
} from 'lucide-react';
import { BUSINESS, getDirectionsURL, getPhoneURL, getReviewURL } from '../data/business';

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function GoogleActionsBar({ variant = 'card' }) {
  const [isSaved, setIsSaved] = useState(() => {
    try {
      return localStorage.getItem('jalsa_saved_place') === 'true';
    } catch {
      return false;
    }
  });
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveToggle = () => {
    const nextState = !isSaved;
    setIsSaved(nextState);
    try {
      localStorage.setItem('jalsa_saved_place', String(nextState));
    } catch {
      // ignore
    }
    showToast(nextState ? '★ Saved Jalsa Dhaba to your saved places!' : 'Removed from saved places');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Jalsa Dhaba — Bhiwandi',
      text: 'Check out Jalsa Dhaba on Mumbai-Nashik Expressway, Chavindra, Bhiwandi. Authentic Charcoal Tandoor & Friday Midnight Buffet @ ₹499!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('Shared successfully!');
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('📋 Link copied to clipboard!');
    } else {
      showToast('Sharing link: ' + window.location.href);
    }
  };

  const actions = [
    {
      id: 'directions',
      label: 'Directions',
      icon: <Navigation size={18} color="var(--gold)" />,
      href: getDirectionsURL(),
      isExternal: true,
    },
    {
      id: 'review',
      label: 'Write a review',
      icon: <Star size={18} color="#f59e0b" fill="#f59e0b" />,
      href: getReviewURL(),
      isExternal: true,
    },
    {
      id: 'save',
      label: isSaved ? 'Saved' : 'Save',
      icon: (
        <Bookmark
          size={18}
          color={isSaved ? 'var(--gold)' : 'var(--cream)'}
          fill={isSaved ? 'var(--gold)' : 'none'}
        />
      ),
      onClick: handleSaveToggle,
      active: isSaved,
    },
    {
      id: 'share',
      label: 'Share',
      icon: <Share2 size={18} color="var(--cream)" />,
      onClick: handleShare,
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: <Utensils size={18} color="var(--ember)" />,
      href: '/menu',
      isExternal: false,
    },
  ];

  return (
    <div
      style={{
        background: 'rgba(24, 20, 17, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 184, 0, 0.22)',
        borderRadius: '12px',
        padding: 'clamp(1rem, 2.5vw, 1.5rem)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(255, 184, 0, 0.05)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'absolute',
            top: '-45px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--gold)',
            color: 'var(--ink)',
            padding: '0.45rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            zIndex: 100,
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <Sparkles size={14} />
          {toastMessage}
        </div>
      )}

      {/* Top Header Row with Google Place Style Verification */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--line)',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 10px #22c55e',
            }}
          />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cream)', letterSpacing: '0.02em' }}>
            JALSA DHABA · Verified Highway Destination
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
          <a
            href={getDirectionsURL()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            Suggest an edit <ExternalLink size={11} />
          </a>
          <span>·</span>
          <span style={{ color: 'rgba(245, 238, 226, 0.7)' }}>Own this business?</span>
        </div>
      </div>

      {/* 5 Round Google Action Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(0.5rem, 1.5vw, 1.25rem)',
          marginBottom: '1.25rem',
        }}
      >
        {actions.map((act) => {
          const content = (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.45rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: 'clamp(42px, 9vw, 52px)',
                  height: 'clamp(42px, 9vw, 52px)',
                  borderRadius: '50%',
                  border: act.active ? '1.5px solid var(--gold)' : '1px solid rgba(245, 238, 226, 0.2)',
                  background: act.active ? 'rgba(255, 184, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                {act.icon}
              </div>
              <span
                style={{
                  fontSize: 'clamp(0.68rem, 1.8vw, 0.78rem)',
                  fontWeight: 600,
                  color: act.active ? 'var(--gold)' : 'var(--cream)',
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2,
                }}
              >
                {act.label}
              </span>
            </div>
          );

          if (act.href) {
            return (
              <a
                key={act.id}
                href={act.href}
                target={act.isExternal ? '_blank' : '_self'}
                rel={act.isExternal ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none' }}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={act.id}
              onClick={act.onClick}
              style={{ background: 'none', border: 'none', padding: 0 }}
              type="button"
            >
              {content}
            </button>
          );
        })}
      </div>

      {/* Service Options Strip */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          padding: '0.75rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <span>Service options:</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {BUSINESS.serviceOptions.map((opt) => (
            <div
              key={opt.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 184, 0, 0.08)',
                border: '1px solid rgba(255, 184, 0, 0.25)',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--cream)',
              }}
            >
              <Check size={13} color="var(--gold)" strokeWidth={2.5} />
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Info Details Row: Address, Hours, Phone, Instagram */}
      <div
        style={{
          marginTop: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.85rem',
          fontSize: '0.82rem',
          color: 'var(--muted)',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
          <MapPin size={15} color="var(--ember)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
          <div>
            <span style={{ color: 'var(--cream)', fontWeight: 600 }}>Address: </span>
            <span>{BUSINESS.address.full}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Clock size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ color: 'var(--cream)', fontWeight: 600 }}>Hours: </span>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>{BUSINESS.hours.display}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Phone size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ color: 'var(--cream)', fontWeight: 600 }}>Phone: </span>
            <a href={getPhoneURL()} style={{ color: 'var(--cream)', fontWeight: 600, textDecoration: 'underline' }}>
              {BUSINESS.phone}
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <InstagramIcon size={15} color="#e1306c" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ color: 'var(--cream)', fontWeight: 600 }}>Instagram: </span>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', fontWeight: 600 }}
            >
              {BUSINESS.social.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
