<script lang="ts" setup>
const year = new Date().getFullYear()
const socialLinks = useSocialLinks()
</script>

<template>
  <footer
    class="not-prose mt-auto border-t-2 border-dashed border-nord-blue/45 bg-base-200/90 py-8 backdrop-blur-sm"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
    >
      <div class="min-w-0 space-y-3">
        <p
          class="font-mono text-[0.65rem] uppercase tracking-wider text-base-content/45"
        >
          <span class="text-success">$</span> cat footer.md
        </p>

        <div
          class="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-sm text-base-content/85"
        >
          <span class="text-base-content/40 select-none" aria-hidden="true"
            >/*</span
          >
          <span class="tabular-nums text-base-content/70">© {{ year }}</span>
          <NuxtLink
            to="/"
            class="link link-hover font-semibold text-nord-blue link-no-slide-anim"
          >
            HK
          </NuxtLink>
          <span class="text-base-content/40 select-none" aria-hidden="true"
            >*/</span
          >
        </div>

        <p
          class="max-w-md font-sans text-sm leading-relaxed text-base-content/60"
        >
          <span class="font-mono text-base-content/35">//</span>
          Copyright © {{ year }} — all rights reserved. Built with Nuxt, water,
          and questionable life choices.
        </p>
      </div>

      <nav
        class="flex flex-wrap items-center gap-2 lg:justify-end"
        aria-label="Social links"
      >
        <a
          v-for="item in socialLinks"
          :key="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-dashed border-base-content/20 transition-all duration-300 hover:border-solid link-no-slide-anim"
          :class="item.toneClass"
          :aria-label="item.label"
        >
          <component :is="item.icon" class="h-5 w-5 shrink-0" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped></style>
