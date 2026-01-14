<script lang="ts" setup>
import { ref } from 'vue'

// Define topic type
interface Topic {
  id: string
  title: string
  description: string
  postCount: number
  themeId: string
}

// Define post/article type
interface Post {
  id: string
  title: string
  excerpt: string
  readTime: string
  views: number
}

// Topic data - single topic for blueprint
const topic = ref<Topic>({
  id: 'api-design',
  title: 'API Design',
  description:
    'Best practices, patterns, and principles for designing RESTful APIs, GraphQL schemas, and microservice interfaces. Covering versioning, authentication, documentation, and more.',
  postCount: 8,
  themeId: 'development',
})

// Mock posts data - can be replaced with async data later
const posts = ref<Post[]>([
  {
    id: '1',
    title: 'RESTful API Design Principles',
    excerpt:
      'Exploring the core principles of REST architecture and how to design APIs that are intuitive, scalable, and maintainable.',
    readTime: '5 min',
    views: 1234,
  },
  {
    id: '2',
    title: 'GraphQL vs REST: When to Use What',
    excerpt:
      'A comprehensive comparison of GraphQL and REST APIs, their strengths, weaknesses, and when to choose each approach.',
    readTime: '8 min',
    views: 892,
  },
  {
    id: '3',
    title: 'API Versioning Strategies',
    excerpt:
      'Different approaches to versioning APIs, from URL-based to header-based, and best practices for managing breaking changes.',
    readTime: '6 min',
    views: 567,
  },
])

useHead({
  title: `${topic.value.title} - Topics`,
  meta: [
    {
      name: 'description',
      content: topic.value.description,
    },
  ],
})
</script>

<template>
  <main class="container mx-auto px-4 py-20">
    <!-- Header Section -->
    <div class="mb-16 animate-slide-up">
      <div class="text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> cat topics/{{ topic.id }}.md
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-nord-blue">
        &lt;{{ topic.title }} /&gt;
      </h1>
      <p class="text-lg opacity-80 mb-4">// {{ topic.description }}</p>
      <div
        class="inline-flex items-center gap-2 px-4 py-2 border-2 border-nord-blue/30 text-nord-blue text-sm font-semibold"
        style="border-style: solid"
      >
        <span class="opacity-60">[</span>
        <span>{{ topic.postCount }}</span>
        <span class="opacity-60">posts]</span>
      </div>
    </div>

    <!-- Posts List -->
    <div class="space-y-6 mb-12">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-base-200 border-2 border-nord-blue/30 p-6 transition-all duration-300 hover:shadow-xl hover:border-nord-blue/50 group"
        style="border-style: dashed"
      >
        <!-- Post Title -->
        <h2
          class="text-2xl font-bold text-nord-blue group-hover:text-nord-frost transition-colors mb-3"
        >
          {{ post.title }}
        </h2>

        <!-- Post Excerpt -->
        <p class="opacity-70 mb-4 leading-relaxed">
          {{ post.excerpt }}
        </p>

        <!-- Post Meta -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4 text-sm opacity-60">
            <span>{{ post.readTime }} read</span>
            <span>{{ post.views }} views</span>
          </div>
          <NuxtLink
            to="/topics/api-design/posts"
            class="flex items-center gap-2 text-nord-blue hover:text-nord-frost transition-colors text-sm font-medium"
          >
            <span>Read more</span>
            <span class="group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Action Links -->
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
    >
      <NuxtLink
        to="/topics/api-design/posts"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-nord-blue/50 text-nord-blue text-sm bg-base-200 hover:border-nord-blue hover:shadow-lg transition-all duration-300 group cta-button"
      >
        <span class="text-nord-green">$</span>
        <span>view all posts</span>
        <span
          class="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
          >→</span
        >
      </NuxtLink>
      <NuxtLink
        to="/themes"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-nord-blue/50 text-nord-blue text-sm hover:border-nord-blue hover:bg-base-200 transition-all duration-300 group cta-button"
      >
        <span class="text-nord-green">$</span>
        <span>cd ../themes</span>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.cta-button {
  border-style: dashed;
}

.cta-button:hover {
  border-style: solid;
}
</style>
