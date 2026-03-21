<script setup lang="ts">
import type { PostTocLink } from '~/utils/post-toc'

const props = withDefaults(
  defineProps<{
    links: PostTocLink[]
    /** Narrow column (desktop sidebar): smaller type + tighter indent */
    dense?: boolean
  }>(),
  { dense: false },
)

function indentRem(depth: number) {
  const base = Math.max(2, Math.min(depth, 6))
  const step = props.dense ? 0.45 : 0.65
  const offset = props.dense ? 0.1 : 0.2
  return `${offset + (base - 2) * step}rem`
}
</script>

<template>
  <nav v-if="links.length" class="post-toc-nav" aria-label="On this page">
    <p
      class="text-base-content/50"
      :class="dense ? 'mb-2 text-[0.65rem]' : 'mb-3 text-xs'"
    >
      <span class="font-mono"
        ><span class="text-success">$</span> tree -L 2</span
      ><span class="font-sans"> outline/</span>
    </p>
    <ul class="space-y-0.5 leading-snug" :class="dense ? 'text-xs' : 'text-sm'">
      <li v-for="link in links" :key="link.id">
        <a
          :href="`#${link.id}`"
          class="post-toc-link block border-l-2 border-transparent py-1 font-sans text-base-content/90 transition-colors hover:border-error/55 link-no-slide-anim"
          :style="{ paddingLeft: indentRem(link.depth) }"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
