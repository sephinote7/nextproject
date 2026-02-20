'use client';

import { type HTMLAttributes } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  vertical?: boolean;
}

export function Divider({
  className = '',
  vertical,
  ...props
}: DividerProps) {
  if (vertical) {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={['w-px self-stretch bg-[var(--color-border-divider)]', className].join(' ')}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      />
    );
  }
  return (
    <hr
      className={['border-0 h-px bg-[var(--color-border-divider)]', className].join(' ')}
      {...props}
    />
  );
}
