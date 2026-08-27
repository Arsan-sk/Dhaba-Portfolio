import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const gridRef = useRef(null)

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.gallery-item')
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: 'power2.out',
          }
        )
      }
    }, gridRef)
    return () => ctx.revert()
  }, [filter])

  // Close lightbox on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Navigate lightbox
  const navigateLightbox = (dir) => {
    if (!lightbox) return
    const currentIndex = filteredItems.findIndex(i => i.id === lightbox.id)
    const nextIndex = (currentIndex + dir + filteredItems.length) % filteredItems.length
    setLightbox(filteredItems[nextIndex])
  }

  return (
    <motion.div className="gallery-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      
      {/* Gallery Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg" />
        <div className="gallery-hero__content container">
          <p className="gallery-hero__eyebrow">The Gallery</p>
          <h1 className="gallery-hero__title font-display">
            Moments at<br/>
            <span className="text-saffron">Nawab Dhaba</span>
          </h1>
          <p className="gallery-hero__subtitle">
            Food. Fire. Friends. Every frame tells our story.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        <div className="gallery-filters__inner container">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`gallery-filter ${filter === cat.id ? 'gallery-filter--active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid — Editorial Canvas */}
      <section className="gallery-grid-section container">
        <div className="gallery-grid" ref={gridRef}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className={`gallery-item gallery-item--${item.size}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${item.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
              >
                <div className="gallery-item__image img-placeholder">
                  <span>{item.alt}</span>
                </div>
                <div className="gallery-item__overlay">
                  <span className="gallery-item__zoom">⊕</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close lightbox">✕</button>
              
              <button className="lightbox__nav lightbox__nav--prev" onClick={() => navigateLightbox(-1)} aria-label="Previous image">
                ←
              </button>

              <motion.div
                className="lightbox__image-wrap"
                key={lightbox.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lightbox__image img-placeholder">
                  <span>{lightbox.alt}</span>
                </div>
              </motion.div>

              <button className="lightbox__nav lightbox__nav--next" onClick={() => navigateLightbox(1)} aria-label="Next image">
                →
              </button>

              <p className="lightbox__caption">{lightbox.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
