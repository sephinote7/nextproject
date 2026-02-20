'use client';

import { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Label,
  Badge,
  Avatar,
  Icon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Card1,
  Card2,
  List,
  ListItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Drawer,
  DrawerHeader,
  DrawerBody,
  Tooltip,
  Popover,
  ToastProvider,
  useToast,
  Alert,
  Sidebar,
  Breadcrumb,
  Container,
  Grid,
  Stack,
  Divider,
  Skeleton,
  Slide,
  SlidePanel,
  Jumbotron,
} from '@/components/ui';

function DemoContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);
  const toast = useToast();

  return (
    <div className="bg-[var(--white100)] text-[var(--black100)]">
      <Jumbotron
        title="UI 컴포넌트 데모"
        subtitle="JSON 테마 기반으로 구현된 Button, Input, Card, Modal 등 모든 컴포넌트를 확인할 수 있습니다."
      />

      <Container className="pb-20">
        <Breadcrumb
          items={[
            { label: '홈', href: '/' },
            { label: '데모', href: '/demo' },
            { label: '컴포넌트' },
          ]}
          className="mb-8"
        />

        <Grid cols={1} gap="lg">
          {/* Buttons */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Button</h2>
            <Stack direction="row" gap="md" align="center">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </Stack>
          </section>
          <Divider />

          {/* Form controls */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Form</h2>
            <Grid cols={2} gap="md">
              <Stack gap="md">
                <Label htmlFor="input-demo">Input</Label>
                <Input id="input-demo" placeholder="입력하세요" fullWidth />
                <Label htmlFor="textarea-demo">Textarea</Label>
                <Textarea id="textarea-demo" placeholder="여러 줄 입력" fullWidth />
                <Label>Select</Label>
                <Select
                  options={[
                    { value: 'a', label: '옵션 A' },
                    { value: 'b', label: '옵션 B' },
                  ]}
                  placeholder="선택"
                  fullWidth
                />
                <Checkbox label="체크박스" />
                <Switch label="스위치" />
              </Stack>
              <Stack gap="md">
                <Label>Radio</Label>
                <Radio
                  name="demo-radio"
                  options={[
                    { value: '1', label: '옵션 1' },
                    { value: '2', label: '옵션 2' },
                  ]}
                />
              </Stack>
            </Grid>
          </section>
          <Divider />

          {/* Badge, Avatar, Icon */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Badge, Avatar, Icon</h2>
            <Stack direction="row" gap="md" align="center">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Avatar alt="User" fallback="U" size="md" />
              <Avatar alt="A" src={null} size="lg" />
              <Icon size={24}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </Icon>
            </Stack>
          </section>
          <Divider />

          {/* Card */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Card</h2>
            <Grid cols={3} gap="md">
              <Card variant="flat">
                <CardHeader>카드 제목</CardHeader>
                <CardBody>카드 본문입니다. 테마 기반 스타일이 적용됩니다.</CardBody>
                <CardFooter>
                  <Button size="sm">확인</Button>
                </CardFooter>
              </Card>
              <Card variant="outline">
                <CardBody>Outline 카드</CardBody>
              </Card>
              <Card variant="elevated">
                <CardBody>Elevated 카드</CardBody>
              </Card>
            </Grid>
          </section>
          <Divider />

          {/* Card1 — 4컬럼 (제목 + 화살표) */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Card1 (4컬럼)</h2>
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
                      카드 4
                    </div>
                  ),
                  title: '추가 메뉴',
                  href: '#',
                },
              ]}
            />
          </section>
          <Divider />

          {/* Card2 — 이미지 카드 4컬럼 */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Card2 이미지 카드 (4컬럼)</h2>
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
          </section>
          <Divider />

          {/* List */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">List</h2>
            <List>
              <ListItem>목록 항목 1</ListItem>
              <ListItem>목록 항목 2</ListItem>
              <ListItem>목록 항목 3</ListItem>
            </List>
          </section>
          <Divider />

          {/* Table */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Table</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell header>이름</TableCell>
                  <TableCell header>상태</TableCell>
                  <TableCell header>비고</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>항목 1</TableCell>
                  <TableCell><Badge variant="success">완료</Badge></TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>항목 2</TableCell>
                  <TableCell><Badge variant="primary">진행</Badge></TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          <Divider />

          {/* Pagination */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Pagination</h2>
            <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
          </section>
          <Divider />

          {/* Tabs */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Tabs</h2>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">탭 1</TabsTrigger>
                <TabsTrigger value="tab2">탭 2</TabsTrigger>
                <TabsTrigger value="tab3">탭 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">탭 1 콘텐츠</TabsContent>
              <TabsContent value="tab2">탭 2 콘텐츠</TabsContent>
              <TabsContent value="tab3">탭 3 콘텐츠</TabsContent>
            </Tabs>
          </section>
          <Divider />

          {/* Accordion */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Accordion</h2>
            <Accordion type="single" defaultValue="a">
              <AccordionItem value="a">
                <AccordionTrigger>제목 A</AccordionTrigger>
                <AccordionContent>내용 A입니다.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>제목 B</AccordionTrigger>
                <AccordionContent>내용 B입니다.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <Divider />

          {/* Modal, Drawer, Toast */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Modal, Drawer, Toast</h2>
            <Stack direction="row" gap="md">
              <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
              <Button variant="ghost" onClick={() => setDrawerOpen(true)}>드로어 열기</Button>
              <Button
                variant="secondary"
                onClick={() => toast.add('토스트 메시지입니다.', { variant: 'success' })}
              >
                토스트 (Success)
              </Button>
              <Tooltip content="툴팁 텍스트">
                <Button variant="outline">툴팁</Button>
              </Tooltip>
              <Popover
                trigger={<Button variant="outline">팝오버</Button>}
                content={
                  <div className="p-2">
                    <button type="button" className="block w-full text-left py-1 px-2 hover:bg-[var(--black10)] rounded">
                      메뉴 1
                    </button>
                    <button type="button" className="block w-full text-left py-1 px-2 hover:bg-[var(--black10)] rounded">
                      메뉴 2
                    </button>
                  </div>
                }
              />
            </Stack>
          </section>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="modal-title">
            <ModalHeader onClose={() => setModalOpen(false)}>
              <h3 id="modal-title" className="text-[20px] font-semibold">모달 제목</h3>
            </ModalHeader>
            <ModalBody>모달 본문입니다. 테마의 z-index, backdrop이 적용됩니다.</ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>취소</Button>
              <Button onClick={() => setModalOpen(false)}>확인</Button>
            </ModalFooter>
          </Modal>

          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} side="right">
            <DrawerHeader onClose={() => setDrawerOpen(false)}>
              <h3 className="text-[18px] font-semibold">드로어</h3>
            </DrawerHeader>
            <DrawerBody>드로어 본문입니다.</DrawerBody>
          </Drawer>
          <Divider />

          {/* Alert */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Alert</h2>
            <Stack gap="md">
              <Alert variant="info" title="정보">정보 메시지입니다.</Alert>
              <Alert variant="success" title="성공">성공 메시지입니다.</Alert>
              <Alert variant="warning" title="경고">경고 메시지입니다.</Alert>
              <Alert variant="error" title="오류">오류 메시지입니다.</Alert>
            </Stack>
          </section>
          <Divider />

          {/* Sidebar (inline demo) */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Sidebar</h2>
            <div className="flex border border-[var(--black20)] rounded-[var(--radius-small)] overflow-hidden" style={{ minHeight: 200 }}>
              <Sidebar
                items={[
                  { label: '메뉴 1', href: '#', active: true },
                  { label: '메뉴 2', href: '#' },
                  { label: '메뉴 3', href: '#' },
                ]}
              />
              <div className="flex-1 p-4 bg-[var(--white100)]">콘텐츠 영역</div>
            </div>
          </section>
          <Divider />

          {/* Skeleton */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Skeleton</h2>
            <Stack gap="md">
              <Skeleton width="100%" height={24} />
              <Skeleton width="80%" height={24} />
              <Skeleton width="60%" height={24} />
            </Stack>
          </section>
          <Divider />

          {/* Slide / Jumbotron */}
          <section>
            <h2 className="text-[26px] font-semibold mb-4">Slide</h2>
            <SlidePanel>
              <Slide active>
                <div className="py-8 px-4 bg-[var(--black10)] rounded-[var(--radius-small)] text-center">
                  슬라이드 패널 콘텐츠
                </div>
              </Slide>
            </SlidePanel>
          </section>
        </Grid>
      </Container>
    </div>
  );
}

export default function DemoPage() {
  return (
    <ToastProvider>
      <DemoContent />
    </ToastProvider>
  );
}
