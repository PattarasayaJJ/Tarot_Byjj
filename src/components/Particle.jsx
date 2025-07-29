import React, { useEffect, useState, useRef } from 'react';

function Particle({ particle }) {
  const style = {
    position: 'absolute',
    top: `${particle.y}px`,
    left: `${particle.x}%`,
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
    borderRadius: '50%',
    pointerEvents: 'none',
    filter: `drop-shadow(0 0 6px ${particle.color})`,
    animation: `floatUpDown ${particle.duration}s ease-in-out infinite`,
    animationDelay: `${particle.delay}s`,
    zIndex: 1,
  };

  return <div style={style} />;
}

export default function GalaxyBackground({ children }) {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function updateHeight() {
      if (containerRef.current) {
        setHeight(containerRef.current.scrollHeight);
      }
    }

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const colors = ['#ffffff', '#aabbff', '#ffccaa', '#ffeeaa', '#ccddff'];
    const newParticles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, [height]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#000',
        backgroundImage: `
          radial-gradient(ellipse at center, #0d1b2a 0%, #000 80%),
          repeating-radial-gradient(circle at 50% 20%, #6b48ff88 0 300px, transparent 300px 350px),
          repeating-radial-gradient(circle at 30% 60%, #ff78ca88 0 250px, transparent 250px 300px)
        `,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        color: 'white',
        overflowX: 'hidden',
      }}
    >
      {/* Particles */}
      <div style={{ position: 'relative', width: '100%', height: `${height}px` }}>
        {particles.map((p, i) => (
          <Particle key={i} particle={p} />
        ))}
      </div>

      {/* เนื้อหาจริง */}
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>

      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-10px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
