<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const route = useRoute()

const is404 = computed(() => props.error.statusCode === 404)

/** Path the user tried (SPA) or from error payload when present */
const attemptedPath = computed(() => {
  const u = (props.error as { url?: string }).url
  if (u) {
    try {
      return new URL(u, 'http://local.invalid').pathname || route.path
    } catch {
      return route.path
    }
  }
  return route.path
})

const shellFn = computed(() =>
  is404.value ? 'resolvePagePath()' : 'handleAppError()',
)

const errorClass = computed(() =>
  is404.value ? 'RouteNotFoundError' : 'RuntimeError',
)

const resultToken = computed(() => (is404.value ? 'undefined' : 'throw'))

const statusMessageLiteral = computed(() =>
  JSON.stringify(props.error.statusMessage || 'unexpected'),
)

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <main class="blog-content-shell py-16 sm:py-20">
      <div class="not-prose max-w-3xl">
        <p
          class="mb-1 font-mono text-xs uppercase tracking-wider text-base-content/45"
        >
          stderr
        </p>
        <p class="mb-2 font-mono text-xs text-base-content/55">
          <span class="text-base-content/40">/*</span>
          unhandled route / error boundary
          <span class="text-base-content/40">*/</span>
        </p>

        <p class="mb-3 text-xs font-mono opacity-60">
          <span class="text-success">$</span>
          <span class="text-base-content/80"> node --eval </span>
          <span class="text-success">'{{ shellFn }}'</span>
        </p>

        <div
          class="mockup-code mb-8 w-full border border-base-300 bg-base-200! font-mono text-sm leading-relaxed text-base-content shadow-sm [&_code]:font-mono [&_code]:text-base-content [&_pre]:font-mono [&_pre]:bg-base-200! [&_pre]:text-base-content"
        >
          <template v-if="is404">
            <pre
              data-prefix=">"
            ><code><span class="text-accent">const</span> pathname =</code></pre>
            <pre
              data-prefix=">"
            ><code>  <span class="text-info">new</span> URL(request.url).pathname</code></pre>
            <pre
              data-prefix=">"
            ><code><span class="text-accent">await</span> <span class="text-info">matchNuxtPage</span>(<span class="text-success">'{{ attemptedPath }}'</span>)</code></pre>
            <pre
              data-prefix="←"
            ><code class="text-warning">{{ resultToken }}</code></pre>
            <pre
              data-prefix="!"
            ><code><span class="text-error">{{ errorClass }}</span>: <span class="font-semibold text-warning">{{ error.statusCode ?? '—' }}</span></code></pre>
            <pre
              data-prefix="!"
            > <code><span> — </span>no <span class="text-success">pages/**/*.vue</span> matched this pathname; nothing to hydrate.</code></pre>
          </template>
          <template v-else>
            <pre
              data-prefix=">"
            ><code><span class="text-accent">throw</span> <span class="text-info">Error</span>(<span class="text-success">{{ statusMessageLiteral }}</span>)</code></pre>
            <pre
              data-prefix="!"
            ><code><span class="text-error">{{ errorClass }}</span>: <span class="font-semibold text-warning">{{ error.statusCode ?? '—' }}</span><span> — </span>{{ error.statusMessage || 'Request failed during render.' }}</code></pre>
          </template>
        </div>

        <p class="mb-8 font-mono text-xs text-base-content/50">
          //
          <span class="text-warning">exitCode</span> ===
          {{ error.statusCode ?? '1' }}
          <span v-if="is404" class="text-base-content/40">
            → navigate to a known route or go back to repo root
          </span>
        </p>
      </div>
    </main>
  </NuxtLayout>
</template>
