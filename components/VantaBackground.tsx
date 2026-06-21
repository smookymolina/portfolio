'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/theme';

// Hex colors from globals.css tokens
// dark:  --color-bg: 10 10 10  | --color-accent: 0 194 255
// light: --color-bg: 242 240 236 | --color-accent: 0 107 138
const PALETTE = {
  dark:  { bg: 0x0a0a0a, color: 0x00c2ff },
  light: { bg: 0xf2f0ec, color: 0x006b8a },
} as const;

export default function VantaBackground() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef    = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { bg, color } = PALETTE[theme];
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
        points:          8.0,
        maxDistance:     22.0,
        spacing:         18.0,
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
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
