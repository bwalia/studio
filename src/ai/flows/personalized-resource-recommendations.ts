// src/ai/flows/personalized-resource-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized resource recommendations based on client skill level and DevOps focus.
 *
 * - getPersonalizedRecommendations - A function that generates personalized resource recommendations for a client.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  clientSkillLevel: z.string().describe('The skill level of the client (e.g., beginner, intermediate, expert).'),
  devOpsFocus: z.string().describe('The specific area of DevOps the client is focused on (e.g., CI/CD, automation, monitoring).'),
  availableResources: z.array(z.string()).describe('A list of available blog posts, videos, and training materials.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendedResources: z.array(z.string()).describe('A list of recommended resources tailored to the client.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert DevOps and SRE coach. Based on the client's skill level and DevOps focus, recommend the most relevant resources from the available list.

Client Skill Level: {{{clientSkillLevel}}}
DevOps Focus: {{{devOpsFocus}}}
Available Resources: {{#each availableResources}}{{{this}}}\n{{/each}}

Recommended Resources:`, 
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
