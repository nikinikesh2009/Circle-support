import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden animate-fade-in-up">
       {heroImage && (
         <Image 
          src={heroImage.imageUrl} 
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
       )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      <div className="relative z-10 space-y-4 px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl xl:text-7xl/none">
            Welcome to the Circle Support Hub
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Find answers, learn about our features, and get the help you need to make the most of your community experience.
          </p>
      </div>
      <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-shooting-star"></div>
    </section>
  );
}
