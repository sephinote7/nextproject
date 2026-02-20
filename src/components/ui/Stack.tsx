'use client';

import { type HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
}

const gapMap = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

export function Stack({
  className = '',
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={[
        'flex',
        direction === 'column' ? 'flex-col' : 'flex-row',
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
