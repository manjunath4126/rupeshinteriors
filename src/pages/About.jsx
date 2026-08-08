import React from 'react';
import { NavLink } from 'react-router-dom';
import { Award, Compass, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import Logo from '../components/Logo';

const About = () => {
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
            ABOUT RUPESH INTERIORS
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Crafting Spaces with Passion & Purpose
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Learn more about our philosophy, lead designer G. Dharmaraju, and how we bring dream spaces to reality.
          </p>
        </div>
      </section>

      {/* Main Story & Founder Profile */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#F3C08D', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                THE FOUNDER
              </span>
              <h2 style={{ fontSize: '2.4rem', margin: '10px 0 10px 0' }}>G. Dharmaraju</h2>
              <h4 style={{ color: '#B1B0AC', fontWeight: 500, fontSize: '1.1rem', marginBottom: '24px' }}>
                Founder & Principal Interior Designer
              </h4>

              <p style={{ color: '#4a4947', marginBottom: '16px', lineHeight: 1.7 }}>
                With over 3+ years of dedicated interior architectural design experience across Hyderabad and neighboring regions, <strong>G. Dharmaraju</strong> founded Rupesh Interiors to bring high-end aesthetic refinement accessible to homeowners.
              </p>
              <p style={{ color: '#4a4947', marginBottom: '24px', lineHeight: 1.7 }}>
                Our signature design approach combines luxury minimalism, space optimization, warm neutral palettes, and meticulous craftsman precision.
              </p>

              <div
                className="glass-card"
                style={{ padding: '20px 24px', borderLeft: '4px solid #F3C08D', background: '#F9F8F6' }}
              >
                <p style={{ fontStyle: 'italic', color: '#1A1918', fontWeight: 500 }}>
                  "We don't just build furniture or ceiling panels; we design how you feel inside your home every single day."
                </p>
                <span style={{ fontSize: '0.85rem', color: '#B1B0AC', marginTop: '8px', display: 'block' }}>
                  — G. Dharmaraju
                </span>
              </div>
            </div>

            {/* Profile / Studio Graphic with Founder Photo */}
            <div className="glass-card" style={{ padding: '36px', textAlign: 'center', background: '#F9F8F6' }}>
              <img
                src="/owner.jpg"
                alt="G. Dharmaraju - Founder & Principal Designer"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px auto',
                  border: '4px solid #F3C08D',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />

              <h3 style={{ fontSize: '1.3rem', color: '#1A1918', marginBottom: '4px' }}>G. Dharmaraju</h3>
              <p style={{ fontSize: '0.88rem', color: '#7a7976', marginBottom: '20px' }}>Founder & Principal Designer</p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Logo size="normal" />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  borderTop: '1px solid rgba(177,176,172,0.3)',
                  paddingTop: '20px'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '2rem', color: '#F3C08D' }}>35+</h3>
                  <p style={{ fontSize: '0.82rem', color: '#7a7976' }}>Projects Completed</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', color: '#F3C08D' }}>25+</h3>
                  <p style={{ fontSize: '0.82rem', color: '#7a7976' }}>Happy Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px auto' }}>
            <span style={{ color: '#F3C08D', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
              OUR PILLARS
            </span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '8px' }}>Design Philosophy</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}
          >
            {[
              {
                icon: <Compass size={32} color="#F3C08D" />,
                title: 'Functional Minimalism',
                desc: 'Every element serves a functional purpose while keeping visual clutter to a minimum.'
              },
              {
                icon: <ShieldCheck size={32} color="#F3C08D" />,
                title: 'Material Perfection',
                desc: 'We source high-grade marine ply, acrylic shutters, quartz, and premium hardware for lifetime durability.'
              },
              {
                icon: <HeartHandshake size={32} color="#F3C08D" />,
                title: 'Client-Centric Process',
                desc: 'From initial sketch to final handover, you remain at the center of all color & layout decisions.'
              }
            ].map((card) => (
              <div key={card.title} className="glass-card" style={{ padding: '36px 28px' }}>
                <div style={{ marginBottom: '20px' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: '#7a7976', fontSize: '0.95rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
