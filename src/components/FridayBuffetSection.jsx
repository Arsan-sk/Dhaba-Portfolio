import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calendar, Clock, Flame, Users, Sparkles, Check } from 'lucide-react';
import { buildWhatsAppBookingURL } from '../data/business';

export default function FridayBuffetSection() {
  const [activeCourseKey, setActiveCourseKey] = useState('starters');
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const [selectedZone, setSelectedZone] = useState('family');
  const [guestCount, setGuestCount] = useState(4);

  // Buffet menu data grouped into 5 course categories
  const courses = {
    starters: {
      number: '01',
      title: '7 Types of Chicken Starters',
      tagline: 'Clay Tandoor & Charcoal Sizzlers',
      dishes: [
        {
          id: 'tikka-angara',
          name: 'Chicken Tikka Angara',
          tag: 'Tandoor Specialty',
          desc: 'Succulent boneless chicken chunks marinated in red Kashmiri chilli, curd, and hand-ground spices, smoky-charred over glowing embers.',
          image: '/images/dishes/tandoor-special.jpg',
        },
        {
          id: 'tandoori-murgh',
          name: 'Charcoal Tandoori Murgh',
          tag: 'Highway Classic',
          desc: 'Traditional bone-in chicken slow-roasted in the clay tandoor with garlic, ginger, mustard oil, and secret dhaba spices.',
          image: '/images/dishes/raan-tandoori.jpg',
        },
        {
          id: 'banjara-kebab',
          name: 'Chicken Banjara Kebab',
          tag: 'Herb Infused',
          desc: 'Juicy chicken kebabs flavored with cracked black peppercorns, roasted cumin, fresh mint, and coriander leaves.',
          image: '/images/dishes/maratha-kabab.jpg',
        },
        {
          id: 'maratha-seekh',
          name: 'Maratha Chicken Seekh Kebab',
          tag: 'Spicy Thecha',
          desc: 'Finely minced spiced chicken blended with roasted garlic and fiery green chilli thecha, grilled on open skewers.',
          image: '/images/dishes/maratha-kabab.jpg',
        },
        {
          id: 'chicken-lollipop',
          name: 'Crispy Chicken Lollipop',
          tag: 'Indo-Chinese',
          desc: 'Crunchy frenched chicken drumettes fried till golden and tossed in a tangy schezwan garlic glaze.',
          image: '/images/dishes/tandoor-special.jpg',
        },
        {
          id: 'pahadi-kebab',
          name: 'Malai Pahadi Kebab',
          tag: 'Creamy & Delicate',
          desc: 'Melt-in-mouth chicken chunks in a subtle marinade of spinach, fresh coriander, cream, and green cardamom.',
          image: '/images/dishes/pomfret-tandoori.jpg',
        },
        {
          id: 'garlic-roast',
          name: 'Chicken Garlic Roast Fry',
          tag: 'Pan Roasted',
          desc: 'Crispy pan-fried chicken tossed with toasted garlic slivers, curry leaves, and cracked black pepper.',
          image: '/images/dishes/nawab-special-chicken.jpg',
        },
      ],
    },
    openers: {
      number: '02',
      title: 'Soup & Masala Papad Chana',
      tagline: 'Steaming Broth & Crunchy Openers',
      dishes: [
        {
          id: 'papad-chana',
          name: '1 Papad Chana & Garlic Fry',
          tag: 'Table Opener',
          desc: 'Crispy charcoal-roasted papad served alongside spicy chatpata chana garlic fry with chopped onions and fresh coriander.',
          image: '/images/dishes/maratha-kabab.jpg',
        },
        {
          id: 'manchow-soup',
          name: 'Chicken Manchow Soup',
          tag: 'Hot & Fiery',
          desc: 'Steaming dark soy chicken broth loaded with finely chopped vegetables, ginger, garlic, and topped with crispy fried noodles.',
          image: '/images/dishes/sizzler-rice.jpg',
        },
      ],
    },
    mains: {
      number: '03',
      title: '2 Main Courses & Dal Fry',
      tagline: 'Rich Gravies & Tandoori Breads',
      dishes: [
        {
          id: 'handi-special',
          name: 'Nawab Special Chicken Handi',
          tag: 'Signature Gravy',
          desc: 'Rich, slow-simmered chicken curry cooked in an opulent cashew tomato gravy with kasuri methi and butter.',
          image: '/images/dishes/nawab-special-chicken.jpg',
        },
        {
          id: 'kadhai-peshawari',
          name: 'Murgh Kadhai Peshawari',
          tag: 'Wok Tossed',
          desc: 'Chicken cooked on high flame with bell peppers, onions, and freshly pounded coriander and cumin seeds.',
          image: '/images/dishes/nawab-special-chicken.jpg',
        },
        {
          id: 'dal-fry',
          name: 'Dhaba Yellow Dal Fry',
          tag: 'Desi Ghee Tadka',
          desc: 'Comforting yellow lentils tempered with golden garlic, cumin seeds, dry red chillies, and pure desi ghee.',
          image: '/images/dishes/maratha-kabab.jpg',
        },
      ],
    },
    rice: {
      number: '04',
      title: 'Jeera Rice & Dum Pulao',
      tagline: 'Aromatic Long-Grain Basmati',
      dishes: [
        {
          id: 'jeera-rice',
          name: 'Fragrant Jeera Rice',
          tag: 'Classic Rice',
          desc: 'Fluffy aged basmati rice tossed with crackling royal cumin seeds and pure butter.',
          image: '/images/dishes/mutton-special-rice.jpg',
        },
        {
          id: 'chicken-pulao',
          name: 'Chicken Dum Pulao',
          tag: 'Aromatic Feasts',
          desc: 'Aromatic long-grain basmati rice slow-cooked on dum with marinated chicken, saffron milk, and fried onions.',
          image: '/images/dishes/mutton-special-rice.jpg',
        },
        {
          id: 'veg-pulao',
          name: 'Fresh Garden Veg Pulao',
          tag: 'Pure Veg Special',
          desc: 'Fragrant basmati rice tossed with garden-fresh green peas, carrots, beans, and aromatic whole spices.',
          image: '/images/dishes/sizzler-rice.jpg',
        },
      ],
    },
    sweets: {
      number: '05',
      title: 'Shahi Sweets & Dessert',
      tagline: 'Indulgent Sweet Ending',
      dishes: [
        {
          id: 'gulab-jamun',
          name: 'Warm Shahi Gulab Jamun & Ice Cream',
          tag: 'Dessert Finale',
          desc: 'Melt-in-mouth golden khoya dumplings soaked in saffron-rose syrup, served warm with chilled vanilla ice cream.',
          image: '/images/dishes/gadbad-special-sweet.jpg',
        },
      ],
    },
  };

  const courseKeys = Object.keys(courses);
  const activeCourse = courses[activeCourseKey];
  const activeDishList = activeCourse.dishes;
  const currentDish = activeDishList[currentDishIndex] || activeDishList[0];

  const handleCourseChange = (key) => {
    setActiveCourseKey(key);
    setCurrentDishIndex(0);
  };

  const nextDish = () => {
    setCurrentDishIndex((prev) => (prev + 1) % activeDishList.length);
  };

  const prevDish = () => {
    setCurrentDishIndex((prev) => (prev - 1 + activeDishList.length) % activeDishList.length);
  };

  const handleWhatsAppBook = () => {
    const url = buildWhatsAppBookingURL({
      offer: true,
      guests: guestCount,
      section: selectedZone === 'family' ? 'Family Seating Cabins' : 'Gents & Friends Lounge',
      date: 'Upcoming Friday',
      time: '08:00 PM - 01:00 AM',
      name: 'Guest',
      phone: '',
    });
    window.open(url, '_blank');
  };

  return (
    <section
      id="friday-buffet"
      className="section-pad-lg"
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Editorial Section Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '0.75rem',
            }}
          >
            <span style={{ width: '28px', height: '1.5px', background: 'var(--gold)', display: 'inline-block' }} />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--gold)',
              }}
            >
              SPECIAL FRIDAY UNLIMITED OFFER
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(1.5rem, 4vw, 3.5rem)',
              alignItems: 'end',
            }}
          >
            <div>
              <h2 className="headline-lg" style={{ color: 'var(--cream)' }}>
                Friday Midnight Buffet{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>@ ₹499</span>
              </h2>
            </div>

            <div>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Every Friday from <strong>8:00 PM to 1:00 AM</strong>. Enjoy an unlimited royal spread featuring 
                7 types of chicken starters, steaming soup, rich main courses, pulao, and sweets with separate seating 
                for families and groups.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8rem', color: 'var(--cream)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} color="var(--gold)" /> Every Friday
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} color="var(--gold)" /> 8 PM – 1 AM
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Flame size={14} color="var(--ember)" /> ₹499 / Person
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════ EDITORIAL COURSE SELECTOR TABS ═════════ */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--line)',
          }}
          className="pills-scroll"
        >
          {courseKeys.map((key) => {
            const course = courses[key];
            const isActive = activeCourseKey === key;
            return (
              <button
                key={key}
                onClick={() => handleCourseChange(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.35rem',
                  border: isActive ? '1.5px solid var(--gold)' : '1px solid var(--line)',
                  background: isActive ? 'rgba(255, 184, 0, 0.1)' : 'transparent',
                  color: isActive ? 'var(--gold)' : 'var(--cream)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  borderRadius: '4px',
                }}
              >
                <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>{course.number}.</span>
                <span>{course.title}</span>
              </button>
            );
          })}
        </div>

        {/* ═════════ INTERACTIVE EDITORIAL DISH SPOTLIGHT ═════════ */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--line)',
            borderRadius: '8px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          }}
        >
          {/* Top Controls & Index Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="label" style={{ color: 'var(--gold)', fontSize: '0.72rem' }}>
                {activeCourse.number} — {activeCourse.tagline.toUpperCase()}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)' }}>
                {activeCourse.title}
              </h3>
            </div>

            {/* Dish Counter & Prev/Next Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600 }}>
                Item <strong style={{ color: 'var(--cream)' }}>{currentDishIndex + 1}</strong> of {activeDishList.length}
              </span>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={prevDish}
                  aria-label="Previous item"
                  style={{
                    width: '42px',
                    height: '42px',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cream)',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.color = 'var(--cream)';
                  }}
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={nextDish}
                  aria-label="Next item"
                  style={{
                    width: '42px',
                    height: '42px',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cream)',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.color = 'var(--cream)';
                  }}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Dish Stage */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.75rem, 4vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Dish Photo */}
            <div
              style={{
                aspectRatio: '4 / 3',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--line)',
              }}
            >
              <img
                src={currentDish.image}
                alt={currentDish.name}
                key={currentDish.id}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.4s ease-in-out',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(18, 16, 14, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {currentDish.tag}
              </div>
            </div>

            {/* Dish Info Details */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ember)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                Included in ₹499 Unlimited Feast
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
                  color: 'var(--cream)',
                  marginBottom: '1rem',
                  lineHeight: 1.15,
                }}
              >
                {currentDish.name}
              </h4>

              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '1.75rem', maxWidth: '480px' }}>
                {currentDish.desc}
              </p>

              {/* Steps Indicator / Direct Item Selectors */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {activeDishList.map((dishItem, idx) => {
                  const isCurrent = currentDishIndex === idx;
                  return (
                    <button
                      key={dishItem.id}
                      onClick={() => setCurrentDishIndex(idx)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: isCurrent ? '1px solid var(--gold)' : '1px solid var(--line)',
                        background: isCurrent ? 'var(--gold)' : 'transparent',
                        color: isCurrent ? 'var(--ink)' : 'var(--muted)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        borderRadius: '4px',
                      }}
                    >
                      {idx + 1}. {dishItem.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ═════════ SEATING ZONES: EDITORIAL DUAL SECTIONS ═════════ */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="label" style={{ color: 'var(--gold)', marginBottom: '0.4rem', display: 'block' }}>
              SEATING ARRANGEMENTS
            </span>
            <h3 className="headline-md" style={{ color: 'var(--cream)' }}>
              Separate Seating for Family & Gents (Friends)
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* Family Cabins Card */}
            <div
              onClick={() => setSelectedZone('family')}
              style={{
                background: selectedZone === 'family' ? 'rgba(255, 184, 0, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                border: selectedZone === 'family' ? '1.5px solid var(--gold)' : '1px solid var(--line)',
                padding: '1.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  ZONE A
                </span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255, 184, 0, 0.15)', color: 'var(--gold)', padding: '0.25rem 0.65rem', fontWeight: 600 }}>
                  Family Preferred 👨‍👩‍👧‍👦
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.6rem' }}>
                Private Family Cabins
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Spacious, peaceful, child-friendly private wooden enclosures with priority table service.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--cream)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--gold)" /> Dedicated private cabin seating
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--gold)" /> Quiet & buffered family ambience
                </span>
              </div>
            </div>

            {/* Gents & Friends Lounge Card */}
            <div
              onClick={() => setSelectedZone('friends')}
              style={{
                background: selectedZone === 'friends' ? 'rgba(226, 88, 34, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                border: selectedZone === 'friends' ? '1.5px solid var(--ember)' : '1px solid var(--line)',
                padding: '1.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ember)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  ZONE B
                </span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(226, 88, 34, 0.18)', color: 'var(--ember)', padding: '0.25rem 0.65rem', fontWeight: 600 }}>
                  Friends & Gents Lounge 👥
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.6rem' }}>
                Outdoor Charpai Lounge
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Lively open-air charpai cots, highway views, and live sports screening for group hangouts.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--cream)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--ember)" /> Big screen live sports screening 🏏
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--ember)" /> Traditional woven charpais & breezy setup
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════ CLEAN EDITORIAL ACTION STRIP ═════════ */}
        <div
          style={{
            border: '1px solid var(--line)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.015)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              RESERVE YOUR FRIDAY TABLE
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)' }}>
              Friday Midnight Buffet @ ₹499 / Person
            </h4>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600 }}>Guests:</span>
              <div style={{ display: 'flex', gap: '0.3rem' }}>
                {[2, 4, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuestCount(num)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: guestCount === num ? '1px solid var(--gold)' : '1px solid var(--line)',
                      background: guestCount === num ? 'var(--gold)' : 'transparent',
                      color: guestCount === num ? 'var(--ink)' : 'var(--cream)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleWhatsAppBook}
              className="btn-ember"
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.88rem' }}
            >
              Book Friday Buffet ({guestCount} Guests)
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
