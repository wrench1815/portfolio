<script setup lang="ts">
import CrtCurvedScreenOverlay from './CrtCurvedScreenOverlay.vue'
import CentralOrbitalAnimation from './CentralOrbitalAnimation.vue'
import FluidConicalAnimation from './FluidConicalAnimation.vue'
import GitGraphBackground from './GitGraphBackground.vue'
import MatrixRainBackground from './MatrixRainBackground.vue'
import ProgrammingCodeBackground from './ProgrammingCodeBackground.vue'
import ScrollAnimatedBackground from './ScrollAnimatedBackground.vue'
import TerminalStatusTicker from './TerminalStatusTicker.vue'
import SimpleAnimatedBackground from './SimpleAnimatedBackground.vue'
</script>

<template>
  <div class="fixed inset-0 z-[-1]">
    <div
      class="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    />
    <!-- <ScrollAnimatedBackground /> -->
    <!-- <SimpleAnimatedBackground /> -->
    <ProgrammingCodeBackground />
    <!-- <CrtCurvedScreenOverlay /> -->
    <!-- <MatrixRainBackground /> -->
    <!-- <GitGraphBackground /> -->
    <!-- <TerminalStatusTicker /> -->
    <!-- <FluidConicalAnimation /> -->
    <!-- <CentralOrbitalAnimation /> -->
  </div>
</template>
