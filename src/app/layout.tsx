import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { PT_Sans } from 'next/font/google';
import { TranslationProvider } from '@/context/translation-context';
import { type Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const dictionary = await getDictionary(params.locale);

  return (
    <html lang={params.locale} className={ptSans.variable} suppressHydrationWarning>
      <body>
        <TranslationProvider dictionary={dictionary}>
          {children}
          <Toaster />
        </TranslationProvider>
      </body>
    </html>
  );
}
