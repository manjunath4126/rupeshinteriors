import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ client, review, rating = 5, location }) => {
  return (
    <div
      className="glass-card"
      style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative'
      }}
    >
      <Quote
        size={40}
        color="#F3C08D"
        style={{ opacity: 0.3, position: 'absolute', top: '24px', right: '24px' }}
      />

      <div>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < Math.floor(rating) ? '#F3C08D' : 'none'}
              color="#F3C08D"
            />
          ))}
        </div>

        <p style={{ fontStyle: 'italic', color: '#1A1918', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '24px' }}>
          "{review}"
        </p>
      </div>

      <div style={{ borderTop: '1px solid rgba(177, 176, 172, 0.25)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--charcoal-black)',
            color: '#F3C08D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '1.1rem'
          }}
        >
          {client.charAt(0)}
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', color: '#1A1918', fontWeight: 600 }}>{client}</h4>
          {location && <span style={{ fontSize: '0.8rem', color: '#B1B0AC' }}>{location}</span>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
