'use client';

import React, { useEffect, useRef } from 'react';

export default function ShadowFighter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame: number;
    let time = 0;

    const drawShadowFighter = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create glowing shadow effect
      ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;

      // Fighter stance variations based on time
      const stance = Math.sin(time * 0.01) * 0.3;
      const punchPhase = Math.sin(time * 0.02) * 1;
      const kickPhase = Math.cos(time * 0.015) * 1;

      // Draw fighter silhouette
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

      // Head
      ctx.beginPath();
      ctx.arc(centerX, centerY - 60, 20, 0, Math.PI * 2);
      ctx.fill();

      // Body
      ctx.fillRect(centerX - 15, centerY - 40, 30, 50);

      // Left arm (punching)
      ctx.save();
      ctx.translate(centerX - 15, centerY - 20);
      ctx.rotate(punchPhase * 0.5);
      ctx.fillRect(0, 0, 35 + punchPhase * 10, 12);
      ctx.restore();

      // Right arm
      ctx.save();
      ctx.translate(centerX + 15, centerY - 20);
      ctx.rotate(-stance * 0.3);
      ctx.fillRect(-35, 0, 35, 12);
      ctx.restore();

      // Left leg
      ctx.save();
      ctx.translate(centerX - 8, centerY + 10);
      ctx.rotate(stance * 0.2);
      ctx.fillRect(0, 0, 12, 40);
      ctx.restore();

      // Right leg (kicking)
      ctx.save();
      ctx.translate(centerX + 8, centerY + 10);
      ctx.rotate(kickPhase * 0.4);
      ctx.fillRect(-12, 0, 12, 40 + Math.abs(kickPhase) * 15);
      ctx.restore();

      time++;
      animationFrame = requestAnimationFrame(drawShadowFighter);
    };

    drawShadowFighter();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))',
      }}
    />
  );
}
