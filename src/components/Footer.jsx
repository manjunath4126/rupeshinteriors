import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ background: '#1A1918', color: '#FFFFFF', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            paddingBottom: '50px',
            borderBottom: '1px solid rgba(177, 176, 172, 0.2)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                background: '#FFFFFF',
                padding: '12px 18px',
                borderRadius: '14px',
                display: 'inline-block',
                marginBottom: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              <Logo size="normal" />
            </div>
            <p style={{ color: '#B1B0AC', fontSize: '0.95rem', marginBottom: '20px', maxWidth: '320px' }}>
              Crafting timeless, functional, and luxury minimalist spaces tailored to your personal aesthetic and lifestyle.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F3C08D', fontWeight: 500 }}>
              <span>Owner & Designer:</span>
              <strong style={{ color: '#FFFFFF' }}>G. Dharmaraju</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', letterSpacing: '0.05em' }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services (13)', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Client Reviews', path: '/reviews' },
                { name: 'Book Consultation', path: '/book-consultation' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    style={{
                      color: '#B1B0AC',
                      transition: 'color 0.2s ease',
                      fontSize: '0.92rem'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#F3C08D')}
                    onMouseLeave={(e) => (e.target.style.color = '#B1B0AC')}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', letterSpacing: '0.05em' }}>
              GET IN TOUCH
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', color: '#B1B0AC' }}>
              <a
                href="https://wa.me/919515958727"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#B1B0AC' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F3C08D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B1B0AC')}
              >
                <Phone size={18} color="#F3C08D" />
                <span>+91 95159 58727</span>
              </a>

              <a
                href="mailto:raju3469@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#B1B0AC' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F3C08D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B1B0AC')}
              >
                <Mail size={18} color="#F3C08D" />
                <span>raju3469@gmail.com</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={22} color="#F3C08D" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Rupesh Interiors, Bachupally / Miyapur Highway, Hyderabad, Telangana</span>
              </div>

              <a
                href="https://maps.app.goo.gl/B1UtzpmvD13ijmk99"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#F3C08D',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  marginTop: '6px'
                }}
              >
                View on Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: '#7a7976'
          }}
        >
          <p>© {new Date().getFullYear()} Rupesh Interiors. All rights reserved.</p>
          <p>Designed with Luxury Minimalism & Precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
