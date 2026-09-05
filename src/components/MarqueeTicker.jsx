import React from 'react';

export default function MarqueeTicker() {
  const items = [
    'Friday Grand Buffet @ ₹499 🔥',
    'Open · Closes 3 AM',
    '7 Types of Chicken Starters 🍗',
    'Mumbai - Nashik Expy, Bhiwandi',
    'Separate Family & Friends Zones 👨‍👩‍👧‍👦',
    'Charcoal Tandoor & Kebabs 🔥',
    'Outdoor Seating & Private Dining',
    'Live Sports Screening 🏏',
    'Desi Ghee Handis & Dum Biryani',
    'Jalsa Dhaba — Come Hungry 🍽️',
  ];

  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: 'var(--gold)',
        overflow: 'hidden',
        padding: '0.85rem 0',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: '0',
          animation: 'marquee-scroll 35s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--ink)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                paddingLeft: '2rem',
                paddingRight: '2rem',
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--ink)',
                opacity: 0.35,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
