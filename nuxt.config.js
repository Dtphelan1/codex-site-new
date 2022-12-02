export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CodeX Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          ' The CodeX community is singularly focused on bringing standards to healthcare data so patients have the care and research journey they deserve and should expect. ',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content: 'CodeX HL7 mCode EHR FHIR REMS MITRE ICAREdata',
      },
      { name: 'author', content: 'CodeX' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', sizes: 'any', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
    // <link rel="icon" href="/favicon.ico" sizes="any" />
    // <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file
    '~/assets/styles/base.css',
    // Font file
    '~/assets/styles/satoshi.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/gtag.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://content.nuxtjs.org/get-started
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Custom link active class for routes
  router: {
    linkExactActiveClass: 'decoration-solid underline underline-offset-8',
  },
}
