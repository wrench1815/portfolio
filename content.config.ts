import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    project: defineCollection({
      type: 'data',
      source: '**/project/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        technology: z.array(
          z.object({
            name: z.string(),
            link: z.string().url(),
          })
        ),
        github: z.string().url(),
        live: z.string().url().optional(),
      }),
    }),

    experience: defineCollection({
      type: 'data',
      source: '**/experience/*.json',
      schema: z.object({
        job_title: z.string(),
        description: z.string(),
        technology: z.array(
          z.object({
            name: z.string(),
            link: z.string().url(),
          })
        ),
        employer: z.string(),
        employer_website: z.string().url(),
        employer_address: z.string(),
        job_type: z.string(),
        start_date: z.string().datetime(),
        end_date: z.string().datetime(),
      }),
    }),
  },
})
