'use client';

import { type ReactNode } from 'react';

export interface FooterSection {
  title: string;
  links: readonly { label: string; href?: string }[];
}

export interface FooterProps {
  /** 좌측 로고 */
  logo?: ReactNode;
  sections?: readonly FooterSection[];
  /** 우측 맨 위로 버튼 */
  topButton?: ReactNode;
  certifications?: ReactNode[];
  policyLinks?: readonly { label: string; href?: string }[];
  /** 하단 회사 정보 (저작권, 사업자번호 등) */
  companyInfo?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Footer({
  logo,
  sections,
  topButton,
  certifications,
  policyLinks,
  companyInfo,
  children,
  className = '',
}: FooterProps) {
  return (
    <footer
      className={[
        'bg-[var(--color-footer-bg)] text-[var(--black100)] text-[16px] pt-20 pb-10',
        className,
      ].join(' ')}
    >
      <div className="px-[40px] max-w-[100%] mx-auto">
        {children}

        {/* 상단: 로고 | 3단 링크 | 맨위로 버튼 */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
          {logo && (
            <div className="md:min-w-[120px]">
              {logo}
            </div>
          )}
          {sections && sections.length > 0 && (
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h3 className="text-[16px] font-semibold text-[var(--black100)] mb-4">
                    {sec.title}
                  </h3>
                  <ul className="list-none m-0 p-0 flex flex-col">
                    {sec.links.map((link) => (
                      <li key={link.label} className="py-[20px] border-b border-[var(--black20)] last:border-b-0">
                        {link.href ? (
                          <a
                            href={link.href}
                            className="text-[14px] text-[var(--black100)] hover:text-[var(--black80)] no-underline"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <span className="text-[14px] text-[var(--black100)]">{link.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {topButton && (
            <div className="flex md:justify-end md:min-w-[80px]">
              {topButton}
            </div>
          )}
        </div>

        {/* 약관 링크 (세로 구분선) */}
        {policyLinks && policyLinks.length > 0 && (
          <ul className="list-none m-0 p-0 flex flex-wrap items-center gap-0 text-[14px] text-[var(--black60)] mb-8">
            {policyLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                {i > 0 && <span className="px-2 text-[var(--black40)]" aria-hidden>|</span>}
                {link.href ? (
                  <a href={link.href} className="hover:text-[var(--black100)] no-underline">
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* 하단: 인증 로고 | 회사 정보 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[var(--black20)]">
          {certifications && certifications.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {certifications}
            </div>
          )}
          {companyInfo && (
            <div className="text-[14px] text-[var(--black60)]">
              {companyInfo}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
