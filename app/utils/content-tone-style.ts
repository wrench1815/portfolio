import type { ContentTone } from './content-tone-palette'

type DaisyTone =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

type NordToken =
  | 'nord-blue'
  | 'nord-frost'
  | 'nord-green'
  | 'nord-yellow'
  | 'nord-red'
  | 'nord-dark'
  | 'nord-dark-surface'
  | 'nord-dark-lighter'
  | 'nord-light'
  | 'nord-light-surface'
  | 'nord-text-dark'
  | 'nord-text-light'

const NORD_KEYS = new Set<string>([
  'nord-blue',
  'nord-frost',
  'nord-green',
  'nord-yellow',
  'nord-red',
  'nord-dark',
  'nord-dark-surface',
  'nord-dark-lighter',
  'nord-light',
  'nord-light-surface',
  'nord-text-dark',
  'nord-text-light',
])

function isNord(t: string): t is NordToken {
  return NORD_KEYS.has(t)
}

const DAISY_FRAME: Record<DaisyTone, string> = {
  primary: 'border-primary/45',
  secondary: 'border-secondary/45',
  accent: 'border-accent/45',
  neutral: 'border-neutral/45',
  info: 'border-info/45',
  success: 'border-success/45',
  warning: 'border-warning/45',
  error: 'border-error/45',
}

const DAISY_DIVIDER_TOP: Record<DaisyTone, string> = {
  primary: 'border-t-primary/35',
  secondary: 'border-t-secondary/35',
  accent: 'border-t-accent/35',
  neutral: 'border-t-neutral/35',
  info: 'border-t-info/35',
  success: 'border-t-success/35',
  warning: 'border-t-warning/35',
  error: 'border-t-error/35',
}

const DAISY_STRONG: Record<DaisyTone, string> = {
  primary: '[&_strong]:text-primary',
  secondary: '[&_strong]:text-secondary',
  accent: '[&_strong]:text-accent',
  neutral: '[&_strong]:text-neutral',
  info: '[&_strong]:text-info',
  success: '[&_strong]:text-success',
  warning: '[&_strong]:text-warning',
  error: '[&_strong]:text-error',
}

const DAISY_TEXT: Record<DaisyTone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

const NORD_FRAME: Record<NordToken, string> = {
  'nord-blue': 'border-nord-blue/50',
  'nord-frost': 'border-nord-frost/50',
  'nord-green': 'border-nord-green/50',
  'nord-yellow': 'border-nord-yellow/50',
  'nord-red': 'border-nord-red/50',
  'nord-dark': 'border-nord-dark/50',
  'nord-dark-surface': 'border-nord-dark-surface/50',
  'nord-dark-lighter': 'border-nord-dark-lighter/50',
  'nord-light': 'border-nord-light/50',
  'nord-light-surface': 'border-nord-light-surface/50',
  'nord-text-dark': 'border-nord-text-dark/50',
  'nord-text-light': 'border-nord-text-light/50',
}

const NORD_DIVIDER_TOP: Record<NordToken, string> = {
  'nord-blue': 'border-t-nord-blue/35',
  'nord-frost': 'border-t-nord-frost/35',
  'nord-green': 'border-t-nord-green/35',
  'nord-yellow': 'border-t-nord-yellow/35',
  'nord-red': 'border-t-nord-red/35',
  'nord-dark': 'border-t-nord-dark/35',
  'nord-dark-surface': 'border-t-nord-dark-surface/35',
  'nord-dark-lighter': 'border-t-nord-dark-lighter/35',
  'nord-light': 'border-t-nord-light/35',
  'nord-light-surface': 'border-t-nord-light-surface/35',
  'nord-text-dark': 'border-t-nord-text-dark/35',
  'nord-text-light': 'border-t-nord-text-light/35',
}

const NORD_STRONG: Record<NordToken, string> = {
  'nord-blue': '[&_strong]:text-nord-blue',
  'nord-frost': '[&_strong]:text-nord-frost',
  'nord-green': '[&_strong]:text-nord-green',
  'nord-yellow': '[&_strong]:text-nord-yellow',
  'nord-red': '[&_strong]:text-nord-red',
  'nord-dark': '[&_strong]:text-nord-dark',
  'nord-dark-surface': '[&_strong]:text-nord-dark-surface',
  'nord-dark-lighter': '[&_strong]:text-nord-dark-lighter',
  'nord-light': '[&_strong]:text-nord-light',
  'nord-light-surface': '[&_strong]:text-nord-light-surface',
  'nord-text-dark': '[&_strong]:text-nord-text-dark',
  'nord-text-light': '[&_strong]:text-nord-text-light',
}

const NORD_TEXT: Record<NordToken, string> = {
  'nord-blue': 'text-nord-blue',
  'nord-frost': 'text-nord-frost',
  'nord-green': 'text-nord-green',
  'nord-yellow': 'text-nord-yellow',
  'nord-red': 'text-nord-red',
  'nord-dark': 'text-nord-dark',
  'nord-dark-surface': 'text-nord-dark-surface',
  'nord-dark-lighter': 'text-nord-dark-lighter',
  'nord-light': 'text-nord-light',
  'nord-light-surface': 'text-nord-light-surface',
  'nord-text-dark': 'text-nord-text-dark',
  'nord-text-light': 'text-nord-text-light',
}

export function contentToneFrameBorder(t: ContentTone | string): string {
  if (isNord(t)) return NORD_FRAME[t]
  if (t in DAISY_FRAME) return DAISY_FRAME[t as DaisyTone]
  return DAISY_FRAME.warning
}

export function contentToneDividerTop(t: ContentTone | string): string {
  if (isNord(t)) return NORD_DIVIDER_TOP[t]
  if (t in DAISY_DIVIDER_TOP) return DAISY_DIVIDER_TOP[t as DaisyTone]
  return DAISY_DIVIDER_TOP.warning
}

/** Card grid: only strong lines use tone; body stays base-content. */
export function contentToneProseStrong(t: ContentTone | string): string {
  if (isNord(t)) return NORD_STRONG[t]
  if (t in DAISY_STRONG) return DAISY_STRONG[t as DaisyTone]
  return DAISY_STRONG.warning
}

/** Split block second column: full paragraph in tone. */
export function contentToneAccentText(t: ContentTone | string): string {
  if (isNord(t)) return NORD_TEXT[t]
  if (t in DAISY_TEXT) return DAISY_TEXT[t as DaisyTone]
  return DAISY_TEXT.warning
}

export function contentToneAccentStrong(t: ContentTone | string): string {
  return contentToneProseStrong(t)
}
