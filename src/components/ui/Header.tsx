'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Drawer, DrawerHeader, DrawerBody } from './Drawer';
import { type ReactNode } from 'react';

const linkClass = 'text-[14px] font-normal text-[var(--black100)] hover:text-[var(--black80)] no-underline whitespace-nowrap';
const linkClassMobile = 'block py-3 text-[16px] font-normal text-[var(--black100)] no-underline border-b border-[var(--black20)] last:border-b-0';

export interface HeaderLink {
  label: string;
  href?: string;
}

export interface HeaderProps {
  logo?: ReactNode;
  /** 메인 네비게이션 (가운데 정렬) */
  links?: readonly HeaderLink[];
  /** 우측 영역 (예: 언어 선택 KR | EN) */
  right?: ReactNode;
  className?: string;
  variant?: 'transparent' | 'solid';
}

function renderLink(link: HeaderLink) {
  if (!link.href) {
    return <span className="text-[14px] font-normal text-[var(--black100)] whitespace-nowrap">{link.label}</span>;
  }
  if (/^\/(?!\/)/.test(link.href)) {
    return <Link href={link.href} className={linkClass}>{link.label}</Link>;
  }
  return (
    <a href={link.href} className={linkClass} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {link.label}
    </a>
  );
}

function renderMobileLink(link: HeaderLink, onClose: () => void) {
  if (!link.href) {
    return <span className={linkClassMobile}>{link.label}</span>;
  }
  if (/^\/(?!\/)/.test(link.href)) {
    return (
      <Link key={link.label} href={link.href} className={linkClassMobile} onClick={onClose}>
        {link.label}
      </Link>
    );
  }
  return (
    <a key={link.label} href={link.href} className={linkClassMobile} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} onClick={onClose}>
      {link.label}
    </a>
  );
}

export function Header({
  logo,
  links,
  right,
  className = '',
  variant = 'solid',
}: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={[
          'h-[62px] relative z-[100] flex items-center px-4 md:px-[40px]',
          'border-b border-[var(--black20)]',
          variant === 'solid' ? 'bg-[var(--white100)]' : 'bg-transparent border-b-transparent',
          className,
        ].join(' ')}
      >
        <div className="absolute inset-0 flex items-center px-4 md:px-[40px]">
          <div className="flex-1 flex items-center justify-start min-w-0">
            {logo}
          </div>
          {/* 데스크톱: 가운데 메뉴 */}
          <div className="flex-1 hidden md:flex items-center justify-center min-w-0">
            {links && links.length > 0 && (
              <nav className="flex items-center justify-center gap-8" role="navigation">
                {links.map((link) => (
                  <span key={link.label}>{renderLink(link)}</span>
                ))}
              </nav>
            )}
          </div>
          <div className="flex-1 flex items-center justify-end min-w-0 gap-2">
            {/* 모바일: 햄버거 버튼 */}
            {links && links.length > 0 && (
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-small)] text-[var(--black100)] hover:bg-[var(--black10)] transition-[var(--transition-fast)]"
                aria-label="메뉴 열기"
                aria-expanded={drawerOpen}
              >
                <span className="sr-only">메뉴 열기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="currentColor" />
                </svg>
              </button>
            )}
            {right}
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} side="left">
        <DrawerHeader onClose={() => setDrawerOpen(false)}>
          <span className="text-[18px] font-semibold text-[var(--black100)]">메뉴</span>
        </DrawerHeader>
        <DrawerBody className="pt-0">
          <nav className="flex flex-col" role="navigation" aria-label="모바일 메뉴">
            {links?.map((link) => (
              <span key={link.label}>{renderMobileLink(link, () => setDrawerOpen(false))}</span>
            ))}
          </nav>
        </DrawerBody>
      </Drawer>
    </>
  );
}
