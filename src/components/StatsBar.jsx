import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Users } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    {
      icon: <Award size={32} color="#F3C08D" />,
      number: '7+',
      label: 'Years Experience',
      desc: 'Delivering bespoke space transformations'
    },
    {
      icon: <CheckCircle2 size={32} color="#F3C08D" />,
      number: '84+',
      label: 'Projects Completed',
      desc: 'Residential & commercial interior projects'
    },
    {
      icon: <Users size={32} color="#F3C08D" />,
      number: '75+',
      label: 'Happy Customers',
      desc: 'Trusted for quality & timely delivery'
    }
  ];

  return (
    <section style={{ margin: '-40px 0 60px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div
          className="glass-card-dark"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '30px',
            padding: '40px 30px',
            borderRadius: '20px'
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                borderRight: idx < stats.length - 1 ? '1px solid rgba(177, 176, 172, 0.2)' : 'none',
                paddingRight: '20px'
              }}
            >
              <div
                style={{
                  background: 'rgba(243, 192, 141, 0.12)',
                  padding: '16px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {stat.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.4rem',
                    color: '#F3C08D',
                    lineHeight: 1,
                    marginBottom: '4px'
                  }}
                >
                  {stat.number}
                </h3>
                <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 600 }}>{stat.label}</h4>
                <p style={{ fontSize: '0.82rem', color: '#B1B0AC', marginTop: '2px' }}>{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
