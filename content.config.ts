import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.{json,md}',
      schema: z
        .object({
          type: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          title: z.string().optional(),
          description: z.string().optional(),
          color: z.string().optional(),
          code: z.string().optional(),
          count: z.number().optional(),
          themeId: z.string().optional(),
          themeslug: z.string().optional(),
          topicId: z.string().optional(),
          postCount: z.number().optional(),
          slug: z.string().optional(),
          publishedAt: z.union([z.string(), z.date()]).optional(),
          readTime: z.string().optional(),
          author: z.string().optional(),
          category: z.string().optional(),
          body: z
            .object({
              type: z.string(),
              children: z.any(),
              toc: z.any(),
            })
            .optional(),
        })
        .passthrough(),
    }),

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
          }),
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
          }),
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
