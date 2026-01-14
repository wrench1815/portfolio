<script lang="ts" setup>
import { ref } from 'vue'

// Define theme type
interface Theme {
  id: string
  name: string
  description: string
  color: string
  count: number
  code: string
}

// Theme data - can be replaced with async data later
const themes = ref<Theme[]>([
  {
    id: 'development',
    name: 'Development',
    description: 'Web development, APIs, and backend systems',
    color: 'nord-blue',
    count: 15,
    code: 'dev',
  },
  {
    id: 'design',
    name: 'Design',
    description: 'UI/UX design and frontend experiences',
    color: 'nord-green',
    count: 8,
    code: 'ui',
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Infrastructure, deployment, and automation',
    color: 'nord-frost',
    count: 5,
    code: 'ops',
  },
  {
    id: 'learning',
    name: 'Learning',
    description: 'Tutorials, guides, and knowledge sharing',
    color: 'nord-yellow',
    count: 12,
    code: 'learn',
  },
])

const getThemeColorClasses = (color: string) => {
  const colorMap: Record<
    string,
    { text: string; bg: string; bgOpacity: string; border: string }
  > = {
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
  }
  const defaultColor = colorMap['nord-blue']
  return colorMap[color] ?? defaultColor
}

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
  <main class="container mx-auto px-4 py-20">
    <!-- Header Section -->
    <div class="text-center mb-16 animate-slide-up">
      <div class="font- text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> cd themes/
      </div>
      <h1 class="text-5xl md:text-6xl font-bold mb-4 text-nord-blue font-">
        &lt;All Themes /&gt;
      </h1>
      <p class="text-xl opacity-80 font-">
        // Browse all available themes and categories
      </p>
    </div>

    <!-- Themes Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <NuxtLink
        v-for="theme in themes"
        :key="theme.id"
        to="/topics/api-design"
        :class="[
          'bg-base-200 border-2 p-6 transition-all duration-300 font- relative overflow-hidden group hover:shadow-xl cursor-pointer block',
          getThemeColorClasses(theme.color)?.border ?? 'border-nord-blue/30',
        ]"
        style="border-style: dashed"
      >
        <!-- Terminal prompt indicator -->
        <div
          :class="[
            'text-xs mb-3 flex items-center gap-2',
            getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue',
          ]"
        >
          <span class="opacity-60">$</span>
          <span class="font-bold">{{ theme.code }}</span>
        </div>

        <!-- Theme Name with brackets -->
        <h2
          :class="[
            'text-2xl font-bold mb-3 flex items-center gap-2',
            getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue',
          ]"
        >
          <span class="opacity-40">&lt;</span>
          <span>{{ theme.name.toUpperCase() }}</span>
          <span class="opacity-40">/&gt;</span>
        </h2>

        <!-- Description -->
        <p class="text-sm opacity-70 mb-4 leading-relaxed">
          // {{ theme.description }}
        </p>

        <!-- Count Badge with terminal style -->
        <div
          :class="[
            'inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold mb-4',
            getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue',
            getThemeColorClasses(theme.color)?.border ?? 'border-nord-blue/30',
          ]"
          style="border-style: solid"
        >
          <span class="opacity-60">[</span>
          <span>{{ theme.count }}</span>
          <span class="opacity-60">items]</span>
        </div>

        <!-- Decorative code elements -->
        <div
          class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 transition-opacity"
          :class="getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue'"
        >
          { }
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped></style>
