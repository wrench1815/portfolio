<script lang="ts" setup>
const props = defineProps<{
  social: {
    link: string
    username: string
    // icon: string
  }
}>()
</script>

<template>
  <!-- Start:Social Link -->
  <a
    :href="social.link"
    target="_blank"
    class="transition-all duration-300 ease-in-out hover:text-secondary hover:after:w-full hover:after:bg-secondary"
  >
    <span class="font-serif flex items-center gap-1">
      <slot name="icon" /> @{{ social.username }}
    </span>
  </a>
  <!-- End:Social Link -->
</template>

<style scoped></style>
