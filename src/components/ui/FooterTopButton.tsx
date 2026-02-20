'use client';

/** 푸터 우측 "맨 위로" 버튼 — 연한 회색 원형 + 위쪽 화살표 */
export function FooterTopButton({
  className = '',
  onClick,
  'aria-label': ariaLabel = '맨 위로',
}: {
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick ?? (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
      className={[
        'flex items-center justify-center w-12 h-12 rounded-[var(--radius-circle)]',
        'bg-[var(--black25)] text-[var(--black100)] hover:bg-[var(--black30)]',
        'transition-[var(--transition-fast)]',
        className,
      ].join(' ')}
      aria-label={ariaLabel}
    >
      <span className="text-[18px] leading-none" aria-hidden>↑</span>
    </button>
  );
}
