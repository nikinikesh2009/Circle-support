import FaqClient from './faq-client';
import { faqData } from '@/lib/data';

export default function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground md:text-xl">
            Find answers to common questions below. For anything else, our AI is ready to help!
          </p>
        </div>
        <FaqClient faqData={faqData} />
      </div>
    </section>
  );
}
