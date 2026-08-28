import React, { useState } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { MENU_CATEGORIES, DISHES, getDishesByCategory } from '../../data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [selectedDish, setSelectedDish] = useState(null);

  let filtered = getDishesByCategory(activeCategory);
  if (dietFilter !== 'all') {
    filtered = filtered.filter((d) => d.diet === dietFilter);
  }
  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return (
    <div style={{ paddingTop: '5rem', background: 'var(--ink)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) 6rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="label" style={{ color: 'var(--ember)', marginBottom: '0.5rem', display: 'block' }}>
            Our Menu
          </span>
        </div>

        <h1
          className="headline-xl"
          style={{ color: 'var(--cream)', marginBottom: '1rem' }}
        >
          Follow your
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>appetite.</span>
        </h1>

        <p className="body-lg" style={{ maxWidth: '520px', marginBottom: '2.5rem' }}>
          Fire-roasted tandoori, slow-dum biryanis, coastal seafood, and
          everything in between. Tap any dish to learn more.
        </p>

        {/* Filters Controls */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {/* Horizontal Scrolling Categories */}
          <div className="pills-scroll" style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
                style={{ fontSize: '0.78rem', flexShrink: 0 }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search + Diet Filter Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Diet toggles */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: '● Veg' },
                { id: 'non-veg', label: '● Non-Veg' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDietFilter(d.id)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: '1px solid var(--line)',
                    borderRadius: '9999px',
                    background: dietFilter === d.id ? 'var(--cream)' : 'transparent',
                    color: dietFilter === d.id ? 'var(--ink)' : 'var(--muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={{ position: 'relative', minWidth: '220px', flex: '1', maxWidth: '340px' }}>
              <Search
                size={15}
                style={{
                  position: 'absolute',
                  left: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted)',
                }}
              />
              <input
                type="text"
                placeholder="Search dishes, flavours, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.85rem 0.55rem 2.3rem',
                  border: '1px solid var(--line)',
                  borderRadius: '9999px',
                  color: 'var(--cream)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  fontSize: '0.82rem',
                }}
              />
            </div>
          </div>
        </div>

        {/* Dish Card Grid — responsive grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          {filtered.map((dish, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                style={{
                  cursor: 'pointer',
                  gridColumn: isFeatured ? 'span 1' : 'span 1',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(245, 238, 226, 0.08)',
                  borderRadius: '8px',
                  padding: '0.85rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Image */}
                <div
                  style={{
                    aspectRatio: '16 / 11',
                    overflow: 'hidden',
                    borderRadius: '6px',
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Info */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Diet label */}
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: dish.diet === 'veg' ? '#4ade80' : 'var(--ember)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {dish.diet === 'veg' ? '● VEG' : '● NON-VEG'} · {dish.category.replace('-', ' & ')}
                  </span>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      lineHeight: 1.25,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {dish.name}
                  </h3>

                  {/* Description preview */}
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--muted)',
                      lineHeight: 1.5,
                      marginBottom: '0.75rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {dish.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {dish.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.15rem 0.5rem',
                          border: '1px solid var(--line)',
                          borderRadius: '9999px',
                          fontSize: '0.62rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span style={{ fontSize: '0.75rem', marginLeft: 'auto' }}>
                      {'🌶️'.repeat(dish.spiceLevel)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--muted)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No dishes found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setDietFilter('all');
                setActiveCategory('all');
              }}
              className="btn-text"
            >
              Clear all filters <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Dish Detail Modal — Mobile responsive card */}
      {selectedDish && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(18, 16, 14, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(0.75rem, 3vw, 1.5rem)',
          }}
          onClick={() => setSelectedDish(null)}
        >
          <div
            style={{
              background: 'var(--ink)',
              border: '1px solid var(--line)',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              position: 'relative',
              borderRadius: '6px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div style={{ minHeight: '240px', maxHeight: '360px' }}>
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', position: 'relative' }}>
              <button
                onClick={() => setSelectedDish(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: 'var(--muted)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>

              <div className="label" style={{ color: 'var(--ember)', marginBottom: '0.6rem', fontSize: '0.72rem' }}>
                {selectedDish.category.replace('-', ' & ')} · {selectedDish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
              </div>

              <h3 className="headline-sm" style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>
                {selectedDish.name}
              </h3>

              <p className="body-sm" style={{ marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {selectedDish.description}
              </p>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'var(--muted)', flexWrap: 'wrap' }}>
                <div><strong style={{ color: 'var(--cream)' }}>Prep:</strong> {selectedDish.prepTime}</div>
                <div><strong style={{ color: 'var(--cream)' }}>Serves:</strong> {selectedDish.serves}</div>
                <div><strong style={{ color: 'var(--cream)' }}>Heat:</strong> {'🌶️'.repeat(selectedDish.spiceLevel)}</div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                {selectedDish.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.2rem 0.6rem',
                      border: '1px solid var(--line)',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/book"
                className="btn-ember"
                style={{
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                Reserve Table & Order <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
