'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

// 8×8 dark-gray PNG stretched + blurred by Next.js as loading placeholder
const DEFAULT_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIUlEQVQoU2NkYGD4z8BQDwAIgAF/QualIQAAAABJRU5ErkJggg==';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

export default function FallbackImage({ src, alt, fill, sizes, className, priority, loading }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/55 backdrop-blur-sm border border-white/[0.05] rounded-lg p-6 text-center select-none pointer-events-none shadow-inner">
        <div className="w-10 h-10 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center">
          <ImageIcon size={18} className="text-accent/60" />
        </div>
        <div className="space-y-1">
          <span className="block font-mono text-[10px] text-accent tracking-widest uppercase">
            [ no image ]
          </span>
          <span className="block font-mono text-[9px] text-text-muted/65 truncate max-w-[200px] px-2">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  const imgElement = (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className ? `${className} relative z-10` : 'relative z-10'}
      priority={priority}
      loading={loading}
      placeholder="blur"
      blurDataURL={DEFAULT_BLUR}
      onError={() => setError(true)}
    />
  );

  const isContain = className?.includes('object-contain');

  if (fill && isContain) {
    return (
      <div className="absolute inset-0 select-none overflow-hidden rounded-lg">
        {/* Blurred background layer to adapt vertical/portrait images to horizontal/landscape layout */}
        <div className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-15 blur-lg scale-110">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={DEFAULT_BLUR}
          />
        </div>
        {imgElement}
      </div>
    );
  }

  return imgElement;
}
