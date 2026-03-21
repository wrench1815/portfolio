import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

/**
 * Wraps each <table> in <div class="post-table-scroll"> so horizontal scroll
 * sits under the table on narrow viewports (daisyUI / Tailwind pattern).
 */
export default function rehypeWrapTables() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table') return
      if (!parent || typeof index !== 'number') return
      const wrapper = {
        type: 'element' as const,
        tagName: 'div',
        properties: {
          class: 'post-table-scroll',
        },
        children: [node],
      }
      parent.children[index] = wrapper as typeof node
    })
  }
}
