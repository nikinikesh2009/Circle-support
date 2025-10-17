'use server';

import { z } from 'zod';
import { faqData } from '@/lib/data';
import { chatWithCircleSupportAI } from '@/ai/flows/circle-support-ai';
import { translateText } from '@/ai/flows/translate-text';
import { type LocaleStrings } from '@/lib/locale';

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
