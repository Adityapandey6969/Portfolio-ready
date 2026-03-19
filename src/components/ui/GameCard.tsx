'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GameCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function GameCard({ children, delay = 0 }: GameCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75'
      }`}
      style={{
        animation: isVisible ? 'gameCardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gameCardPopIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-2deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
