<script lang="ts" setup>
import PageSection from '~/components/Section/PageSection.vue'
import HeroSection from '~/components/Section/HeroSection.vue'
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
  >
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-white mb-8">Component Test Page</h1>

      <!-- Test PageSection -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">PageSection Test</h2>
        <PageSection
          id="test-section"
          class="bg-white bg-opacity-10 rounded-lg"
        >
          <div class="text-white text-center">
            <h3 class="text-xl font-bold mb-2">PageSection Works!</h3>
            <p>This is a test of the PageSection component.</p>
          </div>
        </PageSection>
      </div>

      <!-- Test HeroSection -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">HeroSection Test</h2>
        <HeroSection />
      </div>

      <!-- Test Navigation -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">Navigation Test</h2>
        <NewNavigation />
      </div>

      <!-- Test Animated Backgrounds -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">
          Animated Backgrounds Test
        </h2>
        <div class="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
          <SimpleAnimatedBackground />
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-lg">Animated Background Test</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
