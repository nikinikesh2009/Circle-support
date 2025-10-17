import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { PT_Sans } from 'next/font/google';
import { TranslationProvider } from '@/context/translation-context';
import { type Locale } from '@/i18n-config';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Circle Support Hub',
  description: 'The official help center for Circle. Get answers from our AI assistant or browse FAQs.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <TranslationProvider locale={params.locale}>
      <html lang={params.locale} className={ptSans.variable} suppressHydrationWarning>
        <body className='bg-background'>
          {children}
          <Toaster />
        </body>
      </html>
    </TranslationProvider>
  );
}
