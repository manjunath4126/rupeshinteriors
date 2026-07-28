import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919515958727?text=Hello%20Rupesh%20Interiors!%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        borderRadius: '50px',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
        zIndex: 9999,
        fontWeight: 600,
        fontSize: '0.9rem',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
      }}
    >
      <MessageCircle size={22} fill="#FFFFFF" color="#25D366" />
      <span>Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
