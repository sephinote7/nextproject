import Link from 'next/link';
import {
  Jumbotron,
  Container,
  Card1,
  Card2,
  Button,
  Stack,
} from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Jumbotron
        variant="default"
        title="간편하고 쉬운 뱅킹"
        subtitle="일상의 금융을 더 쉽고 편리하게, 카카오뱅크가 함께합니다."
      >
        <Link href="/company/intro">
          <Button variant="primary" size="lg">
            더 알아보기
          </Button>
        </Link>
      </Jumbotron>

      <Container className="py-16 md:py-24">
        <h2 className="text-[32px] font-bold tracking-[-0.64px] text-[var(--black100)] mb-10">
          투자정보
        </h2>
        <Card1
          items={[
            {
              content: (
                <div className="w-full h-full flex items-end p-4">
                  <div className="w-full h-24 rounded bg-[var(--black15)] flex items-end justify-around px-2 pb-2">
                    {[40, 65, 45, 80, 70].map((h, i) => (
                      <div key={i} className="w-4 rounded-t bg-[var(--green)]" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              ),
              title: '실적발표',
              href: '#',
            },
            {
              content: (
                <div className="w-full h-full bg-[var(--black25)] flex items-center justify-center text-[var(--black50)] text-[14px]">
                  이미지 영역
                </div>
              ),
              title: '경영공시',
              href: '#',
            },
            {
              content: (
                <div className="w-full h-full bg-[var(--green)]/20 flex items-center justify-center">
                  <span className="text-[24px] font-bold text-[var(--black90)]">AAA</span>
                  <span className="text-[14px] text-[var(--black70)] ml-2">ESG</span>
                </div>
              ),
              title: 'ESG',
              href: '#',
            },
            {
              content: (
                <div className="w-full h-full bg-[var(--black20)] flex items-center justify-center text-[var(--black60)] text-[14px]">
                  IR 자료
                </div>
              ),
              title: 'IR 자료실',
              href: '#',
            },
          ]}
        />
      </Container>

      <section className="bg-[var(--black5)] py-16 md:py-24">
        <Container>
          <h2 className="text-[32px] font-bold tracking-[-0.64px] text-[var(--black100)] mb-10">
            서비스 소개
          </h2>
          <Card2
            items={[
              {
                imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
                imageAlt: '함께하는 사람들',
                title: '러닝모임통장',
                subtitle: '매월 20일 5만원씩',
                avatars: [{ src: null, alt: 'A' }, { src: null, alt: 'B' }, { src: null, alt: 'C' }],
                href: '#',
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
                imageAlt: '오피스',
                title: '함께하는 통장',
                subtitle: '매주 1만원씩 모아요',
                avatars: [{ src: null, alt: 'U1' }, { src: null, alt: 'U2' }],
                href: '#',
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400',
                imageAlt: '팀워크',
                title: '목표저축',
                subtitle: '목표 금액까지 자동 이체',
                href: '#',
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
                imageAlt: '비즈니스',
                title: '기업 금융',
                subtitle: '사업자 전용 상품',
                avatars: [{ src: null, alt: 'Biz' }],
                href: '#',
              },
            ]}
          />
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <Stack gap="lg" align="center" className="text-center">
          <h2 className="text-[32px] font-bold tracking-[-0.64px] text-[var(--black100)]">
            카카오뱅크와 함께하세요
          </h2>
          <p className="text-[18px] text-[var(--black70)] max-w-xl">
            더 많은 서비스와 소식을 만나보세요.
          </p>
          <Link href="/company/intro">
            <Button variant="primary" size="lg">
              회사 소개 보기
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}
