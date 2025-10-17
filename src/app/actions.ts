'use server';

import { z } from 'zod';
import { faqData } from '@/lib/data';
import { chatWithCircleSupportAI } from '@/ai/flows/circle-support-ai';

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
export async function askAI(userInput: string, chatHistory: {role: 'user' | 'assistant', content: string}[]): Promise<string> {
  if (!userInput) {
    return "Please enter a question.";
  }
  
  try {
    const result = await chatWithCircleSupportAI({ 
      userInput,
      chatHistory: chatHistory.map(m => `${m.role}: ${m.content}`).join('\n'),
      faqData: JSON.stringify(faqData, null, 2)
    });
    return result.response;
  } catch (e) {
    console.error('AI chat failed:', e);
    return "I'm having a little trouble connecting to my brain right now. Please try again in a moment.";
  }
}
