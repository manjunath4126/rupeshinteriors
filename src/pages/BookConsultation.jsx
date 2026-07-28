import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Check, Sparkles, MessageCircle } from 'lucide-react';
import { sendConsultationToWhatsApp } from '../utils/whatsappRedirect';

const allServicesList = [
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
  'Windows'
];

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    spaceType: 'Residential Apartment',
    services: [],
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
    message: ''
  });

  const handleCheckboxChange = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your full name and phone number.');
      return;
    }
    sendConsultationToWhatsApp(formData);
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
            START YOUR DESIGN JOURNEY
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Book a Free Design Consultation
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Fill out your project preferences below. Upon submitting, your request will instantly generate a WhatsApp message to G. Dharmaraju.
          </p>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="glass-card" style={{ padding: '48px 40px', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Sparkles size={24} color="#F3C08D" />
              <h2 style={{ fontSize: '1.8rem', color: '#1A1918' }}>Consultation Details</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Personal Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. G. Ramesh"
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
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 95159 58727"
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    Type of Property / Space
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
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
                    <option value="Residential Apartment (2BHK/3BHK/4BHK)">Residential Apartment (2BHK / 3BHK / 4BHK)</option>
                    <option value="Independent Villa / House">Independent Villa / House</option>
                    <option value="Commercial Office Space">Commercial Office Space</option>
                    <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                    <option value="Renovation / Single Room Upgrade">Renovation / Single Room Upgrade</option>
                  </select>
                </div>
              </div>

              {/* Services Checkboxes (13 services) */}
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, marginBottom: '12px' }}>
                  Select Services You are Interested In:
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '12px'
                  }}
                >
                  {allServicesList.map((service) => {
                    const isChecked = formData.services.includes(service);
                    return (
                      <div
                        key={service}
                        onClick={() => handleCheckboxChange(service)}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: isChecked ? '1.5px solid #F3C08D' : '1px solid #B1B0AC',
                          background: isChecked ? 'rgba(243, 192, 141, 0.15)' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.9rem',
                          userSelect: 'none',
                          transition: 'var(--transition-smooth)'
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '4px',
                            border: isChecked ? 'none' : '1px solid #B1B0AC',
                            background: isChecked ? '#F3C08D' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#1A1918'
                          }}
                        >
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <span>{service}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
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
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
                  Additional Notes / Specific Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details about budget preference, target completion date, location..."
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

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  fontSize: '1.05rem',
                  marginTop: '10px'
                }}
              >
                <MessageCircle size={22} /> Confirm & Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
