'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button, Input, Label, Stack, Divider, Alert } from '@/components/ui';
import { supabase } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) {
      setError(err.message ?? '로그인에 실패했습니다.');
      return;
    }
    router.push('/');
    router.refresh();
  };

  return (
    <AuthLayout
      title="다시 오신 것을 환영해요! 👋"
      subtitle="계정에 로그인하려면 아래 정보를 입력하세요."
    >
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {error && (
          <Alert variant="error">
            {error}
          </Alert>
        )}
        <div>
          <Label htmlFor="login-email">이메일</Label>
          <Input
            id="login-email"
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
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">비밀번호</Label>
            <Link
              href="/forgot-password"
              className="text-[14px] text-[var(--blue)] hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <Input
            id="login-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            className="mt-1.5"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={loading}
        >
          {loading ? '로그인 중...' : '로그인'}
        </Button>
      </form>

      <Divider className="my-6" />

      <p className="text-[14px] text-[var(--black60)] text-center mb-3">또는 다음으로 계속하기</p>
      <Stack direction="row" gap="md" className="justify-center">
        <Button type="button" variant="outline" size="md" className="flex-1" disabled>
          Google
        </Button>
        <Button type="button" variant="outline" size="md" className="flex-1" disabled>
          GitHub
        </Button>
      </Stack>

      <p className="text-[14px] text-[var(--black60)] text-center mt-6">
        계정이 없으신가요?{' '}
        <Link href="/signup" className="text-[var(--blue)] font-medium hover:underline">
          회원가입
        </Link>
      </p>
    </AuthLayout>
  );
}
