/**
 * Walks all .md files under content/, estimates reading time from the body
 * (code blocks stripped), and sets frontmatter readTime as "N min".
 *
 * Usage:
 *   pnpm content:read-time
 *   pnpm content:read-time:dry
 *
 * Default 200 words/minute (override: READ_TIME_WPM=180 pnpm content:read-time).
 * Minimum 1 min, rounded up.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'content')

const wpmEnv = Number(process.env.READ_TIME_WPM)
/** @type {number} */
const WORDS_PER_MINUTE =
  Number.isFinite(wpmEnv) && wpmEnv > 0 ? wpmEnv : 200

const dryRun = process.argv.includes('--dry-run')

/**
 * @param {string} markdownBody
 * @returns {number}
 */
function countWords(markdownBody) {
  let t = markdownBody
  t = t.replace(/```[\s\S]*?```/g, ' ')
  t = t.replace(/`[^`\n]+`/g, ' ')
  t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  t = t.replace(/^\s{0,3}#{1,6}\s+/gm, ' ')
  t = t.replace(/^\s{0,3}[-*+]\s+/gm, ' ')
  t = t.replace(/^\s{0,3}\d+\.\s+/gm, ' ')
  t = t.replace(/[*_~`|>#]+/g, ' ')
  t = t.replace(/\s+/g, ' ').trim()
  if (!t) return 0
  return t.split(/\s+/).length
}

/**
 * @param {number} words
 * @returns {number}
 */
function minutesFromWords(words) {
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

/** Strip BOM and normalize all newlines to LF so parsing/writes are stable on Windows. */
function normalizeEol(s) {
  return s.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

/**
 * Split on a line that is exactly `---` (closing frontmatter). Avoids regex
 * issues with mixed CR/LF and broken `readTime` replaces that glued lines.
 *
 * @param {string} raw — already LF-normalized
 * @returns {{ frontmatter: string, body: string } | null}
 */
function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return null
  const lines = raw.split('\n')
  if (lines[0] !== '---') return null
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      return {
        frontmatter: lines.slice(1, i).join('\n'),
        body: lines.slice(i + 1).join('\n'),
      }
    }
  }
  return null
}

/**
 * @param {string} fm
 * @returns {string | undefined}
 */
function getReadTimeLine(fm) {
  const line = fm.split('\n').find((l) => /^\s*readTime\s*:/.test(l))
  if (!line) return undefined
  const m = line.match(/readTime\s*:\s*(.+)/)
  if (!m) return undefined
  let v = m[1].trim()
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim()
  }
  return v
}

/**
 * @param {string} fm
 * @param {number} minutes
 * @returns {string}
 */
function upsertReadTime(fm, minutes) {
  const row = `readTime: ${minutes} min\n`
  if (/^\s*readTime\s*:/m.test(fm)) {
    return fm.replace(/^\s*readTime\s*:\s*[^\n]*\n?/m, row)
  }
  if (/^publishedAt\s*:/m.test(fm)) {
    return fm.replace(/^(publishedAt\s*:[^\n]+\n)/m, `$1${row}`)
  }
  return `${fm.trimEnd()}\n${row}`
}

/** @param {{ frontmatter: string, body: string }} split */
function serializeMarkdown(split) {
  return `---\n${split.frontmatter}\n---\n${split.body}`
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function collectMarkdownFiles(dir) {
  /** @type {string[]} */
  const out = []
  function walk(d) {
    let entries
    try {
      entries = readdirSync(d, { withFileTypes: true })
    } catch {
      return
    }
    for (const ent of entries) {
      const p = join(d, ent.name)
      if (ent.isDirectory()) walk(p)
      else if (ent.isFile() && extname(ent.name) === '.md') out.push(p)
    }
  }
  walk(dir)
  return out.sort()
}

function main() {
  console.log(`readTime: ${WORDS_PER_MINUTE} wpm${dryRun ? ' (dry-run)' : ''}\n`)

  const files = collectMarkdownFiles(CONTENT_DIR)
  if (files.length === 0) {
    console.warn(`No .md files under ${relative(ROOT, CONTENT_DIR)}`)
    process.exit(0)
  }

  let updated = 0
  let unchanged = 0
  let skipped = 0

  for (const abs of files) {
    const raw = readFileSync(abs, 'utf8')
    const normalized = normalizeEol(raw)
    const split = splitFrontmatter(normalized)
    if (!split) {
      skipped++
      console.log(`skip (no YAML frontmatter): ${relative(ROOT, abs)}`)
      continue
    }

    const words = countWords(split.body)
    const minutes = minutesFromWords(words)
    const newLine = `${minutes} min`
    const prev = getReadTimeLine(split.frontmatter)

    const rel = relative(ROOT, abs)
    if (prev === newLine) {
      unchanged++
      const out = serializeMarkdown(split)
      /* Disk may still be CRLF or corrupted (e.g. lone CR gluing YAML lines) while
       * parse used normalizeEol — persist canonical LF when bytes differ. */
      if (!dryRun && raw !== out) {
        writeFileSync(abs, out, 'utf8')
      }
      console.log(`ok ${rel} — ${newLine} (${words} words)`)
      continue
    }

    const newFm = upsertReadTime(split.frontmatter, minutes)
    const newRaw = serializeMarkdown({ frontmatter: newFm, body: split.body })

    console.log(
      `update ${rel} — ${prev ?? '(no readTime)'} → ${newLine} (${words} words)`,
    )

    if (!dryRun) {
      writeFileSync(abs, newRaw, 'utf8')
    }
    updated++
  }

  console.log(
    `\nDone${dryRun ? ' (dry-run, no files written)' : ''}: ${updated} updated, ${unchanged} unchanged, ${skipped} skipped`,
  )
}

main()
