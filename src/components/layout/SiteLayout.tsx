'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Header,
  Footer,
  FooterTopButton,
  Button,
} from '@/components/ui';
import { siteNav } from '@/config/site';
import { useAuth } from '@/lib/supabase/auth-context';
import { supabase } from '@/lib/supabase/client';
import { type ReactNode } from 'react';

export function SiteLayout({ children }: { children: ReactNode }) {
  const { session, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  const headerRight = isLoading ? (
    <span className="text-[14px] text-[var(--black50)]">...</span>
  ) : session ? (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      className="text-[14px]"
    >
      Logout
    </Button>
  ) : (
    <Link
      href="/login"
      className="text-[14px] font-medium text-[var(--black100)] hover:text-[var(--black80)] no-underline"
    >
      Login
    </Link>
  );

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
        right={headerRight}
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
