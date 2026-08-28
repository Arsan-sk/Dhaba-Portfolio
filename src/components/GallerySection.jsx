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
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="headline-lg" style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>
            Moments at the <span style={{ fontStyle: 'italic' }}>table.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '520px' }}>
            Smoky tandoors, loaded platters, late-night laughter, and the
            glow of a highway dhaba after dark.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '3px',
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
                  padding: '3rem 1.25rem 1.25rem',
                  background: 'linear-gradient(transparent, rgba(18, 16, 14, 0.85))',
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
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(18, 16, 14, 0.6)',
                  color: 'var(--cream)',
                  opacity: 0.6,
                }}
              >
                <Eye size={14} />
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
            background: 'rgba(18, 16, 14, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              color: 'var(--cream)',
              zIndex: 2010,
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '1.5rem',
              width: '44px',
              height: '44px',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cream)',
              zIndex: 2010,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '1.5rem',
              width: '44px',
              height: '44px',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cream)',
              zIndex: 2010,
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />
            <div style={{ marginTop: '1.25rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  color: 'var(--cream)',
                }}
              >
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                {filteredItems[lightboxIndex].subtitle}
              </p>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
