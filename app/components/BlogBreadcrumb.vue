<script setup lang="ts">
import { computed } from 'vue'
import { contentToneFromStableId } from '~/utils/content-tone-palette'
import {
  contentToneAccentText,
  contentToneFrameBorder,
} from '~/utils/content-tone-style'

const route = useRoute()
/** Tone follows the URL: changes when you navigate, still SSR/hydration-safe. */
const stripTone = computed(() => contentToneFromStableId(route.fullPath))
const stripBorderClass = computed(() => contentToneFrameBorder(stripTone.value))
const linkTextClass = computed(() => contentToneAccentText(stripTone.value))

export interface BlogBreadcrumbItem {
  label: string
  /** Omit on the current page segment */
  to?: string
}

defineProps<{
  items: BlogBreadcrumbItem[]
}>()
</script>

<template>
  <nav
    aria-label="Breadcrumb"
    class="not-prose sticky top-16 z-40 mb-8 w-full min-w-0 border-b border-dashed bg-base-100/90 py-2 text-left backdrop-blur-md"
    :class="stripBorderClass"
  >
    <div
      class="flex min-w-0 flex-wrap items-baseline gap-x-0.5 gap-y-1 font-mono text-xs leading-snug sm:text-sm"
    >
      <span class="mr-1 shrink-0 text-success select-none" aria-hidden="true"
        >$</span
      >
      <span class="mr-1 shrink-0 text-base-content/50 select-none">cd</span>
      <template v-for="(item, i) in items" :key="i">
        <span
          v-if="i > 0"
          class="shrink-0 px-0.5 text-base-content/35 select-none"
          aria-hidden="true"
          >/</span
        >
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          :class="[
            'link link-hover max-w-[min(100%,11rem)] truncate sm:max-w-[18rem]',
            linkTextClass,
          ]"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          v-else
          class="max-w-[min(100%,13rem)] truncate font-semibold text-base-content/90 sm:max-w-[22rem]"
          aria-current="page"
        >
          {{ item.label }}
        </span>
      </template>
    </div>
  </nav>
</template>
