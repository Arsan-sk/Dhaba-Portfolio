import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          <Sparkles size={16} />
          <span>Visual Feast</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: '#FAF5EE',
          lineHeight: 1.15
        }}>
          Moments & Memories at <span className="text-gold-gradient">Nawab Dhaba</span>
        </h2>

        <p style={{
          color: '#A89F91',
          fontSize: '1rem',
          maxWidth: '650px',
          margin: '0.75rem auto 0',
          lineHeight: 1.6
        }}>
          Take a peek into our fiery charcoal tandoors, sizzling table feasts, family celebrations, and evening Dhaba ambiance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.6rem',
        marginBottom: '3rem'
      }}>
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                background: isActive 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #B45309 100%)' 
                  : 'rgba(22, 18, 16, 0.8)',
                color: isActive ? '#0C0A09' : '#FAF5EE',
                border: isActive ? '1px solid #FDE68A' : '1px solid rgba(212, 175, 55, 0.15)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 20px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Editorial Photo Canvas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: item.size === 'large' ? '380px' : item.size === 'tall' ? '340px' : '260px',
              cursor: 'pointer',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />

            {/* Hover Dark Overlay with Title */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(12, 10, 9, 0.95) 100%)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#FAF5EE',
                marginBottom: '0.25rem'
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#D6C7B2' }}>
                {item.subtitle}
              </p>
            </div>

            {/* Quick Zoom Icon */}
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37'
            }}>
              <Eye size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2010
            }}
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#D4AF37',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2010
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#D4AF37',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2010
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Image & Caption Box */}
          <div
            style={{
              maxWidth: '900px',
              maxHeight: '85vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            />

            <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#FAF5EE',
                fontWeight: 700
              }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ color: '#D4AF37', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {filteredItems[lightboxIndex].subtitle}
              </p>
              <div style={{ fontSize: '0.75rem', color: '#A89F91', marginTop: '0.4rem' }}>
                {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
