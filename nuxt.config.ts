import tailwindcss from '@tailwindcss/vite'

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

  // @nuxt/content: https://content.nuxtjs.org/api/configuration
  // content: {
  //   watch: {
  //     ws: {
  //       hostname: process.env.HOSTNAME,
  //     },
  //   },
  // },

  // @nuxt/image-edge: https://v1.image.nuxtjs.org/get-started
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
