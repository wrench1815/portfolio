// ─── Scramble settings (edit here) ─────────────────────────────────────────

export const SCRAMBLE_CONFIG = {
  /** Characters used while text is still scrambling. */
  glyphPool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%*<>[]{}|/\\_',

  /** How long each text node takes to fully decrypt (ms). */
  lengthMs: 500,

  /** Lock-in rate. Higher = faster reveal within lengthMs (1 = normal). */
  speed: 1,
}

// ───────────────────────────────────────────────────────────────────────────

export function randomGlyph() {
  const pool = SCRAMBLE_CONFIG.glyphPool
  return pool[Math.floor(Math.random() * pool.length)] ?? '0'
}

export function randomScrambleLine(length: number) {
  return Array.from({ length }, () => randomGlyph()).join('')
}

export function scrambleChar(
  target: string,
  index: number,
  lockedCount: number,
) {
  const char = target[index] ?? ''
  if (index < lockedCount) return char
  if (char === ' ') return ' '
  if (char === '\n') return '\n'
  if (char === '\t') return '\t'
  if (char === ':') return ':'
  if (char === '@') return '@'
  return randomGlyph()
}

export function scrambleString(target: string, progress: number) {
  const locked = Math.floor(progress * target.length)
  return [...target].map((_, i) => scrambleChar(target, i, locked)).join('')
}
