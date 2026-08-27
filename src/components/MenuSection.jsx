import React, { useState } from 'react';
import { 
  Search, 
  Flame, 
  Sparkles, 
  MessageCircle, 
  X, 
  Clock, 
  Users, 
  Info, 
  Check,
  ChevronRight
} from 'lucide-react';
import { MENU_CATEGORIES, DISHES } from '../data/menu';
import { BUSINESS } from '../data/business';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');
  const [modalDish, setModalDish] = useState(null);

  const filteredDishes = DISHES.filter((dish) => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesDiet = dietFilter === 'all' || dish.diet === dietFilter;
    const matchesSearch = 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesDiet && matchesSearch;
  });

  const getWhatsAppDishURL = (dish) => {
    const msg = `Hello Nawab Dhaba! 👋\n\nI would like to inquire about / pre-order: *${dish.name}* (${dish.category}).\n\nPlease let me know if it's available today. Thank you!`;
    return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="menu" style={{
      padding: '5rem 1.5rem 7rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#D4AF37',
          fontSize: '0.85rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '0.75rem'
        }}>
          <Flame size={16} color="#FF5722" />
          <span>Royal Feast Explorer</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: '#FAF5EE',
          lineHeight: 1.15
        }}>
          Our Full <span className="text-gold-gradient">Dhaba Menu</span>
        </h2>

        <p style={{
          color: '#A89F91',
          fontSize: '1rem',
          maxWidth: '650px',
          margin: '0.75rem auto 0',
          lineHeight: 1.6
        }}>
          Explore authentic highway specialties, sizzling charcoal kebabs, rich dum curries, and refreshing desserts.
        </p>
      </div>

      {/* Search Bar & Dietary Filter */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem'
      }}>
        
        {/* Search Input */}
        <div style={{
          position: 'relative',
          flex: '1 1 300px',
          maxWidth: '450px'
        }}>
          <Search size={18} color="#A89F91" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search dishes (e.g. Pomfret, Biryani, Raan, Kadhai)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              background: 'rgba(22, 18, 16, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '9999px',
              color: '#FAF5EE',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#A89F91',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Veg / Non-Veg Diet Filter */}
        <div style={{
          display: 'inline-flex',
          background: 'rgba(22, 18, 16, 0.9)',
          padding: '0.3rem',
          borderRadius: '9999px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <button
            onClick={() => setDietFilter('all')}
            style={{
              background: dietFilter === 'all' ? '#D4AF37' : 'transparent',
              color: dietFilter === 'all' ? '#0C0A09' : '#D6C7B2',
              fontWeight: dietFilter === 'all' ? 700 : 500,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            All Dishes
          </button>
          <button
            onClick={() => setDietFilter('non-veg')}
            style={{
              background: dietFilter === 'non-veg' ? '#DC2626' : 'transparent',
              color: '#FAF5EE',
              fontWeight: dietFilter === 'non-veg' ? 700 : 500,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>●</span> Non-Veg
          </button>
          <button
            onClick={() => setDietFilter('veg')}
            style={{
              background: dietFilter === 'veg' ? '#059669' : 'transparent',
              color: '#FAF5EE',
              fontWeight: dietFilter === 'veg' ? 700 : 500,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>●</span> Pure Veg
          </button>
        </div>
      </div>

      {/* Category Tabs Carousel */}
      <div style={{
        display: 'flex',
        gap: '0.6rem',
        overflowX: 'auto',
        paddingBottom: '1rem',
        marginBottom: '2.5rem',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {MENU_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                background: isActive 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #B45309 100%)'
                  : 'rgba(22, 18, 16, 0.8)',
                color: isActive ? '#0C0A09' : '#D6C7B2',
                border: isActive ? '1px solid #FDE68A' : '1px solid rgba(212, 175, 55, 0.15)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dishes Count & Active Filter Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.75rem',
        color: '#A89F91',
        fontSize: '0.85rem'
      }}>
        <span>Showing <strong>{filteredDishes.length}</strong> delicious dishes</span>
        {(searchQuery || selectedCategory !== 'all' || dietFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setDietFilter('all');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#FF5722',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Dish Cards Grid */}
      {filteredDishes.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          background: 'rgba(22, 18, 16, 0.5)',
          borderRadius: '20px',
          border: '1px dashed rgba(212, 175, 55, 0.2)'
        }}>
          <Flame size={40} color="#FF5722" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FAF5EE', marginBottom: '0.5rem' }}>
            No dishes found
          </h3>
          <p style={{ color: '#A89F91', fontSize: '0.9rem' }}>
            Try searching for something else or reset your active filters.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setModalDish(dish)}
            >
              {/* Dish Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Badges */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem' }}>
                  <span style={{
                    background: dish.diet === 'veg' ? '#059669' : '#DC2626',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase'
                  }}>
                    {dish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
                  </span>
                  {dish.featured && (
                    <span style={{
                      background: 'rgba(12, 10, 9, 0.9)',
                      color: '#D4AF37',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px'
                    }}>
                      ★ Signature
                    </span>
                  )}
                </div>

                {dish.spiceLevel > 0 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '0.6rem',
                    right: '0.6rem',
                    background: 'rgba(12, 10, 9, 0.85)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem'
                  }}>
                    {'🌶️'.repeat(dish.spiceLevel)}
                  </div>
                )}
              </div>

              {/* Dish Body */}
              <div style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#FAF5EE',
                    marginBottom: '0.4rem',
                    lineHeight: 1.25
                  }}>
                    {dish.name}
                  </h3>

                  <p style={{
                    fontSize: '0.82rem',
                    color: '#A89F91',
                    lineHeight: 1.45,
                    marginBottom: '0.75rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {dish.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.72rem',
                    color: '#D6C7B2',
                    marginBottom: '0.75rem'
                  }}>
                    <span>⏱ {dish.prepTime || '15 mins'}</span>
                    <span>•</span>
                    <span>👥 {dish.serves || '2 Persons'}</span>
                  </div>
                </div>

                {/* Action Row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600 }}>
                    View details & recipe ›
                  </span>

                  <a
                    href={getWhatsAppDishURL(dish)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '9999px',
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      textDecoration: 'none'
                    }}
                  >
                    <MessageCircle size={13} />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dish Detail Modal */}
      {modalDish && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setModalDish(null)}
        >
          <div 
            style={{
              background: '#161210',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '24px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
              position: 'relative',
              animation: 'fadeIn 0.25s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div style={{ position: 'relative', height: '280px' }}>
              <img
                src={modalDish.image}
                alt={modalDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setModalDish(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{
                  background: modalDish.diet === 'veg' ? '#059669' : '#DC2626',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px'
                }}>
                  {modalDish.diet === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                </span>
                {modalDish.featured && (
                  <span style={{
                    background: '#D4AF37',
                    color: '#000',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px'
                  }}>
                    ★ Signature Special
                  </span>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '1.75rem' }}>
              <div style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {modalDish.category}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#FAF5EE',
                margin: '0.3rem 0 0.75rem'
              }}>
                {modalDish.name}
              </h3>

              <p style={{ color: '#D6C7B2', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {modalDish.description}
              </p>

              {/* Highlights Info */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#A89F91' }}>Spice Level</div>
                  <div style={{ fontSize: '0.9rem', color: '#FF5722', fontWeight: 700, marginTop: '0.2rem' }}>
                    {'🌶️'.repeat(modalDish.spiceLevel || 1)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#A89F91' }}>Preparation</div>
                  <div style={{ fontSize: '0.9rem', color: '#FAF5EE', fontWeight: 700, marginTop: '0.2rem' }}>
                    {modalDish.prepTime || '15 mins'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#A89F91' }}>Serving Size</div>
                  <div style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 700, marginTop: '0.2rem' }}>
                    {modalDish.serves || '2 Persons'}
                  </div>
                </div>
              </div>

              {/* Modal Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={getWhatsAppDishURL(modalDish)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ember"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Order / Inquire on WhatsApp</span>
                </a>
                <a
                  href="/book"
                  className="btn-gold"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}
                >
                  <span>Book Table For This</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
