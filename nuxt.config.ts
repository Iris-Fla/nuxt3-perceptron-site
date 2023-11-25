// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@vueuse/nuxt',
      'usebootstrap',
      'nuxt-icon',
      "@nuxt/image"
  ],
  app: {
      head: {
          title: 'パーセプトロンを学ぼう！',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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