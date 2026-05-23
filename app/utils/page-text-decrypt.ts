import { SCRAMBLE_CONFIG, scrambleString } from './text-scramble'

// ─── Page decrypt settings (edit here) ─────────────────────────────────────

export const PAGE_DECRYPT_CONFIG = {
  /** Master switch — set false to disable the global route decrypt effect. */
  enabled: true,

  /** Delay before each successive text node starts decrypting. */
  staggerMs: 14,

  /** Max cumulative stagger so long pages don't trail forever. */
  maxStaggerMs: 420,

  /** Skip text nodes shorter than this (after trim). */
  minTextLength: 2,

  /** When true, show final copy immediately if prefers-reduced-motion. */
  respectReducedMotion: true,

  /** Extra parent tag names to skip (e.g. 'BUTTON', 'LABEL'). */
  extraSkipTags: [] as string[],

  /** Shown in main while page content is waiting to decrypt. */
  loadingText: 'decrypting payload…',

  /** Shown in navbar/footer on first load (compact regions). */
  loadingTextOnce: 'syncing shell…',

  /** Scrambled filler lines under main loading message (0 to disable). */
  loadingScrambleLines: 3,

  /** Character count per filler line. */
  loadingScrambleLineLength: 44,

  /** How often filler lines reshuffle (ms). */
  loadingScrambleRefreshMs: 65,
}

// ───────────────────────────────────────────────────────────────────────────

/** Opt out: `data-no-decrypt` on an element (skips that subtree). */
export const NO_DECRYPT_ATTR = 'data-no-decrypt'

/** Decrypts on every route change (page body). */
export const PAGE_DECRYPT_SELECTOR = '[data-page-decrypt]'

/** Decrypts once on first load only (navbar, footer). */
export const PAGE_DECRYPT_ONCE_SELECTOR = '[data-page-decrypt-once]'

/** Applied after scrambled text is in place (or when motion is reduced). */
export const PAGE_DECRYPT_REVEALED_CLASS = 'page-decrypt-revealed'

export const PAGE_DECRYPT_LOADING_CLASS = 'page-decrypt-loading'

const DEFAULT_SKIP_TAGS = [
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'TEXTAREA',
  'INPUT',
  'SELECT',
  'OPTION',
  'CODE',
  'PRE',
  'KBD',
  'SVG',
  'PATH',
  'CANVAS',
] as const

const SKIP_TAGS = new Set([
  ...DEFAULT_SKIP_TAGS,
  ...PAGE_DECRYPT_CONFIG.extraSkipTags.map((tag) => tag.toUpperCase()),
])

type DecryptTarget = {
  node: Text
  original: string
  delay: number
}

let activeTargets: DecryptTarget[] = []
let rafId = 0

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isNoDecryptHost(element: Element) {
  if (!element.hasAttribute(NO_DECRYPT_ATTR)) return false

  const value = element.getAttribute(NO_DECRYPT_ATTR)
  if (value === 'false' || value === '0') return false

  return true
}

function isInsideOptOut(element: Element) {
  let current: Element | null = element
  while (current) {
    if (isNoDecryptHost(current)) return true
    current = current.parentElement
  }
  return false
}

function shouldProcessTextNode(node: Text) {
  const parent = node.parentElement
  if (!parent || isInsideOptOut(parent)) return false
  if (parent.closest(`.${PAGE_DECRYPT_LOADING_CLASS}`)) return false
  if (SKIP_TAGS.has(parent.tagName)) return false

  const text = node.textContent ?? ''
  if (text.trim().length < PAGE_DECRYPT_CONFIG.minTextLength) return false

  return true
}

function collectTextNodes(root: HTMLElement) {
  const nodes: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldProcessTextNode(node as Text)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT
    },
  })

  let current = walker.nextNode()
  while (current) {
    nodes.push(current as Text)
    current = walker.nextNode()
  }

  return nodes
}

function restoreTargets() {
  for (const target of activeTargets) {
    target.node.textContent = target.original
  }
  activeTargets = []
}

export function hidePageDecryptRoot(root: HTMLElement) {
  root.classList.remove(PAGE_DECRYPT_REVEALED_CLASS)
}

export function revealPageDecryptRoot(root: HTMLElement) {
  root.classList.add(PAGE_DECRYPT_REVEALED_CLASS)
}

export function cancelPageTextDecrypt() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = 0
  restoreTargets()
}

export function runPageTextDecrypt(root: HTMLElement): Promise<void> {
  cancelPageTextDecrypt()

  return new Promise((resolve) => {
    const finish = () => {
      revealPageDecryptRoot(root)
      resolve()
    }

    if (!PAGE_DECRYPT_CONFIG.enabled) {
      finish()
      return
    }

    if (PAGE_DECRYPT_CONFIG.respectReducedMotion && prefersReducedMotion()) {
      finish()
      return
    }

    const { staggerMs, maxStaggerMs } = PAGE_DECRYPT_CONFIG
    const { lengthMs, speed } = SCRAMBLE_CONFIG

    const textNodes = collectTextNodes(root)
    if (!textNodes.length) {
      finish()
      return
    }

    activeTargets = textNodes.map((node, index) => ({
      node,
      original: node.textContent ?? '',
      delay: Math.min(index * staggerMs, maxStaggerMs),
    }))

    const startedAt = performance.now()

    for (const target of activeTargets) {
      target.node.textContent = scrambleString(target.original, 0)
    }

    revealPageDecryptRoot(root)

    const tick = (now: number) => {
      let allDone = true

      for (const target of activeTargets) {
        const elapsed = now - startedAt - target.delay
        if (elapsed < 0) {
          allDone = false
          continue
        }

        const progress = Math.min((elapsed / lengthMs) * speed, 1)
        if (progress < 1) allDone = false

        target.node.textContent =
          progress >= 1
            ? target.original
            : scrambleString(target.original, progress)
      }

      if (allDone) {
        rafId = 0
        activeTargets = []
        resolve()
        return
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
  })
}
