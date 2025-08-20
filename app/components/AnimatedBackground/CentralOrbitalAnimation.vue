<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()
const svgRef = ref<SVGElement>()

const time = ref(0)
const scrollY = ref(0)

const blobColors = computed(() => {
  if (theme.value === 'nordDark') {
    return {
      core: 'var(--color-nord-frost)',
      middle: 'var(--color-nord-blue)',
      outer: 'var(--color-nord-frost)',
    }
  }
  return {
    core: 'var(--color-nord-blue)',
    middle: 'var(--color-nord-frost)',
    outer: 'var(--color-nord-frost)',
  }
})

// Central blob shape that morphs and pulses
const blobPath = computed(() => {
  const baseSize = 25
  const pulse = Math.sin(time.value * 0.002) * 3
  const scrollInfluence = Math.sin(scrollY.value * 0.01) * 2
  const size = baseSize + pulse + scrollInfluence

  // Create organic blob shape with multiple control points
  const centerX = 160
  const centerY = 160
  const morph1 = Math.sin(time.value * 0.001) * 5
  const morph2 = Math.cos(time.value * 0.0015) * 4
  const morph3 = Math.sin(time.value * 0.0008) * 6

  return `
    M ${centerX + size + morph1} ${centerY}
    Q ${centerX + size * 0.7} ${centerY - size - morph2} ${centerX} ${
    centerY - size * 0.8 + morph3
  }
    Q ${centerX - size - morph1} ${centerY - size * 0.5} ${
    centerX - size * 0.9 - morph2
  } ${centerY}
    Q ${centerX - size * 0.6} ${centerY + size + morph3} ${centerX} ${
    centerY + size * 0.7 - morph1
  }
    Q ${centerX + size + morph2} ${centerY + size * 0.4} ${
    centerX + size + morph1
  } ${centerY}
    Z
  `
})

// Orbital rings around the blob
const orbitalRings = computed(() => [
  {
    radius: 50,
    color:
      theme.value === 'nordDark'
        ? 'var(--color-nord-frost)'
        : 'var(--color-nord-blue)',
    width: 1,
    opacity: 0.3,
    duration: 20,
    direction: 'normal',
  },
  {
    radius: 80,
    color:
      theme.value === 'nordDark'
        ? 'var(--color-nord-frost)'
        : 'var(--color-nord-frost)',
    width: 0.5,
    opacity: 0.2,
    duration: 30,
    direction: 'reverse',
  },
  {
    radius: 110,
    color:
      theme.value === 'nordDark'
        ? 'var(--color-nord-blue)'
        : 'var(--color-nord-frost)',
    width: 0.8,
    opacity: 0.15,
    duration: 40,
    direction: 'normal',
  },
])

// Small dots orbiting the blob in true 3D space
const spaceships = computed(() => {
  const ships = []
  const orbits = [50, 65, 80, 95, 110]
  const colors = [
    theme.value === 'nordDark'
      ? 'var(--color-nord-frost)'
      : 'var(--color-nord-blue)',
    theme.value === 'nordDark'
      ? 'var(--color-nord-frost)'
      : 'var(--color-nord-frost)',
    theme.value === 'nordDark'
      ? 'var(--color-nord-blue)'
      : 'var(--color-nord-frost)',
    theme.value === 'nordDark'
      ? 'var(--color-nord-frost)'
      : 'var(--color-nord-frost)',
  ]

  for (let i = 0; i < 15; i++) {
    const orbitIndex = i % 5
    const radius = orbits[orbitIndex]

    // Ensure radius is defined (it should always be since orbitIndex is 0-4 and orbits has 5 elements)
    if (radius === undefined) continue

    // 3D orbital motion - horizontal and vertical angles
    const horizontalAngle =
      i * 24 + time.value * 0.0006 * (1 + orbitIndex * 0.1)
    const verticalAngle = i * 18 + time.value * 0.0004 * (1 + orbitIndex * 0.05)

    // Calculate 3D position
    const x = 160 + Math.cos(horizontalAngle) * radius * Math.cos(verticalAngle)
    const y = 160 + Math.sin(horizontalAngle) * radius * Math.cos(verticalAngle)
    const z = Math.sin(verticalAngle) // -1 to 1, determines depth

    // Scale and opacity based on depth
    const isInFront = z > 0
    const depthFactor = Math.abs(z)
    const sizeMultiplier = isInFront
      ? 0.8 + depthFactor * 0.4
      : 0.3 + depthFactor * 0.3
    const opacityMultiplier = isInFront
      ? 0.7 + depthFactor * 0.3
      : 0.2 + depthFactor * 0.3

    ships.push({
      x,
      y,
      size: 1.2 * sizeMultiplier, // Small dots
      color: colors[i % colors.length],
      opacity: opacityMultiplier,
      duration: 25 + orbitIndex * 5,
      direction: i % 2 === 0 ? 'normal' : 'reverse',
      zIndex: isInFront ? Math.floor(z * 10) + 10 : Math.floor(z * 10) + 5,
      isInFront,
    })
  }

  // Sort by z-index so behind elements render first
  return ships.sort((a, b) => a.zIndex - b.zIndex)
})

// Energy lines connecting elements
const energyLines = computed(() => {
  const lines = []
  const centerX = 160
  const centerY = 160

  for (let i = 0; i < 4; i++) {
    const angle = i * 90 + time.value * 0.0005
    const length = 40 + Math.sin(time.value * 0.002 + i) * 10
    const endX = centerX + Math.cos(angle) * length
    const endY = centerY + Math.sin(angle) * length

    lines.push({
      path: `M ${centerX} ${centerY} Q ${
        centerX + Math.cos(angle) * length * 0.5
      } ${centerY + Math.sin(angle) * length * 0.5} ${endX} ${endY}`,
      color:
        theme.value === 'nordDark'
          ? 'var(--color-nord-frost)'
          : 'var(--color-nord-blue)',
      width: 0.5,
      opacity: 0.4 + Math.sin(time.value * 0.004 + i) * 0.2,
      delay: i * 0.5,
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
    class="fixed inset-0 z-[3] pointer-events-none flex items-center justify-center"
  >
    <svg ref="svgRef" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradient for the central blob -->
        <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" :stop-color="blobColors.core" stop-opacity="0.8" />
          <stop
            offset="50%"
            :stop-color="blobColors.middle"
            stop-opacity="0.4"
          />
          <stop
            offset="100%"
            :stop-color="blobColors.outer"
            stop-opacity="0.1"
          />
        </radialGradient>

        <!-- Glow filter for the blob -->
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Central pulsating blob -->
      <path
        :d="blobPath"
        fill="url(#blobGradient)"
        filter="url(#glow)"
        class="animate-pulse-slow"
      />

      <!-- Orbital rings/paths -->
      <circle
        v-for="(ring, index) in orbitalRings"
        :key="index"
        :cx="160"
        :cy="160"
        :r="ring.radius"
        fill="none"
        :stroke="ring.color"
        :stroke-width="ring.width"
        :opacity="ring.opacity"
        stroke-dasharray="4 8"
        class="animate-spin-slow"
        :style="{
          animationDuration: `${ring.duration}s`,
          animationDirection: ring.direction,
        }"
      />

      <!-- Small dots orbiting in true 3D -->
      <g v-for="(dot, index) in spaceships" :key="index">
        <!-- Dot body -->
        <circle
          :cx="dot.x"
          :cy="dot.y"
          :r="dot.size"
          :fill="dot.color"
          :opacity="dot.opacity"
        />

        <!-- Subtle glow for front dots only -->
        <circle
          v-if="dot.isInFront"
          :cx="dot.x"
          :cy="dot.y"
          :r="dot.size * 2"
          :fill="dot.color"
          :opacity="dot.opacity * 0.2"
        />
      </g>

      <!-- Connecting energy lines -->
      <g v-for="(line, index) in energyLines" :key="index">
        <path
          :d="line.path"
          :stroke="line.color"
          :stroke-width="line.width"
          fill="none"
          :opacity="line.opacity"
          class="animate-pulse"
          :style="{ animationDelay: `${line.delay}s` }"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
