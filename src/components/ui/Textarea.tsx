'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, fullWidth, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={[
          'min-h-[80px] px-3 py-2 text-[16px] rounded-[var(--radius-small)] border border-[var(--black35)] bg-[var(--white100)] text-[var(--black100)] resize-y',
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

Textarea.displayName = 'Textarea';
