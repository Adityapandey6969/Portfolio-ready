'use client';

import React, { useEffect, useState } from 'react';

interface BattleSlash {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export default function BattleEffects() {
  const [slashes, setSlashes] = useState<BattleSlash[]>([]);

  useEffect(() => {
    let nextId = 0;

    const interval = setInterval(() => {
      const newSlash: BattleSlash = {
        id: nextId,
        x: Math.random() * 100,
        y: Math.random() * 100,
        angle: Math.random() * 360,
      };

      setSlashes((prev) => [...prev.slice(-5), newSlash]);
      nextId += 1;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {slashes.map((slash) => (
        <div
          key={slash.id}
          style={{
            position: 'fixed',
            left: `${slash.x}%`,
            top: `${slash.y}%`,
            transform: `translate(-50%, -50%) rotate(${slash.angle}deg)`,
            animation: 'slashAttack 0.8s ease-out forwards',
          }}
          className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent rounded-full"
        />
      ))}
      <style jsx>{`
        @keyframes slashAttack {
          0% {
            width: 0;
            opacity: 1;
            filter: blur(0px);
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 150px;
            opacity: 0;
            filter: blur(4px);
          }
        }
      `}</style>
    </div>
  );
}
