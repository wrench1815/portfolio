/**
 * Shared daisyUI + @theme nord-* palette for content components (card grid, split block, …).
 * Assignment is always deterministic (ordinal or stable id) — never Math.random().
 *
 * Only **high-chroma** tokens: avoids `neutral`, `nord-dark*`, `nord-light*`, `nord-text-*`
 * that sit too close to `bg-base-300` in nordLight / nordDark.
 */

export const CONTENT_TONE_CYCLE = [
  'nord-frost',
  'error',
  'warning',
  'nord-yellow',
  'info',
  'nord-red',
  'success',
  'nord-blue',
  'accent',
  'primary',
  'secondary',
  'nord-green',
] as const

export type ContentTone = (typeof CONTENT_TONE_CYCLE)[number]

/** 1-based index inside a grid (same as ContentCardItem). */
export function contentToneAtOrdinal(ordinal1Based: number): ContentTone {
  const i = Math.max(0, ordinal1Based - 1)
  return CONTENT_TONE_CYCLE[i % CONTENT_TONE_CYCLE.length]!
}

/** Stable pseudo-random pick per component instance (pair with Vue `useId()`). */
export function contentToneFromStableId(id: string): ContentTone {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const idx = Math.abs(h >>> 0) % CONTENT_TONE_CYCLE.length
  return CONTENT_TONE_CYCLE[idx]!
}
