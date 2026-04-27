<script lang="ts" setup>
import AnimatedBackground from '~/components/AnimatedBackground/AnimatedBackground.vue'
import HeaderSection from '~/components/Home/Hero/HeaderSection.vue'
import ThemeSection from '~/components/Home/Theme/ThemeSection.vue'

const site = useSiteConfig()

const homeTitle = 'Hardeep Kumar'
const homeDescription =
  "Hi! I'm Hardeep Kumar, a Web Developer. I work with Django. Django REST Framework, FastAPI, Vue JS and Nuxt JS."

defineOgImage(
  'Post.takumi',
  {
    pathFormat: 'bare',
    pathLabel: 'pages/index.vue',
    title: homeTitle,
    description: homeDescription,
    kindLabel: 'Page',
    kindValue: 'Home',
    colorMode: 'dark',
  },
  {
    alt: `${homeTitle} — ${site.name ?? 'Portfolio'}`,
  },
)
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <!-- Animated Background -->
    <AnimatedBackground />

    <div class="relative z-10">
      <section class="min-h-screen">
        <HeaderSection />
      </section>

      <section class="min-h-screen">
        <ThemeSection />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
