import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const $config = useRuntimeConfig()

  nuxtApp.vueApp.use(createGtm({
    id: $config.public.gtmId,
    defer: false,
    compatibility: false,
    enabled: $config.public.gtmEnabled === 'true',
    debug: $config.public.gtmDebug === 'true',
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false
  }))
})