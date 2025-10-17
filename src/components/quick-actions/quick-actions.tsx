'use client';

import { Button } from '@/components/ui/button';
import { LifeBuoy, MessageSquareWarning, PenSquare, School } from 'lucide-react';
import { useTranslation } from '@/context/translation-context';
import { type LocaleStrings } from '@/lib/locale';

const actionKeys = [
    { icon: PenSquare, textKey: 'quickActions.ticket', href: '#' },
    { icon: LifeBuoy, textKey: 'quickActions.contact', href: '#' },
    { icon: School, textKey: 'quickActions.academy', href: '#' },
    { icon: MessageSquareWarning, textKey: 'quickActions.report', href: '#' },
];

export default function QuickActions({ dictionary }: { dictionary: LocaleStrings }) {
    const { t } = useTranslation();

    return (
        <section id="quick-actions" className="w-full py-12 md:py-20 bg-card">
            <div className="container mx-auto max-w-5xl px-4 animate-fade-in-up animation-delay-600">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('quickActions.title')}</h2>
                    <p className="text-muted-foreground">
                        {t('quickActions.description')}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actionKeys.map((action, index) => (
                        <Button key={index} asChild variant="outline" className="h-28 flex-col gap-2 rounded-2xl text-lg font-semibold shadow-sm hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 transition-all glow">
                           <a href={action.href}>
                             <action.icon className="h-8 w-8 mb-2 text-primary" />
                             {t(action.textKey)}
                           </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}
