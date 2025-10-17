import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { PT_Sans } from 'next/font/google';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ptSans.variable} suppressHydrationWarning>
      <head />
      <body>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        {children}
        <Toaster />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'en,si,ta,zh-CN,hi,ko,tl,id,es,fr,de,ja,ru',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                  },
                  'google_translate_element'
                );
              }
              
              function doGTranslate(lang_pair) {
                if (lang_pair.value) lang_pair = lang_pair.value;
                if (lang_pair === '') return;
                var lang = lang_pair.split('|')[1];
                var teCombo = document.querySelector('.goog-te-combo');
              
                if (document.getElementById('google_translate_element') == null || !teCombo) {
                  setTimeout(function() { doGTranslate(lang_pair); }, 100);
                } else {
                  teCombo.value = lang;
                  const event = new Event('change');
                  teCombo.dispatchEvent(event);
                }
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
