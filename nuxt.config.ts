export default defineNuxtConfig({
  css: [
    'assets/style/reset.scss',
    'primevue/resources/themes/viva-dark/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
})
