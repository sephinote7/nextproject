'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, fullWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={[
          'h-10 px-3 text-[16px] rounded-[var(--radius-small)] border border-[var(--black35)] bg-[var(--white100)] text-[var(--black100)]',
          'placeholder:text-[var(--black50)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-outline)] focus:border-transparent',
          'disabled:bg-[var(--black10)] disabled:cursor-not-allowed disabled:opacity-70',
          error ? 'border-[var(--red)] focus:ring-[var(--red)]' : '',
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
