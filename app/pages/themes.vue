<script lang="ts" setup>
import type { BlogBreadcrumbItem } from '~/components/BlogBreadcrumb.vue'

interface Theme {
  slug: string
  name: string
  description: string
  code: string
  count?: number
}

const [{ data: themeItems }, { data: topicItems }] = await Promise.all([
  useAsyncData('themes-list', () =>
    queryCollection('blog')
      .where('type', '=', 'theme')
      .order('name', 'ASC')
      .all(),
  ),
  useAsyncData('topics-list', () =>
    queryCollection('blog').where('type', '=', 'topic').all(),
  ),
])

const themesList = computed<Theme[]>(
  () => (Array.isArray(themeItems.value) ? themeItems.value : []) as Theme[],
)
const topicsList = computed<{ themeslug: string }[]>(
  () =>
    (Array.isArray(topicItems.value) ? topicItems.value : []) as {
      themeslug: string
    }[],
)

const themes = computed<Theme[]>(() =>
  themesList.value.map((theme) => ({
    ...theme,
    count: topicsList.value.filter((t) => t.themeslug === theme.slug).length,
  })),
)

const colorMap = {
  'nord-blue': {
    text: 'text-nord-blue',
    bg: 'bg-nord-blue',
    bgOpacity: 'bg-nord-blue/20',
    border: 'border-nord-blue/30',
  },
  'nord-green': {
    text: 'text-nord-green',
    bg: 'bg-nord-green',
    bgOpacity: 'bg-nord-green/20',
    border: 'border-nord-green/30',
  },
  'nord-frost': {
    text: 'text-nord-frost',
    bg: 'bg-nord-frost',
    bgOpacity: 'bg-nord-frost/20',
    border: 'border-nord-frost/30',
  },
  'nord-yellow': {
    text: 'text-nord-yellow',
    bg: 'bg-nord-yellow',
    bgOpacity: 'bg-nord-yellow/20',
    border: 'border-nord-yellow/30',
  },
} as const

const colorKeys = Object.keys(colorMap) as (keyof typeof colorMap)[]

const getThemeColorClasses = (seed: string) => {
  const index =
    [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0) % colorKeys.length
  const key = colorKeys[index] ?? 'nord-blue'
  return colorMap[key] ?? colorMap['nord-blue']
}

const blogBreadcrumbItems: BlogBreadcrumbItem[] = [
  { name: 'Home', item: '/' },
  { name: 'Themes' },
]

const site = useSiteConfig()

defineOgImage(
  'Post.takumi',
  {
    pathFormat: 'bare',
    pathLabel: 'pages/themes.vue',
    title: 'All Themes',
    description:
      'Browse all available themes and categories — explore technology, design, and innovation',
    kindLabel: 'Page',
    kindValue: 'Themes',
    primaryStat: computed(() => `${themes.value.length} themes`),
    colorMode: 'dark',
  },
  {
    alt: computed(() => `All Themes — ${site.name ?? 'Portfolio'}`),
  },
)

useHead({
  title: 'Themes',
  meta: [
    {
      name: 'description',
      content: 'Explore themes across technology, design, and innovation',
    },
    {
      name: 'keywords',
      content:
        'themes, categories, development, design, devops, learning, portfolio, Hardeep Kumar',
    },
  ],
})
</script>

<template>
  <main class="blog-content-shell">
    <BlogBreadcrumb :items="blogBreadcrumbItems" />
    <!-- Header Section -->
    <div class="mb-16">
      <div class="text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> cd theme/
      </div>
      <h1 class="text-5xl md:text-6xl font-bold mb-4 text-nord-blue">
        &lt;All Themes /&gt;
      </h1>
      <p class="text-xl opacity-80">
        // Browse all available themes and categories
      </p>
    </div>

    <!-- Themes Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <NuxtLink
        v-for="theme in themes"
        :key="theme.slug"
        :to="`/${theme.slug}`"
        class="link-no-slide-anim block"
        :class="[
          'bg-base-200 border-2 p-6 transition-all duration-300  relative overflow-hidden group hover:shadow-xl cursor-pointer border-dashed hover:border-solid',
          getThemeColorClasses(theme.slug)?.border ?? 'border-nord-blue/30',
        ]"
      >
        <div
          :class="[
            'text-xs mb-3 flex items-center gap-2',
            getThemeColorClasses(theme.slug)?.text ?? 'text-nord-blue',
          ]"
        >
          <span class="opacity-60">$</span>
          <span class="font-bold">{{ theme.code }}</span>
        </div>

        <h2
          :class="[
            'text-2xl font-bold mb-3 flex items-center gap-2',
            getThemeColorClasses(theme.slug)?.text ?? 'text-nord-blue',
          ]"
        >
          <span class="opacity-40">&lt;</span>
          <span>{{ theme.name.toUpperCase() }}</span>
          <span class="opacity-40">/&gt;</span>
        </h2>

        <p class="text-sm opacity-70 mb-4 leading-relaxed">
          // {{ theme.description }}
        </p>

        <div
          :class="[
            'inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold mb-4',
            getThemeColorClasses(theme.slug)?.text ?? 'text-nord-blue',
            getThemeColorClasses(theme.slug)?.border ?? 'border-nord-blue/30',
          ]"
          style="border-style: solid"
        >
          <span class="opacity-60">[</span>
          <span>{{ theme.count ?? 0 }}</span>
          <span class="opacity-60">items]</span>
        </div>

        <div
          class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 transition-opacity"
          :class="getThemeColorClasses(theme.slug)?.text ?? 'text-nord-blue'"
        >
          { }
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped></style>
