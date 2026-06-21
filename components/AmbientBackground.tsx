'use client';

import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const accent = () =>
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? [0, 194, 255]
        : [0, 107, 138];

    const rgba = (r: number, g: number, b: number, a: number) =>
      `rgba(${r},${g},${b},${a})`;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const [r, g, b] = accent();
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      ctx.clearRect(0, 0, W, H);

      /* ── Radar — right-center, partially off-screen ── */
      const cx = W * 0.84;
      const cy = H * 0.52;
      const maxR = Math.min(W, H) * 0.3;

      /* Rings */
      [0.33, 0.67, 1].forEach((s) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxR * s, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(r, g, b, isDark ? 0.05 : 0.07);
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      /* Cross-hair */
      ctx.strokeStyle = rgba(r, g, b, isDark ? 0.04 : 0.06);
      ctx.lineWidth = 1;
      [[cx - maxR, cy, cx + maxR, cy], [cx, cy - maxR, cx, cy + maxR]].forEach(
        ([x1, y1, x2, y2]) => {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      );

      /* Sweep fill */
      const sweepW = Math.PI / 5;
      const fillGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
      fillGrad.addColorStop(0, rgba(r, g, b, isDark ? 0.10 : 0.07));
      fillGrad.addColorStop(1, rgba(r, g, b, 0));
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, angle - sweepW, angle);
      ctx.closePath();
      ctx.fillStyle = fillGrad;
      ctx.fill();

      /* Sweep line */
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
      ctx.strokeStyle = rgba(r, g, b, isDark ? 0.55 : 0.45);
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* Dot at ~70% radius along sweep */
      const bx = cx + Math.cos(angle) * maxR * 0.68;
      const by = cy + Math.sin(angle) * maxR * 0.68;
      const bg = ctx.createRadialGradient(bx, by, 0, bx, by, 7);
      bg.addColorStop(0, rgba(r, g, b, isDark ? 0.7 : 0.55));
      bg.addColorStop(1, rgba(r, g, b, 0));
      ctx.beginPath();
      ctx.arc(bx, by, 7, 0, Math.PI * 2);
      ctx.fillStyle = bg;
      ctx.fill();

      angle += 0.006;
      if (angle >= Math.PI * 2) angle -= Math.PI * 2;

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.75 }}
      aria-hidden="true"
    />
  );
}
