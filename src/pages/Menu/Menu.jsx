import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MENU_CATEGORIES, DISHES, getDishesByCategory } from '../../data/menu'
import './Menu.css'

gsap.registerPlugin(ScrollTrigger)

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('popular')
  const categoryRefs = useRef({})
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Menu header entrance
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        )
      }

      // Stagger dish cards on scroll
      MENU_CATEGORIES.forEach(cat => {
        const section = categoryRefs.current[cat.id]
        if (section) {
          const cards = section.querySelectorAll('.dish-card')
          gsap.fromTo(cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
              }
            }
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const scrollToCategory = (catId) => {
    setActiveCategory(catId)
    const el = categoryRefs.current[catId]
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Track active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.category)
          }
        })
      },
      { rootMargin: '-120px 0px -60% 0px' }
    )

    Object.values(categoryRefs.current).forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div className="menu-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg" />
        <div className="menu-hero__content container" ref={headerRef}>
          <p className="menu-hero__eyebrow">The Menu</p>
          <h1 className="menu-hero__title font-display">
            The Feast<br/>
            <span className="text-ember">Starts Here</span>
          </h1>
          <p className="menu-hero__subtitle">
            From the tandoor to the table. Every dish tells a story.
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <nav className="menu-nav" aria-label="Menu categories">
        <div className="menu-nav__inner">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`menu-nav__item ${activeCategory === cat.id ? 'menu-nav__item--active' : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              <span className="menu-nav__icon">{cat.icon}</span>
              <span className="menu-nav__label">{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <div className="menu-content">
        {MENU_CATEGORIES.map((cat, catIndex) => {
          const dishes = getDishesByCategory(cat.id)
          if (dishes.length === 0) return null

          const isEditorial = catIndex === 0 || catIndex === 1 // Popular & Tandoor get editorial treatment

          return (
            <section
              key={cat.id}
              className={`menu-section ${isEditorial ? 'menu-section--editorial' : ''}`}
              ref={el => categoryRefs.current[cat.id] = el}
              data-category={cat.id}
              id={`menu-${cat.id}`}
            >
              <div className="container">
                <div className="menu-section__header">
                  <h2 className="menu-section__title font-display">{cat.name}</h2>
                  <p className="menu-section__subtitle">{cat.subtitle}</p>
                </div>

                <div className={`menu-section__grid ${isEditorial ? 'menu-section__grid--editorial' : ''}`}>
                  {dishes.map((dish, i) => (
                    <div
                      className={`dish-card ${isEditorial && i === 0 ? 'dish-card--hero' : ''}`}
                      key={dish.id}
                    >
                      <div className="dish-card__image img-placeholder">
                        <span>{dish.name}</span>
                      </div>
                      <div className="dish-card__info">
                        <h3 className="dish-card__name font-display">{dish.name}</h3>
                        <p className="dish-card__desc">{dish.description}</p>
                        <div className="dish-card__tags">
                          {dish.tags.filter(t => t !== 'non-veg' && t !== 'veg').slice(0, 2).map(tag => (
                            <span className="dish-card__tag" key={tag}>{tag}</span>
                          ))}
                          {dish.tags.includes('veg') && <span className="dish-card__tag dish-card__tag--veg">● Veg</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </motion.div>
  )
}
