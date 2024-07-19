// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@vueuse/nuxt',
      'usebootstrap',
      'usebootstrap-docs',
      'nuxt-icon',
      "@nuxt/image"
  ],
  css:['~/assets/css/default.css'],
  app: {
    　pageTransition: { name: 'page', mode: 'out-in' },
      head: {
          title: 'パーセプトロンを学ぶのだ',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
          link: [
            {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            },
            {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossorigin: "",
            },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Mochiy+Pop+One&display=swap",
              crossorigin: "",
            },
          ],
      },
  },

  vite: {
      server: {
          watch: {
              usePolling: true
          }
      },
  },

  compatibilityDate: '2024-07-19'
})