import { ContactForm } from './contact-form';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
          <p className="text-muted-foreground">
            If our AI assistant or FAQ couldn't help, please submit a ticket and our support team will get back to you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
