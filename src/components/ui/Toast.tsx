'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';

export interface ToastItem {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toasts: ToastItem[];
  add: (message: string, options?: { variant?: ToastVariant; duration?: number }) => void;
  remove: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const variantStyles: Record<ToastVariant, string> = {
  default: 'bg-[var(--black90)] text-[var(--white100)]',
  success: 'bg-[var(--green)] text-[var(--white100)]',
  error: 'bg-[var(--red)] text-[var(--white100)]',
  warning: 'bg-[var(--primary)] text-[var(--black100)]',
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const add = useCallback(
    (message: string, options?: { variant?: ToastVariant; duration?: number }) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      const duration = options?.duration ?? 3000;
      setToasts((prev) => [...prev, { id, message, variant: options?.variant ?? 'default', duration }]);
      if (duration > 0) {
        setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
      }
    },
    []
  );
  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ toasts, add, remove }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function ToastContainer() {
  const ctx = useContext(ToastContext);
  if (!ctx) return null;
  return (
    <div className="fixed bottom-4 right-4 z-[1100] flex flex-col gap-2 max-w-sm">
      {ctx.toasts.map((t) => (
        <div
          key={t.id}
          className={[
            'px-4 py-3 rounded-[var(--radius-small)] text-[14px] shadow-lg flex items-center justify-between gap-3',
            variantStyles[t.variant ?? 'default'],
          ].join(' ')}
        >
          <span>{t.message}</span>
          <button
            type="button"
            onClick={() => ctx.remove(t.id)}
            className="opacity-80 hover:opacity-100"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
