'use client';

import { type HTMLAttributes } from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'danger' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--black20)] text-[var(--black100)]',
  primary: 'bg-[var(--primary)] text-[var(--black100)]',
  success: 'bg-[var(--green)] text-[var(--white100)]',
  danger: 'bg-[var(--red)] text-[var(--white100)]',
  outline: 'bg-transparent border border-[var(--black35)] text-[var(--black100)]',
};

export function Badge({
  className = '',
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-[var(--radius-small)]',
        size === 'sm' ? 'px-1.5 py-0 text-[12px]' : 'px-2 py-0.5 text-[14px]',
        variantStyles[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}
