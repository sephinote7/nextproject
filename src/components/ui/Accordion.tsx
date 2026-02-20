'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type AccordionMode = 'single' | 'multiple';

interface AccordionContextValue {
  mode: AccordionMode;
  open: string | string[];
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<string | null>(null);

export interface AccordionProps {
  type?: AccordionMode;
  defaultValue?: string | string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({
  type = 'single',
  defaultValue,
  children,
  className = '',
}: AccordionProps) {
  const [open, setOpen] = useState<string | string[]>(
    defaultValue ?? (type === 'multiple' ? [] : '')
  );
  const toggle = (value: string) => {
    setOpen((prev) => {
      if (type === 'single') return prev === value ? '' : value;
      const arr = Array.isArray(prev) ? prev : prev ? [prev] : [];
      return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
    });
  };
  return (
    <AccordionContext.Provider value={{ mode: type, open, toggle }}>
      <div className={['border border-[var(--black25)] rounded-[var(--radius-small)] divide-y divide-[var(--black20)]', className].join(' ')}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className = '' }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={className} data-value={value}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const ctx = useContext(AccordionContext);
  const value = useContext(AccordionItemContext);
  if (!ctx || value == null) return <button type="button" {...props}>{children}</button>;
  const item = ctx.open;
  const isOpen = Array.isArray(item) ? item.includes(value) : item === value;
  return (
    <button
      type="button"
      className={[
        'w-full flex items-center justify-between px-4 py-3 text-left text-[16px] font-medium text-[var(--black100)] hover:bg-[var(--black5)] transition-[var(--transition-fast)]',
        className,
      ].join(' ')}
      onClick={() => ctx.toggle(value)}
      aria-expanded={isOpen}
    >
      {children}
      <span className="text-[var(--black60)]" aria-hidden>{isOpen ? '▲' : '▼'}</span>
    </button>
  );
}

export interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ children, className = '' }: AccordionContentProps) {
  const ctx = useContext(AccordionContext);
  const value = useContext(AccordionItemContext);
  if (!ctx || value == null) return null;
  const item = ctx.open;
  const isOpen = Array.isArray(item) ? item.includes(value) : item === value;
  if (!isOpen) return null;
  return (
    <div className={['px-4 py-3 text-[var(--black70)] text-[15px] border-t border-[var(--black20)]', className].join(' ')}>
      {children}
    </div>
  );
}
