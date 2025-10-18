'use server';

import { getTechInsights, GetTechInsightsInput } from '@/ai/flows/ai-assisted-tech-insights';

export async function fetchAiInsightAction(input: GetTechInsightsInput) {
  try {
    const result = await getTechInsights(input);
    return result;
  } catch (error) {
    console.error('Error fetching AI insight:', error);
    return { insight: 'Sorry, I could not fetch an insight at this time.' };
  }
}
