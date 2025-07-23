import '@/styles/global.css';

import { HeroUIProvider } from '@heroui/react';
import type { Metadata } from 'next';
import React, { Suspense } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/shared/Footer/Footer';

import Loading from './loading';

export const metadata: Metadata = {
  title: 'ThisorThat.tech | This or That',
  description:
    'This or That helps you navigate the noise and buy the right tech at the right price.',
  other: {
    'impact-site-verification': '9d593175-3905-427a-91e4-c3aa53c9d635',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <HeroUIProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
