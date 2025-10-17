'use client';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const handleAskAI = () => {
    const trigger = document.querySelector('button[aria-label="Open support chat"]') as HTMLElement;
    if (trigger) {
      trigger.click();
    }
  };

  return (
    <section
      className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white"
      style={{
        background: 'linear-gradient(90deg, #38E1B0 0%, #2AB2FF 100%)',
      }}
    >
      <div className="relative z-10 space-y-8 px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none">
          Welcome to Circle Support
        </h1>
        <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
          Get instant answers from our AI assistant or browse our FAQs. We're here to help!
        </p>
        <Button
          size="lg"
          className="h-14 rounded-full bg-white text-primary px-10 text-lg font-bold shadow-lg transition-transform hover:scale-105 hover:bg-white/90"
          onClick={handleAskAI}
        >
          <span className="mr-2 text-2xl">💬</span> Ask AI Now
        </Button>
      </div>
    </section>
  );
}
