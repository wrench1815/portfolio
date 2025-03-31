<script lang="ts" setup>
// import { type IExperience } from '~/types/Experience'
const props = defineProps<{
  experiences: [any]
}>()
</script>

<template>
  <main class="relative border-l-2 border-primary">
    <template v-for="item in props.experiences">
      <ExperienceItem :experience="item" />
    </template>
  </main>
</template>

<style scoped></style>
