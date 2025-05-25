'use client';

import dyn from 'next/dynamic'; // ✅ renamed here to avoid name conflict

const Header = dyn(() => import('@/components/Header'), { ssr: false });
const Ads = dyn(() => import('@/components/Ads'), { ssr: false });
const Blogs = dyn(() => import('@/components/Blogs'), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <Header />
      <Ads />
      <Blogs />
    </main>
  );
}

export const dynamic = 'force-dynamic'; // ✅ used for route config
