'use client';

import { type HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const gapMap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-5', /* 20px = var(--gutter) */
  lg: 'gap-8',
};

export function Grid({
  className = '',
  cols = 12,
  gap = 'md',
  children,
  ...props
}: GridProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };
  return (
    <div
      className={['grid', colsClass[cols], gapMap[gap], className].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
