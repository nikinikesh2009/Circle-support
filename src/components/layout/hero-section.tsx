'use client';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageSquare } from 'lucide-react';
import { useTranslation } from '@/context/translation-context';
import { type LocaleStrings } from '@/lib/locale';


export default function Hero({ dictionary }: { dictionary: LocaleStrings }) {
  const { t } = useTranslation();
  
  const handleAskAI = () => {
    const trigger = document.querySelector('button[aria-label="Open support chat"]') as HTMLElement;
    if (trigger) {
      trigger.click();
    }
  };

  const scrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #5B21B6 0%, #8B5CF6 100%)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0"></div>
      <div
        className="wave-bg animate-wave"
        style={{
          backgroundImage: "url('/wave.svg')",
          opacity: 0.1,
          animationDuration: '20s',
        }}
      ></div>
      <div
        className="wave-bg animate-wave"
        style={{
          backgroundImage: "url('/wave.svg')",
          opacity: 0.1,
          animationDirection: 'reverse',
          animationDuration: '30s',
          bottom: '5px'
        }}
      ></div>

      <div className="relative z-10 space-y-8 px-4 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none">
          {t('hero.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-14 rounded-full bg-white text-primary px-10 text-lg font-bold shadow-lg transition-transform hover:scale-105 hover:bg-white/90"
            onClick={handleAskAI}
          >
            <MessageSquare className="mr-3 h-6 w-6" /> {t('hero.cta.askAI')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-2 border-white bg-transparent text-white px-10 text-lg font-bold shadow-lg transition-transform hover:scale-105 hover:bg-white/10"
            onClick={scrollToFaq}
          >
            <BookOpen className="mr-3 h-6 w-6" /> {t('hero.cta.browseGuides')}
          </Button>
        </div>
      </div>
    </section>
  );
}
