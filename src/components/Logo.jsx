import React from 'react';

const Logo = ({ size = 'normal' }) => {
  const height = size === 'large' ? '65px' : '50px';

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
