import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FotoYose - プロフェッショナルな写真編集サービス',
  description: '写真編集のプロフェッショナルサービス。あなたの大切な思い出をより美しく。',
  openGraph: {
    title: 'FotoYose - プロフェッショナルな写真編集サービス',
    description: '写真編集のプロフェッショナルサービス。あなたの大切な思い出をより美しく。',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
        width: 1200,
        height: 630,
        alt: 'FotoYose',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}