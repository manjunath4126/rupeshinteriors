import React from 'react';
import { NavLink } from 'react-router-dom';
import { PhoneCall, Calendar } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  { title: 'Modular Kitchen', description: 'Ergonomic layouts, acrylic & laminate shutters, quartz countertops, and pull-out storage solutions.' },
  { title: 'Wardrobe', description: 'Sliding & hinged wardrobes with custom drawer organizers, glass doors & warm LED profile lights.' },
  { title: 'Crockery Unit', description: 'Elegant display cabinets for dining spaces crafted with glass doors and wooden accents.' },
  { title: 'TV Unit', description: 'Wall-mounted & floor TV units featuring marble backdrop panels, wooden louvers & hidden wire tracks.' },
  { title: 'Study Table', description: 'Compact & functional work-from-home desk setups with overhead bookshelves and cable channels.' },
  { title: 'Pooja Unit', description: 'Sacred, beautifully crafted mandirs with CNC wood carving and onyx marble backlit backdrops.' },
  { title: 'Ceiling', description: 'POP & gypsum false ceilings with decorative coffers, peripheral coves & profile lighting.' },
  { title: 'Lighting', description: 'Layered ambient, task, and accent lighting plans to enhance architectural atmosphere.' },
  { title: 'Wallpaper', description: 'Curated premium texture, geometric, and mural wallpapers for accent bedroom & living walls.' },
  { title: 'Curtain', description: 'Custom blackout drapes, sheer curtains, motorized track systems, and Roman blinds.' },
  { title: 'Custom Furniture', description: 'Bespoke sofas, dining tables, headboards, and accent chairs tailored to your exact space sizes.' },
  { title: 'Doors', description: 'Designer flush doors, veneered doors, solid wood entrance doors, and sliding glass partitions.' },
  { title: 'Windows', description: 'Bay window seating, decorative wooden window frames, and UPVC framing accents.' }
];

const Services = () => {
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
            WHAT WE OFFER
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '10px', marginBottom: '16px' }}>
            Our 13 Specialized Interior Services
          </h1>
          <p style={{ color: '#B1B0AC', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            From kitchen modularization to custom woodwork & false ceiling profiles — we execute every element of your home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#F9F8F6' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}
          >
            {servicesData.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>

          <div
            className="glass-card-dark"
            style={{
              marginTop: '60px',
              padding: '40px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <h2 style={{ color: '#FFFFFF', fontSize: '2rem' }}>Need a Combined Full-Home Package?</h2>
            <p style={{ color: '#B1B0AC', maxWidth: '550px' }}>
              We provide complete turnkey 2BHK, 3BHK & villa interior execution packages tailored to your budget.
            </p>
            <NavLink to="/book-consultation" className="btn-primary" style={{ padding: '14px 32px' }}>
              <Calendar size={18} /> Request Customized Package Quote
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
