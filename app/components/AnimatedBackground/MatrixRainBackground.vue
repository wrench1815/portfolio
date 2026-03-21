<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

/** Match site-wide `transition-* duration-300` so canvas work runs after theme settles */
const THEME_SYNC_MS = 300

const themeFading = ref(false)

function parseColorToRgb(value: string): [number, number, number] {
  const s = value.trim()
  if (s.startsWith('#')) {
    const h = s.slice(1)
    if (h.length === 6) {
      return [
        Number.parseInt(h.slice(0, 2), 16),
        Number.parseInt(h.slice(2, 4), 16),
        Number.parseInt(h.slice(4, 6), 16),
      ]
    }
  }
  const m = s.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i)
  if (m) {
    return [Number(m[1]), Number(m[2]), Number(m[3])]
  }
  return [236, 239, 244]
}

function readCssRgb(varName: string, fallback: [number, number, number]) {
  if (typeof document === 'undefined') return fallback
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
  if (!raw) return fallback
  return parseColorToRgb(raw)
}

const CHARSET =
  'ァアィイゥウェエォオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01ヴヵヶ゛゜' +
  'アイウエオガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ' +
  '<>{}[]/\\;:$#@&*+-=?!%^~`|' +
  '0123456789ABCDEF'

const BASE_FALLBACK: [number, number, number] = [236, 239, 244]
const HEAD_FALLBACK: [number, number, number] = [163, 190, 140]

/** Palette sampled per column; each column’s phase drifts so its color shifts over time */
const RAIN_COLOR_VARS = [
  '--color-success',
  '--color-primary',
  '--color-accent',
  '--color-secondary',
  '--color-info',
  '--color-warning',
  '--color-neutral',
  '--color-error',
] as const

let rafId = 0
let themeSettleTimer: number | null = null
let removeResize: (() => void) | null = null
let disconnectTheme: (() => void) | null = null
let stopLoop = false

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  stopLoop = false

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const fontSize = 15
  let columns = 0
  const drops: number[] = []
  const speeds: number[] = []
  /** Position along palette ring; advances each frame → smooth color drift per column */
  const columnPhase: number[] = []
  const columnColorDrift: number[] = []

  let baseRgb: [number, number, number] = [...BASE_FALLBACK]
  let headRgb: [number, number, number] = [...HEAD_FALLBACK]
  let headColorPalette: [number, number, number][] = []

  function refreshCachedColors() {
    baseRgb = readCssRgb('--color-base-100', BASE_FALLBACK)
    headRgb = readCssRgb('--color-success', HEAD_FALLBACK)
    headColorPalette = RAIN_COLOR_VARS.map((v) => readCssRgb(v, headRgb))
  }

  function rgbAlongPalette(phase: number): [number, number, number] {
    const pal = headColorPalette
    const n = pal.length
    if (n === 0) return headRgb
    if (n === 1) return pal[0] ?? headRgb
    const seg = phase % n
    const i0 = Math.floor(seg) % n
    const i1 = (i0 + 1) % n
    const t = seg - Math.floor(seg)
    const a = pal[i0] ?? headRgb
    const b = pal[i1] ?? headRgb
    return [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
    ]
  }

  function layout() {
    const w = window.innerWidth
    const h = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const nextCols = Math.max(1, Math.ceil(w / fontSize))
    if (nextCols !== columns) {
      columns = nextCols
      drops.length = 0
      speeds.length = 0
      columnPhase.length = 0
      columnColorDrift.length = 0
      const paletteSpan = RAIN_COLOR_VARS.length
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -80
        /* ~2.5× slower than before */
        speeds[i] = 0.2 + Math.random() * 0.32
        columnPhase[i] = Math.random() * paletteSpan
        columnColorDrift[i] = 0.0035 + Math.random() * 0.0055
      }
    }
  }

  function drawStatic() {
    layout()
    const w = window.innerWidth
    const h = window.innerHeight
    ctx.fillStyle = `rgba(${baseRgb[0]},${baseRgb[1]},${baseRgb[2]},0.06)`
    ctx.fillRect(0, 0, w, h)
    ctx.font = `600 ${fontSize}px "Fira Code", ui-monospace, monospace`
    const t = performance.now() * 0.000025
    for (let i = 0; i < columns; i++) {
      const ch =
        CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? '0'
      const x = i * fontSize
      const y = ((Math.random() * h) / fontSize) * fontSize
      const rgb = rgbAlongPalette(t + i * 0.85)
      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.12)`
      ctx.fillText(ch, x, y)
    }
  }

  function tick() {
    if (stopLoop) return

    const w = window.innerWidth
    const h = window.innerHeight

    ctx.fillStyle = `rgba(${baseRgb[0]},${baseRgb[1]},${baseRgb[2]},0.1)`
    ctx.fillRect(0, 0, w, h)

    ctx.font = `600 ${fontSize}px "Fira Code", ui-monospace, monospace`

    for (let i = 0; i < columns; i++) {
      columnPhase[i] = (columnPhase[i] ?? 0) + (columnColorDrift[i] ?? 0.004)
      const rgb = rgbAlongPalette(columnPhase[i] ?? 0)

      const ch =
        CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? '0'
      const x = i * fontSize
      const y = drops[i] * fontSize

      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.72)`
      ctx.fillText(ch, x, y)

      if (y > h && Math.random() > 0.985) {
        drops[i] = Math.random() * -30
      } else {
        drops[i] += speeds[i]
      }
    }

    rafId = requestAnimationFrame(tick)
  }

  const onResize = () => {
    layout()
  }

  window.addEventListener('resize', onResize)
  removeResize = () => window.removeEventListener('resize', onResize)

  layout()
  refreshCachedColors()

  /**
   * Align with global `duration-300`: fade matrix out, refresh after 300ms once
   * CSS variables have settled, clear stale trail, fade back — avoids painting
   * during the rest of the page’s color transition (main jank source).
   * Static / reduced-motion matrix: same delay, no opacity animation.
   */
  function scheduleThemeReaction() {
    if (themeSettleTimer !== null) {
      clearTimeout(themeSettleTimer)
      themeSettleTimer = null
    }

    const bridgeOpacity = !reduced
    if (bridgeOpacity) {
      themeFading.value = true
    }

    themeSettleTimer = window.setTimeout(() => {
      themeSettleTimer = null
      if (stopLoop) return
      refreshCachedColors()
      const w = window.innerWidth
      const h = window.innerHeight
      if (reduced) {
        drawStatic()
      } else {
        ctx.fillStyle = `rgb(${baseRgb[0]},${baseRgb[1]},${baseRgb[2]})`
        ctx.fillRect(0, 0, w, h)
      }
      if (bridgeOpacity) {
        requestAnimationFrame(() => {
          themeFading.value = false
        })
      }
    }, THEME_SYNC_MS)
  }

  const themeObserver = new MutationObserver(scheduleThemeReaction)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
  disconnectTheme = () => themeObserver.disconnect()

  if (reduced) {
    drawStatic()
  } else {
    rafId = requestAnimationFrame(tick)
  }
})

onUnmounted(() => {
  stopLoop = true
  cancelAnimationFrame(rafId)
  if (themeSettleTimer !== null) {
    clearTimeout(themeSettleTimer)
    themeSettleTimer = null
  }
  removeResize?.()
  removeResize = null
  disconnectTheme?.()
  disconnectTheme = null
})
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
    :class="themeFading ? 'opacity-0' : 'opacity-40'"
    aria-hidden="true"
  >
    <canvas ref="canvasRef" class="block h-full w-full" />
  </div>
</template>
