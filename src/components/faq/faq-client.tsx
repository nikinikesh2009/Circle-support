'use client';

import { useState, useMemo, createElement } from 'react';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { FaqCategory } from '@/lib/data';
import { Search, User, Circle, TrendingUp, MessageSquare, Cpu, Bell, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FaqClientProps {
  faqData: FaqCategory[];
}

const icons: Record<FaqCategory['iconName'], LucideIcon> = {
  User,
  Circle,
  TrendingUp,
  MessageSquare,
  Cpu,
  Bell,
  Shield,
};

export default function FaqClient({ faqData }: FaqClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return faqData;

    const lowercasedTerm = searchTerm.toLowerCase();
    
    return faqData
      .map(category => {
        const filteredItems = category.items.filter(
          item =>
            item.question.toLowerCase().includes(lowercasedTerm) ||
            item.answer.toLowerCase().includes(lowercasedTerm)
        );

        if (filteredItems.length > 0) {
          return { ...category, items: filteredItems };
        }
        return null;
      })
      .filter((category): category is FaqCategory => category !== null);
  }, [searchTerm, faqData]);

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search questions..."
          className="w-full rounded-full bg-card pl-10 pr-4 py-6 text-base"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredData.length > 0 ? (
          filteredData.map(category => {
            const Icon = icons[category.iconName];
            return (
              <div key={category.category}>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {category.items.map(item => (
                    <AccordionItem value={item.question} key={item.question} className="rounded-lg border bg-card px-4 shadow-sm">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })
        ) : (
          <p className="text-center text-muted-foreground">No questions found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
}
