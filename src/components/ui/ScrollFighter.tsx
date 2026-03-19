'use client';

import React, { useEffect, useState } from 'react';
import ShadowFighter from '@/src/components/ui/ShadowFighter';

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
    <div className="fixed right-3 top-1/2 z-10 hidden -translate-y-1/2 pointer-events-none xl:block">
      <div
        className="relative h-[280px] w-[220px]"
        style={{
          transform: `translateX(${Math.sin(scrollY * 0.01) * 18}px) translateY(${Math.cos(scrollY * 0.015) * 10}px)`,
          transition: 'transform 0.12s ease-out',
        }}
      >
        <div className="absolute inset-x-8 bottom-5 h-16 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="absolute inset-0 rounded-[2rem] border border-cyan-500/10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/10 backdrop-blur-[2px]" />
        <ShadowFighter motionSeed={scrollY * 0.01} />
      </div>
    </div>
  );
}
