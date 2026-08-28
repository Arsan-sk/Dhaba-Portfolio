import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, DISHES, getDishesByCategory } from '../data/menu';

export default function MenuSection() {
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
    <section
      id="menu"
      className="section-pad-lg"
      style={{ background: 'var(--ink)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h2
            className="headline-lg"
            style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}
          >
            The full <span style={{ fontStyle: 'italic' }}>spread.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '520px' }}>
            Fire-roasted tandoori, slow-dum biryanis, coastal seafood, and
            everything in between.
          </p>
        </div>

        {/* Filters Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {/* Category pills */}
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Diet toggles */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                  background:
                    dietFilter === d.id
                      ? 'var(--cream)'
                      : 'transparent',
                  color:
                    dietFilter === d.id
                      ? 'var(--ink)'
                      : 'var(--muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div
            style={{
              position: 'relative',
              minWidth: '200px',
            }}
          >
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                border: '1px solid var(--line)',
                borderRadius: '9999px',
                background: 'transparent',
                color: 'var(--cream)',
                fontSize: '0.82rem',
              }}
            />
          </div>
        </div>

        {/* Dish Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1px',
            background: 'var(--line)',
            border: '1px solid var(--line)',
          }}
        >
          {filtered.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              style={{
                background: 'var(--ink)',
                padding: '1.75rem',
                cursor: 'pointer',
                transition: 'background 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#1a1714')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'var(--ink)')
              }
            >
              {/* Top row: name + diet */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    lineHeight: 1.3,
                  }}
                >
                  {dish.name}
                </h3>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color:
                      dish.diet === 'veg' ? '#4ade80' : 'var(--ember)',
                    flexShrink: 0,
                    marginTop: '0.2rem',
                  }}
                >
                  {dish.diet === 'veg' ? '● VEG' : '● NON-VEG'}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.55,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {dish.description}
              </p>

              {/* Bottom row: tags + spice */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 'auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.35rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {dish.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.2rem 0.55rem',
                        border: '1px solid var(--line)',
                        borderRadius: '9999px',
                        fontSize: '0.65rem',
                        color: 'var(--muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '0.8rem' }}>
                  {'🌶️'.repeat(dish.spiceLevel)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: 'var(--muted)',
            }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              No dishes found for that search.
            </p>
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
            {/* Image */}
            <div style={{ minHeight: '300px' }}>
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Details */}
            <div style={{ padding: '2rem', position: 'relative' }}>
              <button
                onClick={() => setSelectedDish(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: 'var(--muted)',
                }}
              >
                <X size={20} />
              </button>

              <div
                className="label"
                style={{
                  color: 'var(--ember)',
                  marginBottom: '0.75rem',
                }}
              >
                {selectedDish.category.replace('-', ' & ')} ·{' '}
                {selectedDish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
              </div>

              <h3
                className="headline-sm"
                style={{
                  color: 'var(--cream)',
                  marginBottom: '1rem',
                }}
              >
                {selectedDish.name}
              </h3>

              <p
                className="body-sm"
                style={{ marginBottom: '1.5rem' }}
              >
                {selectedDish.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                }}
              >
                <div>
                  <strong style={{ color: 'var(--cream)' }}>
                    Prep
                  </strong>{' '}
                  {selectedDish.prepTime}
                </div>
                <div>
                  <strong style={{ color: 'var(--cream)' }}>
                    Serves
                  </strong>{' '}
                  {selectedDish.serves}
                </div>
                <div>
                  <strong style={{ color: 'var(--cream)' }}>
                    Heat
                  </strong>{' '}
                  {'🌶️'.repeat(selectedDish.spiceLevel)}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem',
                }}
              >
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

              <a
                href="/book"
                className="btn-ember"
                style={{ fontSize: '0.8rem' }}
              >
                Reserve & Order
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
