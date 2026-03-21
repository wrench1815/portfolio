<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const PHRASES = [
  'pnpm dev',
  'nuxt ready · localhost:3001',
  'vitest · 12 passed',
  'eslint . --max-warnings 0',
  'git status --short',
  'typecheck OK',
  'content/schema valid',
  'nuxt build --prerender',
]

const HINTS = [
  '· working tree clean',
  '· content/index OK',
  '· 0 errors',
  '· HMR connected',
]

const line = ref('')
const hint = ref(HINTS[0])
let disposed = false
let reducedInterval: ReturnType<typeof setInterval> | undefined

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

function pickHint() {
  hint.value = HINTS[Math.floor(Math.random() * HINTS.length)]
}

async function runTypewriter() {
  let i = 0
  while (!disposed) {
    const phrase = PHRASES[i % PHRASES.length]
    pickHint()

    for (let c = 0; c <= phrase.length && !disposed; c++) {
      line.value = phrase.slice(0, c)
      await sleep(38 + Math.random() * 32)
    }
    if (disposed) return

    await sleep(2000 + Math.random() * 800)

    for (let c = phrase.length; c >= 0 && !disposed; c--) {
      line.value = phrase.slice(0, c)
      await sleep(22 + Math.random() * 14)
    }
    if (disposed) return

    await sleep(500 + Math.random() * 400)
    i++
  }
}

onMounted(() => {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced) {
    let i = 0
    line.value = PHRASES[0]
    pickHint()
    reducedInterval = setInterval(() => {
      i = (i + 1) % PHRASES.length
      line.value = PHRASES[i]
      pickHint()
    }, 5000)
    return
  }

  void runTypewriter()
})

onUnmounted(() => {
  disposed = true
  if (reducedInterval) clearInterval(reducedInterval)
})
</script>

<template>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-6 z-0 flex justify-start px-4 sm:bottom-8 sm:px-8"
    aria-hidden="true"
  >
    <div
      class="max-w-full rounded-lg border border-dashed border-base-content/10 bg-base-100/25 px-3 py-2 backdrop-blur-sm sm:max-w-2xl sm:px-4"
    >
      <p
        class="font-mono text-[0.65rem] leading-relaxed text-base-content/40 sm:text-xs"
      >
        <span class="text-success/60">$</span>
        <span class="text-base-content/30"> </span>
        <span class="text-base-content/45">{{ line }}</span>
        <span
          class="ml-0.5 inline-block min-w-[0.35em] text-primary/50 motion-reduce:hidden animate-pulse"
        >
          ▍
        </span>
      </p>
      <p
        class="mt-1 font-mono text-[0.6rem] text-base-content/25 sm:text-[0.65rem]"
      >
        {{ hint }}
      </p>
    </div>
  </div>
</template>
