import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const reviewsList = [
  {
    client: 'Priya Sharma',
    location: 'Hyderabad',
    review: 'Rupesh Interiors completely transformed our 3BHK. G. Dharmaraju Sir understood our vision from day one. The false ceiling and modular kitchen exceeded our expectations!',
    rating: 5
  },
  {
    client: 'Suresh Reddy',
    location: 'Hyderabad',
    review: 'Outstanding work! Very professional team. They delivered our office interior on time and within budget. Highly recommend for commercial spaces.',
    rating: 5
  },
  {
    client: 'Kavitha Nair',
    location: 'Secunderabad',
    review: "Absolutely love what they've done with my bedroom and living room. The color palette and furniture selection were spot-on. 10/10!",
    rating: 5
  },
  {
    client: 'Ramesh & Asha',
    location: 'Miyapur, Hyderabad',
    review: 'We were very nervous about a full home renovation, but Rupesh Interiors made the whole process smooth and stress-free. The results are beyond beautiful.',
    rating: 5
  },
  {
    client: 'Venkatesh Kumar',
    location: 'Bachupally, Hyderabad',
    review: 'Great experience from consultation to handover. Attention to detail was incredible. Our modular kitchen is now the highlight of our home!',
    rating: 4.5
  }
];

const Reviews = () => {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1A1918 0%, #2d2b29 100%)',
          color: '#FFFFFF',
          padding: '80px 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span style={{ color: '#F3C08D', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.85rem' }}>
            CLIENT FEEDBACK
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Client Testimonials & Stories
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Read authentic reviews from homeowners and commercial clients who trusted Rupesh Interiors.
          </p>
        </div>
      </section>

      {/* Main Reviews Grid */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}
          >
            {reviewsList.map((rev) => (
              <TestimonialCard key={rev.client} {...rev} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
