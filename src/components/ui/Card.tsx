'use client';

import { type HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outline' | 'flat';
}

export function Card({
  className = '',
  variant = 'flat',
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    flat: 'bg-[var(--white100)]',
    outline: 'bg-[var(--white100)] border border-[var(--black25)]',
    elevated: 'bg-[var(--white100)] shadow-md',
  };
  return (
    <div
      className={[
        'rounded-[var(--radius-small)]',
        variantStyles[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4 border-b border-[var(--black20)]', className].join(' ')} {...props} />;
}

export function CardBody({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4', className].join(' ')} {...props} />;
}

export function CardFooter({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4 border-t border-[var(--black20)]', className].join(' ')} {...props} />;
}
