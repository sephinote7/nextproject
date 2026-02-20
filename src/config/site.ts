/**
 * 사이트 공통 설정 — 헤더/푸터 네비게이션, 링크
 */

export const siteNav = {
  headerLinks: [
    { label: '소개', href: '/company/intro' },
    { label: '서비스', href: '/service' },
    { label: 'ESG', href: '/esg' },
    { label: '미디어', href: '/media' },
    { label: '투자정보', href: '/invest' },
    { label: '고객센터', href: '/support' },
    { label: '인재영입', href: '/careers' },
  ] as const,
  footerSections: [
    {
      title: '비즈니스',
      links: [
        { label: '카카오뱅크 AD', href: '#' },
        { label: '카카오뱅크 인증서', href: '#' },
        { label: '제휴문의', href: '#' },
      ],
    },
    {
      title: '기술',
      links: [
        { label: '금융기술연구소', href: '#' },
        { label: '기술블로그', href: '#' },
      ],
    },
    {
      title: '새소식',
      links: [
        { label: '블로그', href: '#' },
        { label: '인스타그램', href: '#' },
        { label: '유튜브', href: '#' },
        { label: '페이스북', href: '#' },
        { label: '브런치', href: '#' },
      ],
    },
  ] as const,
  policyLinks: [
    { label: '모바일뱅킹 서비스 이용약관', href: '#' },
    { label: '전자금융거래 기본약관', href: '#' },
    { label: '개인정보처리방침', href: '#' },
    { label: '위치기반 서비스 이용약관', href: '#' },
  ] as const,
  companyInfo: '(주)카카오뱅크 윤호영 사업자번호 375-88-00197 1599-3333 © KakaoBank Corp.',
} as const;
