<script setup lang="ts">
import CodeNotFoundState from '~/components/errors/CodeNotFoundState.vue'
import {
  flattenTocLinks,
  getPostTocLinksFromPage,
  type PostTocLink,
} from '~/utils/post-toc'

const route = useRoute()
const themeSlug = (route.params.themeslug as string) ?? ''
const topicSlug = (route.params.topicslug as string) ?? ''
const postSlug = (route.params.postslug as string) ?? ''

interface PostDoc {
  slug: string
  title?: string
  description?: string
  publishedAt?: string
  readTime?: string
  author?: string
  category?: string
  topicId?: string
  type?: string
  body?: unknown
}

interface PostPayload {
  doc: PostDoc
  tocLinks: PostTocLink[]
}

const postKey = `blog-post-${themeSlug}-${topicSlug}-${postSlug}`

const [{ data: postPayload }, { data: trailMeta }] = await Promise.all([
  useAsyncData(postKey, async () => {
    const doc = await queryCollection('blog')
      .where('type', '=', 'post')
      .where('topicId', '=', topicSlug)
      .where('slug', '=', postSlug)
      .first()
    if (!doc) return null
    const tocLinks = flattenTocLinks(getPostTocLinksFromPage(doc))
    return { doc: doc as PostDoc, tocLinks } satisfies PostPayload
  }),
  useAsyncData(`blog-trail-${themeSlug}-${topicSlug}`, async () => {
    const [t, top] = await Promise.all([
      queryCollection('blog')
        .where('type', '=', 'theme')
        .where('slug', '=', themeSlug)
        .first(),
      queryCollection('blog')
        .where('type', '=', 'topic')
        .where('themeslug', '=', themeSlug)
        .where('slug', '=', topicSlug)
        .first(),
    ])
    return {
      themeName: (t as { name?: string } | null)?.name ?? themeSlug,
      topicTitle: (top as { title?: string } | null)?.title ?? topicSlug,
    }
  }),
])

const doc = computed(() => postPayload.value?.doc)

const title = computed(() => doc.value?.title ?? postSlug)

const blogBreadcrumbItems = computed(() => {
  const trail = trailMeta.value ?? {
    themeName: themeSlug,
    topicTitle: topicSlug,
  }
  return [
    { label: 'Home', to: '/' },
    { label: 'Themes', to: '/themes' },
    { label: trail.themeName, to: `/${themeSlug}` },
    { label: trail.topicTitle, to: `/${themeSlug}/${topicSlug}` },
    { label: title.value },
  ]
})

const description = computed(() => doc.value?.description ?? '')

const publishedLabel = computed(() => {
  const raw = doc.value?.publishedAt
  if (!raw) return ''
  return new Date(raw).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

const tocLinks = computed(() => postPayload.value?.tocLinks ?? [])

const hasToc = computed(() => tocLinks.value.length > 0)

useHead({
  title: computed(() =>
    postPayload.value
      ? `${title.value} — Portfolio`
      : `Not found: ${postSlug} — Portfolio`,
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        postPayload.value
          ? description.value || title.value
          : `No post “${postSlug}” for this topic.`,
      ),
    },
  ],
})
</script>

<template>
  <main class="post-page font-sans blog-content-shell">
    <BlogBreadcrumb :items="blogBreadcrumbItems" />
    <CodeNotFoundState
      v-if="!postPayload"
      :field-value="topicSlug"
      second-where-field="slug"
      :second-field-value="postSlug"
      query-method="first"
      shell-command="resolvePost()"
      error-message="empty result; no post matched this topicId and slug. Nothing to render."
      footer-highlight="doc"
      footer-tail="→ no document; query OK, no matching row"
    />
    <template v-else-if="postPayload && doc">
    <header class="mb-10 animate-slide-up">
      <div
        class="mb-1 font-mono text-xs uppercase tracking-wider text-base-content/45"
      >
        stdin
      </div>
      <div class="mb-2 font-mono text-sm text-base-content/80">
        <span class="text-success">$</span> cat
        <span class="text-primary">{{ postSlug }}</span
        ><span class="text-base-content/50">.md</span>
      </div>
      <p class="mb-6 font-mono text-xs text-base-content/55 break-words">
        <span class="text-base-content/40">/*</span> {{ themeSlug }}/{{
          topicSlug
        }}/{{ postSlug }}
        <span class="text-base-content/40">*/</span>
      </p>

      <h1
        class="mb-4 text-3xl font-bold leading-tight text-base-content sm:text-4xl md:text-5xl"
      >
        <span class="font-mono font-normal text-primary">&lt;</span>{{ title
        }}<span class="font-mono font-normal text-primary"> /&gt;</span>
      </h1>

      <p
        v-if="description"
        class="mb-6 text-base leading-relaxed text-base-content/85"
      >
        <span class="mr-2 font-mono text-sm text-base-content/45">//</span
        >{{ description }}
      </p>

      <div
        class="flex flex-wrap items-center gap-3 font-sans text-xs sm:text-sm"
      >
        <div
          v-if="publishedLabel"
          class="inline-flex items-baseline gap-2 border-2 border-success/45 px-3 py-1.5"
          style="border-style: solid"
        >
          <span
            class="font-mono text-[0.65rem] uppercase tracking-wide text-base-content/45"
            >date</span
          >
          <span class="text-base-content/50">[</span>
          <time class="font-mono text-sm font-semibold text-success">{{
            publishedLabel
          }}</time>
          <span class="text-base-content/50">]</span>
        </div>
        <div
          v-if="doc.readTime"
          class="inline-flex items-baseline gap-2 border-2 border-warning/60 px-3 py-1.5"
          style="border-style: solid"
        >
          <span
            class="font-mono text-[0.65rem] uppercase tracking-wide text-base-content/45"
            >read</span
          >
          <span class="text-base-content/50">[</span>
          <span class="font-mono text-sm font-medium text-base-content"
            >{{ doc.readTime }} read</span
          >
          <span class="text-base-content/50">]</span>
        </div>
        <div
          v-if="doc.category"
          class="inline-flex items-baseline gap-2 border border-dashed border-error/45 px-3 py-1.5"
          style="border-style: dashed"
        >
          <span
            class="font-mono text-[0.65rem] uppercase tracking-wide text-error/60"
            >tag</span
          >
          <span class="font-mono text-error/80">#</span>
          <span class="font-medium text-error">{{ doc.category }}</span>
        </div>
      </div>
    </header>

    <div
      :class="
        hasToc
          ? 'xl:grid xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_18.5rem] 2xl:gap-12'
          : ''
      "
    >
      <div class="min-w-0">
        <details
          v-if="hasToc"
          class="toc-shell toc-mobile mb-6 border-2 border-dashed border-error/35 bg-base-200 transition-all duration-300 hover:border-error/55 hover:border-solid xl:hidden"
        >
          <summary
            class="cursor-pointer list-none px-4 py-3 text-sm text-base-content transition-colors hover:bg-base-300/60 [&::-webkit-details-marker]:hidden"
          >
            <span class="font-mono"
              ><span class="text-success">$</span> cat TOC</span
            >
            <span class="ml-2 font-sans text-base-content/55"># outline</span>
          </summary>
          <div
            class="border-t-2 border-dashed border-error/25 px-4 py-3 transition-colors"
          >
            <BlogPostToc :links="tocLinks" />
          </div>
        </details>

        <div v-if="doc.body">
          <div
            class="mb-2 font-mono text-xs uppercase tracking-wider text-base-content/45"
          >
            stdout
          </div>
          <div
            class="post-shell border-2 border-dashed border-base-content/20 bg-base-200 p-6 transition-all duration-300 sm:p-8 md:p-10 hover:border-success/60 hover:border-solid"
          >
            <div
              class="post-body prose prose-lg max-w-none font-sans text-base-content/90 prose-headings:font-sans"
            >
              <ContentRenderer :value="doc" />
            </div>
          </div>
        </div>

        <div
          v-else
          class="border-2 border-dashed border-error/40 bg-base-200 p-8 font-mono text-sm text-base-content/70"
        >
          <span class="text-error">stderr:</span>
          <span class="text-base-content/50"> //</span> empty document body
        </div>
      </div>

      <aside
        v-if="hasToc"
        class="toc-aside z-10 max-h-[calc(100vh-5.5rem)] max-xl:hidden self-start overflow-y-auto xl:sticky xl:top-24"
      >
        <div
          class="toc-shell border-2 border-dashed border-error/35 bg-base-200 p-4 transition-all duration-300 hover:border-error/55 hover:border-solid 2xl:p-5"
        >
          <BlogPostToc :links="tocLinks" />
        </div>
      </aside>
    </div>
    </template>
  </main>
</template>

<style scoped>
@reference '~/assets/css/tailwind.css';
/* Page-only: overrides global `a` / prose (uses Tailwind @apply like tailwind.css) */
.post-page :deep(a) {
  @apply no-underline;
}

.post-page :deep(a:hover) {
  @apply text-primary;
}

.post-body :deep(h2) {
  @apply mt-10 mb-4 scroll-mt-20 font-sans text-[1.375rem] leading-[1.35] font-bold text-success;
}

.post-body :deep(h2)::before {
  content: '## ';
  @apply mr-1 font-mono text-[0.72em] font-semibold text-base-content/40;
}

.post-body :deep(h2:first-child) {
  @apply mt-0;
}

.post-body :deep(h3) {
  @apply mt-7 mb-2 scroll-mt-20 font-sans text-[1.0625rem] font-bold text-error;
}

.post-body :deep(h3)::before {
  content: '### ';
  @apply mr-1 font-mono text-[0.68em] font-semibold text-base-content/40;
}

.post-body :deep(p) {
  @apply mb-5 leading-[1.75];
}

.post-body :deep(p:last-child) {
  @apply mb-0;
}

.post-body :deep(blockquote) {
  @apply my-7 rounded-r-lg border-l-4 border-warning bg-base-300/55 py-4 pr-4 pl-5 not-italic;
}

.post-body :deep(blockquote p) {
  @apply mb-0 text-lg font-semibold text-base-content;
}

/* Normal bullet lists: disc markers outside the text block */
.post-body :deep(ul) {
  @apply my-5 list-outside list-disc space-y-2 pl-6 text-base-content/90;
}

.post-body :deep(ul > li) {
  @apply marker:text-primary;
}

.post-body :deep(li > ul) {
  @apply mt-2 mb-0 list-outside list-disc space-y-2 pl-5;
}

.post-body :deep(ol) {
  @apply my-5 list-outside list-decimal space-y-2 pl-6 text-base-content/90;
}

.post-body :deep(ol > li) {
  @apply marker:text-primary;
}

.post-body :deep(li > p) {
  @apply mb-1 last:mb-0;
}

.post-body :deep(code) {
  @apply rounded bg-base-300 px-[0.35rem] py-0.5 font-mono text-[0.875em] text-base-content/90;
}

.post-body :deep(pre) {
  @apply my-5 overflow-x-auto rounded-lg border border-base-content/20 bg-base-300 p-4;
}

.post-body :deep(pre code) {
  @apply bg-transparent p-0 text-base-content/95;
}

.post-body :deep(a) {
  @apply text-primary no-underline;
}

.post-body :deep(em) {
  @apply text-base-content/70;
}

/* Markdown tables: dashed frame + success grid (separate borders so cell colors actually paint; collapse merges/wins wrong edge) */
.post-body :deep(.post-table-scroll) {
  @apply my-6 max-w-full overflow-x-auto rounded-lg border-2 border-dashed bg-base-300 [-webkit-overflow-scrolling:touch];
  border-color: color-mix(in srgb, var(--color-success) 45%, transparent);
}

.post-body :deep(.post-table-scroll table) {
  @apply w-full max-w-full min-w-0 table-auto border-separate border-spacing-0 text-left font-mono text-xs text-base-content/90 tabular-nums sm:text-sm !my-0;
}

/* Inner grid: dashed + success (same token as outer frame) */
.post-body :deep(.post-table-scroll th),
.post-body :deep(.post-table-scroll td) {
  @apply min-w-36 border-b border-r border-dashed px-3 py-2 align-top whitespace-normal break-words [hyphens:auto];
  border-bottom-color: color-mix(
    in srgb,
    var(--color-success) 40%,
    transparent
  );
  border-right-color: color-mix(in srgb, var(--color-success) 40%, transparent);
}

.post-body :deep(.post-table-scroll th:last-child),
.post-body :deep(.post-table-scroll td:last-child) {
  @apply border-r-0;
}

.post-body :deep(.post-table-scroll tr:last-child > th),
.post-body :deep(.post-table-scroll tr:last-child > td) {
  @apply border-b-0;
}

/* Header row: base surface + success (Nord green — same family as h2, avoids primary blue) */
.post-body :deep(.post-table-scroll th) {
  @apply bg-base-200 font-mono text-[0.65rem] font-semibold tracking-wider text-success uppercase;
}

.post-body :deep(.post-table-scroll tbody tr:nth-child(even)) {
  @apply bg-base-200;
}

.post-body :deep(.post-table-scroll tbody tr:nth-child(odd)) {
  @apply bg-base-100;
}
</style>
