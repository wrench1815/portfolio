<script setup lang="ts">
/**
 * Tones = daisyUI semantic colors (see tailwind.css nordLight / nordDark).
 * MDC: ::content-emphasis-pair{primaryTone="warning" accentTone="success"}
 * Optional: frameTone, label (default "diff"). YAML block props also work.
 */
type DaisyTone =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

const props = withDefaults(
  defineProps<{
    /** Color for the first line (after `- `) */
    primaryTone?: DaisyTone
    /** Color for the second line (after `+ `) */
    accentTone?: DaisyTone
    /** Dashed frame border; defaults to accentTone */
    frameTone?: DaisyTone
    /** Small mono label above the pair */
    label?: string
  }>(),
  {
    label: 'diff',
  },
)

const TEXT: Record<DaisyTone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

const BORDER: Record<DaisyTone, string> = {
  primary: 'border-primary/45',
  secondary: 'border-secondary/45',
  accent: 'border-accent/45',
  neutral: 'border-neutral/45',
  info: 'border-info/45',
  success: 'border-success/45',
  warning: 'border-warning/45',
  error: 'border-error/45',
}

const primaryClass = computed(() =>
  props.primaryTone ? TEXT[props.primaryTone] : 'text-base-content/90',
)

const accentClass = computed(() =>
  props.accentTone ? TEXT[props.accentTone] : 'text-success',
)

const frameClass = computed(() => {
  const key = props.frameTone ?? props.accentTone ?? 'success'
  return BORDER[key] ?? BORDER.success
})
</script>

<template>
  <div
    class="not-prose my-10 rounded-lg border-2 border-dashed bg-base-300 px-5 py-6 sm:px-8 sm:py-8"
    :class="frameClass"
  >
    <div
      v-if="label"
      class="mb-4 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
    >
      {{ label }}
    </div>
    <p
      class="m-0 mb-3 font-mono text-lg leading-snug font-semibold sm:text-xl"
      :class="primaryClass"
    >
      <span
        class="select-none opacity-80"
        :class="primaryClass"
        aria-hidden="true"
        >- </span
      >
      <span :class="primaryClass">
        <slot name="primary" mdc-unwrap="p" />
      </span>
    </p>
    <p
      class="m-0 font-mono text-lg leading-snug font-semibold sm:text-xl"
      :class="accentClass"
    >
      <span
        class="select-none opacity-80"
        :class="accentClass"
        aria-hidden="true"
        >+ </span
      >
      <span :class="accentClass">
        <slot name="accent" mdc-unwrap="p" />
      </span>
    </p>
  </div>
</template>
