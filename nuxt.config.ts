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

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/content'],

  // tailwind
  tailwindcss: {},

  // @nuxtjs/google-fonts: https://google-fonts.nuxtjs.org/setup
  googleFonts: {
    display: 'swap',
    download: true,
    overwriting: false,
    inject: true,
    families: {
      Mansalva: true,
      'Nanum Pen Script': true,
      'Fira Code': true,
    },
  },

  // @nuxt/content: https://content.nuxtjs.org/api/configuration
  content: {},

  vite: {
    optimizeDeps: {
      exclude: ['oh-vue-icons/icons'],
    },
  },
});
