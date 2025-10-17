'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from "@/hooks/use-toast"
import supporterData from '@/lib/emails.json';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useTranslation } from '@/context/translation-context';
import { type LocaleStrings } from '@/lib/locale';

const formSchema = z.object({
  topic: z.string().min(1, 'Please select a topic.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.').max(2000),
});

export function ContactForm({ dictionary }: { dictionary: LocaleStrings }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // 1. Pick a random supporter from the imported JSON
      const supporters = supporterData.supporters;
      const assignedTo = supporters[Math.floor(Math.random() * supporters.length)];

      // 2. Construct the mailto link
      const subject = encodeURIComponent(`Support Ticket: ${values.topic}`);
      const body = encodeURIComponent(`From: ${values.email}\n\n${values.message}`);
      const mailtoLink = `mailto:${assignedTo}?subject=${subject}&body=${body}`;

      // 3. Open the user's default email client
      window.location.href = mailtoLink;

      toast({
        title: t('contact.toast.success.title'),
        description: "Your email client has been opened to send the message.",
      });
      form.reset();

    } catch (error) {
      console.error('Mailto link creation error:', error);
      toast({
        title: t('contact.toast.error.title'),
        description: t('contact.toast.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.topic.label')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('contact.form.topic.placeholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="login-issue">{t('contact.form.topic.options.login')}</SelectItem>
                      <SelectItem value="bug-report">{t('contact.form.topic.options.bug')}</SelectItem>
                      <SelectItem value="ai-issue">{t('contact.form.topic.options.ai')}</SelectItem>
                      <SelectItem value="report-abuse">{t('contact.form.topic.options.abuse')}</SelectItem>
                      <SelectItem value="feature-request">{t('contact.form.topic.options.feature')}</SelectItem>
                      <SelectItem value="other">{t('contact.form.topic.options.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.email.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.email.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.message.label')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('contact.form.message.placeholder')}
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
