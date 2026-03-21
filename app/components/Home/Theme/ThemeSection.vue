<script setup lang="ts">
import { ref } from 'vue'

// Define theme type
interface Theme {
  id?: string
  slug?: string
  name: string
  description: string
  color: string
  count: number
  code: string
}

// For now, using mock data - can be replaced with async data later
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

const isLoading = ref(false)

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

const themeToPath = (theme: Theme) => `/${theme.slug ?? theme.id}`
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center pt-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header Section -->
      <div class="text-center mb-16 animate-slide-up">
        <div class="font-mon text-sm mb-2 opacity-60">
          <span class="text-nord-green">$</span> cat themes.md
        </div>
        <h2 class="text-5xl font-bold mb-4 text-nord-blue font-mon">
          &lt;Themes /&gt;
        </h2>
        <p class="text-lg opacity-80 font-mon">
          // Exploring themes across technology, design, and innovation
        </p>
      </div>

      <!-- Themes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <!-- Loading State -->
        <template v-if="isLoading">
          <div
            v-for="i in 4"
            :key="i"
            class="bg-base-200 border-2 border-nord-blue/30 p-5 cursor-pointer transition-all duration-300 font-mon relative overflow-hidden"
            style="border-style: dashed"
          >
            <div class="text-xs text-nord-blue/50 mb-2">LOADING...</div>
            <div class="w-24 h-4 bg-base-300/50 mb-2 animate-pulse"></div>
            <div class="w-full h-12 bg-base-300/50 mb-3 animate-pulse"></div>
            <div class="w-16 h-4 bg-base-300/50 animate-pulse"></div>
          </div>
        </template>

        <!-- Theme Cards -->
        <template v-else>
          <NuxtLink
            v-for="theme in themes"
            :key="theme.slug ?? theme.id"
            :to="themeToPath(theme)"
            class="link-no-slide-anim block"
          >
            <div
              :class="[
                'theme-card bg-base-200 border-2 p-5 cursor-pointer transition-all duration-300 font-mon relative overflow-hidden group h-full',
                getThemeColorClasses(theme.color)?.border ??
                  'border-nord-blue/30',
                'hover:border-opacity-70 hover:shadow-xl',
              ]"
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
              <h3
                :class="[
                  'text-xl font-bold mb-3 flex items-center gap-2',
                  getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue',
                ]"
              >
                <span class="opacity-40">&lt;</span>
                <span>{{ theme.name.toUpperCase() }}</span>
                <span class="opacity-40">/&gt;</span>
              </h3>

              <!-- Description -->
              <p class="text-sm opacity-70 mb-4 leading-relaxed">
                // {{ theme.description }}
              </p>

              <!-- Count Badge with terminal style -->
              <div
                :class="[
                  'inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold',
                  getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue',
                  getThemeColorClasses(theme.color)?.border ??
                    'border-nord-blue/30',
                ]"
                style="border-style: solid"
              >
                <span class="opacity-60">[</span>
                <span>{{ theme.count }}</span>
                <span class="opacity-60">]</span>
              </div>

              <!-- Decorative code elements -->
              <div
                class="absolute top-2 right-2 text-xs opacity-10 group-hover:opacity-20 transition-opacity"
                :class="
                  getThemeColorClasses(theme.color)?.text ?? 'text-nord-blue'
                "
              >
                { }
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/themes"
          class="link-no-slide-anim inline-flex items-center gap-3 px-8 py-4 border-2 border-nord-blue/50 text-nord-blue font-mon text-base bg-base-200 hover:border-nord-blue hover:shadow-lg transition-all duration-300 group cta-button"
        >
          <span class="text-nord-green">$</span>
          <span>view all themes</span>
          <span
            class="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            >→</span
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-card {
  border-style: dashed;
}

.theme-card:hover {
  border-style: solid;
}

.cta-button {
  border-style: dashed;
}

.cta-button:hover {
  border-style: solid;
}
</style>
