<script setup lang="ts">
import { RiMouseFill, RiMouseLine } from '@remixicon/vue'

/**
 * Remix mouse icon at the real pointer + dashed ring that lags behind.
 * Set `customCursor` false to keep the system cursor and hide the icon.
 */
const props = withDefaults(
  defineProps<{
    /** When false, system cursor stays visible and no icon is shown. */
    customCursor?: boolean
    /** `line` / `fill` — Remix Icon mouse variants. */
    mouseVariant?: 'line' | 'fill'
    /** Icon box size (px); passed to Remix `size` and used for layout. */
    cursorIconSize?: number
    /** Nudge from centered position (px); icon center = pointer by default. */
    iconOffsetX?: number
    iconOffsetY?: number

    pressTone?:
      | 'accent'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
  }>(),
  {
    customCursor: true,
    mouseVariant: 'line',
    cursorIconSize: 28,
    iconOffsetX: 0,
    iconOffsetY: 0,
    pressTone: 'success',
  },
)

const MouseIcon = computed(() =>
  props.mouseVariant === 'fill' ? RiMouseFill : RiMouseLine,
)

/** Full class strings so Tailwind keeps utilities. */
const PRESS_TEXT: Record<NonNullable<typeof props.pressTone>, string> = {
  accent: 'text-accent',
  secondary: 'text-secondary',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

const PRESS_BORDER: Record<NonNullable<typeof props.pressTone>, string> = {
  accent: 'border-accent',
  secondary: 'border-secondary',
  info: 'border-info',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
}

const iconToneClass = computed(() =>
  pressed.value ? PRESS_TEXT[props.pressTone] : 'text-primary',
)

const ringBorderToneClass = computed(() =>
  pressed.value ? PRESS_BORDER[props.pressTone] : 'border-primary',
)

const hideBrowserCursor = computed(() => props.customCursor)

/**
 * Huge dashed ring follows the pointer with slight lag; solid while pressed.
 * After 3s without movement, shrinks to a small ring until the pointer moves again
 * or the button is held down (pressed = big again).
 * Off when primary pointer is coarse or motion is reduced.
 */
const FOLLOW_SMOOTHING = 0.075
const IDLE_MS = 3000

const HUGE_RING_VW = 100
const HUGE_RING_MAX_REM = 15
const IDLE_RING_REM = 3
/** How long the ring takes to grow / shrink when idle state changes (ms). */
const RING_SCALE_TRANSITION_MS = 500

const enabled = ref(false)
const targetX = ref(0)
const targetY = ref(0)
const iconX = ref(0)
const iconY = ref(0)
const x = ref(0)
const y = ref(0)
const pressed = ref(false)
const visible = ref(false)
const isIdle = ref(false)
/** Animated ring diameter (rem); lerped when idle / active changes. */
const ringSizeRem = ref(HUGE_RING_MAX_REM)

type Ripple = { id: number; x: number; y: number }
const ripples = ref<Ripple[]>([])
let rippleSeq = 0

function spawnRipple(e: PointerEvent) {
  if (!enabled.value) return
  ripples.value = [
    ...ripples.value,
    { id: ++rippleSeq, x: e.clientX, y: e.clientY },
  ]
}

function removeRipple(id: number) {
  ripples.value = ripples.value.filter((r) => r.id !== id)
}

function targetRingRem() {
  return !isIdle.value || pressed.value ? HUGE_RING_MAX_REM : IDLE_RING_REM
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

let sizeAnimRaf = 0

function animateRingSize() {
  if (sizeAnimRaf) cancelAnimationFrame(sizeAnimRaf)

  const from = ringSizeRem.value
  const to = targetRingRem()
  if (Math.abs(from - to) < 0.001) return

  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min((now - start) / RING_SCALE_TRANSITION_MS, 1)
    ringSizeRem.value = from + (to - from) * easeInOutCubic(t)
    if (t < 1) sizeAnimRaf = requestAnimationFrame(step)
    else {
      ringSizeRem.value = to
      sizeAnimRaf = 0
    }
  }
  sizeAnimRaf = requestAnimationFrame(step)
}

watch([isIdle, pressed], () => animateRingSize())

const ringFollowStyle = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
  transform: 'translate(-50%, -50%)',
}))

const ringSizeStyle = computed(() => ({
  width: `min(${HUGE_RING_VW}vw, ${ringSizeRem.value}rem)`,
  height: `min(${HUGE_RING_VW}vw, ${ringSizeRem.value}rem)`,
}))

const iconWrapperStyle = computed(() => ({
  left: `${iconX.value}px`,
  top: `${iconY.value}px`,
  width: `${props.cursorIconSize}px`,
  height: `${props.cursorIconSize}px`,
  transform: `translate(calc(-50% + ${props.iconOffsetX}px), calc(-50% + ${props.iconOffsetY}px))`,
}))

let followInitialized = false
let rafId = 0
let idleTimer: ReturnType<typeof setTimeout> | null = null

function clearIdleTimer() {
  if (idleTimer) {
    clearTimeout(idleTimer)
    idleTimer = null
  }
}

function armIdleTimer() {
  clearIdleTimer()
  idleTimer = setTimeout(() => {
    isIdle.value = true
    idleTimer = null
  }, IDLE_MS)
}

function tick() {
  const dx = targetX.value - x.value
  const dy = targetY.value - y.value
  x.value += dx * FOLLOW_SMOOTHING
  y.value += dy * FOLLOW_SMOOTHING
  if (Math.abs(dx) < 0.08 && Math.abs(dy) < 0.08) {
    x.value = targetX.value
    y.value = targetY.value
    rafId = 0
    return
  }
  rafId = requestAnimationFrame(tick)
}

function ensureRaf() {
  if (!rafId) rafId = requestAnimationFrame(tick)
}

function onMove(e: PointerEvent) {
  if (!enabled.value) return
  iconX.value = e.clientX
  iconY.value = e.clientY
  isIdle.value = false
  armIdleTimer()
  targetX.value = e.clientX
  targetY.value = e.clientY
  visible.value = true
  if (!followInitialized) {
    x.value = e.clientX
    y.value = e.clientY
    followInitialized = true
  }
  ensureRaf()
}

function onDown(e: PointerEvent) {
  if (!enabled.value) return
  pressed.value = true
  spawnRipple(e)
}

function onUp() {
  pressed.value = false
}

function setCursorClass(active: boolean) {
  if (!hideBrowserCursor.value) return
  document.documentElement.classList.toggle('custom-cursor-active', active)
}

let detach: (() => void) | null = null

onMounted(() => {
  if (typeof window === 'undefined') return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  const coarse = window.matchMedia('(pointer: coarse)')
  if (reduce.matches || coarse.matches) return

  enabled.value = true
  setCursorClass(true)

  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('pointercancel', onUp)
  window.addEventListener('blur', onUp)

  detach = () => {
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointerup', onUp)
    window.removeEventListener('pointercancel', onUp)
    window.removeEventListener('blur', onUp)
  }
})

onUnmounted(() => {
  setCursorClass(false)
  clearIdleTimer()
  if (rafId) cancelAnimationFrame(rafId)
  if (sizeAnimRaf) cancelAnimationFrame(sizeAnimRaf)
  rafId = 0
  sizeAnimRaf = 0
  detach?.()
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <div
        v-if="enabled && visible && hideBrowserCursor"
        aria-hidden="true"
        class="pointer-events-none fixed z-100000 flex select-none items-center justify-center drop-shadow-sm transition-colors duration-150"
        :class="iconToneClass"
        :style="iconWrapperStyle"
      >
        <component
          :is="MouseIcon"
          :size="`${cursorIconSize}px`"
          class="h-full w-full shrink-0"
        />
      </div>
      <div
        v-for="r in ripples"
        :key="r.id"
        aria-hidden="true"
        class="animate-cursor-ripple-sm pointer-events-none fixed z-99990 size-7 rounded-full border-2 bg-transparent"
        :class="PRESS_BORDER[pressTone]"
        :style="{ left: `${r.x}px`, top: `${r.y}px` }"
        @animationend="removeRipple(r.id)"
      />
    </Teleport>
  </ClientOnly>

  <div
    v-if="enabled && visible"
    aria-hidden="true"
    class="pointer-events-none fixed z-9999"
    :style="ringFollowStyle"
  >
    <div class="box-border" :style="ringSizeStyle">
      <div
        class="animate-cursor-ring-spin size-full rounded-full border-2 bg-transparent box-border transition-colors duration-150"
        :class="[
          ringBorderToneClass,
          pressed ? 'border-solid' : 'border-dashed',
        ]"
      />
    </div>
  </div>
</template>
