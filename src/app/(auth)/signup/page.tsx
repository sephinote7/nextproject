'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button, Input, Label, Stack, Divider, Grid, Checkbox, Alert } from '@/components/ui';
import { supabase } from '@/lib/supabase/client';

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!termsAgreed) {
      setError('이용약관 및 개인정보처리방침에 동의해 주세요.');
      return;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상 입력해 주세요.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          terms_agreed: true,
        },
      },
    });
    setLoading(false);
    if (err) {
      setError(err.message ?? '회원가입에 실패했습니다.');
      return;
    }
    router.push('/');
    router.refresh();
  };

  return (
    <AuthLayout
      title="계정 만들기 🚀"
      subtitle="오늘 바로 무료로 시작하세요."
    >
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {error && (
          <Alert variant="error">
            {error}
          </Alert>
        )}
        <Grid cols={2} gap="md">
          <div>
            <Label htmlFor="signup-first">이름</Label>
            <Input
              id="signup-first"
              type="text"
              placeholder="홍"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="signup-last">성</Label>
            <Input
              id="signup-last"
              type="text"
              placeholder="길동"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              className="mt-1.5"
            />
          </div>
        </Grid>
        <div>
          <Label htmlFor="signup-email">이메일</Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="signup-password">비밀번호</Label>
          <Input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            fullWidth
            className="mt-1.5"
          />
          <p className="text-[13px] text-[var(--black60)] mt-1">8자 이상 입력해 주세요.</p>
        </div>
        <Checkbox
          id="signup-terms"
          checked={termsAgreed}
          onChange={(e) => setTermsAgreed(e.target.checked)}
          label={
            <>
              <Link href="/terms" className="text-[var(--blue)] hover:underline">이용약관</Link>
              {' 및 '}
              <Link href="/privacy" className="text-[var(--blue)] hover:underline">개인정보처리방침</Link>
              에 동의합니다.
            </>
          }
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={loading}
        >
          {loading ? '가입 중...' : '회원가입'}
        </Button>
      </form>

      <Divider className="my-6" />

      <p className="text-[14px] text-[var(--black60)] text-center mb-3">또는 다음으로 가입하기</p>
      <Stack direction="row" gap="md" className="justify-center">
        <Button type="button" variant="outline" size="md" className="flex-1" disabled>
          Google
        </Button>
        <Button type="button" variant="outline" size="md" className="flex-1" disabled>
          GitHub
        </Button>
      </Stack>

      <p className="text-[14px] text-[var(--black60)] text-center mt-6">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="text-[var(--blue)] font-medium hover:underline">
          로그인
        </Link>
      </p>
    </AuthLayout>
  );
}
