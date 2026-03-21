<script setup lang="ts">
/** Decorative layers only — no interaction */
const SNIPPETS: Array<{
  token: string
  left: string
  top: string
  delay: string
  dur: string
  colorClass: string
}> = [
  {
    token: '{}',
    left: '4%',
    top: '8%',
    delay: '0s',
    dur: '24s',
    colorClass: 'text-primary/30',
  },
  {
    token: '</>',
    left: '78%',
    top: '6%',
    delay: '1.2s',
    dur: '28s',
    colorClass: 'text-accent/28',
  },
  {
    token: '=>',
    left: '12%',
    top: '72%',
    delay: '0.8s',
    dur: '20s',
    colorClass: 'text-secondary/27',
  },
  {
    token: 'fn()',
    left: '88%',
    top: '38%',
    delay: '2s',
    dur: '26s',
    colorClass: 'text-primary/26',
  },
  {
    token: '0x',
    left: '52%',
    top: '14%',
    delay: '0.3s',
    dur: '30s',
    colorClass: 'text-success/24',
  },
  {
    token: 'git',
    left: '22%',
    top: '44%',
    delay: '1.5s',
    dur: '22s',
    colorClass: 'text-info/26',
  },
  {
    token: '[]',
    left: '66%',
    top: '58%',
    delay: '0.5s',
    dur: '25s',
    colorClass: 'text-accent/25',
  },
  {
    token: 'null',
    left: '8%',
    top: '52%',
    delay: '2.2s',
    dur: '27s',
    colorClass: 'text-neutral/32',
  },
  {
    token: 'async',
    left: '42%',
    top: '82%',
    delay: '1s',
    dur: '23s',
    colorClass: 'text-primary/24',
  },
  {
    token: '::',
    left: '92%',
    top: '68%',
    delay: '0.2s',
    dur: '29s',
    colorClass: 'text-secondary/26',
  },
  {
    token: '&&',
    left: '30%',
    top: '24%',
    delay: '1.8s',
    dur: '21s',
    colorClass: 'text-warning/22',
  },
  {
    token: '//',
    left: '58%',
    top: '36%',
    delay: '0.6s',
    dur: '26s',
    colorClass: 'text-base-content/24',
  },
  {
    token: '===',
    left: '14%',
    top: '88%',
    delay: '2.4s',
    dur: '24s',
    colorClass: 'text-accent/23',
  },
  {
    token: '<T>',
    left: '72%',
    top: '22%',
    delay: '0.9s',
    dur: '28s',
    colorClass: 'text-primary/25',
  },
  {
    token: '...',
    left: '38%',
    top: '62%',
    delay: '1.1s',
    dur: '22s',
    colorClass: 'text-secondary/24',
  },
  {
    token: '()',
    left: '84%',
    top: '12%',
    delay: '0.4s',
    dur: '31s',
    colorClass: 'text-success/23',
  },
  {
    token: '[]',
    left: '48%',
    top: '48%',
    delay: '1.6s',
    dur: '25s',
    colorClass: 'text-info/24',
  },
  {
    token: '{}',
    left: '62%',
    top: '78%',
    delay: '0.7s',
    dur: '27s',
    colorClass: 'text-primary/27',
  },
  {
    token: 'await',
    left: '18%',
    top: '32%',
    delay: '2.1s',
    dur: '23s',
    colorClass: 'text-accent/22',
  },
  {
    token: 'map',
    left: '94%',
    top: '52%',
    delay: '0.1s',
    dur: '26s',
    colorClass: 'text-secondary/23',
  },
  {
    token: 'pnpm',
    left: '6%',
    top: '18%',
    delay: '1.3s',
    dur: '29s',
    colorClass: 'text-success/25',
  },
  {
    token: 'const',
    left: '55%',
    top: '8%',
    delay: '0.15s',
    dur: '24s',
    colorClass: 'text-primary/24',
  },
  {
    token: '?.',
    left: '26%',
    top: '66%',
    delay: '2.3s',
    dur: '21s',
    colorClass: 'text-warning/23',
  },
  {
    token: '??',
    left: '76%',
    top: '46%',
    delay: '0.85s',
    dur: '27s',
    colorClass: 'text-accent/24',
  },
  {
    token: 'void',
    left: '34%',
    top: '16%',
    delay: '1.9s',
    dur: '30s',
    colorClass: 'text-neutral/27',
  },
  {
    token: 'yield',
    left: '90%',
    top: '28%',
    delay: '0.55s',
    dur: '23s',
    colorClass: 'text-info/23',
  },
  {
    token: 'use()',
    left: '44%',
    top: '92%',
    delay: '2.6s',
    dur: '25s',
    colorClass: 'text-secondary/25',
  },
  {
    token: 'ref<>',
    left: '68%',
    top: '72%',
    delay: '0.25s',
    dur: '28s',
    colorClass: 'text-primary/23',
  },
  {
    token: 'Pick<',
    left: '2%',
    top: '62%',
    delay: '1.45s',
    dur: '26s',
    colorClass: 'text-accent/22',
  },
  {
    token: 'JSON',
    left: '82%',
    top: '84%',
    delay: '0.95s',
    dur: '22s',
    colorClass: 'text-success/22',
  },
  {
    token: 'HEAD',
    left: '16%',
    top: '76%',
    delay: '2.55s',
    dur: '31s',
    colorClass: 'text-error/22',
  },
  {
    token: '404',
    left: '60%',
    top: '54%',
    delay: '0.65s',
    dur: '20s',
    colorClass: 'text-warning/21',
  },
  {
    token: 'sudo',
    left: '98%',
    top: '18%',
    delay: '1.75s',
    dur: '32s',
    colorClass: 'text-error/21',
  },
  {
    token: 'chmod',
    left: '10%',
    top: '42%',
    delay: '0.35s',
    dur: '27s',
    colorClass: 'text-info/25',
  },
  {
    token: 'SSH',
    left: '50%',
    top: '26%',
    delay: '2.05s',
    dur: '24s',
    colorClass: 'text-secondary/22',
  },
  {
    token: ':wq',
    left: '28%',
    top: '8%',
    delay: '1.25s',
    dur: '29s',
    colorClass: 'text-success/23',
  },
  {
    token: 'env',
    left: '70%',
    top: '64%',
    delay: '0.45s',
    dur: '23s',
    colorClass: 'text-base-content/23',
  },
  {
    token: 'impl',
    left: '40%',
    top: '38%',
    delay: '2.35s',
    dur: '26s',
    colorClass: 'text-neutral/24',
  },
  {
    token: '#!',
    left: '86%',
    top: '96%',
    delay: '0.75s',
    dur: '21s',
    colorClass: 'text-warning/22',
  },
  {
    token: 'try',
    left: '24%',
    top: '54%',
    delay: '1.55s',
    dur: '28s',
    colorClass: 'text-primary/22',
  },
  {
    token: 'catch',
    left: '58%',
    top: '18%',
    delay: '0.05s',
    dur: '30s',
    colorClass: 'text-error/20',
  },
  {
    token: 'enum',
    left: '14%',
    top: '96%',
    delay: '2.15s',
    dur: '25s',
    colorClass: 'text-accent/23',
  },
  {
    token: 'trait',
    left: '46%',
    top: '4%',
    delay: '1.05s',
    dur: '27s',
    colorClass: 'text-info/22',
  },
  {
    token: 'crate',
    left: '64%',
    top: '88%',
    delay: '0.55s',
    dur: '22s',
    colorClass: 'text-secondary/24',
  },
  {
    token: 'nuxt',
    left: '32%',
    top: '28%',
    delay: '1.65s',
    dur: '31s',
    colorClass: 'text-success/24',
  },
  {
    token: 'vite',
    left: '8%',
    top: '28%',
    delay: '0.9s',
    dur: '24s',
    colorClass: 'text-primary/23',
  },
  {
    token: 'sql',
    left: '92%',
    top: '42%',
    delay: '2.45s',
    dur: '26s',
    colorClass: 'text-info/24',
  },
  {
    token: 'ORM',
    left: '54%',
    top: '70%',
    delay: '0.2s',
    dur: '29s',
    colorClass: 'text-neutral/23',
  },
  {
    token: 'JWT',
    left: '38%',
    top: '48%',
    delay: '1.35s',
    dur: '23s',
    colorClass: 'text-warning/22',
  },
  {
    token: 'CORS',
    left: '74%',
    top: '12%',
    delay: '2.65s',
    dur: '28s',
    colorClass: 'text-accent/21',
  },
  {
    token: 'etag',
    left: '20%',
    top: '12%',
    delay: '0.4s',
    dur: '25s',
    colorClass: 'text-base-content/22',
  },
  {
    token: 'lazy',
    left: '96%',
    top: '74%',
    delay: '1.85s',
    dur: '27s',
    colorClass: 'text-primary/21',
  },
  {
    token: 'import',
    left: '3%',
    top: '35%',
    delay: '0.12s',
    dur: '26s',
    colorClass: 'text-secondary/24',
  },
  {
    token: 'export',
    left: '97%',
    top: '56%',
    delay: '1.08s',
    dur: '24s',
    colorClass: 'text-accent/23',
  },
  {
    token: 'return',
    left: '11%',
    top: '64%',
    delay: '2.08s',
    dur: '29s',
    colorClass: 'text-primary/22',
  },
  {
    token: 'typeof',
    left: '89%',
    top: '8%',
    delay: '0.52s',
    dur: '22s',
    colorClass: 'text-info/23',
  },
  {
    token: 'class',
    left: '36%',
    top: '56%',
    delay: '1.42s',
    dur: '31s',
    colorClass: 'text-success/22',
  },
  {
    token: 'interface',
    left: '61%',
    top: '32%',
    delay: '0.88s',
    dur: '25s',
    colorClass: 'text-accent/22',
  },
  {
    token: 'extends',
    left: '7%',
    top: '92%',
    delay: '2.28s',
    dur: '28s',
    colorClass: 'text-secondary/22',
  },
  {
    token: 'keyof',
    left: '83%',
    top: '62%',
    delay: '0.62s',
    dur: '23s',
    colorClass: 'text-warning/21',
  },
  {
    token: 'infer',
    left: '19%',
    top: '6%',
    delay: '1.18s',
    dur: '30s',
    colorClass: 'text-primary/21',
  },
  {
    token: 'readonly',
    left: '71%',
    top: '40%',
    delay: '0.28s',
    dur: '27s',
    colorClass: 'text-neutral/23',
  },
  {
    token: 'never',
    left: '45%',
    top: '14%',
    delay: '2.18s',
    dur: '21s',
    colorClass: 'text-error/21',
  },
  {
    token: 'unknown',
    left: '56%',
    top: '92%',
    delay: '1.68s',
    dur: '26s',
    colorClass: 'text-info/22',
  },
  {
    token: 'Promise',
    left: '1%',
    top: '48%',
    delay: '0.38s',
    dur: '32s',
    colorClass: 'text-primary/23',
  },
  {
    token: 'Buffer',
    left: '93%',
    top: '90%',
    delay: '2.48s',
    dur: '24s',
    colorClass: 'text-success/21',
  },
  {
    token: 'docker',
    left: '27%',
    top: '50%',
    delay: '0.82s',
    dur: '29s',
    colorClass: 'text-info/21',
  },
  {
    token: 'curl',
    left: '78%',
    top: '30%',
    delay: '1.22s',
    dur: '22s',
    colorClass: 'text-secondary/23',
  },
  {
    token: 'grep',
    left: '52%',
    top: '2%',
    delay: '0.18s',
    dur: '28s',
    colorClass: 'text-warning/22',
  },
  {
    token: 'chown',
    left: '15%',
    top: '22%',
    delay: '2.58s',
    dur: '25s',
    colorClass: 'text-accent/24',
  },
  {
    token: 'vim',
    left: '67%',
    top: '8%',
    delay: '1.02s',
    dur: '31s',
    colorClass: 'text-success/22',
  },
  {
    token: 'stdin',
    left: '41%',
    top: '72%',
    delay: '0.72s',
    dur: '23s',
    colorClass: 'text-base-content/22',
  },
  {
    token: 'stdout',
    left: '88%',
    top: '50%',
    delay: '1.92s',
    dur: '27s',
    colorClass: 'text-primary/22',
  },
  {
    token: 'stderr',
    left: '23%',
    top: '38%',
    delay: '0.92s',
    dur: '26s',
    colorClass: 'text-error/20',
  },
  {
    token: 'SIGTERM',
    left: '59%',
    top: '44%',
    delay: '2.12s',
    dur: '30s',
    colorClass: 'text-warning/20',
  },
  {
    token: 'nginx',
    left: '5%',
    top: '78%',
    delay: '0.48s',
    dur: '24s',
    colorClass: 'text-success/23',
  },
  {
    token: 'redis',
    left: '95%',
    top: '34%',
    delay: '1.52s',
    dur: '29s',
    colorClass: 'text-error/22',
  },
  {
    token: 'kafka',
    left: '33%',
    top: '86%',
    delay: '0.22s',
    dur: '21s',
    colorClass: 'text-secondary/21',
  },
  {
    token: 'gRPC',
    left: '76%',
    top: '78%',
    delay: '2.32s',
    dur: '28s',
    colorClass: 'text-info/20',
  },
  {
    token: 'protobuf',
    left: '12%',
    top: '30%',
    delay: '1.12s',
    dur: '25s',
    colorClass: 'text-accent/21',
  },
  {
    token: 'vitest',
    left: '49%',
    top: '60%',
    delay: '0.58s',
    dur: '32s',
    colorClass: 'text-primary/20',
  },
  {
    token: 'playwright',
    left: '63%',
    top: '16%',
    delay: '2.02s',
    dur: '26s',
    colorClass: 'text-neutral/22',
  },
  {
    token: 'eslint',
    left: '37%',
    top: '68%',
    delay: '1.32s',
    dur: '23s',
    colorClass: 'text-warning/23',
  },
  {
    token: 'prettier',
    left: '81%',
    top: '56%',
    delay: '0.68s',
    dur: '27s',
    colorClass: 'text-secondary/22',
  },
  {
    token: 'SSR',
    left: '17%',
    top: '46%',
    delay: '2.22s',
    dur: '24s',
    colorClass: 'text-info/23',
  },
  {
    token: 'ISR',
    left: '54%',
    top: '36%',
    delay: '0.08s',
    dur: '30s',
    colorClass: 'text-success/21',
  },
  {
    token: 'wasm',
    left: '29%',
    top: '94%',
    delay: '1.72s',
    dur: '22s',
    colorClass: 'text-accent/22',
  },
  {
    token: 'mutex',
    left: '73%',
    top: '52%',
    delay: '0.42s',
    dur: '29s',
    colorClass: 'text-primary/22',
  },
  {
    token: 'heap',
    left: '43%',
    top: '26%',
    delay: '2.42s',
    dur: '25s',
    colorClass: 'text-neutral/21',
  },
  {
    token: 'TLS',
    left: '91%',
    top: '22%',
    delay: '1.28s',
    dur: '31s',
    colorClass: 'text-success/20',
  },
  {
    token: 'oauth',
    left: '25%',
    top: '58%',
    delay: '0.32s',
    dur: '26s',
    colorClass: 'text-info/21',
  },
  {
    token: 'bcrypt',
    left: '65%',
    top: '98%',
    delay: '2.52s',
    dur: '23s',
    colorClass: 'text-warning/21',
  },
  {
    token: 'sha256',
    left: '9%',
    top: '70%',
    delay: '1.62s',
    dur: '28s',
    colorClass: 'text-base-content/21',
  },
  {
    token: 'utf-8',
    left: '57%',
    top: '82%',
    delay: '0.98s',
    dur: '24s',
    colorClass: 'text-secondary/20',
  },
  {
    token: '||',
    left: '47%',
    top: '34%',
    delay: '2.72s',
    dur: '27s',
    colorClass: 'text-primary/24',
  },
  {
    token: '?:',
    left: '85%',
    top: '94%',
    delay: '0.14s',
    dur: '21s',
    colorClass: 'text-accent/23',
  },
  {
    token: '!.!',
    left: '21%',
    top: '84%',
    delay: '1.38s',
    dur: '30s',
    colorClass: 'text-error/21',
  },
  {
    token: '~>',
    left: '39%',
    top: '2%',
    delay: '2.62s',
    dur: '25s',
    colorClass: 'text-info/22',
  },
  {
    token: '<|',
    left: '99%',
    top: '62%',
    delay: '0.54s',
    dur: '29s',
    colorClass: 'text-success/22',
  },
  {
    token: '|>',
    left: '13%',
    top: '14%',
    delay: '1.98s',
    dur: '22s',
    colorClass: 'text-secondary/24',
  },
  {
    token: '**',
    left: '69%',
    top: '26%',
    delay: '0.78s',
    dur: '32s',
    colorClass: 'text-warning/22',
  },
  {
    token: '%%',
    left: '31%',
    top: '40%',
    delay: '2.38s',
    dur: '26s',
    colorClass: 'text-neutral/22',
  },
  {
    token: '++',
    left: '75%',
    top: '86%',
    delay: '1.48s',
    dur: '23s',
    colorClass: 'text-primary/21',
  },
  {
    token: '--',
    left: '51%',
    top: '50%',
    delay: '0.26s',
    dur: '28s',
    colorClass: 'text-base-content/23',
  },
  {
    token: '>>',
    left: '4%',
    top: '56%',
    delay: '2.88s',
    dur: '24s',
    colorClass: 'text-accent/20',
  },
  {
    token: '<<',
    left: '62%',
    top: '74%',
    delay: '1.08s',
    dur: '31s',
    colorClass: 'text-info/24',
  },
]

function parseSnippetPct(v: string): number {
  return Number.parseFloat(v) / 100
}

/** Pointer farther than this (px) does not push snippets. */
const SNIPPET_REPEL_RADIUS = 220
/** Max translate (px) when pointer is on top of a snippet. */
const SNIPPET_REPEL_MAX = 80

/** Local grid warp: only a disc around the cursor (see masked duplicate layer). */
const GRID_LOCAL_WARP_RADIUS = 260
const GRID_LOCAL_WARP_SCALE = 1.08
const GRID_LOCAL_WARP_PERSPECTIVE = 480
const GRID_LOCAL_WARP_TILT = 4

const bgRoot = ref<HTMLElement | null>(null)
const cursorX = ref(Number.NEGATIVE_INFINITY)
const cursorY = ref(Number.NEGATIVE_INFINITY)
const prefersReducedMotion = ref(false)

const snippetRepelOffsets = computed(() => {
  const el = bgRoot.value
  const cx = cursorX.value
  const cy = cursorY.value
  if (!el || !Number.isFinite(cx) || !Number.isFinite(cy) || cx < -1e8) {
    return SNIPPETS.map(() => ({ x: 0, y: 0 }))
  }
  const rect = el.getBoundingClientRect()
  const out: { x: number; y: number }[] = []
  for (const s of SNIPPETS) {
    const sx = rect.left + parseSnippetPct(s.left) * rect.width
    const sy = rect.top + parseSnippetPct(s.top) * rect.height
    const dx = sx - cx
    const dy = sy - cy
    const dist = Math.hypot(dx, dy)
    if (dist < 1e-6 || dist >= SNIPPET_REPEL_RADIUS) {
      out.push({ x: 0, y: 0 })
      continue
    }
    const falloff = 1 - dist / SNIPPET_REPEL_RADIUS
    const force = falloff * falloff * SNIPPET_REPEL_MAX
    const inv = 1 / dist
    out.push({ x: dx * inv * force, y: dy * inv * force })
  }
  return out
})

/** Second grid layer: masked to a soft circle at pointer, bulged from that point (repel-like). */
const gridLocalWarpStyle = computed(() => {
  if (prefersReducedMotion.value) {
    return { opacity: '0', pointerEvents: 'none' as const }
  }
  const el = bgRoot.value
  const cx = cursorX.value
  const cy = cursorY.value
  if (!el || !Number.isFinite(cx) || !Number.isFinite(cy) || cx < -1e8) {
    return { opacity: '0', pointerEvents: 'none' as const }
  }
  const rect = el.getBoundingClientRect()
  const lx = Math.max(0, Math.min(rect.width, cx - rect.left))
  const ly = Math.max(0, Math.min(rect.height, cy - rect.top))
  const mx = rect.width / 2 || 1
  const my = rect.height / 2 || 1
  const nx = Math.max(-1, Math.min(1, (lx - mx) / mx))
  const ny = Math.max(-1, Math.min(1, (ly - my) / my))
  const r = GRID_LOCAL_WARP_RADIUS
  const mask = `radial-gradient(circle ${r}px at ${lx}px ${ly}px, rgb(0 0 0 / 1) 0%, rgb(0 0 0 / 0.5) 40%, rgb(0 0 0 / 0) 70%)`
  return {
    transformOrigin: `${lx}px ${ly}px`,
    transform: `perspective(${GRID_LOCAL_WARP_PERSPECTIVE}px) scale(${GRID_LOCAL_WARP_SCALE}) rotateX(${-ny * GRID_LOCAL_WARP_TILT}deg) rotateY(${nx * GRID_LOCAL_WARP_TILT}deg)`,
    maskImage: mask,
    WebkitMaskImage: mask,
    maskRepeat: 'no-repeat' as const,
    WebkitMaskRepeat: 'no-repeat' as const,
    maskSize: '100% 100%' as const,
    WebkitMaskSize: '100% 100%' as const,
    maskPosition: '0 0' as const,
    WebkitMaskPosition: '0 0' as const,
    transition: 'transform 0.12s ease-out',
    willChange: 'transform',
    pointerEvents: 'none' as const,
  }
})

function onSnippetPointerMove(e: PointerEvent) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

let motionMqlCleanup: (() => void) | null = null

onMounted(() => {
  window.addEventListener('pointermove', onSnippetPointerMove, { passive: true })
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  const syncMotion = () => {
    prefersReducedMotion.value = mq.matches
  }
  syncMotion()
  mq.addEventListener('change', syncMotion)
  motionMqlCleanup = () => mq.removeEventListener('change', syncMotion)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onSnippetPointerMove)
  motionMqlCleanup?.()
})
</script>

<template>
  <div
    ref="bgRoot"
    class="pointer-events-none absolute inset-0 overflow-hidden select-none"
    aria-hidden="true"
    data-testid="programming-code-background"
  >
    <!-- Base grid (flat pan). Warp is only a radial patch in the layer above. -->
    <div class="code-bg-grid code-bg-grid-base absolute inset-0" />
    <div
      class="code-bg-grid code-bg-grid-warp absolute inset-0"
      :style="gridLocalWarpStyle"
    />

    <!-- Soft vertical sweep (old CRT / terminal cursor band) -->
    <div class="code-bg-scan absolute left-0 right-0 -top-24 h-32" />

    <!-- Drifting syntax tokens (wrapper gets repel transform; inner keeps float animation) -->
    <div
      v-for="(s, i) in SNIPPETS"
      :key="i"
      class="absolute will-change-transform"
      :style="{
        left: s.left,
        top: s.top,
        transform: `translate(${snippetRepelOffsets[i]?.x ?? 0}px, ${snippetRepelOffsets[i]?.y ?? 0}px)`,
        transition: 'transform 0.14s ease-out',
      }"
    >
      <span
        class="animate-float font-mono text-sm sm:text-base"
        :class="s.colorClass"
        :style="{
          animationDelay: s.delay,
          animationDuration: s.dur,
        }"
      >
        {{ s.token }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.code-bg-grid {
  opacity: 0.45;
  transform-style: preserve-3d;
  background-image:
    linear-gradient(
      to right,
      color-mix(in oklch, var(--color-primary) 16%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklch, var(--color-primary) 16%, transparent) 1px,
      transparent 1px
    );
  background-size: 44px 44px;
  animation: grid-pan 96s linear infinite;
}

.code-bg-grid-base {
  transform: none;
  will-change: background-position;
}

.code-bg-grid-warp {
  /* Slightly lower than base so doubled lines in the bubble aren’t too harsh */
  opacity: 0.38;
  will-change: transform;
}

.code-bg-scan {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    color-mix(in oklch, var(--color-accent) 12%, transparent) 45%,
    transparent 100%
  );
  animation: scan-sweep 18s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes grid-pan {
  to {
    background-position: 44px 44px;
  }
}

@keyframes scan-sweep {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }
  12% {
    opacity: 0.85;
  }
  88% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(calc(100vh + 120px));
    opacity: 0;
  }
}
</style>
