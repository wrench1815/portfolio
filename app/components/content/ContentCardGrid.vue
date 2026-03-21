<script setup lang="ts">
/**
 * Responsive “manifest” grid — programming shell style.
 *
 * Nest any number of `:::content-card-item` blocks (colors auto-assigned per slot order).
 *
 * ::content-card-grid{label="manifest"}
 * :::content-card-item
 * **A.** …
 * :::
 * ::
 */
const INDEX_KEY = 'portfolio:content-card-grid-index'

const props = withDefaults(
  defineProps<{
    /** Small mono caption above the grid */
    label?: string
  }>(),
  {
    label: 'manifest',
  },
)

const counter = { n: 0 }
provide(INDEX_KEY, counter)
</script>

<template>
  <div class="not-prose my-8">
    <div
      v-if="props.label"
      class="mb-3 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
    >
      {{ props.label }}
    </div>
    <div
      class="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,16rem),1fr))]"
    >
      <slot />
    </div>
  </div>
</template>
