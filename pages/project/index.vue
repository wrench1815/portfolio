<script lang="ts" setup>
import type { ProjectCollectionItem } from '@nuxt/content'

const { data: projects } = await useAsyncData<ProjectCollectionItem[]>(
  'project',
  () => queryCollection('project').order('id', 'DESC').all()
)

useHead({
  title: 'Project',

  meta: [
    {
      name: 'description',
      content: "Various Projects that I've worked on over time.",
    },
    {
      name: 'keywords',
      content:
        'Hardeep Kumar, wrench1815, portfolio, Hardeep, website, Web Developer, Nuxt Developer, Vue JS Developer, Django Developer, FastAPI Developer',
    },

    // open graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hardeepkumar.in' },
    { property: 'og:title', content: 'Hardeep Kumar' },
    {
      property: 'og:description',
      content: "Various Projects that I've worked on over time.",
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1669702340/myself/94FKLoemnSP7ikhmOunf--3--2fao5_4x_at5csh.jpg',
    },
    {
      property: 'og:image:alt',
      content: 'Hardeep Kumar AI generated art image',
    },

    // twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://hardeepkumar.in' },
    { property: 'twitter:title', content: 'Hardeep Kumar' },
    {
      property: 'twitter:description',
      content: "Various Projects that I've worked on over time.",
    },
    {
      property: 'twitter:image',
      content:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1669702340/myself/94FKLoemnSP7ikhmOunf--3--2fao5_4x_at5csh.jpg',
    },
  ],
})
</script>

<template>
  <main class="container mx-auto px-4">
    <section class="prose-headings:mt-2 prose-headings:mb-2">
      <ProjectItem v-if="projects?.length" :projects="projects" />
    </section>
  </main>
</template>

<style scoped></style>
