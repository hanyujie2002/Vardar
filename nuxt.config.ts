// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-08-09",
  plugins: [
    // '~/plugins/vue-awesome-paginate.js'
  ],
  ssr: false
})