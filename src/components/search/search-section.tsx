'use client';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function SearchSection() {
  return (
    <section className="w-full pb-12 -mt-16 z-10 relative">
      <div className="container mx-auto max-w-2xl px-4 animate-fade-in-up animation-delay-200">
        <Card className="p-2 rounded-2xl shadow-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your question..."
              className="h-16 rounded-xl pl-12 text-lg border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
