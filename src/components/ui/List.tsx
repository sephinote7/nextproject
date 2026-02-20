'use client';

import { type HTMLAttributes } from 'react';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  variant?: 'ul' | 'ol' | 'none';
}

export function List({
  className = '',
  variant = 'ul',
  children,
  ...props
}: ListProps) {
  const Component = variant === 'ol' ? 'ol' : 'ul';
  return (
    <Component
      className={[
        variant === 'none' ? 'list-none' : variant === 'ol' ? 'list-decimal' : 'list-disc',
        'pl-6 text-[var(--black100)] text-[16px]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ListItem({
  className = '',
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return <li className={['py-1', className].join(' ')} {...props} />;
}
