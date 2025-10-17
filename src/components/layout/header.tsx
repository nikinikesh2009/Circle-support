import Link from 'next/link';
import { CircleLogo } from '@/components/icons';
import { LanguageSwitcher } from '../language-switcher';

export default function Header() {
  return (
    <header className="absolute top-0 z-10 w-full bg-transparent py-4">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CircleLogo className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold tracking-tight text-white">
            Circle
          </span>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
