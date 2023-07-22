import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        date: z
            .string()
            .or(z.date())
            .transform((raw) => new Date(raw)),
        lang: z.enum(['en', 'ja']).optional().default('ja')
    })
})

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        bio: z.string(),
        portfolio: z.string().url().optional()
    })
})

export const collections = { blog, authors }
