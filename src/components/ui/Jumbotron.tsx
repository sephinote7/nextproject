'use client';

import { type ReactNode } from 'react';

export interface JumbotronProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** 배경: 기본 연한 회색 */
  variant?: 'default' | 'primary' | 'dark';
}

const variantStyles = {
  default: 'bg-[var(--color-bg-light)] text-[var(--black100)]',
  primary: 'bg-[var(--primary)] text-[var(--black100)]',
  dark: 'bg-[var(--black90)] text-[var(--white100)]',
};

export function Jumbotron({
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
}: JumbotronProps) {
  return (
    <section
      className={[
        'py-16 md:py-24 px-[40px]',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      <div className="max-w-[1440px] mx-auto">
        {title && (
          <h2 className="text-[32px] font-bold leading-[43.52px] tracking-[-0.64px] mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-[18px] text-[var(--black70)] mb-6 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
