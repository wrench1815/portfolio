<script setup lang="ts">
/**
 * One cell inside ::content-card-grid.
 * Tone from shared palette by grid order — see `~/utils/content-tone-palette.ts`.
 */
import { contentToneAtOrdinal } from '~/utils/content-tone-palette'
import {
  contentToneFrameBorder,
  contentToneProseStrong,
} from '~/utils/content-tone-style'

const INDEX_KEY = 'portfolio:content-card-grid-index'

const indexBag = inject<{ n: number } | undefined>(INDEX_KEY, undefined)
const slotIndex = indexBag ? ++indexBag.n : 1
const itemNum = indexBag ? String(slotIndex).padStart(2, '0') : null

const assignedTone = contentToneAtOrdinal(slotIndex)

const borderClass = contentToneFrameBorder(assignedTone)
const strongClass = contentToneProseStrong(assignedTone)
</script>

<template>
  <div
    class="flex min-w-0 flex-col rounded-lg border-2 border-dashed bg-base-300 p-5 transition-all duration-300 hover:border-opacity-70 hover:shadow-xl sm:p-6"
    :class="borderClass"
  >
    <div
      v-if="itemNum !== null"
      class="mb-3 font-mono text-[0.65rem] font-semibold tabular-nums tracking-wider text-base-content/45"
      aria-hidden="true"
    >
      {{ itemNum }}
    </div>
    <div
      class="font-mono text-sm leading-relaxed text-base-content/90 [&_p]:m-0"
      :class="strongClass"
    >
      <slot mdc-unwrap="p" />
    </div>
  </div>
</template>
