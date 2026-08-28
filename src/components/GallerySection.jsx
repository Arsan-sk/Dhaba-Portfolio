import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

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
    <section
      id="gallery"
      className="section-pad-lg"
      style={{ background: 'var(--ink)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="headline-lg" style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>
            Moments at the <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>table.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '520px' }}>
            Smoky tandoors, loaded platters, late-night laughter, and the
            glow of a highway dhaba after dark.
          </p>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile */}
        <div className="pills-scroll" style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
              style={{ flexShrink: 0, fontSize: '0.78rem' }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Grid — Mobile friendly */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(4px, 1vw, 8px)',
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                aspectRatio: item.size === 'tall' ? '3 / 4' : '4 / 3',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Dark gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '3rem 1rem 1rem',
                  background: 'linear-gradient(transparent, rgba(18, 16, 14, 0.9))',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{item.subtitle}</p>
              </div>

              {/* Eye icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(18, 16, 14, 0.7)',
                  borderRadius: '50%',
                  color: 'var(--cream)',
                }}
              >
                <Eye size={15} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(18, 16, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              color: 'var(--cream)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={22} />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '1rem',
              color: 'var(--cream)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image & Info */}
          <div
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex]?.image}
              alt={filteredItems[lightboxIndex]?.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
            <div style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--cream)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                {filteredItems[lightboxIndex]?.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                {filteredItems[lightboxIndex]?.subtitle}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '1rem',
              color: 'var(--cream)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
