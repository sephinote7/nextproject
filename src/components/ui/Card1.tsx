'use client';

import { type ReactNode } from 'react';

/** 카드1: 상단 콘텐츠 영역 + 하단 제목·화살표 버튼. 4컬럼 그리드용 */
export interface Card1Item {
  /** 카드 상단 영역 (차트, 이미지, 커스텀 등) */
  content: ReactNode;
  /** 하단 왼쪽 제목 */
  title: string;
  /** 링크 (화살표 클릭 시) */
  href?: string;
  /** 화살표 버튼 클릭 핸들러 (href 없을 때) */
  onAction?: () => void;
}

export interface Card1Props {
  items: Card1Item[];
  className?: string;
}

export function Card1({ items, className = '' }: Card1Props) {
  return (
    <div
      className={[
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5',
        className,
      ].join(' ')}
      style={{ gap: 'var(--gutter)' }}
    >
      {items.map((item, i) => (
        <article key={i} className="rounded-[var(--radius-small)] bg-[var(--white100)] overflow-hidden">
          <div className="aspect-[466/368] bg-[var(--black10)] flex items-center justify-center overflow-hidden">
            {item.content}
          </div>
          <div className="flex items-center justify-between px-4 py-4 border-t border-[var(--black20)]">
            <span className="text-[16px] font-semibold text-[var(--black100)]">
              {item.title}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-circle)] bg-[var(--white100)] border border-[var(--black25)] text-[var(--black100)] hover:bg-[var(--black5)] transition-[var(--transition-fast)]"
                aria-label={`${item.title} 더보기`}
              >
                <span className="text-[18px] leading-none" aria-hidden>→</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={item.onAction}
                className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-circle)] bg-[var(--white100)] border border-[var(--black25)] text-[var(--black100)] hover:bg-[var(--black5)] transition-[var(--transition-fast)]"
                aria-label={`${item.title} 더보기`}
              >
                <span className="text-[18px] leading-none" aria-hidden>→</span>
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
