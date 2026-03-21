<script lang="ts" setup>
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
      <div class="text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> ls -la {{ themeSlug }}/{{
          topicSlug
        }}/
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-nord-blue">
        &lt;{{ topicTitle ?? 'All Posts' }} /&gt;
      </h1>
      <p class="text-lg opacity-80 mb-4">
        // {{ topic?.description ?? `Posts in ${topicTitle}` }}
      </p>
      <div
        class="inline-flex items-center gap-2 px-4 py-2 border-2 border-nord-blue/30 text-nord-blue text-sm font-semibold"
        style="border-style: solid"
      >
        <span class="opacity-60">[</span>
        <span>{{ posts.length }}</span>
        <span class="opacity-60">posts]</span>
      </div>
    </div>

    <div class="space-y-6 mb-12">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/${themeSlug}/${topicSlug}/${post.slug}`"
        class="link-no-slide-anim block post-card"
      >
        <div
          class="bg-base-200 border-2 p-6 transition-all duration-300 relative overflow-hidden group h-full border-nord-blue/30 hover:shadow-xl hover:border-opacity-70"
        >
          <h2
            class="text-2xl font-bold mb-3 text-nord-blue group-hover:text-nord-frost transition-colors"
          >
            &lt;{{ post.title }} /&gt;
          </h2>
          <p class="opacity-70 mb-4 leading-relaxed text-sm">
            // {{ post.description ?? post.title }}
          </p>
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 border border-nord-blue/30 text-nord-blue text-xs font-bold"
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

    <div class="text-center mt-12">
      <NuxtLink
        :to="`/${themeSlug}`"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-nord-blue/50 text-nord-blue text-sm hover:border-nord-blue hover:bg-base-200 transition-all duration-300 group cta-button"
      >
        <span class="text-nord-green">$</span> cd ..
      </NuxtLink>
    </div>
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
