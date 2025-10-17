'use client';

import { useState, useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { FaqCategory } from '@/lib/data';
import { useTranslation } from '@/context/translation-context';

interface FaqClientProps {
  faqData: FaqCategory[];
}

export default function FaqClient({ faqData }: FaqClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const filteredData = useMemo(() => {
    if (!searchTerm) return faqData;

    const lowercasedTerm = searchTerm.toLowerCase();
    
    return faqData
      .map(category => {
        const filteredItems = category.items.filter(
          item =>
            t(item.question).toLowerCase().includes(lowercasedTerm) ||
            t(item.answer).toLowerCase().includes(lowercasedTerm)
        );

        if (filteredItems.length > 0) {
          return { ...category, items: filteredItems };
        }
        return null;
      })
      .filter((category): category is FaqCategory => category !== null);
  }, [searchTerm, faqData, t]);

  return (
    <div className="space-y-12">
      {filteredData.length > 0 ? (
        filteredData.map(category => (
          <div key={category.category}>
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-foreground">
              <span className="text-3xl">{category.icon}</span>
              {t(category.category)}
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {category.items.map(item => (
                <AccordionItem value={item.question} key={item.question} className="rounded-2xl border bg-card p-1 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">{t(item.question)}</AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground text-base">{t(item.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))
      ) : (
        <p className="py-10 text-center text-muted-foreground">{t('faq.noResults')}</p>
      )}
    </div>
  );
}
