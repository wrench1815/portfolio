<script setup lang="ts">
import { RiArrowDownSLine } from '@remixicon/vue'
import CardGrid from './CardGrid.vue'
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center pt-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Hero Section -->
      <div class="mb-16 animate-slide-up">
        <h1
          class="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-nord-blue via-nord-frost to-nord-green bg-clip-text text-transparent"
        >
          This site exists because I got bored
        </h1>
        <p class="text-xl md:text-2xl opacity-80 !mx-auto !mb-8">
          Because shouting into the void is more fun when you have a website.
        </p>
      </div>

      <!-- Dum Cards -->
      <CardGrid />

      <!-- Scroll Indicator -->
      <div class="flex flex-col items-center opacity-60 scroll-indicator">
        <span class="text-sm mb-2">Scroll to explore</span>
        <RiArrowDownSLine class="w-6 h-6 animate-bounce" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
