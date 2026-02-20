'use client';

import { useEffect, type ReactNode } from 'react';

export type DrawerSide = 'left' | 'right';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  children: ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
}

export function Drawer({
  open,
  onClose,
  side = 'right',
  children,
  className = '',
  closeOnOverlayClick = true,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const positionClass = side === 'right' ? 'right-0' : 'left-0';
  const translateClass = side === 'right' ? 'translate-x-0' : 'translate-x-0';

  return (
    <div className="fixed inset-0 z-[1000]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-[var(--color-overlay)] transition-opacity"
        aria-hidden
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className={[
          'absolute top-0 bottom-0 w-full max-w-sm bg-[var(--white100)] shadow-lg overflow-auto transition-transform duration-300',
          positionClass,
          translateClass,
          className,
        ].join(' ')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function DrawerHeader({
  className = '',
  onClose,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }) {
  return (
    <div
      className={['flex items-center justify-between p-4 border-b border-[var(--black20)]', className].join(' ')}
      {...props}
    >
      {props.children}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded hover:bg-[var(--black10)]"
          aria-label="닫기"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export function DrawerBody({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4', className].join(' ')} {...props} />;
}
