import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/menu';

export default function SignatureCravings() {
  const [current, setCurrent] = useState(0);
  const dishes = SIGNATURE_DISHES.slice(0, 6);
  const dish = dishes[current];

  const next = () => setCurrent((prev) => (prev + 1) % dishes.length);
  const prev = () => setCurrent((prev) => (prev - 1 + dishes.length) % dishes.length);

  return (
    <section
      id="specialties"
      className="section-pad-lg"
      style={{ background: 'var(--cream)', color: 'var(--ink)' }}
    >
      <div className="container">
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3.5rem',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="headline-lg" style={{ color: 'var(--ink)' }}>
            Meet the <span style={{ fontStyle: 'italic' }}>main event.</span>
          </h2>

          {/* Navigation arrows */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={prev}
              style={{
                width: '44px',
                height: '44px',
                border: '1.5px solid var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.color = 'var(--cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink)';
              }}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                width: '44px',
                height: '44px',
                border: '1.5px solid var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.color = 'var(--cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink)';
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Dish Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Large Photo */}
          <div
            style={{
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              borderRadius: '8px',
              position: 'relative',
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              key={dish.id}
            />
          </div>

          {/* Dish Details */}
          <div>
            <div
              className="label"
              style={{
                color: 'var(--ember)',
                marginBottom: '0.75rem',
              }}
            >
              {dish.category.replace('-', ' & ').toUpperCase()} · {dish.diet === 'veg' ? '● Veg' : '● Non-Veg'}
            </div>

            <h3
              className="headline-md"
              style={{
                color: 'var(--ink)',
                marginBottom: '1rem',
              }}
            >
              {dish.name}
            </h3>

            <p
              className="body-lg"
              style={{
                color: 'var(--muted)',
                marginBottom: '1.5rem',
                maxWidth: '440px',
              }}
            >
              {dish.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {dish.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.35rem 0.85rem',
                    border: '1px solid var(--line-dark)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/book" className="btn-outline-ink">
                Reserve & Order
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Pagination indicator */}
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '0.35rem',
                alignItems: 'center',
              }}
            >
              {dishes.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: current === i ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: current === i ? 'var(--ember)' : 'var(--muted)',
                    opacity: current === i ? 1 : 0.35,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
