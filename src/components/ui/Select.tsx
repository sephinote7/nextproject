'use client';

import { forwardRef, type SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className = '',
      options,
      placeholder,
      error,
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={[
          'h-10 px-3 text-[16px] rounded-[var(--radius-small)] border border-[var(--black35)] bg-[var(--white100)] text-[var(--black100)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-outline)] focus:border-transparent',
          'disabled:bg-[var(--black10)] disabled:cursor-not-allowed disabled:opacity-70',
          error ? 'border-[var(--red)] focus:ring-[var(--red)]' : '',
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
