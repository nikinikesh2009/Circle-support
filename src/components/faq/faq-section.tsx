import FaqClient from './faq-client';
import { faqData } from '@/lib/data';

export default function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-background/70">
      <div className="container mx-auto max-w-4xl px-4 animate-fade-in-up animation-delay-600">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">📖 FAQ Categories</h2>
          <p className="text-muted-foreground md:text-xl">
            Explore our most frequently asked questions organized by category.
          </p>
        </div>
        <FaqClient faqData={faqData} />
      </div>
    </section>
  );
}
