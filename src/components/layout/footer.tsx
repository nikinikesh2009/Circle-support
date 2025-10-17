'use client';

import Link from "next/link";
import { useTranslation } from '@/context/translation-context';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: 'linear-gradient(90deg, #38E1B0 0%, #2AB2FF 100%)' }}></div>
      <div className="container relative mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.about')}
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.terms')}
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.contact')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
