<script lang="ts" setup>
import CodeNotFoundState from '~/components/errors/CodeNotFoundState.vue'
import { contentToneFromStableId } from '~/utils/content-tone-palette'
import {
  contentToneAccentText,
  contentToneFrameBorder,
} from '~/utils/content-tone-style'

const route = useRoute()
const themeSlug = computed(() => (route.params.themeslug as string) ?? '')
const topicSlug = computed(() => (route.params.topicslug as string) ?? '')

interface PostItem {
  slug: string
  title: string
  description?: string
  publishedAt?: string
  readTime?: string
  author?: string
  category?: string
}

interface TopicItem {
  slug: string
  title: string
  description?: string
  themeslug: string
}

const [{ data: topicItem }, { data: postItems }, { data: themeForBreadcrumb }] =
  await Promise.all([
    useAsyncData(`topic-${themeSlug.value}-${topicSlug.value}`, () =>
      queryCollection('blog')
        .where('type', '=', 'topic')
        .where('themeslug', '=', themeSlug.value)
        .where('slug', '=', topicSlug.value)
        .first(),
    ),
    useAsyncData(`blog-posts-${themeSlug.value}-${topicSlug.value}`, () =>
      queryCollection('blog')
        .where('type', '=', 'post')
        .where('topicId', '=', topicSlug.value)
        .order('publishedAt', 'DESC')
        .all(),
    ),
    useAsyncData(`breadcrumb-theme-${themeSlug.value}`, () =>
      queryCollection('blog')
        .where('type', '=', 'theme')
        .where('slug', '=', themeSlug.value)
        .first(),
    ),
  ])

const topic = computed(() => (topicItem.value as TopicItem | null) ?? null)
const topicTitle = computed(() => topic.value?.title ?? topicSlug.value)

const themeBreadcrumbName = computed(() => {
  const t = themeForBreadcrumb.value as { name?: string } | null | undefined
  return t?.name ?? themeSlug.value
})

const blogBreadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Themes', to: '/themes' },
  { label: themeBreadcrumbName.value, to: `/${themeSlug.value}` },
  { label: topicTitle.value },
])

const posts = computed<PostItem[]>(
  () => (Array.isArray(postItems.value) ? postItems.value : []) as PostItem[],
)

const hasPosts = computed(() => posts.value.length > 0)

const themeMeta = computed(
  () =>
    themeForBreadcrumb.value as
      | { name?: string; color?: string }
      | null
      | undefined,
)

const headerTone = computed(() => {
  const c = themeMeta.value?.color
  if (c) return c
  return contentToneFromStableId(`${themeSlug.value}/${topicSlug.value}`)
})

const headerTextClass = computed(() => contentToneAccentText(headerTone.value))
const headerFrameClass = computed(() =>
  contentToneFrameBorder(headerTone.value),
)

const postAccentBySlug = computed(() => {
  const m = new Map<string, { text: string; frame: string }>()
  for (const post of posts.value) {
    const tone = contentToneFromStableId(post.slug)
    m.set(post.slug, {
      text: contentToneAccentText(tone),
      frame: contentToneFrameBorder(tone),
    })
  }
  return m
})

function postAccent(slug: string) {
  return postAccentBySlug.value.get(slug)!
}

const formatDate = (d: string | undefined) =>
  d
    ? new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

useHead({
  title: computed(() => `Posts — ${topicTitle.value}`),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        topic.value?.description
          ? topic.value.description
          : `Browse all posts in ${topicTitle.value}`,
      ),
    },
  ],
})
</script>

<template>
  <main class="blog-content-shell">
    <BlogBreadcrumb :items="blogBreadcrumbItems" />
    <div class="mb-16 animate-slide-up">
      <div class="text-sm mb-2 font-mono opacity-60">
        <span class="text-nord-green">$</span> ls -la {{ themeSlug }}/{{
          topicSlug
        }}/
      </div>
      <h1 :class="['text-4xl md:text-5xl font-bold mb-4', headerTextClass]">
        &lt;{{ topicTitle ?? 'All Posts' }} /&gt;
      </h1>
      <p class="mb-4 text-lg font-mono opacity-80">
        // {{ topic?.description ?? `Posts in ${topicTitle}` }}
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
        <span>{{ posts.length }}</span>
        <span class="opacity-60">posts]</span>
      </div>
    </div>

    <div v-if="hasPosts" class="space-y-6 mb-12">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/${themeSlug}/${topicSlug}/${post.slug}`"
        class="link-no-slide-anim block post-card"
      >
        <div
          :class="[
            'bg-base-200 border-2 p-6 transition-all duration-300 relative overflow-hidden group h-full',
            postAccent(post.slug).frame,
            'hover:shadow-xl hover:border-opacity-70',
          ]"
        >
          <h2
            :class="[
              'text-2xl font-bold mb-3 opacity-80 transition-opacity duration-300 group-hover:opacity-100',
              postAccent(post.slug).text,
            ]"
          >
            &lt;{{ post.title }} /&gt;
          </h2>
          <p class="mb-4 text-sm font-mono leading-relaxed opacity-70">
            // {{ post.description ?? post.title }}
          </p>
          <div
            :class="[
              'inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs font-bold',
              postAccent(post.slug).text,
              postAccent(post.slug).frame,
            ]"
            style="border-style: solid"
          >
            <span class="opacity-60">[</span>
            <span>{{ formatDate(post.publishedAt) || '—' }}</span>
            <span class="opacity-60">]</span>
            <span v-if="post.readTime" class="opacity-70 ml-1"
              >· {{ post.readTime }} read</span
            >
          </div>
        </div>
      </NuxtLink>
    </div>

    <CodeNotFoundState v-else :field-value="topicSlug" />
  </main>
</template>

<style scoped>
.post-card div {
  border-style: dashed;
}
.post-card:hover div {
  border-style: solid;
}
.cta-button {
  border-style: dashed;
}
.cta-button:hover {
  border-style: solid;
}
</style>
