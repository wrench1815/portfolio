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
  },
})
