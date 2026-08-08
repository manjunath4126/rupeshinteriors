import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F7F5 60%, #F3C08D 100%)',
        overflow: 'hidden',
        padding: '60px 0 80px 0'
      }}
    >
      {/* Decorative backdrop shapes */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243,192,141,0.25) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(177,176,172,0.18) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Text Content & Minimal Founder Pill */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(243, 192, 141, 0.25)',
                padding: '6px 16px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1A1918',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={16} color="#1A1918" />
              <span>LUXURY MINIMALIST INTERIORS</span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                color: '#1A1918',
                marginBottom: '20px',
                fontWeight: 700
              }}
            >
              Spaces That Tell <br />
              <span style={{ color: '#F3C08D', fontStyle: 'italic' }}>Your Unique Story.</span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#4a4947',
                marginBottom: '32px',
                maxWidth: '520px',
                lineHeight: 1.6
              }}
            >
              Rupesh Interiors crafts timeless residential and commercial spaces with a perfect balance of warmth, functionality, and clean minimalist elegance.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '28px' }}>
              <NavLink to="/book-consultation" className="btn-primary" style={{ padding: '14px 32px' }}>
                <Calendar size={18} /> Book Free Consultation
              </NavLink>

              <NavLink to="/portfolio" className="btn-secondary" style={{ padding: '14px 28px' }}>
                View Portfolio <ArrowRight size={18} />
              </NavLink>
            </div>

            {/* Seamless Minimal Founder Badge (No extra buttons, clean layout) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 18px',
                borderRadius: '40px',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(177, 176, 172, 0.3)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <img
                src="/owner.jpg"
                alt="G. Dharmaraju"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #F3C08D',
                  flexShrink: 0
                }}
              />
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#1A1918', fontWeight: 700, margin: 0 }}>
                  G. Dharmaraju
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#7a7976', margin: '2px 0 0 0', fontWeight: 500 }}>
                  Founder & Principal Designer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div
              className="glass-card"
              style={{
                padding: '12px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.75)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Rupesh Interiors - Home Showcase"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
