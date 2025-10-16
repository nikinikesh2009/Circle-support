import Link from "next/link";
import { CircleLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <CircleLogo className="h-6 w-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Circle Inc. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4">
          <Link href="https://home.circle.com" className="text-sm text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
            Home
          </Link>
          <Link href="https://app.circle.com" className="text-sm text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
            App
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
