'use client';

import React, { useEffect, useState } from 'react';

export default function ShadowParticles() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 10,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-0"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(6,182,212,0) 70%)',
            filter: 'blur(2px)',
            animation: `shadowFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes shadowFloat {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.5);
          }
          25% {
            opacity: 0.6;
            transform: translate(${Math.random() * 100 - 50}px, -50px) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(${Math.random() * 100 - 50}px, -100px) scale(1.2);
          }
          75% {
            opacity: 0.4;
            transform: translate(${Math.random() * 100 - 50}px, -150px) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, -200px) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}
