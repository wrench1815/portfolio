<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
  path: '/experience/',
  sort: [{ _id: -1, $numeric: true }],
}
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="pb-4">Work Experience</h1>
    <Resume />

    <ContentList :query="query">
      <template v-slot="{ list }">
        <Experience :experiences="list" />
      </template>

      <template #not-found>
        <p>No projects found.</p>
      </template>
    </ContentList>
  </div>
</template>

<style scoped></style>
