<script setup lang="ts">
import type { PostTocLink } from '~/utils/post-toc'
import { RiArrowUpSLine } from '@remixicon/vue'

const props = withDefaults(
  defineProps<{
    links: PostTocLink[]
    /** Narrow column (desktop sidebar): smaller type + tighter indent */
    dense?: boolean
  }>(),
  { dense: false },
)

const tocNavRef = useTemplateRef<HTMLElement>('toc-nav')
const TOC_SCROLL_TOP_OFFSET = 120

function indentRem(depth: number) {
  const base = Math.max(2, Math.min(depth, 6))
  const step = props.dense ? 0.55 : 0.75
  return `${(base - 2) * step}rem`
}

function scrollToHeading(event: MouseEvent, id: string) {
  event.preventDefault()
  const target = document.getElementById(id)

  if (!target) return

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })

  history.replaceState(null, '', `#${id}`)
}

function isElementVisible(element: Element | null | undefined) {
  if (!(element instanceof HTMLElement)) return false
  if (element.getClientRects().length === 0) return false
  const style = window.getComputedStyle(element)
  return style.display !== 'none' && style.visibility !== 'hidden'
}

async function scrollToToc() {
  const localNav = tocNavRef.value
  const localContainer = localNav?.closest('details')
  const mobileTocShell = document.querySelector('details.toc-mobile')

  const localTarget =
    localContainer instanceof HTMLElement ? localContainer : localNav
  const target = isElementVisible(localTarget ?? null)
    ? localTarget
    : mobileTocShell

  if (!(target instanceof HTMLElement)) return

  if (target instanceof HTMLDetailsElement && !target.open) {
    target.open = true
    await nextTick()
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const top =
    window.scrollY + target.getBoundingClientRect().top - TOC_SCROLL_TOP_OFFSET
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}
</script>

<template>
  <nav
    v-if="links.length"
    ref="toc-nav"
    class="post-toc-nav"
    aria-label="On this page"
  >
    <p
      class="text-base-content/50"
      :class="dense ? 'mb-2 text-[0.65rem]' : 'mb-3 text-xs'"
    >
      <span class="font-mono"
        ><span class="text-success">$</span> tree -L 2</span
      ><span class="font-sans"> outline/</span>
    </p>
    <ul
      class="list-disc space-y-0.5 leading-snug"
      :class="
        dense
          ? 'text-xs marker:text-base-content/35'
          : 'text-sm marker:text-base-content/40'
      "
    >
      <li
        v-for="link in links"
        :key="link.id"
        :style="{ marginInlineStart: indentRem(link.depth) }"
      >
        <a
          :href="`#${link.id}`"
          @click="scrollToHeading($event, link.id)"
          class="post-toc-link inline-block border-l-2 border-transparent py-1 pl-1 font-sans text-base-content/90 transition-colors hover:border-error/55 link-no-slide-anim"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
  <Teleport to="body">
    <button
      v-if="links.length"
      type="button"
      class="btn btn-circle btn-sm btn-primary fixed right-4 bottom-4 z-40 xl:hidden"
      aria-label="Back to table of contents"
      @click="scrollToToc"
    >
      <RiArrowUpSLine class="w-6 h-6" />
    </button>
  </Teleport>
</template>
