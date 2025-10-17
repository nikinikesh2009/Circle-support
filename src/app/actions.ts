'use server';

import { z } from 'zod';
import { faqData } from '@/lib/data';
import { chatWithCircleSupportAI } from '@/ai/flows/circle-support-ai';
import { translateText } from '@/ai/flows/translate-text';
import { type LocaleStrings } from '@/lib/locale';
import supporterData from '@/lib/emails.json';

const ticketSchema = z.object({
  topic: z.string(),
  email: z.string().email(),
  message: z.string(),
});

// Mock submission function
export async function submitTicket(values: z.infer<typeof ticketSchema>) {
  try {
    const validatedData = ticketSchema.parse(values);

    // 1. Pick a random supporter
    const supporters = supporterData.supporters;
    const assignedTo = supporters[Math.floor(Math.random() * supporters.length)];

    console.log(`New ticket for: ${assignedTo}`, validatedData);

    // 2. Send to backend API
    // We get the absolute URL for the API endpoint so it works on Vercel
    const apiEndpoint = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/send-mail`
      : 'http://localhost:3000/api/send-mail';
      
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...validatedData, 
        assignedTo,
      })
    });

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(errorResult.error || 'Failed to send email.');
    }

    return { success: true };
  } catch (error) {
    console.error('Ticket submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed." };
    }
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: errorMessage };
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

export async function getAITranslation(strings: LocaleStrings, language: string) {
  try {
    const translatedStrings = await translateText({
      content: strings,
      targetLanguage: language,
    });
    return translatedStrings;
  } catch (e) {
    console.error("Translation failed", e);
    return null;
  }
}
