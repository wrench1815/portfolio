<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div
      class="homeCard relative overflow-hidden group"
      style="animation-delay: 0s"
    >
      <p
        class="opacity-80 my-auto transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4"
      >
        Look, a card. Hover it.
      </p>
      <p
        class="opacity-0 my-auto absolute transition-all duration-300 group-hover:opacity-80 group-hover:translate-y-0 translate-y-4"
      >
        Nothing happens.
      </p>
    </div>

    <div
      class="homeCard relative overflow-hidden group"
      style="animation-delay: 0.2s"
    >
      <p
        class="opacity-0 my-auto transition-all duration-300 group-hover:opacity-80"
      >
        What did you expect, innovation?
      </p>
    </div>

    <div class="homeCard" style="animation-delay: 0.4s">
      <p class="opacity-80">
        Certified portfolio material<sup class="text-xs">™</sup>
      </p>
    </div>
  </div>
</template>

<style scoped>
@reference "../../assets/css/tailwind.css";

.homeCard {
  @apply p-6 rounded-xl border border-nord-blue/55 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out animate-slide-up card min-h-48 bg-base-200 flex items-center justify-center;
}
</style>
