'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-alt/60 backdrop-blur-[2px] border border-border-subtle/40 rounded p-4 text-center select-none pointer-events-none">
        <ImageIcon size={20} className="text-text-muted/30" />
        <span className="font-mono text-[9px] text-text-muted/50 tracking-wider uppercase truncate max-w-full px-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      loading={loading}
      onError={() => setError(true)}
    />
  );
}
