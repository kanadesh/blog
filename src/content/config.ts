import { defineCollection, z } from 'astro:content'
import { countries, langs, pronouns } from '../lib/data'

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
        lang: z
            .enum([Object.keys(langs)[0], ...Object.keys(langs).slice(1)])
            .default('en'),
        author: z.string().default('kanadesh')
    })
})

const authors = defineCollection({
    schema: z.object({
        name: z.string(),
        from: z
            .enum([
                Object.keys(countries)[0],
                ...Object.keys(countries).slice(1)
            ])
            .default('us'),
        pronoun: z
            .enum([Object.keys(pronouns)[0], ...Object.keys(pronouns).slice(1)])
            .default('him')
    })
})

export const collections = { blog, authors }
