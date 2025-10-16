'use server';

/**
 * @fileOverview Summarizes FAQ answers for the AI support chatbot.
 *
 * - summarizeFaqAnswers - A function that summarizes FAQ answers.
 * - SummarizeFaqAnswersInput - The input type for the summarizeFaqAnswers function.
 * - SummarizeFaqAnswersOutput - The return type for the summarizeFaqAnswers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFaqAnswersInputSchema = z.object({
  faqAnswers: z.string().describe('The detailed FAQ answers to summarize.'),
  userInput: z.string().describe('The user input that the FAQ answers are in response to.'),
});

export type SummarizeFaqAnswersInput = z.infer<typeof SummarizeFaqAnswersInputSchema>;

const SummarizeFaqAnswersOutputSchema = z.object({
  summary: z.string().describe('The summarized FAQ answers relevant to the user input.'),
});

export type SummarizeFaqAnswersOutput = z.infer<typeof SummarizeFaqAnswersOutputSchema>;

export async function summarizeFaqAnswers(input: SummarizeFaqAnswersInput): Promise<SummarizeFaqAnswersOutput> {
  return summarizeFaqAnswersFlow(input);
}

const summarizeFaqAnswersPrompt = ai.definePrompt({
  name: 'summarizeFaqAnswersPrompt',
  input: {schema: SummarizeFaqAnswersInputSchema},
  output: {schema: SummarizeFaqAnswersOutputSchema},
  prompt: `You are an AI support assistant for Circle.
  Your task is to summarize the provided FAQ answers so they can be easily understood by a user interacting with the chatbot. Only include information relevant to the user's request.

  User Input: {{{userInput}}}

  FAQ Answers: {{{faqAnswers}}}

  Summary: `,
});

const summarizeFaqAnswersFlow = ai.defineFlow(
  {
    name: 'summarizeFaqAnswersFlow',
    inputSchema: SummarizeFaqAnswersInputSchema,
    outputSchema: SummarizeFaqAnswersOutputSchema,
  },
  async input => {
    const {output} = await summarizeFaqAnswersPrompt(input);
    return output!;
  }
);
