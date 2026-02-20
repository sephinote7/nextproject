'use client';

import { type HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 최대 너비 제한 없음: false 시 max-w 적용 */
  fullWidth?: boolean;
}

export function Container({
  className = '',
  fullWidth = true,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto px-[40px]',
        fullWidth ? 'max-w-[100%]' : 'max-w-[1440px]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
