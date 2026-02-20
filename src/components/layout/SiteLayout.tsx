'use client';

import Link from 'next/link';
import {
  Header,
  Footer,
  FooterTopButton,
} from '@/components/ui';
import { siteNav } from '@/config/site';
import { type ReactNode } from 'react';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--white100)] text-[var(--black100)]">
      <Header
        variant="solid"
        logo={
          <Link href="/" className="text-[16px] font-medium no-underline text-[var(--black100)]">
            kakaobank
          </Link>
        }
        links={siteNav.headerLinks}
        right={
          <span className="text-[14px] text-[var(--black100)]">
            <span className="font-medium">KR</span>
            <span className="text-[var(--black40)] mx-1">|</span>
            <span className="text-[var(--black50)]">EN</span>
          </span>
        }
      />
      <main className="flex-1">{children}</main>
      <Footer
        logo={<span className="text-[16px] font-bold text-[var(--black100)]">kakaobank</span>}
        sections={siteNav.footerSections}
        topButton={<FooterTopButton />}
        policyLinks={siteNav.policyLinks}
        certifications={[
          <div key="webtrust" className="w-[90px] h-[90px] rounded-[var(--radius-small)] bg-[var(--black20)] flex items-center justify-center text-[12px] text-[var(--black60)]">webTrust</div>,
          <div key="wa" className="w-[90px] h-[90px] rounded-[var(--radius-small)] bg-[var(--black20)] flex items-center justify-center text-[12px] text-[var(--black60)]">WEB 접근성</div>,
        ]}
        companyInfo={<span>{siteNav.companyInfo}</span>}
      />
    </div>
  );
}
