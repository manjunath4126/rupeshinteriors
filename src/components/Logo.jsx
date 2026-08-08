import React from 'react';

const Logo = ({ size = 'normal' }) => {
  // Height tuned for maximum visibility without cluttering header
  const height = size === 'large' ? '70px' : '55px';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img
        src="/logo.png"
        alt="Rupesh Interiors - Home & Space Design"
        style={{
          height: height,
          width: 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default Logo;
