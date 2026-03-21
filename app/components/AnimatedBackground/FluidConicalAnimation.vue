<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()
const svgRef = ref<SVGElement>()

const scrollY = ref(0)
const time = ref(0)

const gradientColors = computed(() => {
  if (theme.value === 'nordDark') {
    return {
      start: 'var(--color-nord-frost)',
      middle: 'var(--color-nord-blue)',
      end: 'var(--color-nord-dark-lighter)',
    }
  }
  return {
    start: 'var(--color-nord-blue)',
    middle: 'var(--color-nord-frost)',
    end: 'var(--color-nord-text-dark)',
  }
})

// Main conical path that morphs with scroll
const mainPath = computed(() => {
  const baseY = 50 + scrollY.value * 0.1
  const waveOffset = Math.sin(time.value * 0.002) * 20
  const scrollInfluence = Math.min(scrollY.value * 0.001, 1)

  return `
    M 300 ${baseY}
    Q ${320 + waveOffset} ${150 + scrollInfluence * 50} 340 ${
    300 + scrollInfluence * 100
  }
    Q ${360 + waveOffset * 0.7} ${450 + scrollInfluence * 80} 380 ${
    600 + scrollInfluence * 120
  }
    Q ${390 + waveOffset * 0.5} ${700 + scrollInfluence * 50} 400 800
    L 400 0
    Z
  `
})

// Floating circles that respond to scroll
const floatingCircles = computed(() => {
  const circles = []
  for (let i = 0; i < 8; i++) {
    const scrollOffset = (scrollY.value * 0.05 * (i + 1)) % 800
    circles.push({
      x: 320 + Math.sin(time.value * 0.001 + i) * 30,
      y: (100 + i * 100 - scrollOffset) % 800,
      r: 3 + Math.sin(time.value * 0.002 + i) * 2,
      color:
        theme.value === 'nordDark'
          ? 'var(--color-nord-frost)'
          : 'var(--color-nord-blue)',
      opacity: 0.3 + Math.sin(time.value * 0.003 + i) * 0.2,
      delay: i * 0.2,
      duration: 3 + (i % 3),
    })
  }
  return circles
})

// Flowing curved lines
const flowingLines = computed(() => {
  const lines = []
  for (let i = 0; i < 5; i++) {
    const scrollOffset = (scrollY.value * 0.03 * (i + 1)) % 800
    const waveX = Math.sin(time.value * 0.001 + i) * 15
    lines.push({
      path: `
        M ${330 + waveX} ${100 + i * 150 - scrollOffset}
        Q ${350 + waveX} ${150 + i * 150 - scrollOffset} ${340 + waveX} ${
        200 + i * 150 - scrollOffset
      }
        Q ${330 + waveX} ${250 + i * 150 - scrollOffset} ${360 + waveX} ${
        300 + i * 150 - scrollOffset
      }
      `,
      color:
        theme.value === 'nordDark'
          ? 'var(--color-nord-text-dark)'
          : 'var(--color-nord-dark-lighter)',
      width: 1 + Math.sin(time.value * 0.002 + i) * 0.5,
      opacity: 0.2 + Math.sin(time.value * 0.004 + i) * 0.15,
      delay: i * 0.5,
      duration: 4 + (i % 2),
    })
  }
  return lines
})

let animationFrame: number

const updateAnimation = () => {
  time.value = Date.now()
  animationFrame = requestAnimationFrame(updateAnimation)
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateAnimation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <div
    class="fixed top-0 right-0 w-96 h-screen z-[5] overflow-hidden pointer-events-none"
  >
    <svg
      ref="svgRef"
      class="w-full h-full"
      viewBox="0 0 400 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="fluidGradient" cx="50%" cy="0%" r="100%">
          <stop
            offset="0%"
            :stop-color="gradientColors.start"
            stop-opacity="0.4"
          />
          <stop
            offset="30%"
            :stop-color="gradientColors.middle"
            stop-opacity="0.2"
          />
          <stop
            offset="100%"
            :stop-color="gradientColors.end"
            stop-opacity="0.05"
          />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <!-- Main conical shape -->
      <path
        :d="mainPath"
        fill="url(#fluidGradient)"
        filter="url(#blur)"
        class="animate-pulse"
      />

      <!-- Secondary flowing elements -->
      <circle
        v-for="(circle, index) in floatingCircles"
        :key="index"
        :cx="circle.x"
        :cy="circle.y"
        :r="circle.r"
        :fill="circle.color"
        :opacity="circle.opacity"
        class="animate-float"
        :style="{
          animationDelay: `${circle.delay}s`,
          animationDuration: `${circle.duration}s`,
        }"
      />

      <!-- Flowing lines -->
      <path
        v-for="(line, index) in flowingLines"
        :key="index"
        :d="line.path"
        :stroke="line.color"
        :stroke-width="line.width"
        :opacity="line.opacity"
        fill="none"
        class="animate-flow"
        :style="{
          animationDelay: `${line.delay}s`,
          animationDuration: `${line.duration}s`,
        }"
      />
    </svg>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.1);
  }
}

@keyframes flow {
  0% {
    stroke-dasharray: 0 100;
  }
  50% {
    stroke-dasharray: 50 50;
  }
  100% {
    stroke-dasharray: 100 0;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-flow {
  animation: flow 4s ease-in-out infinite;
}
</style>
