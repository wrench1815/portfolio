<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLDivElement>()

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  // Clear any existing elements
  container.innerHTML = ''

  // Available Nord color palette
  const nordColors = [
    '--color-nord-blue',
    '--color-nord-frost',
    '--color-nord-green',
    '--color-nord-yellow',
    '--color-nord-red',
    '--color-primary',
    '--color-secondary',
    '--color-accent',
    '--color-info',
    '--color-success',
    '--color-warning',
  ]

  // Function to get random color from palette
  const getRandomColor = () => {
    return nordColors[Math.floor(Math.random() * nordColors.length)]
  }

  // Function to get random gradient
  const getRandomGradient = () => {
    const color1 = getRandomColor()
    const color2 = getRandomColor()
    return `linear-gradient(45deg, var(${color1}), var(${color2}))`
  }

  // Create floating geometric shapes with CSS animations
  const shapeCount = 10
  const shapes = []

  for (let i = 0; i < shapeCount; i++) {
    const shape = document.createElement('div')
    const isCircle = Math.random() > 0.5
    const randomColor = getRandomColor()

    shape.className = `absolute ${
      isCircle ? 'rounded-full' : 'rounded-lg'
    } opacity-5 border animate-float`

    // Apply random border color
    shape.style.borderColor = `var(${randomColor})`

    const size = 20 + Math.random() * 60
    shape.style.width = `${size}px`
    shape.style.height = `${size}px`
    shape.style.left = `${Math.random() * 100}%`
    shape.style.top = `${Math.random() * 100}%`
    shape.style.background = getRandomGradient()
    shape.style.animationDelay = `${Math.random() * 6}s`
    shape.style.animationDuration = `${6 + Math.random() * 4}s`

    container.appendChild(shape)
    shapes.push(shape)
  }

  // Create particle system with pure CSS
  const createParticle = () => {
    const particle = document.createElement('div')
    const randomColor = getRandomColor()

    particle.className =
      'absolute w-2 h-2 rounded-full opacity-30 animate-float'
    particle.style.backgroundColor = `var(${randomColor})`
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 2}s`
    particle.style.animationDuration = `${8 + Math.random() * 4}s`

    container.appendChild(particle)

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 12000)
  }

  // Create particles periodically
  const particleInterval = setInterval(createParticle, 2000)

  onUnmounted(() => {
    clearInterval(particleInterval)
  })
})
</script>

<template>
  <div
    ref="containerRef"
    class="absolute inset-0 overflow-hidden pointer-events-none"
    data-testid="animated-background"
  />
</template>
