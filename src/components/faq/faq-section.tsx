import FaqClient from './faq-client';
import { faqData } from '@/lib/data';

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Can't find the answer you're looking for? Our AI assistant is here to help.
          </p>
        </div>
        <FaqClient faqData={faqData} />
      </div>
    </section>
  );
}
