'use server';

/**
 * @fileOverview An AI assistant that provides insights and best practices about software engineering technologies.
 *
 * - getTechInsights - A function that retrieves AI-driven insights and best practices for software engineering technologies.
 * - GetTechInsightsInput - The input type for the getTechInsights function.
 * - GetTechInsightsOutput - The return type for the getTechInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetTechInsightsInputSchema = z.object({
  techStack: z
    .string()
    .describe(
      'A comma-separated list of technologies used in the software engineering project.'
    ),
  userQuery: z
    .string()
    .describe(
      'The user query or context for which technology insights are needed.'
    ),
});
export type GetTechInsightsInput = z.infer<typeof GetTechInsightsInputSchema>;

const GetTechInsightsOutputSchema = z.object({
  insight: z.string().describe('AI-driven insights and best practices.'),
});
export type GetTechInsightsOutput = z.infer<typeof GetTechInsightsOutputSchema>;

export async function getTechInsights(input: GetTechInsightsInput): Promise<GetTechInsightsOutput> {
  return getTechInsightsFlow(input);
}

const techInsightsPrompt = ai.definePrompt({
  name: 'techInsightsPrompt',
  input: {schema: GetTechInsightsInputSchema},
  output: {schema: GetTechInsightsOutputSchema},
  prompt: `You are an AI assistant providing insights and best practices for software engineering technologies.

  Given the following tech stack and user query, determine if providing insights is relevant.
  If relevant, provide a concise and helpful insight related to the tech stack and query.
  If not relevant, respond with 'No specific insights for this query'.

  Tech Stack: {{{techStack}}}
  User Query: {{{userQuery}}}

  Insight:`,
});

const getTechInsightsFlow = ai.defineFlow(
  {
    name: 'getTechInsightsFlow',
    inputSchema: GetTechInsightsInputSchema,
    outputSchema: GetTechInsightsOutputSchema,
  },
  async input => {
    const {output} = await techInsightsPrompt(input);
    return output!;
  }
);
