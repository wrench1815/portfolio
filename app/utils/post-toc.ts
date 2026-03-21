export interface PostTocLink {
  id: string
  text: string
  depth: number
  children?: PostTocLink[]
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/gi, '')
}

function extractTextFromNode(node: { children?: unknown[] }): string {
  if (!node.children?.length) return ''
  let s = ''
  for (const ch of node.children) {
    if (!ch || typeof ch !== 'object') continue
    const c = ch as { type?: string; value?: string; children?: unknown[] }
    if (c.type === 'text' && typeof c.value === 'string') s += c.value
    else s += extractTextFromNode(c)
  }
  return s.trim()
}

function headingTagFromNode(n: Record<string, unknown>): string {
  if (typeof n.tag === 'string') return n.tag.toLowerCase()
  if (typeof n.tagName === 'string') return n.tagName.toLowerCase()
  return ''
}

function headingIdFromNode(n: Record<string, unknown>, text: string): string {
  const props = n.props as { id?: string } | undefined
  if (props?.id) return String(props.id)
  const propsAny = n.properties as { id?: string } | undefined
  if (propsAny?.id) return String(propsAny.id)
  return slugifyHeading(text) || ''
}

function walkAstForHeadings(nodes: unknown[] | undefined, out: PostTocLink[]) {
  if (!nodes) return
  for (const node of nodes) {
    if (!node || typeof node !== 'object') continue
    const n = node as Record<string, unknown>
    const children = n.children as unknown[] | undefined
    const tag = headingTagFromNode(n)
    if (tag === 'h2' || tag === 'h3' || tag === 'h4') {
      const depth = Number(tag.slice(1))
      const text = extractTextFromNode(n as { children?: unknown[] })
      const id = headingIdFromNode(n, text)
      if (text && id) out.push({ id, text, depth })
    }
    walkAstForHeadings(children, out)
  }
}

/** Prefer MDC `body.toc.links`; otherwise derive from heading nodes in the AST. */
export function getPostTocLinks(body: unknown): PostTocLink[] {
  if (!body || typeof body !== 'object') return []
  const b = body as {
    toc?: { links?: PostTocLink[] }
    children?: unknown[]
  }
  if (Array.isArray(b.toc?.links) && b.toc.links.length > 0) {
    return b.toc.links
  }
  const fromAst: PostTocLink[] = []
  walkAstForHeadings(b.children, fromAst)
  return fromAst
}

/**
 * Some builds expose TOC on the page object; body may omit `toc` after round-trip.
 */
export function getPostTocLinksFromPage(page: unknown): PostTocLink[] {
  if (!page || typeof page !== 'object') return []
  const p = page as {
    body?: unknown
    toc?: { links?: PostTocLink[] }
  }
  if (Array.isArray(p.toc?.links) && p.toc.links.length > 0) {
    return p.toc.links
  }
  return getPostTocLinks(p.body)
}

/** Single-level list with indent from `depth` (h2=2, h3=3, …). */
export function flattenTocLinks(links: PostTocLink[]): PostTocLink[] {
  const out: PostTocLink[] = []
  const walk = (items: PostTocLink[]) => {
    for (const item of items) {
      out.push({
        id: item.id,
        text: item.text,
        depth: item.depth,
      })
      if (item.children?.length) walk(item.children)
    }
  }
  walk(links)
  return out
}
