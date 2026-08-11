import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: 'Modern Taupe & Gold Slat Sliding Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe1.jpg',
    description: 'Bespoke matte taupe & charcoal sliding wardrobe with brushed gold metal strip inlays and ergonomic handles.'
  },
  {
    id: 2,
    title: 'Geometric Slate Blue & White Loft Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe2.jpg',
    description: 'Dual-tone geometric slate blue and white sliding shutters with full-height top loft storage and integrated window seat.'
  },
  {
    id: 3,
    title: 'High-Gloss White & Ocean Teal Sliding Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe3.jpg',
    description: 'Glossy acrylic white and ocean teal accent band sliding wardrobe with seamless top loft cabinets and side wardrobe unit.'
  },
  {
    id: 4,
    title: 'Warm Cream & Caramel Sliding Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe4.jpg',
    description: 'Minimalist high-gloss cream and caramel stripe sliding wardrobe with top storage units and false ceiling profile lighting.'
  },
  {
    id: 5,
    title: 'Champagne Gold & Charcoal Custom Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe5.jpg',
    description: 'Luxury champagne gold laminate wardrobe with charcoal grey accent band, brass handles, and overhead loft storage.'
  },
  {
    id: 6,
    title: 'White & Teak Wood Grain Grooved Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe6.jpg',
    description: 'Natural teak wood grain laminate frame with glossy white sliding doors, horizontal groove accents, and overhead storage loft.'
  },
  {
    id: 7,
    title: 'Dual-Tone Steel Blue & Ice White Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe7.jpg',
    description: 'Sleek steel blue & ice white panel sliding wardrobe with recessed dark aluminium profile handles.'
  },
  {
    id: 8,
    title: 'Sage Green & Ivory Loft Wardrobe with Mirror',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe8.jpg',
    description: 'Matte sage green and ivory white sliding wardrobe featuring a full-length vanity mirror and top storage cabinets.'
  },
  {
    id: 9,
    title: 'Blush Pink & White Chevron Sliding Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe9.jpg',
    description: 'Modern blush pink and crisp white geometric chevron pattern sliding wardrobe with matching overhead loft cabinets.'
  },
  {
    id: 10,
    title: 'Charcoal Grey Chevron Wardrobe with Window Bench',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe10.jpg',
    description: 'High-gloss charcoal grey & white chevron sliding wardrobe integrated with a cozy padded L-shaped window seating bench.'
  },
  {
    id: 11,
    title: 'Glossy Cream 3-Door Sliding Gold Strip Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe11.jpg',
    description: '3-door glossy cream sliding wardrobe featuring intersecting gold brass metal strip inlays and a slate blue top storage loft.'
  },
  {
    id: 12,
    title: 'Royal Blue & Off-White Horizontal Band Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe12.jpg',
    description: 'High-gloss royal blue sliding doors with an off-white middle accent band and grey top loft cabinets.'
  },
  {
    id: 13,
    title: 'Soft Powder Blue & Silver Striped Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe13.jpg',
    description: 'Full-wall soft powder blue sliding wardrobe with horizontal silver profile strips and top storage lofts.'
  },
  {
    id: 14,
    title: 'Glossy Grey & Teak Arch Accent Wardrobe',
    category: 'Wardrobe',
    image: '/portfolio/wardrobe14.jpg',
    description: 'Contemporary glossy light grey sliding wardrobe with warm teak wood arch side accents and brass profile striping.'
  },
  {
    id: 15,
    title: 'Wooden Panel False Ceiling & Fan Recesses',
    category: 'Ceiling',
    image: '/services/ceiling_wood_design.jpg',
    description: 'Custom wooden ceiling panels with integrated peripheral cove lighting and recessed ceiling fan mounts.'
  },
  {
    id: 16,
    title: 'Luxury Green & Patterned Double Drapes',
    category: 'Curtain',
    image: '/services/curtain_green_pattern.jpg',
    description: 'Dual-tone luxury green drapes combined with traditional geometric patterned inner curtains.'
  },
  {
    id: 17,
    title: 'Warm Ambient Cove & False Ceiling Lighting',
    category: 'Ceiling',
    image: '/services/lighting_cove_profile.jpg',
    description: 'Minimalist warm perimeter cove LED false ceiling lighting with accent circular wall backlight and TV console illumination.'
  },
  {
    id: 18,
    title: 'Traditional Wooden Pooja Mandir with Etched Glass',
    category: 'Pooja Unit',
    image: '/services/pooja_glass_mandir.jpg',
    description: 'Custom wood pooja cabinet with Ganesha etched glass doors, built-in spotlighting, auspicious symbols, and bottom storage drawers.'
  },
  {
    id: 19,
    title: 'Modern White CNC Laser-Cut Om Mandir',
    category: 'Pooja Unit',
    image: '/services/pooja_cnc_om_mandir.jpg',
    description: 'Laser-cut CNC Om lotus backboard pooja mandir unit with jaali doors, spotlight illumination, and dark glossy bottom drawers.'
  }
];

const categories = ['All', 'Wardrobe', 'Ceiling', 'Curtain', 'Pooja Unit'];

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
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
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
              style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', background: '#f4f4f3' }}
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
