'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/layout/hero-section';
import Faq from '@/components/faq/faq-section';
import Contact from '@/components/contact/contact-section';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot/chatbot';
import Preloader from '@/components/preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background animate-fade-in">
      <Header />
      <main className="flex-1">
        <Hero />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
