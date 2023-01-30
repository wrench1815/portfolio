<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/project/',
  sort: [{ _id: -1, $numeric: true }],
};

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
});
</script>

<template>
  <main class="container mx-auto px-4">
    <section class="prose-headings:mt-2 prose-headings:mb-2">
      <!-- prose-p:prose-2xl -->
      <ContentList :query="query">
        <template v-slot="{ list }">
          <ProjectItem :projects="list" />
        </template>

        <template #not-found>
          <p>No projects found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped></style>
