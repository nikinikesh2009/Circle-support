'use server';

import { z } from 'zod';
import { faqData } from '@/lib/data';
import { summarizeFaqAnswers } from '@/ai/flows/summarize-faq-answers';

const ticketSchema = z.object({
  topic: z.string(),
  email: z.string().email(),
  message: z.string(),
});

// Mock submission function
export async function submitTicket(values: z.infer<typeof ticketSchema>) {
  try {
    const validatedData = ticketSchema.parse(values);
    console.log('New ticket submitted:', validatedData);
    
    // In a real application, you would save this to a database (e.g., Firebase, Supabase)
    // await db.collection('tickets').add(validatedData);

    return { success: true };
  } catch (error) {
    console.error('Ticket submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed." };
    }
    return { success: false, error: 'An unexpected error occurred.' };
  }
}

// AI Chatbot action
export async function askAI(userInput: string): Promise<string> {
  if (!userInput) {
    return "Please enter a question.";
  }

  const lowercasedInput = userInput.toLowerCase();

  // Simple keyword matching to find relevant FAQs
  const relevantFaqs = faqData.flatMap(category =>
    category.items.filter(item =>
      item.question.toLowerCase().includes(lowercasedInput) ||
      item.answer.toLowerCase().includes(lowercasedInput) ||
      category.category.toLowerCase().includes(lowercasedInput)
    )
  );

  if (relevantFaqs.length > 0) {
    // If we have relevant FAQs, concatenate their answers and summarize
    const faqAnswers = relevantFaqs.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');
    
    try {
      const result = await summarizeFaqAnswers({ faqAnswers, userInput });
      return result.summary;
    } catch (e) {
      console.error('AI summarization failed:', e);
      return "I found some information, but I'm having trouble summarizing it. Can you try rephrasing?";
    }
  }

  // Fallback response if no relevant FAQs are found
  return "I couldn't find a specific answer to your question. You might want to try rephrasing it, or you can submit a ticket to our support team using the form below.";
}
