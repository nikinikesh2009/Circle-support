import Header from '@/components/layout/header';
import Hero from '@/components/layout/hero-section';
import SearchSection from '@/components/search/search-section';
import Faq from '@/components/faq/faq-section';
import Chatbot from '@/components/chatbot/chatbot';
import TrendingQuestions from '@/components/trending-questions/trending-questions';
import QuickActions from '@/components/quick-actions/quick-actions';
import VideoTutorials from '@/components/video-tutorials/video-tutorials';
import SystemStatus from '@/components/system-status/system-status';
import Footer from '@/components/layout/footer';
import { ContactForm } from '@/components/contact/contact-form';
import { getDictionary } from '@/lib/get-dictionary';
import { type Locale } from '@/i18n-config';


export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header locale={locale} dictionary={dictionary} />
      <main className="flex-1">
        <Hero dictionary={dictionary} />
        <SearchSection dictionary={dictionary} />
        <SystemStatus dictionary={dictionary} />
        <TrendingQuestions dictionary={dictionary} />
        <QuickActions dictionary={dictionary} />
        <VideoTutorials dictionary={dictionary} />
        <Faq dictionary={dictionary} />

        <section id="contact" className="w-full py-20 md:py-32 bg-background animate-fade-in-up animation-delay-800">
           <div className="container mx-auto max-w-2xl px-4">
             <div className="mb-12 space-y-4 text-center">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{dictionary.contact.title}</h2>
               <p className="text-muted-foreground">
                 {dictionary.contact.description}
               </p>
             </div>
             <ContactForm dictionary={dictionary} />
           </div>
         </section>
      </main>
      <Footer dictionary={dictionary} />
      <Chatbot />
    </div>
  );
}