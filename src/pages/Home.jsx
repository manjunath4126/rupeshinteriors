import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Palette, Sparkles, PhoneCall } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const featuredServices = [
    { title: 'Modular Kitchen', description: 'Ergonomic layouts, shutters, countertops & storage solutions tailored to your culinary space.' },
    { title: 'Wardrobe', description: 'Sliding & hinged wardrobes with custom interiors, mirror doors & accent LED profiles.' },
    { title: 'Ceiling', description: 'POP & gypsum false ceilings with coffers, beams & integrated warm profile lights.' },
    { title: 'TV Unit', description: 'Wall-mounted & floor units with marble backdrops, louvers & hidden cable management.' },
    { title: 'Pooja Unit', description: 'Sacred, beautifully crafted pooja mandirs with wood & marble backlit panel finishes.' },
    { title: 'Crockery Unit', description: 'Elegant glass & wooden display units designed to showcase dining tableware.' }
  ];

  const testimonials = [
    {
      client: 'Priya Sharma',
      location: 'Hyderabad',
      review: 'Rupesh Interiors completely transformed our 3BHK. G. Dharmaraju Sir understood our vision from day one. The false ceiling and modular kitchen exceeded our expectations!',
      rating: 5
    },
    {
      client: 'Suresh Reddy',
      location: 'Hyderabad',
      review: 'Outstanding work! Very professional team. They delivered our office interior on time and within budget. Highly recommend for commercial spaces.',
      rating: 5
    },
    {
      client: 'Kavitha Nair',
      location: 'Secunderabad',
      review: "Absolutely love what they've done with my bedroom and living room. The color palette and furniture selection were spot-on. 10/10!",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Stats Counter Bar */}
      <StatsBar />

      {/* About Brief Section */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                alt="Interior Design Process"
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: '#F3C08D', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
                ABOUT RUPESH INTERIORS
              </span>
              <h2 style={{ fontSize: '2.2rem', margin: '12px 0 20px 0', lineHeight: 1.25 }}>
                Thoughtful Spaces Designed for Modern Living
              </h2>
              <p style={{ color: '#4a4947', marginBottom: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
                Founded and led by <strong>G. Dharmaraju</strong>, Rupesh Interiors specializes in residential and commercial interior architecture. We transform ordinary rooms into functional works of art with our signature soft apricot & warm neutral palette.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {['Custom Tailored Space Planning', '3D Design Visualization Before Execution', 'Transparent Pricing & No Hidden Costs', 'High Quality Durable Materials'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#F3C08D" />
                    <span style={{ fontSize: '0.95rem', color: '#1A1918', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <NavLink to="/about" className="btn-secondary">
                Discover Our Story <ArrowRight size={18} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
            <span style={{ color: '#F3C08D', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              OUR EXPERT SERVICES
            </span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '8px' }}>Complete Home & Space Solutions</h2>
            <p style={{ color: '#7a7976', fontSize: '1rem' }}>
              From modular kitchens to custom false ceilings, explore our comprehensive range of 13 interior design solutions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <NavLink to="/services" className="btn-primary" style={{ padding: '14px 36px' }}>
              Explore All 13 Services <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Projects Portfolio */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
            <span style={{ color: '#F3C08D', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              FEATURED PORTFOLIO
            </span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '8px' }}>Our Showcase Projects</h2>
            <p style={{ color: '#7a7976' }}>A glimpse into our recent interior transformations.</p>
          </div>

          <PortfolioGrid limit={6} />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <NavLink to="/portfolio" className="btn-secondary">
              View Full Gallery <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
            <span style={{ color: '#F3C08D', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              CLIENT REVIEWS
            </span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '8px' }}>What Our Clients Say</h2>
            <p style={{ color: '#7a7976' }}>Real experiences from homeowners and business clients.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.client} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: '#1A1918', color: '#FFFFFF', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <Sparkles size={36} color="#F3C08D" style={{ marginBottom: '16px' }} />
          <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '16px' }}>
            Ready to Transform Your Home?
          </h2>
          <p style={{ color: '#B1B0AC', fontSize: '1.1rem', marginBottom: '32px' }}>
            Schedule a free initial consultation with G. Dharmaraju and discuss your design ideas on WhatsApp.
          </p>

          <NavLink to="/book-consultation" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <PhoneCall size={20} /> Book Consultation Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
