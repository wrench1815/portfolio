import GoogleFontsModule from '@nuxtjs/google-fonts';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['oh-vue-icons'],
  },

  modules: ['@nuxtjs/google-fonts'],

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

  vite: {
    optimizeDeps: {
      exclude: ['oh-vue-icons/icons'],
    },
  },
});
