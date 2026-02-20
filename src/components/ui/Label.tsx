'use client';

import { type LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({ className = '', required, children, ...props }: LabelProps) {
  return (
    <label
      className={[
        'block text-[16px] font-medium text-[var(--black100)]',
        required ? "after:content-['*'] after:text-[var(--red)] after:ml-0.5" : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </label>
  );
}
