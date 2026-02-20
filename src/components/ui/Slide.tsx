'use client';

import { type ReactNode } from 'react';

export interface SlideProps {
  children: ReactNode;
  className?: string;
  /** 현재 활성 슬라이드 여부 (애니메이션용) */
  active?: boolean;
}

export function Slide({ children, className = '', active = true }: SlideProps) {
  return (
    <div
      className={[
        'w-full transition-[var(--transition-slow)]',
        active ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export interface SlidePanelProps {
  children: ReactNode;
  className?: string;
}

export function SlidePanel({ children, className = '' }: SlidePanelProps) {
  return (
    <div className={['relative overflow-hidden', className].join(' ')}>
      {children}
    </div>
  );
}
