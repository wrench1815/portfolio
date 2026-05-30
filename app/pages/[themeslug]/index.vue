<script lang="ts" setup>
import CodeNotFoundState from '~/components/errors/CodeNotFoundState.vue'
import type { BlogBreadcrumbItem } from '~/components/BlogBreadcrumb.vue'
import { contentToneFromStableId } from '~/utils/content-tone-palette'
import {
  contentToneAccentText,
  contentToneFrameBorder,
} from '~/utils/content-tone-style'

const route = useRoute()
const site = useSiteConfig()
const themeSlugParam = (route.params.themeslug as string) ?? ''
const themeSlug = computed(() => (route.params.themeslug as string) ?? '')

interface ThemeItem {
  slug: string
  name: string
  description: string
  code: string
  color?: string
}

interface Topic {
  slug: string
  title: string
  description: string
  themeslug: string
}

const [{ data: themeItems }, { data: topicItems }, { data: allPosts }] =
  await Promise.all([
    useAsyncData(`blog-theme-${themeSlugParam}`, () =>
      queryCollection('blog').where('type', '=', 'theme').all(),
    ),
    useAsyncData(`topics-theme-${themeSlugParam}`, () =>
      queryCollection('blog')
        .where('type', '=', 'topic')
        .where('themeslug', '=', themeSlugParam)
        .all(),
    ),
    useAsyncData('blog-posts-all', () =>
      queryCollection('blog').where('type', '=', 'post').all(),
    ),
  ])

const themesList = computed<ThemeItem[]>(
  () =>
    (Array.isArray(themeItems.value) ? themeItems.value : []) as ThemeItem[],
)
const topicsList = computed<Topic[]>(
  () => (Array.isArray(topicItems.value) ? topicItems.value : []) as Topic[],
)

const theme = computed(
  () => themesList.value.find((x) => x.slug === themeSlug.value) ?? null,
)

const themeExists = computed(() => theme.value !== null)
const hasTopics = computed(() => topicsList.value.length > 0)

const blogBreadcrumbItems = computed(() => {
  const items: BlogBreadcrumbItem[] = [
    { name: 'Home', item: '/' },
    { name: 'Themes', item: '/themes' },
  ]
  if (theme.value) {
    items.push({ name: theme.value.name })
  } else {
    items.push({ name: themeSlug.value })
  }
  return items
})

const headerTone = computed(() => theme.value?.color ?? 'nord-blue')
const headerTextClass = computed(() => contentToneAccentText(headerTone.value))
const headerFrameClass = computed(() =>
  contentToneFrameBorder(headerTone.value),
)

const topicAccentBySlug = computed(() => {
  const m = new Map<string, { text: string; frame: string }>()
  for (const topic of topicsList.value) {
    const tone = contentToneFromStableId(topic.slug)
    m.set(topic.slug, {
      text: contentToneAccentText(tone),
      frame: contentToneFrameBorder(tone),
    })
  }
  return m
})

function topicAccent(slug: string) {
  return topicAccentBySlug.value.get(slug)!
}

const postCountByTopicSlug = computed(() => {
  const slugs = new Set(topicsList.value.map((t) => t.slug))
  const counts = new Map<string, number>()
  const list = Array.isArray(allPosts.value) ? allPosts.value : []
  for (const p of list as { topicId?: string }[]) {
    const tid = p.topicId
    if (tid && slugs.has(tid)) {
      counts.set(tid, (counts.get(tid) ?? 0) + 1)
    }
  }
  return counts
})

function topicPostCount(slug: string): number {
  return postCountByTopicSlug.value.get(slug) ?? 0
}

/** Unknown first segment (e.g. /blah) is not a blog theme → generic error.vue, not CodeNotFoundState. */
const themesFromDb = (Array.isArray(themeItems.value)
  ? themeItems.value
  : []) as ThemeItem[]
if (!themesFromDb.some((t) => t.slug === themeSlugParam)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

defineOgImage(
  'Post.takumi',
  {
    pathFormat: 'bare',
    pathLabel: computed(() => `${themeSlug.value}/index.vue`),
    title: computed(() => theme.value?.name ?? themeSlug.value),
    description: computed(() =>
      theme.value
        ? theme.value.description || `Topics under ${theme.value.name}`
        : `Topics for ${themeSlug.value}`,
    ),
    kindLabel: 'Theme',
    kindValue: computed(() => theme.value?.name ?? themeSlug.value),
    primaryStat: computed(() => `${topicsList.value.length} topics`),
    colorMode: 'dark',
  },
  {
    alt: computed(() =>
      theme.value
        ? `${theme.value.name} — ${site.name ?? 'Blog'}`
        : `${themeSlug.value} — ${site.name ?? 'Blog'}`,
    ),
  },
)

useHead({
  title: computed(() =>
    theme.value ? `${theme.value.name} - Themes` : `${themeSlug.value} — theme`,
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        theme.value
          ? theme.value.description || `Topics under ${theme.value.name}`
          : `No theme matches ${themeSlug.value}`,
      ),
    },
  ],
})
</script>

<template>
  <main class="blog-content-shell">
    <BlogBreadcrumb :items="blogBreadcrumbItems" />

    <div v-if="themeExists" class="mb-16">
      <div class="mb-2 text-sm font-mono opacity-60">
        <span class="text-nord-green">$</span> cat {{ themeSlug }}.md
      </div>
      <h1 :class="['mb-4 text-4xl font-bold md:text-5xl', headerTextClass]">
        &lt;{{ theme?.name }} /&gt;
      </h1>
      <p class="mb-4 text-lg font-mono opacity-80">
        // {{ theme?.description }}
      </p>
      <div
        :class="[
          'inline-flex items-center gap-2 border-2 px-4 py-2 font-mono text-sm font-semibold',
          headerTextClass,
          headerFrameClass,
        ]"
        style="border-style: solid"
      >
        <span class="opacity-60">[</span>
        <span>{{ topicsList.length }}</span>
        <span class="opacity-60">topics]</span>
      </div>
    </div>

    <div v-if="themeExists && hasTopics" class="mb-12 space-y-6">
      <NuxtLink
        v-for="topic in topicsList"
        :key="topic.slug"
        :to="`/${themeSlug}/${topic.slug}`"
        class="link-no-slide-anim block topic-card"
      >
        <div
          :class="[
            'relative h-full overflow-hidden border-2 bg-base-200 p-6 transition-all group',
            topicAccent(topic.slug).frame,
            'hover:shadow-xl hover:border-opacity-70',
          ]"
        >
          <h2
            :class="[
              'mb-3 text-2xl font-bold opacity-80 transition-opacity duration-300 group-hover:opacity-100',
              topicAccent(topic.slug).text,
            ]"
          >
            &lt;{{ topic.title }} /&gt;
          </h2>
          <p class="mb-4 text-sm font-mono leading-relaxed opacity-70">
            // {{ topic.description }}
          </p>
          <div
            class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <div
              :class="[
                'inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs font-bold',
                topicPostCount(topic.slug) > 0
                  ? [
                      topicAccent(topic.slug).text,
                      topicAccent(topic.slug).frame,
                    ]
                  : ['text-warning', 'border-warning/40'],
              ]"
              style="border-style: solid"
            >
              <span class="opacity-60">[</span>
              <span>{{ topicPostCount(topic.slug) }}</span>
              <span class="opacity-60">posts]</span>
            </div>
            <p
              v-if="topicPostCount(topic.slug) === 0"
              class="text-xs font-mono text-warning opacity-70"
            >
              // 404: no posts in repo
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <CodeNotFoundState
      v-else-if="themeExists && !hasTopics"
      :field-value="themeSlug"
      content-type="topic"
      where-field="themeslug"
      shell-command="listTopicsForTheme()"
      footer-highlight="topics.length"
      footer-tail="→ theme loaded above; zero topic rows for this themeslug"
    />
  </main>
</template>

<style scoped>
.topic-card div {
  border-style: dashed;
}

.topic-card:hover div {
  border-style: solid;
}

.cta-button {
  border-style: dashed;
}

.cta-button:hover {
  border-style: solid;
}
</style>
