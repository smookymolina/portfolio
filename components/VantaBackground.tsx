'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/theme';

// Per-theme Vanta NET configuration
// dark:  muted cyan + lower opacity + sparser network → lines don't overwhelm dark bg
// light: full accent color + higher opacity + denser network → vibrant on light bg
const PALETTE = {
  dark: {
    bg:          0x0a0a0a,
    color:       0x3f3fff,
    points:      6.5,
    maxDistance: 18.5,
    spacing:     19.0,
    opacity:     0.42,
  },
  light: {
    bg:          0xf2f0ec,
    color:       0x006b8a,
    points:      8.0,
    maxDistance: 22.0,
    spacing:     18.0,
    opacity:     0.9,
  },
} as const;

export default function VantaBackground() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef    = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { bg, color, points, maxDistance, spacing } = PALETTE[theme];
    let cancelled = false;

    (async () => {
      const [THREE, { default: NET }] = await Promise.all([
        import('three'),
        import('vanta/dist/vanta.net.min'),
      ]);

      if (cancelled || !containerRef.current) return;

      if (effectRef.current) effectRef.current.destroy();

      effectRef.current = NET({
        el:              containerRef.current,
        THREE,
        color,
        backgroundColor: bg,
        points,
        maxDistance,
        spacing,
        showDots:        true,
      });
    })();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
      style={{ opacity: PALETTE[theme].opacity }}
      aria-hidden="true"
    />
  );
}
