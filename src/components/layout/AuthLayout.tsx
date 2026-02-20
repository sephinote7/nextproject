'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

const features = [
  { label: '간편송금', color: 'bg-[var(--blue)]' },
  { label: '예적금', color: 'bg-[var(--green)]' },
  { label: '대출', color: 'bg-[var(--primary)]' },
];

export function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* 좌측: 브랜딩 패널 (다크) */}
      <aside className="w-full md:w-[45%] lg:w-[50%] min-h-[40vh] md:min-h-screen bg-[var(--black90)] text-[var(--white100)] flex flex-col p-8 md:p-12">
        <Link href="/" className="text-[18px] font-semibold no-underline text-[var(--white100)] mb-auto pt-4">
          kakaobank
        </Link>
        <div className="py-12">
          <h1 className="text-[28px] md:text-[36px] font-bold leading-tight mb-4">
            Manage your
            <br />
            <span className="text-[var(--primary)]">Digital Banking</span>
          </h1>
          <p className="text-[16px] text-[var(--white40)] max-w-sm mb-8">
            일상의 금융을 더 쉽고 편리하게, 카카오뱅크가 함께합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--white20)] text-[14px]"
              >
                <span className={`w-2 h-2 rounded-full ${f.color}`} aria-hidden />
                {f.label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-[var(--white20)]">
          <span className="text-[13px] text-[var(--white40)]">
            © {new Date().getFullYear()} 카카오뱅크. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="text-[var(--white40)] hover:text-[var(--white100)]" aria-label="Twitter">
              <span className="text-[14px]">𝕏</span>
            </a>
            <a href="#" className="text-[var(--white40)] hover:text-[var(--white100)]" aria-label="GitHub">
              <span className="text-[14px]">GitHub</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 우측: 폼 영역 */}
      <div className="flex-1 min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-[var(--white100)] relative">
        {title && (
          <div className="w-full max-w-md mb-6">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[var(--black100)]">{title}</h2>
            {subtitle && (
              <p className="text-[15px] text-[var(--black60)] mt-1">{subtitle}</p>
            )}
          </div>
        )}
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
