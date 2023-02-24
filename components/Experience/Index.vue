<script lang="ts" setup>
import { IExperience } from '../../types/Experience'

const props = defineProps<{
  experiences: [IExperience]
}>()
</script>

<template>
  <main class="grid gap-4 grid-cols-1 md:grid-cols-2">
    <div v-for="item in props.experiences">
      <ExperienceItem :experience="item" />
    </div>
  </main>
</template>

<style scoped></style>
