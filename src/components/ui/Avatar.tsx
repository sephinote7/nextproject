'use client';

import { type ImgHTMLAttributes } from 'react';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | null;
  alt: string;
  size?: AvatarSize;
  fallback?: string; // 이니셜 등
}

const sizeMap: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
};

export function Avatar({
  className = '',
  src,
  alt,
  size = 'md',
  fallback,
  ...props
}: AvatarProps) {
  const sizeClass = sizeMap[size];
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={[
          'rounded-[var(--radius-circle)] object-cover bg-[var(--black20)]',
          sizeClass,
          className,
        ].join(' ')}
        {...props}
      />
    );
  }
  return (
    <span
      className={[
        'inline-flex items-center justify-center rounded-[var(--radius-circle)] bg-[var(--black30)] text-[var(--black80)] font-semibold',
        sizeClass,
        className,
      ].join(' ')}
      aria-label={alt}
    >
      {fallback ?? alt.slice(0, 1).toUpperCase()}
    </span>
  );
}
