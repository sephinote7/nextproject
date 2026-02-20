'use client';

import { type SVGAttributes } from 'react';

export type IconSize = 16 | 20 | 24 | 32;

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  /** 아이콘 래퍼로 사용 시 정렬용 (center, va-center 등) */
  wrapperClassName?: string;
  children: React.ReactNode;
}

export function Icon({
  className = '',
  size = 24,
  wrapperClassName,
  children,
  ...props
}: IconProps) {
  const svg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={['shrink-0', className].join(' ')}
      {...props}
    >
      {children}
    </svg>
  );
  if (wrapperClassName) {
    return (
      <div
        className={[
          'inline-flex items-center justify-center',
          wrapperClassName,
        ].join(' ')}
        style={{ width: size, height: size }}
      >
        {svg}
      </div>
    );
  }
  return svg;
}
