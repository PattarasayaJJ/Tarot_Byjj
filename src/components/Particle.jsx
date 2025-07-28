import React, { useEffect, useState } from 'react';

function Particle({ particle }) {
  const style = {
    position: 'absolute',
    top: `${particle.y}%`,
    left: `${particle.x}%`,
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
    borderRadius: '50%',
    pointerEvents: 'none',
    filter: `drop-shadow(0 0 6px ${particle.color})`,
    animation: `floatUpDown ${particle.duration}s ease-in-out infinite`,
    animationDelay: `${particle.delay}s`,
  };

  return <div style={style} />;
}

export default function GalaxyBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#ffffff', '#aabbff', '#ffccaa', '#ffeeaa', '#ccddff'];
    const newParticles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at center, #0d1b2a 0%, #000 80%)`,
      }}
    >
      {/* Galaxy Nebula glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle at center, #6b48ff88, transparent 70%)',
          filter: 'blur(100px)',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '30%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle at center, #ff78ca88, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} particle={p} />
      ))}

      {/* Keyframe animation */}
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-10px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
