<script setup lang="ts">
import { scrambleString } from '~/utils/text-scramble'

type Phase = 'idle' | 'blink' | 'decode' | 'stable'

const props = withDefaults(
  defineProps<{
    size?: 'md' | 'lg'
  }>(),
  {
    size: 'md',
  },
)

const TARGETS = {
  prompt: 'whoami',
  initials: 'HK',
  handle: 'wrench1815',
  status: 'status: online',
} as const

const phase = ref<Phase>('idle')
const display = reactive({
  prompt: TARGETS.prompt as string,
  initials: TARGETS.initials as string,
  handle: TARGETS.handle as string,
  status: TARGETS.status as string,
})

const sizeClass = computed(() =>
  props.size === 'lg'
    ? 'min-h-72 w-full max-w-sm md:min-h-96'
    : 'aspect-square w-full max-w-xs',
)

const initialsClass = computed(() =>
  props.size === 'lg' ? 'text-7xl md:text-8xl' : 'text-5xl sm:text-6xl',
)

const isDistorted = computed(() => phase.value === 'idle')
const isMatrixBg = computed(() => phase.value === 'decode')
const isDecoding = computed(() => phase.value === 'decode')
const isBlinking = computed(() => phase.value === 'blink')

let cycleTimer: ReturnType<typeof setTimeout> | undefined
let decodeTimer: ReturnType<typeof setInterval> | undefined
let decodeStart = 0
const prefersReducedMotion = ref(false)

function setDisplayStable() {
  display.prompt = TARGETS.prompt
  display.initials = TARGETS.initials
  display.handle = TARGETS.handle
  display.status = TARGETS.status
}

function tickDecode() {
  const elapsed = performance.now() - decodeStart
  const progress = Math.min(elapsed / 2400, 1)
  display.prompt = scrambleString(TARGETS.prompt, progress * 1.1)
  display.initials = scrambleString(TARGETS.initials, progress * 0.95)
  display.handle = scrambleString(TARGETS.handle, progress)
  display.status = scrambleString(TARGETS.status, progress * 0.88)

  if (progress >= 1) {
    setDisplayStable()
    if (decodeTimer) clearInterval(decodeTimer)
    decodeTimer = undefined
    phase.value = 'stable'
    schedulePhase('idle', 4500)
  }
}

function schedulePhase(next: Phase, delayMs: number) {
  cycleTimer = setTimeout(() => {
    phase.value = next
    runPhase()
  }, delayMs)
}

function runPhase() {
  if (prefersReducedMotion.value) return

  switch (phase.value) {
    case 'idle':
      setDisplayStable()
      schedulePhase('blink', 1000)
      break
    case 'blink':
      schedulePhase('decode', 140)
      break
    case 'decode':
      decodeStart = performance.now()
      decodeTimer = setInterval(tickDecode, 45)
      break
    case 'stable':
      schedulePhase('idle', 5200)
      break
  }
}

function startCycle() {
  clearTimers()
  phase.value = 'idle'
  setDisplayStable()
  runPhase()
}

function clearTimers() {
  if (cycleTimer) clearTimeout(cycleTimer)
  if (decodeTimer) clearInterval(decodeTimer)
  cycleTimer = undefined
  decodeTimer = undefined
}

let motionMql: MediaQueryList | undefined
let onMotionChange: (() => void) | undefined

onMounted(() => {
  motionMql = window.matchMedia('(prefers-reduced-motion: reduce)')
  onMotionChange = () => {
    prefersReducedMotion.value = motionMql!.matches
    if (motionMql!.matches) {
      clearTimers()
      phase.value = 'stable'
      setDisplayStable()
    } else {
      startCycle()
    }
  }
  onMotionChange()
  motionMql.addEventListener('change', onMotionChange)
})

onUnmounted(() => {
  if (motionMql && onMotionChange) {
    motionMql.removeEventListener('change', onMotionChange)
  }
  clearTimers()
})
</script>

<template>
  <div
    data-no-decrypt
    class="terminal-avatar relative flex flex-col overflow-hidden border-2 border-dashed border-nord-blue/45 bg-base-200 transition-all duration-300 hover:border-solid hover:border-nord-blue/70 hover:shadow-lg hover:shadow-nord-blue/15"
    :class="sizeClass"
    role="img"
    :aria-label="`Profile avatar — ${TARGETS.initials}, @${TARGETS.handle}`"
  >
    <div
      class="terminal-avatar-grid pointer-events-none absolute inset-0 opacity-40"
      :class="{ 'terminal-avatar-grid--warp': isDistorted }"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-nord-blue/5 to-nord-frost/10"
    />

    <!-- Idle / decode background distortion -->
    <div
      v-show="isDistorted"
      class="terminal-avatar-noise pointer-events-none absolute inset-0 z-1"
      aria-hidden="true"
    />
    <div
      v-show="isDistorted"
      class="terminal-avatar-scanlines pointer-events-none absolute inset-0 z-1"
      aria-hidden="true"
    />
    <div
      v-show="isDistorted"
      class="terminal-avatar-roll-bar pointer-events-none absolute left-0 right-0 z-2 h-3"
      aria-hidden="true"
    />
    <div
      v-show="isDistorted"
      class="terminal-avatar-snow pointer-events-none absolute inset-0 z-2"
      aria-hidden="true"
    />
    <div
      v-show="isMatrixBg"
      class="terminal-avatar-matrix-bg pointer-events-none absolute inset-0 z-1 bg-success/5"
      aria-hidden="true"
    />

    <!-- Blink -->
    <div
      class="terminal-avatar-blink pointer-events-none absolute inset-0 z-40 bg-base-100"
      :class="{ 'terminal-avatar-blink--on': isBlinking }"
      aria-hidden="true"
    />

    <div
      class="terminal-avatar-signal relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-6 sm:py-8"
      :class="{
        'terminal-avatar-signal--decode': isDecoding,
        'terminal-avatar-signal--warp': isDistorted,
      }"
      aria-live="polite"
      aria-atomic="true"
    >
      <p
        class="signal-warp-line signal-warp-line--1 mb-3 font-mono text-[0.65rem] opacity-90"
        :class="isDecoding ? 'text-success' : 'text-nord-green'"
      >
        <span class="text-base-content/50">$</span> {{ display.prompt }}
      </p>

      <div
        class="signal-warp-line signal-warp-line--2 terminal-avatar-glyph relative select-none font-bold leading-none tracking-tighter"
        :class="[initialsClass, isDecoding ? 'text-success' : 'text-nord-blue']"
      >
        <span class="relative z-10">{{ display.initials }}</span>
        <span
          v-if="!isDecoding"
          class="terminal-avatar-glyph-ghost pointer-events-none absolute inset-0 z-0 text-nord-frost opacity-35"
          aria-hidden="true"
          >{{ TARGETS.initials }}</span
        >
      </div>

      <p
        class="signal-warp-line signal-warp-line--3 mt-4 font-mono text-xs sm:text-sm"
        :class="isDecoding ? 'text-success/90' : 'text-base-content/55'"
      >
        <span :class="isDecoding ? 'text-success/70' : 'text-nord-frost'"
          >@</span
        >{{ display.handle }}
      </p>

      <p
        class="signal-warp-line signal-warp-line--4 mt-3 flex items-center gap-2 font-mono text-[0.65rem]"
        :class="isDecoding ? 'text-success/80' : 'text-base-content/40'"
      >
        <span
          v-if="!isDecoding"
          class="status-dot inline-block h-1.5 w-1.5 rounded-full bg-success"
          :class="{ 'status-dot--paused': isDistorted }"
          aria-hidden="true"
        />
        <span>{{ display.status }}</span>
        <span
          v-if="!isDecoding"
          class="terminal-avatar-cursor text-success"
          aria-hidden="true"
          >▌</span
        >
      </p>
    </div>

    <div
      class="pointer-events-none absolute top-2 right-2 z-20 font-mono text-xs text-nord-blue/15"
      aria-hidden="true"
    >
      { }
    </div>
  </div>
</template>

<style scoped>
@reference "../../assets/css/tailwind.css";

.terminal-avatar-grid {
  background-image:
    linear-gradient(
      color-mix(in oklch, var(--color-nord-blue) 12%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      color-mix(in oklch, var(--color-nord-blue) 12%, transparent) 1px,
      transparent 1px
    );
  background-size: 1.25rem 1.25rem;
}

.terminal-avatar-grid--warp {
  animation: grid-warp 0.55s steps(6) infinite;
}

@keyframes grid-warp {
  0%,
  100% {
    transform: translate(0, 0) skew(0deg);
    opacity: 0.35;
  }
  17% {
    transform: translate(6px, -4px) skew(2deg);
    opacity: 0.6;
  }
  33% {
    transform: translate(-8px, 5px) skew(-2.5deg);
    opacity: 0.25;
  }
  50% {
    transform: translate(5px, 6px) skew(1.5deg);
    opacity: 0.55;
  }
  67% {
    transform: translate(-6px, -5px) skew(-1.8deg);
    opacity: 0.3;
  }
  83% {
    transform: translate(9px, 2px) skew(2.2deg);
    opacity: 0.65;
  }
}

.terminal-avatar-noise {
  opacity: 0.28;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: noise-shift 0.1s steps(6) infinite;
}

@keyframes noise-shift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  20% {
    transform: translate(-6%, 4%) scale(1.04);
  }
  40% {
    transform: translate(5%, -5%) scale(0.98);
  }
  60% {
    transform: translate(-4%, -3%) scale(1.02);
  }
  80% {
    transform: translate(7%, 2%) scale(1.01);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

.terminal-avatar-scanlines {
  opacity: 0.22;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 2px,
    color-mix(in oklch, var(--color-base-content) 18%, transparent) 2px,
    color-mix(in oklch, var(--color-base-content) 18%, transparent) 3px
  );
  animation: scanline-drift 0.35s linear infinite;
}

.terminal-avatar-roll-bar {
  top: -0.75rem;
  background: color-mix(in oklch, var(--color-base-300) 95%, black);
  box-shadow:
    0 0 0 1px color-mix(in oklch, var(--color-base-content) 30%, transparent),
    0 -6px 16px color-mix(in oklch, black 40%, transparent),
    0 6px 16px color-mix(in oklch, black 40%, transparent);
  opacity: 0;
  animation: tv-roll-bar 0.9s steps(10) infinite;
}

@keyframes tv-roll-bar {
  0% {
    top: -12%;
    opacity: 0;
  }
  8% {
    opacity: 0.95;
  }
  92% {
    opacity: 0.95;
  }
  100% {
    top: 112%;
    opacity: 0;
  }
}

.terminal-avatar-snow {
  opacity: 0;
  background: color-mix(in oklch, var(--color-base-100) 75%, transparent);
  mix-blend-mode: overlay;
  animation: tv-snow-flash 0.45s steps(1) infinite;
}

@keyframes tv-snow-flash {
  0%,
  78%,
  100% {
    opacity: 0;
  }
  79% {
    opacity: 0.35;
  }
  80% {
    opacity: 0;
  }
  88% {
    opacity: 0.55;
  }
  89% {
    opacity: 0.05;
  }
  94% {
    opacity: 0.2;
  }
  95% {
    opacity: 0;
  }
}

.terminal-avatar-matrix-bg {
  background-image: repeating-linear-gradient(
    180deg,
    transparent,
    transparent 2px,
    color-mix(in oklch, var(--color-success) 8%, transparent) 2px,
    color-mix(in oklch, var(--color-success) 8%, transparent) 4px
  );
  animation: matrix-bg-scroll 0.6s linear infinite;
}

@keyframes matrix-bg-scroll {
  to {
    background-position: 0 16px;
  }
}

@keyframes scanline-drift {
  to {
    background-position: 0 24px;
  }
}

.terminal-avatar-blink {
  opacity: 0;
  transition: opacity 0ms;
}

.terminal-avatar-blink--on {
  opacity: 0.92;
}

.terminal-avatar-signal--warp {
  perspective: 480px;
  transform-style: preserve-3d;
}

@keyframes signal-tv-tear {
  0%,
  100% {
    transform: translate3d(0, 0, 0) skew(0deg, 0deg);
    clip-path: inset(0 0 0 0);
    opacity: 1;
    filter: blur(0);
  }
  14% {
    transform: translate3d(14px, -5px, 0) skew(5deg, -2deg);
    clip-path: inset(0 0 42% 0);
    opacity: 0.55;
    filter: blur(0.8px);
  }
  28% {
    transform: translate3d(-16px, 8px, 0) skew(-6deg, 2.5deg);
    clip-path: inset(58% 0 0 0);
    opacity: 0.25;
    filter: blur(1.2px);
  }
  42% {
    transform: translate3d(10px, -10px, 0) skew(4deg, -1.5deg);
    clip-path: inset(22% 0 38% 0);
    opacity: 0.75;
    filter: blur(0.5px);
  }
  57% {
    transform: translate3d(-12px, 4px, 0) skew(-4.5deg, 1deg);
    clip-path: inset(0 0 55% 0);
    opacity: 0.35;
    filter: blur(1px);
  }
  71% {
    transform: translate3d(18px, 6px, 0) skew(6deg, 2deg);
    clip-path: inset(48% 0 0 0);
    opacity: 0.6;
    filter: blur(0.7px);
  }
  85% {
    transform: translate3d(-8px, -8px, 0) skew(-3deg, -2deg);
    clip-path: inset(12% 0 52% 0);
    opacity: 0.15;
    filter: blur(1.4px);
  }
}

.terminal-avatar-signal--warp .signal-warp-line {
  transform-style: preserve-3d;
  will-change: transform, opacity, clip-path;
  text-shadow:
    -3px 0 color-mix(in oklch, var(--color-nord-frost) 70%, transparent),
    3px 0 color-mix(in oklch, var(--color-error) 60%, transparent);
  animation:
    signal-tv-tear 0.5s steps(7) infinite,
    signal-chroma-flicker 0.12s steps(3) infinite;
}

.terminal-avatar-signal--warp .signal-warp-line--1 {
  animation-delay: 0s, 0s;
}

.terminal-avatar-signal--warp .signal-warp-line--2 {
  animation-delay: 0.04s, 0.02s;
}

.terminal-avatar-signal--warp .signal-warp-line--3 {
  animation-delay: 0.08s, 0.04s;
}

.terminal-avatar-signal--warp .signal-warp-line--4 {
  animation-delay: 0.12s, 0.06s;
}

@keyframes signal-chroma-flicker {
  0%,
  100% {
    text-shadow:
      -3px 0 color-mix(in oklch, var(--color-nord-frost) 70%, transparent),
      3px 0 color-mix(in oklch, var(--color-error) 60%, transparent);
  }
  33% {
    text-shadow:
      -6px 0 color-mix(in oklch, var(--color-nord-frost) 90%, transparent),
      5px 0 color-mix(in oklch, var(--color-error) 80%, transparent),
      0 2px color-mix(in oklch, var(--color-warning) 50%, transparent);
  }
  66% {
    text-shadow:
      4px 0 color-mix(in oklch, var(--color-nord-frost) 85%, transparent),
      -5px 0 color-mix(in oklch, var(--color-error) 75%, transparent);
  }
}

.terminal-avatar-signal--warp .terminal-avatar-glyph > span {
  animation: signal-glyph-split 0.12s steps(4) infinite;
}

@keyframes signal-glyph-split {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  25% {
    transform: translate(-5px, 0);
    opacity: 0.5;
  }
  50% {
    transform: translate(6px, 2px);
    opacity: 0.85;
  }
  75% {
    transform: translate(-3px, -2px);
    opacity: 0.35;
  }
}

.status-dot--paused {
  animation: none;
}

.terminal-avatar-signal--decode {
  text-shadow: 0 0 12px
    color-mix(in oklch, var(--color-success) 35%, transparent);
}

.terminal-avatar-glyph {
  text-shadow: 0 0 40px
    color-mix(in oklch, var(--color-nord-blue) 35%, transparent);
}

.terminal-avatar-signal--decode .terminal-avatar-glyph {
  text-shadow: 0 0 20px
    color-mix(in oklch, var(--color-success) 45%, transparent);
}

.terminal-avatar:hover .terminal-avatar-glyph-ghost {
  animation: avatar-glitch 0.55s steps(2) 1;
}

@keyframes avatar-glitch {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.35;
  }
  33% {
    transform: translate(3px, -2px);
    opacity: 0.55;
  }
  66% {
    transform: translate(-3px, 2px);
    opacity: 0.2;
  }
}

.status-dot {
  animation: status-pulse 2.4s ease-in-out infinite;
}

@keyframes status-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.45;
    transform: scale(0.85);
  }
}

.terminal-avatar-cursor {
  animation: cursor-blink 1.1s step-end infinite;
}

@keyframes cursor-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .terminal-avatar-grid--warp,
  .terminal-avatar-noise,
  .terminal-avatar-scanlines,
  .terminal-avatar-roll-bar,
  .terminal-avatar-snow,
  .terminal-avatar-signal--warp .signal-warp-line,
  .terminal-avatar-signal--warp .terminal-avatar-glyph > span,
  .terminal-avatar:hover .terminal-avatar-glyph-ghost,
  .status-dot,
  .terminal-avatar-cursor {
    animation: none;
  }
}
</style>
