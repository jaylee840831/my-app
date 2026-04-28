// import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://jasper-li.com'),
  title: '李尹覺(Jasper LI) | 軟體工程師 | FULL-STACK DEVELOPER',
  description:
    '專注於前端開發、SEO 優化與高效能網頁應用，打造優質使用者體驗。 後端系統建置，包含 API 設計、資料庫管理與系統邏輯建構，打造穩定且具擴展性的伺服器端應用。雲端平台，應用部署、主機管理與基本服務整合。',
  keywords: ['全端工程師', 'React', 'Next.js', 'SEO', '網頁開發', 'Java', 'Spring Boot', 'AWS'],
  authors: [{ name: '李尹覺(Jasper LI)' }],
  icons: {
    icon: '/title_logo.png',
    shortcut: '/title_logo.png',
    apple: '/title_logo.png',
  },

  openGraph: {
    title: '李尹覺(Jasper LI) | 軟體工程師 | FULL-STACK DEVELOPER',
    description:
      '專注於前端開發、SEO 優化與高效能網頁應用，打造優質使用者體驗。 後端系統建置，包含 API 設計、資料庫管理與系統邏輯建構，打造穩定且具擴展性的伺服器端應用。雲端平台，應用部署、主機管理與基本服務整合。',
    url: 'https://jasper-li.com',
    siteName: '李尹覺(Jasper LI) Portfolio',
    images: [
      {
        url: 'https://jasper-li.com/Personal.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
