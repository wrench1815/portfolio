import tailwindcss from '@tailwindcss/vite'
import rehypeWrapTables from './app/utils/rehype-wrap-tables'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'copyright', content: 'Hardeep Kumar' }],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/hardeepkumar_favicon_light.png',
          key: 'site-favicon',
        },
      ],
    },
  },

  modules: ['@nuxt/image', '@nuxt/content'],

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        rehypePlugins: {
          'wrap-tables': {
            instance: rehypeWrapTables,
          },
        },
        highlight: {
          theme: 'nord',
        },
      },
    },
  },

  // @nuxt/image: https://v1.image.nuxt.com/get-started/installation
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.NUXT_CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
  },

  css: ['./assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: '2025-03-24',
})
