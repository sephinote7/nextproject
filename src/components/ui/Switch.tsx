'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = '', label, id: idProp, checked, ...props }, ref) => {
    const id = idProp ?? `switch-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label
        htmlFor={id}
        className={[
          'inline-flex items-center gap-2 cursor-pointer text-[var(--black100)] text-[16px]',
          className,
        ].join(' ')}
      >
        <span className="relative inline-block w-10 h-6 rounded-full bg-[var(--black30)] transition-[var(--transition-fast)] has-[:checked]:bg-[var(--primary)]">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            role="switch"
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <span className="absolute left-0.5 top-0.5 w-5 h-5 rounded-[var(--radius-circle)] bg-[var(--white100)] shadow transition-[var(--transition-fast)] peer-checked:left-[18px]" />
        </span>
        {label != null && <span>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
