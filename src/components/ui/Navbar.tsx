'use client';

import { type ReactNode } from 'react';

export interface NavbarLink {
  label: string;
  href?: string;
  children?: NavbarLink[];
}

export interface NavbarProps {
  logo?: ReactNode;
  links?: NavbarLink[];
  right?: ReactNode;
  className?: string;
}

export function Navbar({ logo, links, right, className = '' }: NavbarProps) {
  return (
    <nav
      className={[
        'h-[62px] flex items-center justify-between bg-transparent text-[var(--black100)] text-[14px] font-normal',
        className,
      ].join(' ')}
      role="navigation"
    >
      {logo && <div className="flex items-center">{logo}</div>}
      {links && links.length > 0 && (
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  className="text-[var(--black100)] hover:text-[var(--black80)] no-underline"
                >
                  {link.label}
                </a>
              ) : (
                <span className="text-[var(--black100)]">{link.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
      {right && <div className="flex items-center">{right}</div>}
    </nav>
  );
}
