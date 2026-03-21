<script lang="ts" setup>
const route = useRoute()
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
  postCount?: number
}

const [{ data: themeItems }, { data: topicItems }] = await Promise.all([
  useAsyncData(`blog-theme-${themeSlugParam}`, () =>
    queryCollection('blog').where('type', '=', 'theme').all(),
  ),
  useAsyncData(`topics-theme-${themeSlugParam}`, () =>
    queryCollection('blog')
      .where('type', '=', 'topic')
      .where('themeslug', '=', themeSlugParam)
      .all(),
  ),
])

const themesList = computed<ThemeItem[]>(
  () =>
    (Array.isArray(themeItems.value) ? themeItems.value : []) as ThemeItem[],
)
const topicsList = computed<Topic[]>(
  () => (Array.isArray(topicItems.value) ? topicItems.value : []) as Topic[],
)

const theme = computed(() => {
  const t = themesList.value.find((x) => x.slug === themeSlug.value)
  return (
    t ?? {
      slug: themeSlug.value,
      name: themeSlug.value,
      description: '',
      code: themeSlug.value,
      color: 'nord-blue',
    }
  )
})

const blogBreadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Themes', to: '/themes' },
  { label: theme.value.name },
])

const getThemeColorClasses = (color: string) => {
  const colorMap: Record<string, { text: string; border: string }> = {
    'nord-blue': { text: 'text-nord-blue', border: 'border-nord-blue/30' },
    'nord-green': { text: 'text-nord-green', border: 'border-nord-green/30' },
    'nord-frost': { text: 'text-nord-frost', border: 'border-nord-frost/30' },
    'nord-yellow': {
      text: 'text-nord-yellow',
      border: 'border-nord-yellow/30',
    },
  }
  return colorMap[color] ?? colorMap['nord-blue']
}

useHead({
  title: `${theme.value.name} - Themes`,
  meta: [
    {
      name: 'description',
      content: theme.value.description || `Topics under ${theme.value.name}`,
    },
  ],
})
</script>

<template>
  <main class="blog-content-shell">
    <BlogBreadcrumb :items="blogBreadcrumbItems" />
    <!-- Header: this theme -->
    <div class="mb-16 animate-slide-up">
      <div class="text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> cat {{ themeSlug }}.md
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-nord-blue">
        &lt;{{ theme.name }} /&gt;
      </h1>
      <p class="text-lg opacity-80 mb-4">// {{ theme.description }}</p>
      <div
        class="inline-flex items-center gap-2 px-4 py-2 border-2 border-nord-blue/30 text-nord-blue text-sm font-semibold"
        style="border-style: solid"
      >
        <span class="opacity-60">[</span>
        <span>{{ topicsList.length }}</span>
        <span class="opacity-60">topics]</span>
      </div>
    </div>

    <!-- Topics list -->
    <div class="space-y-6 mb-12">
      <NuxtLink
        v-for="topic in topicsList"
        :key="topic.slug"
        :to="`/${themeSlug}/${topic.slug}`"
        class="link-no-slide-anim block topic-card"
      >
        <div
          :class="[
            'bg-base-200 border-2 p-6 transition-all duration-300  relative overflow-hidden group h-full',
            getThemeColorClasses(theme.color ?? 'nord-blue')?.border ??
              'border-nord-blue/30',
            'hover:shadow-xl hover:border-opacity-70',
          ]"
        >
          <h2
            :class="[
              'text-2xl font-bold mb-3 text-nord-blue group-hover:text-nord-frost transition-colors',
              getThemeColorClasses(theme.color ?? 'nord-blue')?.text ??
                'text-nord-blue',
            ]"
          >
            &lt;{{ topic.title }} /&gt;
          </h2>
          <p class="opacity-70 mb-4 leading-relaxed text-sm">
            // {{ topic.description }}
          </p>
          <div
            :class="[
              'inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold',
              getThemeColorClasses(theme.color ?? 'nord-blue')?.text ??
                'text-nord-blue',
              getThemeColorClasses(theme.color ?? 'nord-blue')?.border ??
                'border-nord-blue/30',
            ]"
            style="border-style: solid"
          >
            <span class="opacity-60">[</span>
            <span>{{ topic.postCount ?? 0 }}</span>
            <span class="opacity-60">posts]</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Back link -->
    <div class="text-center mt-12">
      <NuxtLink
        to="/themes"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-nord-blue/50 text-nord-blue text-sm hover:border-nord-blue hover:bg-base-200 transition-all duration-300 group cta-button"
      >
        <span class="text-nord-green">$</span>
        <span>cd ..</span>
      </NuxtLink>
    </div>
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
