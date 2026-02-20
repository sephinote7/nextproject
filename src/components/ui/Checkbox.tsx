'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, error, id: idProp, ...props }, ref) => {
    const id = idProp ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label
        htmlFor={id}
        className={[
          'inline-flex items-center gap-2 cursor-pointer text-[var(--black100)] text-[16px]',
          className,
        ].join(' ')}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={[
            'w-4 h-4 rounded border-2 border-[var(--black35)] text-[var(--primary)]',
            'focus:ring-2 focus:ring-[var(--color-focus-outline)] focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'border-[var(--red)]' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {label != null && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
