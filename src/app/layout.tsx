import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter',
});

/**
 * Root metadata for the whole site.
 *
 * `metadataBase` tells Next.js the canonical production URL to use when
 * resolving any relative URLs in metadata (like the Open Graph/Twitter
 * images below). Without it, Next.js falls back to whatever URL the
 * current deployment happens to be running on (e.g. a random preview
 * build URL), which is why og:image and og:url were previously pointing
 * to the wrong domain.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-nextjs-beta-bice.vercel.app'),
  title: {
    default: 'SAIF ALI - Frontend Developer Portfolio',
    template: '%s | SAIF ALI'
  },
  description: 'SAIF ALI - Frontend Developer Portfolio. Explore my projects, skills, and technical articles. Specializing in React, Next.js, and modern web development.',
  keywords: ['frontend developer', 'web development', 'portfolio', 'SAIF ALI', 'JavaScript', 'CSS', 'HTML', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'full stack developer', 'UI/UX'],
  authors: [{ name: 'SAIF ALI', url: 'https://github.com/khanalisaif0102' }],
  creator: 'SAIF ALI',
  publisher: 'SAIF ALI',
  alternates: {
    canonical: 'https://portfolio-nextjs-beta-bice.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-nextjs-beta-bice.vercel.app',
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
    creator: '@khanalisaif0102',
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
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

/**
 * Root layout wrapping every page.
 * Sets the HTML lang attribute, favicon links, web manifest, and the
 * global font (Inter) applied to the whole site.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SAIF ALI',
    url: 'https://portfolio-nextjs-beta-bice.vercel.app',
    image: 'https://portfolio-nextjs-beta-bice.vercel.app/hero.png',
    sameAs: [
      'https://github.com/khanalisaif0102',
      'https://www.linkedin.com/in/saif-ali-khan-5908b7395',
    ],
    jobTitle: 'Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js, and modern web development.',
    email: 'khanalisaif0102@gmail.com',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
