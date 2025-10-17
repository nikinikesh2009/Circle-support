/**
 * @fileOverview Defines the Zod schemas and TypeScript types for the AI flows.
 * This centralized file prevents "use server" conflicts by separating data shapes from server-side logic.
 */

import { z } from 'zod';

// Schemas for: src/ai/flows/circle-support-ai.ts

export const CircleSupportAIInputSchema = z.object({
  userInput: z.string().describe('The latest message from the user.'),
  chatHistory: z.string().describe('The history of the conversation so far, with each message prefixed by "user:" or "assistant:".'),
  faqData: z.string().describe('A JSON string containing the FAQ data for Circle. This is the primary knowledge source.'),
});
export type CircleSupportAIInput = z.infer<typeof CircleSupportAIInputSchema>;

export const CircleSupportAIOutputSchema = z.object({
  response: z.string().describe("The AI's response to the user, crafted according to the persona and guidelines."),
});
export type CircleSupportAIOutput = z.infer<typeof CircleSupportAIOutputSchema>;


// Schemas for: src/ai/flows/ai-suggests-relevant-circles.ts

export const SuggestRelevantCirclesInputSchema = z.object({
  userBehaviorData: z.string().describe('A summary of the user\'s behavior on the platform, including their activity, interests, and interactions.'),
  availableCircles: z.array(z.string()).describe('A list of available Circle topics on the platform.'),
});
export type SuggestRelevantCirclesInput = z.infer<typeof SuggestRelevantCirclesInputSchema>;

export const SuggestRelevantCirclesOutputSchema = z.object({
  suggestedCircles: z.array(z.string()).describe('A list of Circle topics that the AI suggests the user join.'),
  reasoning: z.string().describe('The AI\'s reasoning for suggesting these specific Circles.'),
});
export type SuggestRelevantCirclesOutput = z.infer<typeof SuggestRelevantCirclesOutputSchema>;


// Schemas for: src/ai/flows/translate-text.ts

export const TranslateTextInputSchema = z.object({
  content: z.any().describe("A JSON object containing the strings to be translated."),
  targetLanguage: z.string().describe("The target language for translation (e.g., 'Spanish', 'French', 'Japanese')."),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

export const TranslatedContentSchema = z.any().describe("The JSON object with all string values translated into the target language. The JSON structure must be identical to the input.");
export type TranslatedContent = z.infer<typeof TranslatedContentSchema>;
