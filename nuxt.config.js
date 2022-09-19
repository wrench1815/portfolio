export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio | Hardeep Kumar',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-gradient-gray',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mdb.js',
    '~/plugins/vueTyped.js',
    '~/plugins/remixIcons.js',
    '~/plugins/vue-html2pdf.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://gitlab.com/broj42/nuxt-lazy-load#readme
    [
      'nuxt-lazy-load',
      {
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        directiveOnly: true,

        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

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
      Hind: true,
      'IBM Plex Sans': true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
