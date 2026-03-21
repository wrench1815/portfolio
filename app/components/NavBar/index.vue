<script setup lang="ts">
import { RiMenu2Fill } from '@remixicon/vue'
import ThemeToggle from './ThemeToggle.vue'

const routeList = useRouteList()
</script>

<template>
  <nav
    aria-label="Primary"
    class="not-prose fixed top-0 right-0 left-0 z-50 border-dashed border-nord-blue/45 bg-base-100/90 backdrop-blur-md"
  >
    <div
      class="flex h-16 w-full items-center justify-between gap-3 px-4 sm:gap-4 xl:blog-content-inner"
    >
      <!-- Brand: same on mobile + desktop -->
      <NuxtLink
        to="/"
        class="group link-no-slide-anim flex min-w-0 shrink flex-col justify-center gap-0.5 font-mono leading-none"
        aria-label="Home — hardeepKumar"
      >
        <span
          class="text-[0.6rem] uppercase tracking-[0.2em] text-base-content/40"
        >
          namespace
        </span>
        <span
          class="text-base font-bold tracking-tight text-nord-blue group-hover:text-nord-frost sm:text-lg"
        >
          &lt;hardeepKumar /&gt;
        </span>
      </NuxtLink>

      <!-- Desktop: same link treatment as drawer (mobile menu) -->
      <div
        class="hidden min-w-0 flex-1 items-center justify-center md:flex md:px-4"
        role="list"
      >
        <div
          class="flex max-w-full flex-wrap items-center justify-center gap-2 font-mono text-sm sm:gap-3 sm:text-base"
        >
          <NuxtLink
            v-for="item in routeList"
            :key="item.to"
            role="listitem"
            :to="item.to"
            :aria-label="item.name"
            :title="item.name"
            class="link-no-slide-anim flex items-center gap-2 px-2 pb-0 pt-1 leading-none text-base-content/80 no-underline transition-colors duration-200 hover:border-solid hover:border-nord-blue/55 hover:text-nord-blue sm:px-3"
            active-class="border-b-solid border-b-success text-success"
          >
            <span class="opacity-55" aria-hidden="true">→</span>
            <span>{{ item.pathLabel }}</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Actions (mobile menu + theme — unchanged) -->
      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <ThemeToggle />

        <label
          for="mainDrawer"
          class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-base-content/20 text-base-content/80 transition-all duration-300 hover:border-nord-blue/50 hover:text-nord-blue hover:shadow-md hover:border-solid md:hidden"
          aria-label="Open menu"
        >
          <RiMenu2Fill class="h-5 w-5" />
        </label>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
