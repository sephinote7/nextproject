import {
  Container,
  Breadcrumb,
  Jumbotron,
  Stack,
  Divider,
  Card,
  CardBody,
  Grid,
} from '@/components/ui';

export const metadata = {
  title: '소개 | 카카오뱅크',
  description: '카카오뱅크 회사 소개',
};

export default function CompanyIntroPage() {
  return (
    <>
      <Container className="pt-8 pb-4">
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '회사', href: '/company' },
            { label: '소개' },
          ]}
        />
      </Container>

      <Jumbotron
        variant="default"
        title="회사 소개"
        subtitle="일상의 금융을 바꾸는 디지털 금융 서비스를 제공합니다."
      />

      <Container className="py-16 md:py-24">
        <Stack gap="lg">
          <section>
            <h2 className="text-[26px] font-semibold text-[var(--black100)] mb-4">
              비전
            </h2>
            <p className="text-[18px] text-[var(--black70)] leading-relaxed max-w-3xl">
              카카오뱅크는 누구나 쉽고 편리하게 이용할 수 있는 디지털 뱅킹 서비스를 지향합니다.
              기술과 금융의 결합을 통해 고객의 일상에 더 가까이 다가가겠습니다.
            </p>
          </section>

          <Divider />

          <section>
            <h2 className="text-[26px] font-semibold text-[var(--black100)] mb-6">
              주요 연혁
            </h2>
            <Grid cols={1} gap="md">
              <Card variant="outline">
                <CardBody>
                  <Stack gap="sm">
                    <p className="text-[16px] font-semibold text-[var(--black100)]">2017년</p>
                    <p className="text-[16px] text-[var(--black70)]">
                      카카오뱅크 서비스 오픈. 간편한 계좌 개설과 이체 서비스로 이용자 수 급증.
                    </p>
                  </Stack>
                </CardBody>
              </Card>
              <Card variant="outline">
                <CardBody>
                  <Stack gap="sm">
                    <p className="text-[16px] font-semibold text-[var(--black100)]">2019년</p>
                    <p className="text-[16px] text-[var(--black70)]">
                      대출·예금·펀드 등 금융 상품 확대. 1천만 계좌 돌파.
                    </p>
                  </Stack>
                </CardBody>
              </Card>
              <Card variant="outline">
                <CardBody>
                  <Stack gap="sm">
                    <p className="text-[16px] font-semibold text-[var(--black100)]">2024년</p>
                    <p className="text-[16px] text-[var(--black70)]">
                      기업 금융·ESG 경영 강화. 금융 기술 연구소 설립.
                    </p>
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          </section>

          <Divider />

          <section>
            <h2 className="text-[26px] font-semibold text-[var(--black100)] mb-4">
              오시는 길
            </h2>
            <Card variant="outline">
              <CardBody>
                <p className="text-[16px] text-[var(--black70)]">
                  (주)카카오뱅크 | 서울특별시 강남구 테헤란로 152 (역삼동, 강남파이낸스센터)
                </p>
                <p className="text-[16px] text-[var(--black70)] mt-2">
                  고객센터 1599-3333
                </p>
              </CardBody>
            </Card>
          </section>
        </Stack>
      </Container>
    </>
  );
}
