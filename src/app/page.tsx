'use client';

import Header from '@/components/layout/header';
import Hero from '@/components/layout/hero-section';
import Faq from '@/components/faq/faq-section';
import Chatbot from '@/components/chatbot/chatbot';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Faq />
      </main>
      <Chatbot />
    </div>
  );
}
