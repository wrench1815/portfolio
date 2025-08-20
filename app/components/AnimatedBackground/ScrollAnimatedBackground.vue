<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Point {
  x: number
  y: number
  baseX: number
  baseY: number
  id: string
  scale?: number
}

interface Line {
  start: Point
  end: Point
  opacity: number
  id: string
}

const canvasRef = ref<HTMLCanvasElement>()
const scrollProgress = ref(0)
const pointsRef = ref<Point[]>([])
const linesRef = ref<Line[]>([])
let animationId: number

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas size
  const updateCanvasSize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  updateCanvasSize()
  window.addEventListener('resize', updateCanvasSize)

  // Initialize points in a grid pattern
  const initializePoints = () => {
    const points: Point[] = []
    const cols = Math.floor(window.innerWidth / 150)
    const rows = Math.floor(window.innerHeight / 150)

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = (i * window.innerWidth) / cols
        const y = (j * window.innerHeight) / rows
        points.push({
          x,
          y,
          baseX: x,
          baseY: y,
          id: `point-${i}-${j}`,
          scale: 1,
        })
      }
    }
    pointsRef.value = points
  }

  // Create connections between nearby points
  const createLines = () => {
    const lines: Line[] = []
    const points = pointsRef.value
    const maxDistance = 200

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const pointI = points[i]
        const pointJ = points[j]

        if (!pointI || !pointJ) continue

        const distance = Math.sqrt(
          Math.pow(pointI.x - pointJ.x, 2) + Math.pow(pointI.y - pointJ.y, 2)
        )

        if (distance < maxDistance) {
          lines.push({
            start: pointI,
            end: pointJ,
            opacity: 0,
            id: `line-${i}-${j}`,
          })
        }
      }
    }
    linesRef.value = lines
  }

  // Handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = Math.min(scrollY / maxScroll, 1)
    scrollProgress.value = progress
  }

  // Animation loop
  const animate = () => {
    if (!ctx || !canvas) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update points based on scroll
    pointsRef.value.forEach((point, index) => {
      const waveOffset =
        Math.sin(scrollProgress.value * Math.PI * 4 + index * 0.1) * 20
      point.x = point.baseX + waveOffset
      point.y = point.baseY + scrollProgress.value * 50
    })

    // Draw and animate lines
    linesRef.value.forEach((line) => {
      const distance = Math.sqrt(
        Math.pow(line.start.x - line.end.x, 2) +
          Math.pow(line.start.y - line.end.y, 2)
      )

      // Calculate opacity based on scroll and distance
      const maxOpacity = Math.min(scrollProgress.value * 2, 1)
      const distanceOpacity = 1 - distance / 200
      line.opacity = maxOpacity * distanceOpacity * 0.8

      if (line.opacity > 0.1) {
        // Draw glowing line
        ctx.strokeStyle = `rgba(129, 161, 193, ${line.opacity})`
        ctx.lineWidth = 1
        ctx.shadowColor = '#81a1c1'
        ctx.shadowBlur = scrollProgress.value * 15

        ctx.beginPath()
        ctx.moveTo(line.start.x, line.start.y)
        ctx.lineTo(line.end.x, line.end.y)
        ctx.stroke()
      }
    })

    // Draw points with enhanced glow based on scroll
    pointsRef.value.forEach((point) => {
      const pointOpacity = Math.min(scrollProgress.value * 1.5, 1)

      if (pointOpacity > 0.1) {
        // Main point
        ctx.fillStyle = `rgba(136, 192, 208, ${pointOpacity})`
        ctx.shadowColor = '#88c0d0'
        ctx.shadowBlur = scrollProgress.value * 20

        ctx.beginPath()
        ctx.arc(point.x, point.y, 2 + scrollProgress.value * 2, 0, Math.PI * 2)
        ctx.fill()

        // Outer glow ring
        if (scrollProgress.value > 0.3) {
          ctx.strokeStyle = `rgba(136, 192, 208, ${pointOpacity * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(
            point.x,
            point.y,
            8 + scrollProgress.value * 5,
            0,
            Math.PI * 2
          )
          ctx.stroke()
        }
      }
    })

    // Create particle effects at high scroll
    if (scrollProgress.value > 0.6) {
      const particleCount = Math.floor(scrollProgress.value * 30)
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const opacity = Math.random() * scrollProgress.value * 0.6

        // Multiple colored particles
        const colors: string[] = [
          `rgba(163, 190, 140, ${opacity})`, // Nord green
          `rgba(191, 97, 106, ${opacity})`, // Nord red
          `rgba(235, 203, 139, ${opacity})`, // Nord yellow
          `rgba(129, 161, 193, ${opacity})`, // Nord blue
        ]

        const selectedColor =
          colors[Math.floor(Math.random() * colors.length)] ||
          colors[0] ||
          `rgba(129, 161, 193, ${opacity})`
        ctx.fillStyle = selectedColor
        ctx.shadowColor = selectedColor
        ctx.shadowBlur = 15 + scrollProgress.value * 10

        ctx.beginPath()
        ctx.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Add energy waves when scrolling
    if (scrollProgress.value > 0.4) {
      const waveCount = 3
      for (let i = 0; i < waveCount; i++) {
        const waveY =
          (canvas.height / waveCount) * i + scrollProgress.value * 100
        const waveOpacity = Math.sin(scrollProgress.value * Math.PI) * 0.3

        ctx.strokeStyle = `rgba(129, 161, 193, ${waveOpacity})`
        ctx.lineWidth = 2
        ctx.shadowColor = '#81a1c1'
        ctx.shadowBlur = 20

        ctx.beginPath()
        ctx.moveTo(0, waveY)

        for (let x = 0; x < canvas.width; x += 20) {
          const waveHeight =
            Math.sin((x + scrollProgress.value * 200) * 0.01) * 30
          ctx.lineTo(x, waveY + waveHeight)
        }
        ctx.stroke()
      }
    }

    animationId = requestAnimationFrame(animate)
  }

  // Initialize
  initializePoints()
  createLines()

  // Start animation
  animate()

  // Add scroll listener
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('resize', updateCanvasSize)
    window.removeEventListener('scroll', handleScroll)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none z-0"
    style="background: transparent"
    data-testid="scroll-animated-background"
  />
</template>
