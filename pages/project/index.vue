<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/project/',
  sort: [{ _id: -1, $numeric: true }],
};
</script>

<template>
  <main class="container mx-auto px-4">
    <section
      class="prose max-w-none prose-headings:mt-2 prose-headings:mb-2 prose-p:font-serif prose-p:prose-2xl"
    >
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
