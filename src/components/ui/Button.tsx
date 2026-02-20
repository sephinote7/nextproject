'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--black100)] text-[var(--white100)] hover:bg-[var(--black80)] border-0',
  ghost: 'bg-transparent text-[var(--black100)] hover:bg-[var(--black10)] border-0',
  outline: 'bg-transparent text-[var(--black100)] border border-[var(--black35)] hover:border-[var(--black60)]',
  secondary: 'bg-[var(--black10)] text-[var(--black100)] hover:bg-[var(--black20)] border-0',
  danger: 'bg-[var(--red)] text-[var(--white100)] hover:opacity-90 border-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[14px] rounded-[var(--radius-small)]',
  md: 'px-[18px] py-[9.5px] text-[15px] font-semibold rounded-[var(--radius-small)]',
  lg: 'px-6 py-3 text-[16px] font-semibold rounded-[var(--radius-small)]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      fullWidth,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={[
          'inline-flex items-center justify-center transition-[var(--transition-fast)] disabled:opacity-50 disabled:cursor-default',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
