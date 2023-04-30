import { defineNuxtPlugin } from '#app'
import Primevue from 'primevue/config'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Primevue, { ripple: true })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Toast', Toast)
})
