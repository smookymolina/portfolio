'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import FallbackImage from '@/components/FallbackImage';

const PHOTOS = [
  '/images/profile/photo-02.jpeg',
  '/images/profile/photo-03.jpeg',
  '/images/profile/photo-04.jpeg',
  '/images/profile/photo-05.jpeg',
  '/images/profile/photo-06.jpeg',
  '/images/profile/photo-07.jpeg',
];

export default function ProfileCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % PHOTOS.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + PHOTOS.length) % PHOTOS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-[340px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Corner accent marks */}
      <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-accent z-30" aria-hidden="true" />
      <div className="absolute -top-2 -right-2 w-7 h-7 border-t-2 border-r-2 border-accent z-30" aria-hidden="true" />
      <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-2 border-l-2 border-accent z-30" aria-hidden="true" />
      <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-accent z-30" aria-hidden="true" />

      {/* Image container */}
      <div className="w-full h-full bg-surface border border-border-subtle rounded overflow-hidden relative">
        {/* Fallback placeholder */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-surface-alt flex items-center justify-center">
            <User size={32} className="text-accent/50" />
          </div>
          <div className="text-center">
            <p className="font-mono text-xs text-text-muted">Jair Molina Arce</p>
            <p className="font-mono text-xs text-accent/60 mt-0.5">// photo</p>
          </div>
        </div>

        {/* Photo slides */}
        {PHOTOS.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 z-20 transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <FallbackImage
              src={src}
              alt={`Jair Molina Arce — ${i + 1}`}
              fill
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
              className="object-cover object-top"
              priority={i === 0}
              loading="eager"
            />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 flex items-center justify-center bg-background/70 border border-border-subtle rounded text-text-muted hover:text-accent hover:border-accent/50 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50"
        >
          <ChevronLeft size={13} />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 flex items-center justify-center bg-background/70 border border-border-subtle rounded text-text-muted hover:text-accent hover:border-accent/50 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50"
        >
          <ChevronRight size={13} />
        </button>

        {/* Dot navigation */}
        <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-30">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
              className={`rounded-full transition-all focus-visible:outline-none ${
                i === current
                  ? 'w-3 h-1.5 bg-accent'
                  : 'w-1.5 h-1.5 bg-text-muted/40 hover:bg-text-muted/70'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-2 right-2 z-30 font-mono text-[10px] text-text-muted bg-background/60 px-1.5 py-0.5 rounded border border-border-subtle">
          {current + 1}/{PHOTOS.length}
        </div>
      </div>

      {/* Info tag below */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-px flex-1 bg-border-subtle" />
        <span className="font-mono text-xs text-text-muted">IPN · CDMX · Mexico</span>
        <div className="h-px flex-1 bg-border-subtle" />
      </div>
    </div>
  );
}
