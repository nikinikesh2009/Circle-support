'use server';
/**
 * @fileOverview AI-powered translation flow.
 *
 * - translateText - A function that translates a JSON object of strings to a target language.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {
  TranslateTextInputSchema,
  TranslatedContentSchema,
  type TranslateTextInput,
  type TranslatedContent,
} from '@/ai/schemas';

export async function translateText(input: TranslateTextInput): Promise<TranslatedContent> {
  return translateTextFlow(input);
}

const translationPrompt = ai.definePrompt({
  name: 'translationPrompt',
  input: { schema: TranslateTextInputSchema },
  output: { schema: TranslatedContentSchema },
  prompt: `You are an expert translation engine. Translate the following JSON object's string values to the target language: {{targetLanguage}}.
  
  IMPORTANT: 
  - Translate ONLY the string values.
  - Retain the exact same JSON structure and keys.
  - Do not translate keys.
  - Do not add, remove, or change any keys.
  - For values that look like keys (e.g., in dot notation like 'faq.title'), do NOT translate them. Translate the text they map to.
  
  JSON to translate:
  \`\`\`json
  {{{jsonStringify content}}}
  \`\`\`
  `,
  // Register a custom Handlebars helper to stringify the JSON content
  templateFormat: 'handlebars',
  context: {
    jsonStringify: (context: any) => {
      return JSON.stringify(context, null, 2);
    },
  },
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslatedContentSchema,
  },
  async (input) => {
    const { output } = await translationPrompt(input);
    return output!;
  }
);
