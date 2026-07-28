import React from 'react';

const Logo = ({ size = 'normal' }) => {
  const height = size === 'large' ? '56px' : '42px';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <svg
        height={height}
        viewBox="0 0 240 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: height, width: 'auto', display: 'block' }}
      >
        {/* House wireframe roof & outer outline */}
        <path
          d="M 15,90 L 125,25 L 225,85 L 225,160 L 15,160 Z"
          stroke="#1A1918"
          strokeWidth="3.5"
          fill="none"
          strokeLinejoin="round"
        />

        {/* Apricot block on top-left area */}
        <path
          d="M 22,86 L 125,32 L 125,158 L 22,158 Z"
          fill="#F3C08D"
          opacity="0.85"
        />

        {/* Muted Slate Gray block on right area */}
        <path
          d="M 127,70 L 218,125 L 218,158 L 127,158 Z"
          fill="#B1B0AC"
          opacity="0.65"
        />

        {/* Wall Clock */}
        <circle cx="65" cy="72" r="14" stroke="#1A1918" strokeWidth="2.5" fill="#FFFFFF" />
        <path d="M 65,72 L 65,64 M 65,72 L 72,74" stroke="#1A1918" strokeWidth="2.5" strokeLinecap="round" />

        {/* Armchair */}
        <path
          d="M 45,130 Q 45,115 62,115 Q 80,115 80,130 L 80,148 L 45,148 Z"
          fill="#1A1918"
        />
        <path d="M 42,125 L 42,142" stroke="#1A1918" strokeWidth="3" strokeLinecap="round" />
        <path d="M 83,125 L 83,142" stroke="#1A1918" strokeWidth="3" strokeLinecap="round" />
        <path d="M 50,148 L 47,157 M 75,148 L 78,157" stroke="#1A1918" strokeWidth="3" strokeLinecap="round" />

        {/* Floor Lamp */}
        <path d="M 132,110 L 148,110 L 144,95 L 136,95 Z" fill="#1A1918" />
        <line x1="140" y1="110" x2="140" y2="157" stroke="#1A1918" strokeWidth="2.5" />
        <line x1="140" y1="135" x2="128" y2="157" stroke="#1A1918" strokeWidth="2" />
        <line x1="140" y1="135" x2="152" y2="157" stroke="#1A1918" strokeWidth="2" />

        {/* Cabinet & Decorative Vase */}
        <rect x="170" y="118" width="40" height="39" stroke="#1A1918" strokeWidth="2.5" fill="#1A1918" />
        <circle cx="180" cy="128" r="1.5" fill="#FFFFFF" />
        <circle cx="200" cy="128" r="1.5" fill="#FFFFFF" />
        <circle cx="180" cy="138" r="1.5" fill="#FFFFFF" />
        <circle cx="200" cy="138" r="1.5" fill="#FFFFFF" />
        <circle cx="180" cy="148" r="1.5" fill="#FFFFFF" />
        <circle cx="200" cy="148" r="1.5" fill="#FFFFFF" />
        
        {/* Vase */}
        <path d="M 186,118 Q 183,110 190,105 Q 197,110 194,118 Z" fill="none" stroke="#1A1918" strokeWidth="2" />
        <path d="M 190,105 L 187,93 M 190,105 L 193,91 M 190,105 L 197,95" stroke="#1A1918" strokeWidth="1.5" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: size === 'large' ? '1.5rem' : '1.25rem',
            letterSpacing: '0.1em',
            color: '#1A1918',
            textTransform: 'uppercase'
          }}
        >
          Rupesh Interiors
        </span>
        <span
          style={{
            fontSize: size === 'large' ? '0.75rem' : '0.65rem',
            letterSpacing: '0.2em',
            color: '#B1B0AC',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginTop: '3px'
          }}
        >
          - Home & Space Design -
        </span>
      </div>
    </div>
  );
};

export default Logo;
