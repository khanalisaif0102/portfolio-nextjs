import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'SAIF ALI - Frontend Developer Portfolio',
    template: '%s | SAIF ALI'
  },
  description: 'SAIF ALI - Frontend Developer Portfolio. Explore my projects, skills, and technical articles. Specializing in React, Next.js, and modern web development.',
  keywords: ['frontend developer', 'web development', 'portfolio', 'SAIF ALI', 'JavaScript', 'CSS', 'HTML', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'SAIF ALI' }],
  creator: 'SAIF ALI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saifali-portfolio.vercel.app',
    title: 'SAIF ALI - Frontend Developer Portfolio',
    description: 'SAIF ALI - Frontend Developer Portfolio. Explore my projects, skills, and technical articles.',
    siteName: 'SAIF ALI Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'SAIF ALI - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAIF ALI - Frontend Developer Portfolio',
    description: 'SAIF ALI - Frontend Developer Portfolio. Explore my projects, skills, and technical articles.',
    images: ['/hero.png'],
    creator: '@saifali',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
