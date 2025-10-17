import Link from "next/link";
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: 'linear-gradient(90deg, #38E1B0 0%, #2AB2FF 100%)' }}></div>
      <div className="container relative mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Circle Inc. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            About Circle
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms & Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
