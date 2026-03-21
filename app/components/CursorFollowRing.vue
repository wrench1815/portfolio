<script setup lang="ts">
/**
 * Huge dashed ring follows the pointer with slight lag; solid while pressed.
 * Circular area uses backdrop blur over the page behind it; inner ring rotates continuously.
 * After 3s without movement, shrinks to a small ring until the pointer moves again
 * or the button is held down (pressed = big again).
 * Off when primary pointer is coarse or motion is reduced.
 */
/** Lower = heavier lag / slower catch-up. */
const FOLLOW_SMOOTHING = 0.075
const IDLE_MS = 3000

/**
 * Active (non-idle) ring size — diameter is min(vw cap, rem cap).
 * Raise `HUGE_RING_MAX_REM` or `HUGE_RING_VW` for a bigger ring.
 */
const HUGE_RING_VW = 100
const HUGE_RING_MAX_REM = 15

const enabled = ref(false)
const targetX = ref(0)
const targetY = ref(0)
const x = ref(0)
const y = ref(0)
const pressed = ref(false)
const visible = ref(false)
/** After idle timeout — small ring until next pointer move. */
const isIdle = ref(false)

const ringStyle = computed(() => {
  const base = { left: `${x.value}px`, top: `${y.value}px` }
  const big = !isIdle.value || pressed.value
  if (!big) return base
  return {
    ...base,
    width: `min(${HUGE_RING_VW}vw, ${HUGE_RING_MAX_REM}rem)`,
    height: `min(${HUGE_RING_VW}vw, ${HUGE_RING_MAX_REM}rem)`,
  }
})

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

function onDown() {
  if (enabled.value) pressed.value = true
}

function onUp() {
  pressed.value = false
}

let detach: (() => void) | null = null

onMounted(() => {
  if (typeof window === 'undefined') return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  const coarse = window.matchMedia('(pointer: coarse)')
  if (reduce.matches || coarse.matches) return

  enabled.value = true

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
  clearIdleTimer()
  if (rafId) cancelAnimationFrame(rafId)
  rafId = 0
  detach?.()
})
</script>

<template>
  <div
    v-if="enabled && visible"
    aria-hidden="true"
    class="pointer-events-none fixed z-[9999] box-border -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-500 ease-out"
    :class="[isIdle && !pressed ? 'size-12' : '']"
    :style="ringStyle"
  >
    <div
      class="animate-cursor-ring-spin size-full rounded-full border-2 border-primary bg-transparent backdrop-blur-[2px] box-border"
      :class="pressed ? 'border-solid' : 'border-dashed'"
    />
  </div>
</template>
