'use client';

import { type HTMLAttributes } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: AlertVariant;
  title?: React.ReactNode;
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'bg-[var(--blue)]/10 border-[var(--blue)] text-[var(--black90)]',
  success: 'bg-[var(--green)]/10 border-[var(--green)] text-[var(--black90)]',
  warning: 'bg-[var(--primary)]/30 border-[var(--black60)] text-[var(--black90)]',
  error: 'bg-[var(--red)]/10 border-[var(--red)] text-[var(--black90)]',
};

export function Alert({
  className = '',
  variant = 'info',
  title,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={[
        'rounded-[var(--radius-small)] border px-4 py-3',
        variantStyles[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {title && <div className="font-semibold text-[16px] mb-1">{title}</div>}
      <div className="text-[15px]">{children}</div>
    </div>
  );
}
