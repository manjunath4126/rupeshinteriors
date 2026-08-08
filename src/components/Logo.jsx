import React from 'react';

const Logo = ({ size = 'normal', customHeight }) => {
  const defaultHeight = size === 'large' ? '110px' : '82px';
  const height = customHeight || defaultHeight;

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
