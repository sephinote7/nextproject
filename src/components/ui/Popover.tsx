'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';

export interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const placementClasses = {
  top: 'bottom-full left-0 mb-2',
  bottom: 'top-full left-0 mt-2',
  left: 'right-full top-0 mr-2',
  right: 'left-full top-0 ml-2',
};

export function Popover({
  trigger,
  content,
  placement = 'bottom',
  className = '',
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className={['relative inline-block', className].join(' ')}>
      <span onClick={() => setOpen((v) => !v)} className="cursor-pointer inline-block">
        {trigger}
      </span>
      {open && (
        <div
          className={[
            'absolute z-[100] min-w-[160px] py-2 rounded-[var(--radius-small)] bg-[var(--white100)] border border-[var(--black25)] shadow-lg',
            placementClasses[placement],
          ].join(' ')}
        >
          {content}
        </div>
      )}
    </div>
  );
}
