export default function Hero() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 text-center">
        <div className="space-y-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
            Welcome to the Circle Support Hub
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Find answers, learn about our features, and get the help you need to make the most of your community experience.
          </p>
        </div>
      </div>
    </section>
  );
}
