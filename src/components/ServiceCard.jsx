import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* SVG Line-art icons matching user image */
export const ServiceIcons = {
  'Modular Kitchen': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="24" width="36" height="18" rx="2" />
      <path d="M6 32h36M18 32v10M30 32v10" />
      <rect x="6" y="6" width="14" height="14" rx="1" />
      <rect x="24" y="6" width="18" height="14" rx="1" />
      <path d="M12 10v6M30 10h6" />
    </svg>
  ),
  'Wardrobe': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="32" height="36" rx="2" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="20" y1="22" x2="20" y2="28" />
      <line x1="28" y1="22" x2="28" y2="28" />
      <path d="M12 12h8M12 16h6M28 12h8" />
    </svg>
  ),
  'Crockery Unit': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="32" height="36" rx="2" />
      <line x1="8" y1="22" x2="40" y2="22" />
      <line x1="8" y1="32" x2="40" y2="32" />
      <circle cx="16" cy="14" r="4" />
      <circle cx="28" cy="14" r="4" />
      <path d="M16 26v4M24 26v4M32 26v4" />
    </svg>
  ),
  'TV Unit': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="36" height="22" rx="2" />
      <path d="M18 30v4M30 30v4" />
      <rect x="10" y="34" width="28" height="8" rx="2" />
      <line x1="20" y1="38" x2="28" y2="38" />
    </svg>
  ),
  'Study Table': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="22" x2="42" y2="22" />
      <path d="M10 22v18M38 22v18M18 22v10h12v-10" />
      <path d="M30 10l6 12M32 10a4 4 0 01-4-4" />
      <rect x="10" y="14" width="4" height="8" />
    </svg>
  ),
  'Pooja Unit': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6L8 20v22h32V20L24 6z" />
      <circle cx="24" cy="16" r="3" />
      <path d="M24 19v5" />
      <rect x="16" y="30" width="16" height="12" />
      <line x1="24" y1="30" x2="24" y2="42" />
    </svg>
  ),
  'Ceiling': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <rect x="12" y="16" width="24" height="16" rx="1" />
      <line x1="6" y1="10" x2="12" y2="16" />
      <line x1="42" y1="10" x2="36" y2="16" />
      <line x1="6" y1="38" x2="12" y2="32" />
      <line x1="42" y1="38" x2="36" y2="32" />
    </svg>
  ),
  'Lighting': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6l4 12h-8l4-12z" />
      <path d="M32 6l4 12h-8l4-12z" />
      <line x1="12" y1="18" x2="10" y2="28" />
      <line x1="32" y1="18" x2="34" y2="28" />
      <path d="M6 34l8 8M38 34l-8 8M24 6v10" />
    </svg>
  ),
  'Wallpaper': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="24" height="36" rx="2" />
      <path d="M34 16c4 0 6 2 6 6v16c0 2-2 4-4 4H16" />
      <path d="M16 14l6 6-6 6" />
      <path d="M22 24l6 6-6 6" />
    </svg>
  ),
  'Curtain': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="8" x2="42" y2="8" />
      <path d="M10 8c0 10 4 14 0 34" />
      <path d="M18 8c0 10-4 14 0 34" />
      <path d="M30 8c0 10 4 14 0 34" />
      <path d="M38 8c0 10-4 14 0 34" />
      <line x1="6" y1="24" x2="16" y2="24" />
      <line x1="32" y1="24" x2="42" y2="24" />
    </svg>
  ),
  'Custom Furniture': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 28a6 6 0 0112 0v8H12v-8z" />
      <rect x="8" y="14" width="32" height="12" rx="3" />
      <path d="M8 20v18M40 20v18" />
      <line x1="24" y1="8" x2="24" y2="14" />
    </svg>
  ),
  'Doors': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="32" height="36" rx="2" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <circle cx="20" cy="24" r="1.5" fill="#1A1918" />
      <circle cx="28" cy="24" r="1.5" fill="#1A1918" />
      <rect x="12" y="10" width="8" height="10" />
      <rect x="28" y="10" width="8" height="10" />
    </svg>
  ),
  'Windows': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#1A1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14a12 12 0 0124 0v28H12V14z" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="12" y1="24" x2="36" y2="24" />
      <path d="M16 18c2-3 5-4 8-4" />
    </svg>
  )
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="glass-card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(243, 192, 141, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        {ServiceIcons[title] || ServiceIcons['Modular Kitchen']}
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#1A1918' }}>{title}</h3>
      <p style={{ color: '#7a7976', fontSize: '0.92rem', marginBottom: '24px', flexGrow: 1, lineHeight: 1.5 }}>
        {description}
      </p>

      <NavLink
        to="/book-consultation"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#1A1918',
          fontWeight: 600,
          fontSize: '0.9rem'
        }}
        className="service-link"
      >
        <span>Get a Quote</span>
        <ArrowRight size={16} color="#F3C08D" />
      </NavLink>
    </div>
  );
};

export default ServiceCard;
