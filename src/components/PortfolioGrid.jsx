import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: 'Modern Modular Kitchen & Island',
    category: 'Modular Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Acrylic finish handleless shutters with quartz countertop and built-in appliances.'
  },
  {
    id: 2,
    title: 'Luxury Master Bedroom Wardrobe',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    description: 'Floor-to-ceiling sliding wardrobe with tinted glass & integrated LED warm profile lighting.'
  },
  {
    id: 3,
    title: 'Minimalist POP Ceiling & Profile Lights',
    category: 'Ceiling',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Perimeter cove lighting with geometric false ceiling design for main living room.'
  },
  {
    id: 4,
    title: 'Custom Floating TV Panel Unit',
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    description: 'Louvers slat wooden backdrop with marble veneer wall mount and hidden cable tray.'
  },
  {
    id: 5,
    title: 'Traditional Wooden Pooja Mandir',
    category: 'Pooja Unit',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    description: 'Intricately carved wooden bell pooja unit with onyx marble backlit panel.'
  },
  {
    id: 6,
    title: 'Ergonomic Home Office & Study',
    category: 'Study Table',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    description: 'Dual monitor desk setup with overhead storage cabinets and magnetic pinboard.'
  },
  {
    id: 7,
    title: 'Glass Crockery Display Cabinet',
    category: 'Crockery Unit',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Gold aluminum frame glass doors with internal soft spotlighting for dining room.'
  },
  {
    id: 8,
    title: 'Modern Living Room Drapes & Sheers',
    category: 'Curtain',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Motorized blackout drapes combined with sheer curtains for natural light control.'
  }
];

const categories = ['All', 'Modular Kitchen', 'Wardrobe', 'TV Unit', 'Ceiling', 'Pooja Unit', 'Study Table', 'Crockery Unit', 'Curtain'];

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
              border: 'none'
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
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
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

              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#1A1918' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#7a7976', lineHeight: 1.4 }}>{item.description}</p>
                <div
                  style={{
                    marginTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#F3C08D'
                  }}
                >
                  <ZoomIn size={14} /> View Project Details
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
                zIndex: 10
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
