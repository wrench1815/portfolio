<script setup lang="ts">
import CentralOrbitalAnimation from './CentralOrbitalAnimation.vue'
import FluidConicalAnimation from './FluidConicalAnimation.vue'
import ScrollAnimatedBackground from './ScrollAnimatedBackground.vue'
import SimpleAnimatedBackground from './SimpleAnimatedBackground.vue'
</script>

<template>
  <div class="fixed inset-0 z-0">
    <div
      class="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    />
    <ScrollAnimatedBackground />
    <SimpleAnimatedBackground />
    <FluidConicalAnimation />
    <CentralOrbitalAnimation />
  </div>
</template>
