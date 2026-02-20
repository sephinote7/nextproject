'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  options: RadioOption[];
  name: string;
  error?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', options, name, error, ...props }, ref) => {
    return (
      <div className={['flex flex-col gap-2', className].join(' ')} role="radiogroup">
        {options.map((opt) => {
          const id = `radio-${name}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className="inline-flex items-center gap-2 cursor-pointer text-[var(--black100)] text-[16px]"
            >
              <input
                ref={ref}
                type="radio"
                id={id}
                name={name}
                value={opt.value}
                disabled={opt.disabled}
                className={[
                  'w-4 h-4 border-2 border-[var(--black35)] text-[var(--primary)]',
                  'focus:ring-2 focus:ring-[var(--color-focus-outline)] focus:ring-offset-0',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  error ? 'border-[var(--red)]' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                {...props}
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
