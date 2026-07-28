import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`glass-nav`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '12px 0' : '18px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <NavLink to="/">
          <Logo />
        </NavLink>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#1A1918' : '#4a4947',
                borderBottom: isActive ? '2px solid #F3C08D' : '2px solid transparent',
                paddingBottom: '4px',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <NavLink to="/book-consultation" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
            <Calendar size={16} /> Book Consultation
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#1A1918',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(177, 176, 172, 0.3)',
            padding: '24px 20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#F3C08D' : '#1A1918',
                fontSize: '1.1rem',
                padding: '8px 0',
                borderBottom: '1px solid #f0f0f0'
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/book-consultation"
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: '12px', padding: '14px' }}
          >
            <Calendar size={18} /> Book Free Consultation
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
