<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div
      class="homeCard relative overflow-hidden group"
      style="animation-delay: 0s; border-style: dashed"
    >
      <div class="text-xs text-nord-green mb-3 opacity-80">
        <span class="opacity-60">$</span> hover
      </div>
      <p
        class="relative text-sm my-auto min-h-[1.5rem] flex items-center justify-center"
      >
        <span class="transition-all duration-300 group-hover:opacity-0"
          >// Look, a card. Hover it.</span
        >
        <span
          class="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 text-nord-frost"
          >// Nothing happens.</span
        >
      </p>
      <div
        class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 text-nord-blue"
      >
        { }
      </div>
    </div>

    <div
      class="homeCard relative overflow-hidden group"
      style="animation-delay: 0.2s; border-style: dashed"
    >
      <div class="text-xs text-nord-yellow mb-3 opacity-80">
        <span class="opacity-60">$</span> expect
      </div>
      <p
        class="opacity-0 my-auto transition-all duration-300 group-hover:opacity-80 text-sm"
      >
        // What did you expect, innovation?
      </p>
      <div
        class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 text-nord-blue"
      >
        { }
      </div>
    </div>

    <div
      class="homeCard relative overflow-hidden group"
      style="animation-delay: 0.4s; border-style: dashed"
    >
      <div class="text-xs text-nord-frost mb-3 opacity-80">
        <span class="opacity-60">$</span> certified
      </div>
      <p class="opacity-80 text-sm">
        // Certified portfolio material<sup class="text-xs">™</sup>
      </p>
      <div
        class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 text-nord-blue"
      >
        { }
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "../../../assets/css/tailwind.css";

.homeCard {
  @apply p-6 rounded-xl border-2 border-nord-blue/30 hover:border-nord-blue/60 hover:shadow-xl hover:shadow-nord-blue/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-in-out animate-slide-up min-h-48 bg-base-200 flex flex-col items-center justify-center;
}
</style>
