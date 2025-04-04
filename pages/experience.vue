<script lang="ts" setup>
const { data: experiences } = await useAsyncData('experiences', () =>
  queryCollection('experience').order('id', 'DESC').all()
)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="pb-4">Work Experience</h1>
    <Resume />

    <Experience :experiences="experiences" />

    <template v-if="experiences?.length === 0">
      <p>No projects found.</p>
    </template>
  </div>
</template>

<style scoped></style>
