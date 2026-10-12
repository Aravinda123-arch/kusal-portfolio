import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kusalaravinda.dev'),
  title: 'Kusal Aravinda | Data Science & UI/UX Designer',
  description:
    'Turning Data into Insights and Ideas into Experiences. Portfolio of Kusal Aravinda — Data Science Undergraduate and UI/UX Designer specializing in Machine Learning, NLP, and Human-Centered Digital Products.',
  keywords: [
    'Kusal Aravinda',
    'Data Science',
    'UI/UX Designer',
    'Machine Learning',
    'NLP',
    'StylePulse',
    'Fake News Detection',
    'SLTC',
    'IEEE SLTC',
    'Sri Lanka',
    'Product Design',
    'Front-end Developer',
  ],
  authors: [{ name: 'Kusal Aravinda' }],
  creator: 'Kusal Aravinda',
  openGraph: {
    title: 'Kusal Aravinda | Data Science & UI/UX Designer',
    description: 'Turning Data into Insights and Ideas into Experiences.',
    url: 'https://kusalaravinda.dev',
    siteName: 'Kusal Aravinda Portfolio',
    images: [
      {
        url: '/images/kusal_profile_studio.png',
        width: 1024,
        height: 1024,
        alt: 'Kusal Aravinda — Data Science & UI/UX Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusal Aravinda | Data Science & UI/UX Designer',
    description: 'Turning Data into Insights and Ideas into Experiences.',
    images: ['/images/kusal_profile_studio.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = storedTheme || (supportDarkMode ? 'dark' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
