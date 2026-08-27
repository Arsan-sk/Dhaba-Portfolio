import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SIGNATURE_DISHES } from '../../data/menu'
import { BUSINESS, getDirectionsURL, getPhoneURL } from '../../data/business'
import { SEATING_ZONES } from '../../data/tables'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  const heroRef = useRef(null)
  const heroTextRefs = useRef([])
  const cravingsRef = useRef(null)
  const brandRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero pinned scroll sequence
      const heroStates = heroRef.current?.querySelectorAll('.hero__state')
      if (heroStates && heroStates.length > 0) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: `+=${window.innerHeight * 3}`,
            pin: true,
            scrub: 1,
          }
        })
        .to(heroStates[0], { opacity: 0, scale: 1.05, duration: 1 }, 0.8)
        .fromTo(heroStates[1], { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1 }, 0.8)
        .to(heroStates[1], { opacity: 0, scale: 1.05, duration: 1 }, 2.2)
        .fromTo(heroStates[2], { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1 }, 2.2)
      }

      // Brand section parallax
      if (brandRef.current) {
        gsap.fromTo(brandRef.current.querySelector('.brand__image-wrap'),
          { y: 60 },
          {
            y: -60,
            scrollTrigger: {
              trigger: brandRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          }
        )
      }

      // Cravings scroll-driven carousel
      if (cravingsRef.current) {
        const cards = cravingsRef.current.querySelectorAll('.craving-card')
        cards.forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, y: 80, rotateX: 5 },
            {
              opacity: 1, y: 0, rotateX: 0,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 1,
              }
            }
          )
        })
      }

      // Fade-in animations for all sections
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const signatureDishes = SIGNATURE_DISHES.slice(0, 6)

  return (
    <motion.div className="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      
      {/* ============ HERO — Scroll-Controlled Experience ============ */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg-gradient" />
        
        {/* State 1: Experience */}
        <div className="hero__state hero__state--1">
          <div className="hero__state-bg">
            <img src="/images/hero/hero-spread.jpg" alt="A dramatic spread of Indian dishes at Nawab Dhaba" className="hero__bg-image" loading="eager" />
            <div className="hero__smoke" />
          </div>
          <div className="hero__content container">
            <p className="hero__kicker font-body">Nashik Road, Maharashtra</p>
            <h1 className="hero__title font-display">
              Where Every Meal<br/>
              <span className="hero__title-accent">is a Memory</span>
            </h1>
            <p className="hero__subtitle">More than a dhaba. An experience.</p>
          </div>
        </div>

        {/* State 2: Hunger */}
        <div className="hero__state hero__state--2">
          <div className="hero__state-bg">
            <img src="/images/hero/hero-tandoori.jpg" alt="Sizzling tandoori chicken with steam rising" className="hero__bg-image" loading="eager" />
          </div>
          <div className="hero__content container">
            <p className="hero__hindi font-hindi">भूख लगी है?</p>
            <h2 className="hero__title font-display">
              The Fire is<br/>
              <span className="hero__title-accent">Already Lit</span>
            </h2>
            <p className="hero__subtitle">Fresh from the tandoor. Bold with every bite.</p>
          </div>
        </div>

        {/* State 3: Togetherness */}
        <div className="hero__state hero__state--3">
          <div className="hero__state-bg">
            <img src="/images/hero/hero-family.jpg" alt="Family enjoying a meal together at Nawab Dhaba" className="hero__bg-image" loading="eager" />
          </div>
          <div className="hero__content container">
            <h2 className="hero__title font-display">
              The Feast is Better<br/>
              <span className="hero__title-accent">Together</span>
            </h2>
            <p className="hero__subtitle">Family. Friends. Food. Nawab Dhaba.</p>
            <Link to="/menu" className="btn btn--primary hero__cta">
              Explore the Full Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-hint">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ============ BRAND PRESENCE ============ */}
      <section className="section section--warm brand" ref={brandRef}>
        <div className="container">
          <div className="brand__layout reveal-up">
            <div className="brand__text">
              <p className="brand__eyebrow">The Nawab Dhaba Way</p>
              <h2 className="brand__heading font-display">
                Not Just Food.<br/>
                <span className="text-ember">A Gathering.</span>
              </h2>
              <p className="brand__description">
                Some places serve meals. We serve moments. Nawab Dhaba is where bold flavors meet warm company — 
                where families linger, friends laugh louder, and every dish is made to be remembered.
              </p>
              <div className="brand__stats">
                <div className="brand__stat">
                  <span className="brand__stat-number font-display">20+</span>
                  <span className="brand__stat-label">Signature Dishes</span>
                </div>
                <div className="brand__stat">
                  <span className="brand__stat-number font-display">∞</span>
                  <span className="brand__stat-label">Memories Made</span>
                </div>
                <div className="brand__stat">
                  <span className="brand__stat-number font-display">1</span>
                  <span className="brand__stat-label">Unforgettable Dhaba</span>
                </div>
              </div>
            </div>
            <div className="brand__image-wrap">
              <div className="brand__image img-placeholder">
                <span>🔥 The Tandoor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE CRAVINGS ============ */}
      <section className="section cravings" ref={cravingsRef}>
        <div className="container">
          <div className="cravings__header reveal-up">
            <p className="section-eyebrow">Signature Cravings</p>
            <h2 className="section-title font-display">
              What Everyone's<br/>
              <span className="text-ember">Craving</span>
            </h2>
          </div>

          <div className="cravings__grid">
            {signatureDishes.map((dish, index) => (
              <div
                className={`craving-card ${index === 0 ? 'craving-card--featured' : ''}`}
                key={dish.id}
              >
                <div className="craving-card__image img-placeholder">
                  <span>{dish.name}</span>
                </div>
                <div className="craving-card__overlay">
                  <h3 className="craving-card__name font-display">{dish.name}</h3>
                  <p className="craving-card__desc">{dish.description}</p>
                  {dish.tags.includes('signature') && (
                    <span className="craving-card__badge">★ Signature</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENU PREVIEW ============ */}
      <section className="section section--warm menu-preview">
        <div className="container">
          <div className="menu-preview__layout reveal-up">
            <div className="menu-preview__text">
              <p className="section-eyebrow">The Full Feast</p>
              <h2 className="section-title font-display">
                More Than<br/>
                <span className="text-saffron">a Menu</span>
              </h2>
              <p className="menu-preview__desc">
                From smoky tandoor platters to creamy desserts. Seafood that's always fresh. 
                Chicken preparations you won't find anywhere else. This is just a taste.
              </p>
              <Link to="/menu" className="btn btn--primary">
                Explore the Full Menu
              </Link>
            </div>
            <div className="menu-preview__cards">
              {['Tandoor', 'Seafood', 'Nawabi Specials', 'Desserts'].map((cat, i) => (
                <div className="menu-preview__card" key={cat} style={{ '--delay': `${i * 0.1}s` }}>
                  <div className="menu-preview__card-icon img-placeholder">
                    <span>{['🔥', '🐟', '🍗', '🍨'][i]}</span>
                  </div>
                  <h3 className="menu-preview__card-title font-display">{cat}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOGETHERNESS ============ */}
      <section className="section togetherness">
        <div className="container">
          <div className="togetherness__content reveal-up">
            <p className="section-eyebrow">Family · Friends · Food</p>
            <h2 className="section-title font-display">
              The Best Meals Are<br/>
              <span className="text-saffron">Shared</span>
            </h2>
            <p className="togetherness__desc">
              Big tables. Bigger smiles. The kind of meals where you order too much — 
              and finish everything anyway. Bring everyone.
            </p>
          </div>
          <div className="togetherness__images reveal-up">
            <div className="togetherness__img togetherness__img--1 img-placeholder">
              <span>Family Dining</span>
            </div>
            <div className="togetherness__img togetherness__img--2 img-placeholder">
              <span>Friends Gathering</span>
            </div>
            <div className="togetherness__img togetherness__img--3 img-placeholder">
              <span>Shared Plates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEATING PREVIEW ============ */}
      <section className="section section--warm seating-preview">
        <div className="container">
          <div className="seating-preview__header reveal-up">
            <p className="section-eyebrow">Find Your Spot</p>
            <h2 className="section-title font-display">
              Where Will<br/>
              <span className="text-ember">You Sit?</span>
            </h2>
          </div>
          <div className="seating-preview__zones reveal-up">
            {SEATING_ZONES.map((zone) => (
              <div className="zone-card" key={zone.id}>
                <div className="zone-card__icon">{zone.icon}</div>
                <h3 className="zone-card__name font-display">{zone.name}</h3>
                <p className="zone-card__desc">{zone.description}</p>
              </div>
            ))}
          </div>
          <div className="seating-preview__cta reveal-up">
            <Link to="/book" className="btn btn--primary">
              Choose Your Table
            </Link>
          </div>
        </div>
      </section>

      {/* ============ GALLERY TEASER ============ */}
      <section className="section gallery-teaser">
        <div className="container">
          <div className="gallery-teaser__header reveal-up">
            <p className="section-eyebrow">A Glimpse</p>
            <h2 className="section-title font-display">
              Moments at<br/>
              <span className="text-saffron">Nawab Dhaba</span>
            </h2>
          </div>
          <div className="gallery-teaser__grid reveal-up">
            <div className="gallery-teaser__item gallery-teaser__item--tall img-placeholder"><span>Tandoor Fire</span></div>
            <div className="gallery-teaser__item img-placeholder"><span>Dish Close-up</span></div>
            <div className="gallery-teaser__item img-placeholder"><span>Ambience</span></div>
            <div className="gallery-teaser__item gallery-teaser__item--wide img-placeholder"><span>The Full Spread</span></div>
          </div>
          <div className="gallery-teaser__cta reveal-up">
            <Link to="/gallery" className="btn btn--secondary">
              Explore the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ============ VISIT US ============ */}
      <section className="section section--warm visit">
        <div className="container">
          <div className="visit__layout reveal-up">
            <div className="visit__info">
              <p className="section-eyebrow">Visit Nawab Dhaba</p>
              <h2 className="section-title font-display">
                The Feast<br/>
                <span className="text-ember">Awaits</span>
              </h2>
              <div className="visit__details">
                <div className="visit__detail">
                  <span className="visit__detail-icon">📍</span>
                  <div>
                    <p className="visit__detail-label">Address</p>
                    <p className="visit__detail-value">{BUSINESS.address.full}</p>
                  </div>
                </div>
                <div className="visit__detail">
                  <span className="visit__detail-icon">🕐</span>
                  <div>
                    <p className="visit__detail-label">Hours</p>
                    <p className="visit__detail-value">{BUSINESS.hours.display}</p>
                  </div>
                </div>
                <div className="visit__detail">
                  <span className="visit__detail-icon">📞</span>
                  <div>
                    <p className="visit__detail-label">Call Us</p>
                    <p className="visit__detail-value">{BUSINESS.phone}</p>
                  </div>
                </div>
              </div>
              <div className="visit__actions">
                <a href={getDirectionsURL()} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Get Directions
                </a>
                <a href={getPhoneURL()} className="btn btn--secondary">
                  Call Now
                </a>
              </div>
            </div>
            <div className="visit__map">
              <div className="visit__map-embed img-placeholder">
                <span>📍 Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
