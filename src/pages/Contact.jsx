import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { sendQuickContactToWhatsApp } from '../utils/whatsappRedirect';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Modular Kitchen',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    sendQuickContactToWhatsApp(formData);
  };

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
            REACH OUT TO US
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Contact Rupesh Interiors
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Have a question or want to discuss your interior ideas? Send us a quick inquiry via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '50px'
            }}
          >
            {/* Quick Inquiry Form */}
            <div className="glass-card" style={{ padding: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Send an Inquiry</h2>
              <p style={{ color: '#7a7976', marginBottom: '28px', fontSize: '0.92rem' }}>
                Fill out the fields below and submit to connect directly with G. Dharmaraju on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #B1B0AC',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #B1B0AC',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #B1B0AC',
                      outline: 'none',
                      fontSize: '0.95rem',
                      background: '#FFFFFF'
                    }}
                  >
                    {[
                      'Modular Kitchen',
                      'Wardrobe',
                      'Crockery Unit',
                      'TV Unit',
                      'Study Table',
                      'Pooja Unit',
                      'Ceiling',
                      'Lighting',
                      'Wallpaper',
                      'Curtain',
                      'Custom Furniture',
                      'Doors',
                      'Windows',
                      'Full Home Makeover'
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>
                    Message / Space Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your home floor plan, location, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #B1B0AC',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                  <MessageCircle size={20} /> Submit & Chat on WhatsApp
                </button>
              </form>
            </div>

            {/* Direct Details & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="glass-card" style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Contact Information</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(243,192,141,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1A1918'
                      }}
                    >
                      <Phone size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#B1B0AC', display: 'block' }}>Phone / WhatsApp</span>
                      <strong style={{ fontSize: '1.1rem', color: '#1A1918' }}>+91 95159 58727</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(243,192,141,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1A1918'
                      }}
                    >
                      <Mail size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#B1B0AC', display: 'block' }}>Email Address</span>
                      <strong style={{ fontSize: '1.05rem', color: '#1A1918' }}>raju3469@gmail.com</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(243,192,141,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1A1918'
                      }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#B1B0AC', display: 'block' }}>Location</span>
                      <strong style={{ fontSize: '1rem', color: '#1A1918' }}>
                        Hyderabad, Telangana, India
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="glass-card" style={{ padding: '8px', overflow: 'hidden', height: '280px' }}>
                <iframe
                  title="Rupesh Interiors Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.823!2d78.3743521!3d17.51596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d4ccedd4f55%3A0x83f5c5cab5029109!2sRupesh%20Interiors!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
