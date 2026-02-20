'use client';

import { type ButtonHTMLAttributes } from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showPrevNext?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  showPrevNext = true,
}: PaginationProps) {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const buttonClass =
    'min-w-9 h-9 px-2 rounded-[var(--radius-small)] text-[16px] font-medium transition-[var(--transition-fast)] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-default';
  const numClass =
    'min-w-9 h-9 px-2 rounded-[var(--radius-small)] text-[16px] font-medium transition-[var(--transition-fast)] hover:bg-[var(--black20)] disabled:bg-transparent disabled:text-[var(--black40)] disabled:pointer-events-none';
  const activeClass = 'bg-[var(--black100)] text-[var(--white100)] hover:bg-[var(--black80)]';

  return (
    <nav
      className={['flex items-center justify-center gap-1', className].join(' ')}
      aria-label="페이지 네비게이션"
    >
      {showPrevNext && (
        <button
          type="button"
          className={buttonClass}
          disabled={prevDisabled}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="이전 페이지"
        >
          ‹
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          className={[numClass, page === currentPage ? activeClass : ''].join(' ')}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
          aria-label={`${page}페이지`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      {showPrevNext && (
        <button
          type="button"
          className={buttonClass}
          disabled={nextDisabled}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="다음 페이지"
        >
          ›
        </button>
      )}
    </nav>
  );
}
