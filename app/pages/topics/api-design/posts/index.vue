<script lang="ts" setup>
import { ref } from 'vue'

// Define post/article type
interface Post {
  id: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  views: number
  author?: string
  category: string
}

// Mock posts data - can be replaced with async data later
const posts = ref<Post[]>([
  {
    id: '1',
    title: 'RESTful API Design Principles',
    excerpt:
      'Exploring the core principles of REST architecture and how to design APIs that are intuitive, scalable, and maintainable. Learn about resource naming, HTTP methods, status codes, and more.',
    publishedAt: '2024-01-15',
    readTime: '5 min',
    views: 1234,
    author: 'Hardeep Kumar',
    category: 'API Design',
  },
  {
    id: '2',
    title: 'GraphQL vs REST: When to Use What',
    excerpt:
      'A comprehensive comparison of GraphQL and REST APIs, their strengths, weaknesses, and when to choose each approach for your next project.',
    publishedAt: '2024-01-10',
    readTime: '8 min',
    views: 892,
    author: 'Hardeep Kumar',
    category: 'API Design',
  },
  {
    id: '3',
    title: 'API Versioning Strategies',
    excerpt:
      'Different approaches to versioning APIs, from URL-based to header-based, and best practices for managing breaking changes without disrupting existing clients.',
    publishedAt: '2024-01-05',
    readTime: '6 min',
    views: 567,
    author: 'Hardeep Kumar',
    category: 'Best Practices',
  },
  {
    id: '4',
    title: 'Authentication and Authorization in APIs',
    excerpt:
      'Understanding OAuth 2.0, JWT tokens, API keys, and other authentication mechanisms for securing your API endpoints effectively.',
    publishedAt: '2024-01-01',
    readTime: '7 min',
    views: 445,
    author: 'Hardeep Kumar',
    category: 'Security',
  },
  {
    id: '5',
    title: 'API Documentation Best Practices',
    excerpt:
      'How to write clear, comprehensive API documentation that helps developers integrate with your API quickly and efficiently.',
    publishedAt: '2023-12-28',
    readTime: '4 min',
    views: 321,
    author: 'Hardeep Kumar',
    category: 'Documentation',
  },
])

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

useHead({
  title: 'Posts - API Design',
  meta: [
    {
      name: 'description',
      content:
        'Browse all posts about API Design, REST APIs, GraphQL, and more',
    },
  ],
})
</script>

<template>
  <main class="container mx-auto px-4 py-20">
    <!-- Header Section -->
    <div class="mb-16 animate-slide-up">
      <div class="text-sm mb-2 opacity-60">
        <span class="text-nord-green">$</span> ls -la posts/
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-nord-blue">
        &lt;All Posts /&gt;
      </h1>
      <p class="text-lg opacity-80 mb-4">// Browse all posts and articles</p>
      <div
        class="inline-flex items-center gap-2 px-4 py-2 border-2 border-nord-blue/30 text-nord-blue text-sm font-semibold"
        style="border-style: solid"
      >
        <span class="opacity-60">[</span>
        <span>{{ posts.length }}</span>
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
        <!-- Category and Date -->
        <div class="flex items-center justify-between mb-3">
          <div
            class="inline-flex items-center px-3 py-1 border border-nord-blue/30 text-nord-blue text-xs font-semibold"
            style="border-style: solid"
          >
            {{ post.category }}
          </div>
          <div class="text-xs opacity-60">
            {{ formatDate(post.publishedAt) }}
          </div>
        </div>

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
            <span v-if="post.author">{{ post.author }}</span>
          </div>
          <button
            class="flex items-center gap-2 text-nord-blue hover:text-nord-frost transition-colors text-sm font-medium"
          >
            <span>Read more</span>
            <span class="group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </button>
        </div>
      </div>
    </div>

    <!-- Back Link -->
    <div class="text-center mt-12">
      <NuxtLink
        to="/topics/api-design"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-nord-blue/50 text-nord-blue text-sm hover:border-nord-blue hover:bg-base-200 transition-all duration-300 group cta-button"
      >
        <span class="text-nord-green">$</span>
        <span>cd ..</span>
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
