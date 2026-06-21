'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export default function FallbackImage({ src, alt, fill, sizes, className, priority }: Props) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => setHidden(true)}
    />
  );
}
