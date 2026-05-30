<script lang="ts" setup>
defineProps<{
  social: {
    link: string
    username: string
    label: string
    linkClass?: string
  }
}>()
</script>

<template>
  <a
    :href="social.link"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-1.5 font-mono text-sm no-underline transition-colors duration-300 ease-in-out"
    :class="
      social.linkClass ?? 'link-slide-out-anim-secondary hover:text-secondary'
    "
    :aria-label="social.label"
  >
    <slot name="icon" />
    <span>@{{ social.username }}</span>
  </a>
</template>
