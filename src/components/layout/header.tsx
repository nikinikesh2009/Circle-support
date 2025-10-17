import Link from 'next/link';
import { CircleLogo } from '@/components/icons';

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent py-4">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CircleLogo className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold tracking-tight text-white">
            Circle Support
          </span>
        </Link>
      </div>
    </header>
  );
}
