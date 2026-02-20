'use client';

import { type ReactNode } from 'react';

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  header?: ReactNode;
  className?: string;
}

export function Sidebar({ items, header, className = '' }: SidebarProps) {
  return (
    <aside
      className={[
        'w-56 min-h-full bg-[var(--black5)] border-r border-[var(--black20)] flex flex-col',
        className,
      ].join(' ')}
    >
      {header && <div className="p-4 border-b border-[var(--black20)]">{header}</div>}
      <nav className="flex-1 p-2">
        <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
          {items.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  className={[
                    'flex items-center gap-2 px-3 py-2 rounded-[var(--radius-small)] text-[16px] no-underline transition-[var(--transition-fast)]',
                    item.active
                      ? 'bg-[var(--black20)] text-[var(--black100)] font-medium'
                      : 'text-[var(--black70)] hover:bg-[var(--black10)] hover:text-[var(--black100)]',
                  ].join(' ')}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span
                  className={[
                    'flex items-center gap-2 px-3 py-2 rounded-[var(--radius-small)] text-[16px]',
                    item.active ? 'font-medium text-[var(--black100)]' : 'text-[var(--black70)]',
                  ].join(' ')}
                >
                  {item.icon}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
