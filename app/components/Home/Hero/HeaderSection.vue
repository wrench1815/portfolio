<script setup lang="ts">
import { RiArrowDownSLine } from '@remixicon/vue'
import CardGrid from './CardGrid.vue'
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center pt-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Hero Section - programming themed like ThemeSection -->
      <div class="mb-16 animate-slide-up">
        <div class="text-sm mb-4 opacity-60">
          <span class="text-nord-green">$</span> cat hero.md
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-nord-blue">
          <span class="opacity-40">&lt;</span>This site exists because I got
          bored<span class="opacity-40"> /&gt;</span>
        </h1>
        <p
          class="text-lg md:text-xl opacity-80 !mx-auto !mb-8 text-base-content"
        >
          // Because shouting into the void is more fun when you have a website.
        </p>
      </div>

      <!-- Dum Cards -->
      <CardGrid />

      <!-- Scroll Indicator - terminal style -->
      <div
        class="flex flex-col items-center opacity-60 scroll-indicator text-sm"
      >
        <span class="mb-2"
          ><span class="text-nord-green">$</span> scroll --down</span
        >
        <RiArrowDownSLine class="w-6 h-6 animate-bounce text-nord-blue" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
