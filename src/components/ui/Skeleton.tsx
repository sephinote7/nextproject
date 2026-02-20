'use client';

import { type HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className = '',
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={['rounded-[var(--radius-small)] bg-[var(--black20)] animate-pulse', className].join(' ')}
      style={{ width, height, ...style }}
      aria-hidden
      {...props}
    />
  );
}
