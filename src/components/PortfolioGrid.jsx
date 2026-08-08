import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: 'Wooden Panel False Ceiling & Fan Recesses',
    category: 'Ceiling',
    image: '/services/ceiling_wood_design.jpg',
    description: 'Custom wooden ceiling panels with integrated peripheral cove lighting and recessed ceiling fan mounts.'
  },
  {
    id: 2,
    title: 'Luxury Green & Patterned Double Drapes',
    category: 'Curtain',
    image: '/services/curtain_green_pattern.jpg',
    description: 'Dual-tone luxury green drapes combined with traditional geometric patterned inner curtains.'
  },
  {
    id: 3,
    title: 'Warm Ambient Cove & False Ceiling Lighting',
    category: 'Ceiling',
    image: '/services/lighting_cove_profile.jpg',
    description: 'Minimalist warm perimeter cove LED false ceiling lighting with accent circular wall backlight and TV console illumination.'
  },
  {
    id: 4,
    title: 'Classic Wooden Window Frame & Drapes',
    category: 'Curtain',
    image: '/services/windows_wooden_frame.jpg',
    description: 'Bespoke solid wood window casement with decorative curtain rod and matching tie-back drapes.'
  },
  {
    id: 5,
    title: 'Elegant Beige Window Sheers & Pleated Drapes',
    category: 'Curtain',
    image: '/services/curtain_beige.jpg',
    description: 'Floor-to-ceiling pleated beige blackout drapes with sheer white inner curtains for soft sunlight filtering.'
  },
  {
    id: 6,
    title: 'Traditional Wooden Pooja Mandir with Etched Glass',
    category: 'Pooja Unit',
    image: '/services/pooja_glass_mandir.jpg',
    description: 'Custom wood pooja cabinet with Ganesha etched glass doors, built-in spotlighting, auspicious symbols, and bottom storage drawers.'
  },
  {
    id: 7,
    title: 'Modern White CNC Laser-Cut Om Mandir',
    category: 'Pooja Unit',
    image: '/services/pooja_cnc_om_mandir.jpg',
    description: 'Laser-cut CNC Om lotus backboard pooja mandir unit with jaali doors, spotlight illumination, and dark glossy bottom drawers.'
  },
  {
    id: 8,
    title: 'Modern Modular Kitchen & Island',
    category: 'Modular Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Acrylic finish handleless shutters with quartz countertop and built-in appliances.'
  },
  {
    id: 9,
    title: 'Luxury Master Bedroom Wardrobe',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    description: 'Floor-to-ceiling sliding wardrobe with tinted glass & integrated LED warm profile lighting.'
  },
  {
    id: 10,
    title: 'Custom Floating TV Panel Unit',
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    description: 'Louvers slat wooden backdrop with marble veneer wall mount and hidden cable tray.'
  }
];

const categories = ['All', 'Ceiling', 'Curtain', 'Pooja Unit', 'Modular Kitchen', 'Wardrobe', 'TV Unit'];

const PortfolioGrid = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '30px',
              fontWeight: 500,
              fontSize: '0.9rem',
              transition: 'var(--transition-smooth)',
              background: activeCategory === cat ? '#F3C08D' : 'rgba(177, 176, 172, 0.15)',
              color: activeCategory === cat ? '#1A1918' : '#4a4947',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="glass-card"
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setSelectedItem(item)}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(26, 25, 24, 0.75)',
                    color: '#F3C08D',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '16px 20px', textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#1A1918'
                  }}
                >
                  <ZoomIn size={16} color="#F3C08D" /> View Project Details
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '700px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(26,25,24,0.8)',
                color: '#FFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
            />

            <div style={{ padding: '24px' }}>
              <span
                style={{
                  background: 'rgba(243, 192, 141, 0.2)',
                  color: '#1A1918',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                {selectedItem.category}
              </span>
              <h2 style={{ fontSize: '1.4rem', marginTop: '12px', marginBottom: '8px' }}>
                {selectedItem.title}
              </h2>
              <p style={{ color: '#4a4947', fontSize: '0.95rem' }}>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
