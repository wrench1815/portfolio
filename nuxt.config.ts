// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'copyright', content: 'Hardeep Kumar' }],
    },
  },

  build: {
    transpile: ['oh-vue-icons'],
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image-edge'],

  // tailwind
  tailwindcss: {},

  // @nuxt/content: https://content.nuxtjs.org/api/configuration
  content: {},

  // @nuxt/image-edge: https://v1.image.nuxtjs.org/get-started
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.NUXT_CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['oh-vue-icons/icons'],
    },
  },
})
