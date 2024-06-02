// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-primevue', '@vesp/nuxt-fontawesome'],
  css: ['~/assets/scss/main.scss'],
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar', 'phone'],
      regular: ['user']
    }
  }
})