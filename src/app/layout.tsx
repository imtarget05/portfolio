import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  title: {
    default: 'Mai Nguyen Binh Tan | Software Engineer',
    template: '%s | Portfolio',
  },
  description: 'Fullstack Software Engineer specializing in backend development, cloud infrastructure, and AI-powered applications. Building scalable software, intelligent applications & reliable cloud systems. Open to backend, cloud, and applied AI roles.',
  openGraph: {
    title: 'Mai Nguyen Binh Tan — Software Engineer',
    description: 'Backend, Cloud Infrastructure & Applied AI — Selected engineering projects. Candidate portfolio available for hire.',
    type: 'website',
    images: [
      {
        url: '/images/cinematic-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mai Nguyen Binh Tan — Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mai Nguyen Binh Tan — Software Engineer',
    description: 'Backend, Cloud Infrastructure & Applied AI — Candidate portfolio available for hire.',
    creator: '@imtarget05',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}