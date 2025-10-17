'use server';
/**
 * @fileOverview AI-powered Circle suggestion flow.
 *
 * - suggestRelevantCircles - A function that suggests relevant Circles to a user based on their behavior.
 */

import {ai} from '@/ai/genkit';
import { SuggestRelevantCirclesInputSchema, SuggestRelevantCirclesOutputSchema, type SuggestRelevantCirclesInput, type SuggestRelevantCirclesOutput } from '@/ai/schemas';

export async function suggestRelevantCircles(input: SuggestRelevantCirclesInput): Promise<SuggestRelevantCirclesOutput> {
  return suggestRelevantCirclesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantCirclesPrompt',
  input: {schema: SuggestRelevantCirclesInputSchema},
  output: {schema: SuggestRelevantCirclesOutputSchema},
  prompt: `You are an AI assistant on the Circle platform. Your task is to suggest relevant Circles to a user based on their behavior and interests.

  User Behavior Data: {{{userBehaviorData}}}
  Available Circles: {{#each availableCircles}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Based on this information, suggest up to 3 relevant Circles for the user to join. Explain your reasoning for each suggestion.

  Format your response as a JSON object with "suggestedCircles" (an array of Circle topics) and "reasoning" (a string explaining the suggestions) fields.
  `, // Ensure valid JSON is returned
});

const suggestRelevantCirclesFlow = ai.defineFlow(
  {
    name: 'suggestRelevantCirclesFlow',
    inputSchema: SuggestRelevantCirclesInputSchema,
    outputSchema: SuggestRelevantCirclesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
