'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollFighter() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 hidden lg:block">
      <div
        style={{
          transform: `translateX(${Math.sin(scrollY * 0.01) * 20}px) translateY(${Math.cos(scrollY * 0.01) * 10}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-30 blur-xl" />
        <div className="absolute top-0 left-0 flex h-16 w-16 items-center justify-center text-sm font-bold tracking-[0.2em] text-cyan-300">
          FX
        </div>
      </div>
    </div>
  );
}
