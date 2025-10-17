'use client';

import { trendingQuestions } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/context/translation-context';
import { type LocaleStrings } from '@/lib/locale';
import Link from 'next/link';

export default function TrendingQuestions({ dictionary }: { dictionary: LocaleStrings }) {
    const { t } = useTranslation();

    const scrollToFaq = () => {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <section id="trending" className="w-full py-12 md:py-20">
            <div className="container mx-auto max-w-5xl px-4 animate-fade-in-up animation-delay-400">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('trending.title')}</h2>
                    <p className="text-muted-foreground">
                        {t('trending.description')}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingQuestions.slice(0,5).map((item, index) => (
                        <Card key={index} onClick={scrollToFaq} className="p-6 flex items-center gap-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                            <span className="text-3xl">{item.icon}</span>
                            <h3 className="font-semibold text-lg">{t(item.text)}</h3>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
