'use server';
/**
 * @fileOverview AI-powered Circle suggestion flow.
 *
 * - suggestRelevantCircles - A function that suggests relevant Circles to a user based on their behavior.
 * - SuggestRelevantCirclesInput - The input type for the suggestRelevantCircles function.
 * - SuggestRelevantCirclesOutput - The return type for the suggestRelevantCircles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantCirclesInputSchema = z.object({
  userBehaviorData: z.string().describe('A summary of the user\'s behavior on the platform, including their activity, interests, and interactions.'),
  availableCircles: z.array(z.string()).describe('A list of available Circle topics on the platform.'),
});
export type SuggestRelevantCirclesInput = z.infer<typeof SuggestRelevantCirclesInputSchema>;

const SuggestRelevantCirclesOutputSchema = z.object({
  suggestedCircles: z.array(z.string()).describe('A list of Circle topics that the AI suggests the user join.'),
  reasoning: z.string().describe('The AI\'s reasoning for suggesting these specific Circles.'),
});
export type SuggestRelevantCirclesOutput = z.infer<typeof SuggestRelevantCirclesOutputSchema>;

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
