'use client';

import { type ReactNode } from 'react';
import { Avatar } from './Avatar';

/** 카드2: 이미지 카드. 상단 이미지 + 하단 흰색 오버레이(제목, 부제, 아바타). 4컬럼 그리드용 */
export interface Card2Item {
  /** 상단 이미지 URL */
  imageSrc: string;
  imageAlt: string;
  /** 오버레이 제목 */
  title: string;
  /** 오버레이 부제 (굵은 글씨) */
  subtitle?: string;
  /** 오버레이 하단 아바타 (이미지 URL 또는 이니셜용 alt) */
  avatars?: { src?: string | null; alt: string }[];
  href?: string;
}

export interface Card2Props {
  items: Card2Item[];
  className?: string;
}

export function Card2({ items, className = '' }: Card2Props) {
  return (
    <div
      className={[
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5',
        className,
      ].join(' ')}
      style={{ gap: 'var(--gutter)' }}
    >
      {items.map((item, i) => {
        const Wrapper = item.href ? 'a' : 'div';
        const wrapperProps = item.href
          ? { href: item.href, className: 'no-underline block h-full' }
          : { className: 'block h-full' };
        return (
          <article key={i} className="rounded-[var(--radius-small)] overflow-hidden bg-[var(--white100)] h-full">
            <Wrapper {...wrapperProps}>
              <div className="relative aspect-[3/4] min-h-[200px] bg-[var(--black10)]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 하단 흰색 오버레이 */}
                <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 p-4 rounded-[var(--radius-small)] bg-[var(--white100)] shadow-sm">
                  <h3 className="text-[16px] font-medium text-[var(--black100)] mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-[18px] font-bold text-[var(--black100)] mb-3">
                      {item.subtitle}
                    </p>
                  )}
                  {item.avatars && item.avatars.length > 0 && (
                    <div className="flex -space-x-2">
                      {item.avatars.map((av, j) => (
                        <Avatar
                          key={j}
                          src={av.src}
                          alt={av.alt}
                          size="sm"
                          className="ring-2 ring-[var(--white100)]"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Wrapper>
          </article>
        );
      })}
    </div>
  );
}
