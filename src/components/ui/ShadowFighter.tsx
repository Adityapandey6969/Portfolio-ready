'use client';

import React, { useEffect, useRef } from 'react';

interface ShadowFighterProps {
  motionSeed?: number;
}

function drawSword(
  ctx: CanvasRenderingContext2D,
  length: number,
  bladeWidth: number,
  handleLength: number
) {
  ctx.save();

  ctx.fillStyle = 'rgba(226, 232, 240, 0.95)';
  ctx.beginPath();
  ctx.moveTo(0, -bladeWidth / 2);
  ctx.lineTo(length - 12, -bladeWidth / 2);
  ctx.lineTo(length, 0);
  ctx.lineTo(length - 12, bladeWidth / 2);
  ctx.lineTo(0, bladeWidth / 2);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(34, 211, 238, 0.95)';
  ctx.fillRect(-5, -7, 10, 14);

  ctx.fillStyle = 'rgba(15, 23, 42, 1)';
  ctx.fillRect(-handleLength, -4, handleLength, 8);

  ctx.restore();
}

export default function ShadowFighter({ motionSeed = 0 }: ShadowFighterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame = 0;
    let time = motionSeed * 20;

    const drawSwords = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const sway = Math.sin(time * 0.025) * 10;
      const bounce = Math.cos(time * 0.04) * 8;
      const leftAngle = -0.85 + Math.sin(time * 0.08) * 0.24;
      const rightAngle = 0.85 + Math.cos(time * 0.075) * 0.24;

      ctx.save();
      ctx.translate(centerX + sway, centerY + bounce);
      ctx.shadowColor = 'rgba(34, 211, 238, 0.75)';
      ctx.shadowBlur = 28;

      ctx.strokeStyle = 'rgba(103, 232, 249, 0.5)';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(-8, -12, 88, -1.2, -0.45);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(8, -12, 88, Math.PI + 0.45, Math.PI + 1.2);
      ctx.stroke();

      ctx.save();
      ctx.rotate(leftAngle);
      drawSword(ctx, 92, 10, 26);
      ctx.restore();

      ctx.save();
      ctx.rotate(rightAngle);
      ctx.scale(-1, 1);
      drawSword(ctx, 92, 10, 26);
      ctx.restore();

      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      time += 1;
      animationFrame = requestAnimationFrame(drawSwords);
    };

    drawSwords();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [motionSeed]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{
        filter: 'drop-shadow(0 0 28px rgba(6, 182, 212, 0.45))',
      }}
    />
  );
}
