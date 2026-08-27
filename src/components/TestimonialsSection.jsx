import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Rohan Deshmukh',
      role: 'Highway Roadtripper & Foodie',
      rating: 5,
      date: 'Visited last week',
      review: 'Stopping at Nawab Dhaba on Nashik Road was the best decision of our road trip! The Pomfret Tandoori and Mutton Dum Biryani were outstanding — fresh, juicy, and packed with smoky charcoal flavor. The open charpai seating under the night sky made it unforgettable.',
      dish: 'Pomfret Tandoori & Mutton Biryani'
    },
    {
      name: 'Pooja & Sameer Kulkarni',
      role: 'Family Weekend Dinner',
      rating: 5,
      date: 'Visited 2 weeks ago',
      review: 'We came with a family group of 8 people. The private family cabin was very spacious and clean. Nawab Special Chicken with hot Butter Naan melted in our mouths. The kids loved the Special Gadbad ice cream. Extremely welcoming staff!',
      dish: 'Nawab Special Chicken & Gadbad Ice Cream'
    },
    {
      name: 'Imran Shaikh',
      role: 'Late Night Diner',
      rating: 5,
      date: 'Regular Visitor',
      review: 'If you are looking for authentic Dhaba food late at night near Bhiwandi, Nawab Dhaba is unmatched. The Raan Tandoori and Maratha Kabab are pure royalty. Quick service even at midnight and great parking space.',
      dish: 'Raan Tandoori & Maratha Kabab'
    }
  ];

  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(180deg, #0C0A09 0%, #16120F 50%, #0C0A09 100%)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* Header */}
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
            <Award size={16} />
            <span>Guest Praise</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 900,
            color: '#FAF5EE',
            lineHeight: 1.15
          }}>
            Loved By <span className="text-gold-gradient">Travelers & Families</span>
          </h2>

          <p style={{
            color: '#A89F91',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0.75rem auto 0'
          }}>
            Rated 4.8+ Stars on Google Reviews with hundreds of happy highway diners.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Stars & Quote */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={24} color="#D4AF37" style={{ opacity: 0.4 }} />
                </div>

                <p style={{
                  color: '#FAF5EE',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{rev.review}"
                </p>
              </div>

              <div>
                <div style={{
                  fontSize: '0.78rem',
                  color: '#D4AF37',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  Favorite: {rev.dish}
                </div>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FAF5EE', fontSize: '0.95rem' }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#A89F91' }}>
                      {rev.role}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#78716C' }}>
                    {rev.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
