<script setup lang="ts">
import {
  PAGE_DECRYPT_CONFIG,
  PAGE_DECRYPT_LOADING_CLASS,
} from '~/utils/page-text-decrypt'
import { randomScrambleLine } from '~/utils/text-scramble'

const props = withDefaults(
  defineProps<{
    compact?: boolean
  }>(),
  {
    compact: false,
  },
)

const message = computed(() =>
  props.compact
    ? PAGE_DECRYPT_CONFIG.loadingTextOnce
    : PAGE_DECRYPT_CONFIG.loadingText,
)

const scrambleLines = ref<string[]>([])

let refreshTimer: ReturnType<typeof setInterval> | undefined

function refreshScrambleLines() {
  const count = PAGE_DECRYPT_CONFIG.loadingScrambleLines
  const length = PAGE_DECRYPT_CONFIG.loadingScrambleLineLength
  if (count <= 0) {
    scrambleLines.value = []
    return
  }
  scrambleLines.value = Array.from({ length: count }, () =>
    randomScrambleLine(length),
  )
}

onMounted(() => {
  if (props.compact) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  refreshScrambleLines()
  if (reduced) return

  refreshTimer = setInterval(
    refreshScrambleLines,
    PAGE_DECRYPT_CONFIG.loadingScrambleRefreshMs,
  )
})

onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer)
})
</script>

<template>
  <div
    :class="[
      PAGE_DECRYPT_LOADING_CLASS,
      compact
        ? 'page-decrypt-loading--compact'
        : 'page-decrypt-loading--main',
    ]"
    data-no-decrypt
  >
    <p
      :class="
        compact ? 'page-decrypt-loading__line--compact' : 'page-decrypt-loading__line'
      "
      aria-live="polite"
      aria-busy="true"
    >
      <span class="text-success">$</span> {{ message }}
    </p>

    <div
      v-if="!compact && scrambleLines.length"
      class="page-decrypt-loading__filler"
      aria-hidden="true"
    >
      <p v-for="(line, index) in scrambleLines" :key="index">
        {{ line }}
      </p>
    </div>
  </div>
</template>
