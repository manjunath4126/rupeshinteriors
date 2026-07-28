import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const Portfolio = () => {
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
            DESIGN GALLERY
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Our Portfolio & Work Showcase
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Explore our curated gallery of living rooms, bedrooms, modular kitchens, false ceilings, and bespoke woodwork.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
