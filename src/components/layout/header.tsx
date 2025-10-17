import Link from 'next/link';
import { CircleLogo } from '@/components/icons';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Select language</span>
        </Button>
      </div>
    </header>
  );
}
