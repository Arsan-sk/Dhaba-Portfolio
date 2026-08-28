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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 6rem' }}>
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

        <p className="body-lg" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
          Fire-roasted tandoori, slow-dum biryanis, coastal seafood, and
          everything in between. Tap any dish to learn more.
        </p>

        {/* Filters Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
              style={{ fontSize: '0.78rem' }}
            >
              {cat.name}
            </button>
          ))}

          <div style={{ flex: 1 }} />

          {/* Diet toggles */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { id: 'all', label: 'All' },
              { id: 'veg', label: '● Veg' },
              { id: 'non-veg', label: '● Non-Veg' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDietFilter(d.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.72rem',
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
          <div style={{ position: 'relative', minWidth: '180px' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '0.7rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.7rem 0.5rem 2rem',
                border: '1px solid var(--line)',
                borderRadius: '9999px',
                color: 'var(--cream)',
                fontSize: '0.8rem',
              }}
            />
          </div>
        </div>

        {/* Dish Card Grid — editorial image-first layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filtered.map((dish, index) => {
            // First dish gets a larger featured card
            const isFeatured = index === 0;

            return (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                style={{
                  cursor: 'pointer',
                  gridColumn: isFeatured ? 'span 2' : 'span 1',
                  display: 'flex',
                  flexDirection: isFeatured ? 'row' : 'column',
                  gap: isFeatured ? '1.5rem' : '0',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Image */}
                <div
                  style={{
                    aspectRatio: isFeatured ? '16 / 10' : '4 / 3',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    flex: isFeatured ? '1.4' : 'none',
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
                    padding: isFeatured ? '0.5rem 0' : '1rem 0 0.5rem',
                    flex: isFeatured ? '1' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isFeatured ? 'center' : 'flex-start',
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
                      marginBottom: '0.35rem',
                    }}
                  >
                    {dish.diet === 'veg' ? '● VEG' : '● NON-VEG'} · {dish.category.replace('-', ' & ')}
                  </span>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isFeatured ? '1.6rem' : '1.1rem',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      lineHeight: 1.25,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {dish.name}
                  </h3>

                  {/* Description (featured only) */}
                  {isFeatured && (
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--muted)',
                        lineHeight: 1.55,
                        marginBottom: '1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {dish.description}
                    </p>
                  )}

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                    {dish.tags.slice(0, isFeatured ? 4 : 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.15rem 0.5rem',
                          border: '1px solid var(--line)',
                          borderRadius: '9999px',
                          fontSize: '0.6rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>
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
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No dishes found.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setDietFilter('all');
                setActiveCategory('all');
              }}
              className="btn-text"
            >
              Clear filters <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
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
            padding: '1.5rem',
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
              overflow: 'auto',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ minHeight: '300px' }}>
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '2rem', position: 'relative' }}>
              <button
                onClick={() => setSelectedDish(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--muted)' }}
              >
                <X size={20} />
              </button>

              <div className="label" style={{ color: 'var(--ember)', marginBottom: '0.75rem' }}>
                {selectedDish.category.replace('-', ' & ')} · {selectedDish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
              </div>

              <h3 className="headline-sm" style={{ color: 'var(--cream)', marginBottom: '1rem' }}>
                {selectedDish.name}
              </h3>

              <p className="body-sm" style={{ marginBottom: '1.5rem' }}>
                {selectedDish.description}
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                <div><strong style={{ color: 'var(--cream)' }}>Prep</strong> {selectedDish.prepTime}</div>
                <div><strong style={{ color: 'var(--cream)' }}>Serves</strong> {selectedDish.serves}</div>
                <div><strong style={{ color: 'var(--cream)' }}>Heat</strong> {'🌶️'.repeat(selectedDish.spiceLevel)}</div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {selectedDish.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.25rem 0.65rem',
                      border: '1px solid var(--line)',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="/book" className="btn-ember" style={{ fontSize: '0.8rem' }}>
                Reserve & Order <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
