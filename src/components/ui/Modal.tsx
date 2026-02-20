'use client';

import { useEffect, type ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
  /** 접근성: 모달 제목 (aria-labelledby와 연결 권장) */
  'aria-labelledby'?: string;
}

export function Modal({
  open,
  onClose,
  children,
  className = '',
  closeOnOverlayClick = true,
  'aria-labelledby': ariaLabelledBy,
}: ModalProps) {
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

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
    >
      <div
        className="absolute inset-0 bg-[var(--color-overlay)]"
        aria-hidden
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className={[
          'relative z-10 w-full max-w-lg rounded-[var(--radius-small)] bg-[var(--white100)] shadow-lg max-h-[90vh] overflow-auto',
          className,
        ].join(' ')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({
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
          className="p-1 rounded hover:bg-[var(--black10)] text-[var(--black70)]"
          aria-label="닫기"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export function ModalBody({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4', className].join(' ')} {...props} />;
}

export function ModalFooter({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={['flex justify-end gap-2 p-4 border-t border-[var(--black20)]', className].join(' ')}
      {...props}
    />
  );
}
