'use client';

import { useState, type ReactNode } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const placementClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function Tooltip({
  content,
  children,
  placement = 'top',
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  return (
    <span className={['relative inline-block', className].join(' ')}>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="inline"
      >
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          className={[
            'absolute z-[100] px-2 py-1.5 text-[14px] text-[var(--white100)] bg-[var(--black90)] rounded-[var(--radius-small)] whitespace-nowrap',
            placementClasses[placement],
          ].join(' ')}
        >
          {content}
        </span>
      )}
    </span>
  );
}
