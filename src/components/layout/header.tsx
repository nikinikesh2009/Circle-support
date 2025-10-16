import Link from 'next/link';
import { CircleLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CircleLogo className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Circle Support
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <a href="https://home.circle.com" target="_blank" rel="noopener noreferrer">Home</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://app.circle.com" target="_blank" rel="noopener noreferrer">App</a>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/">Support</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
