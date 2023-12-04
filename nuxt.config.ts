// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@vueuse/nuxt',
      'usebootstrap',
      'nuxt-icon',
      "@nuxt/image"
  ],
  app: {
    　pageTransition: { name: 'page', mode: 'out-in' },
      head: {
          title: 'パーセプトロンを学ぼう！',
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
          // TODO: ここに先ほど控えたhrefの中身を記載
              href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap",
              crossorigin: "",
            },
          ],
      },
  },
  css: [
      "bootstrap/scss/bootstrap.scss"
  ],
  vite: {
      server: {
          watch: {
              usePolling: true
          }
      },
  }
})