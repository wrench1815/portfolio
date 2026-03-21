<script setup lang="ts">
import { useId } from 'vue'
import { contentToneFromStableId } from '~/utils/content-tone-palette'
import {
  contentToneAccentStrong,
  contentToneAccentText,
  contentToneDividerTop,
  contentToneFrameBorder,
} from '~/utils/content-tone-style'

/**
 * Two-beat contrast block — frame / divider / + column use one tone from the
 * same mixed palette as card grid, picked from a stable `useId()` hash (SSR-safe).
 *
 * ::content-split-block
 * ::
 */
const props = withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'contrast',
  },
)

const assignedTone = contentToneFromStableId(useId())

const frameClass = contentToneFrameBorder(assignedTone)
const dividerClass = contentToneDividerTop(assignedTone)
const secondTextClass = contentToneAccentText(assignedTone)
const secondStrongClass = contentToneAccentStrong(assignedTone)
</script>

<template>
  <div
    class="not-prose my-8 rounded-lg border-2 border-dashed bg-base-300 px-5 py-6 sm:px-8 sm:py-8"
    :class="frameClass"
  >
    <div
      v-if="props.label"
      class="mb-4 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
    >
      {{ props.label }}
    </div>

    <div class="flex gap-2.5 font-mono text-sm leading-relaxed text-base-content/90 sm:text-base">
      <span
        class="shrink-0 select-none pt-0.5 text-base-content/40"
        aria-hidden="true"
        >//</span
      >
      <div class="min-w-0 flex-1 [&_p]:m-0">
        <slot name="first" mdc-unwrap="p" />
      </div>
    </div>

    <div
      class="my-5 border-t border-dashed"
      :class="dividerClass"
      role="separator"
    />

    <div
      class="flex gap-2.5 font-mono text-sm leading-relaxed sm:text-base"
      :class="[secondTextClass, secondStrongClass]"
    >
      <span
        class="shrink-0 select-none pt-0.5 opacity-80"
        aria-hidden="true"
        >+</span
      >
      <div class="min-w-0 flex-1 [&_p]:m-0">
        <slot name="second" mdc-unwrap="p" />
      </div>
    </div>
  </div>
</template>
