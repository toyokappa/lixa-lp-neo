import { createClient } from 'contentful'

export default defineNuxtPlugin((_nuxtApp) => {
  const $config = useRuntimeConfig()

  const config = {
    space: $config.public.ctfSpaceId,
    accessToken: $config.public.ctfCdaAccessToken
  }

  const ctfCdaClient = createClient(config)
  return {
    provide: {
      ctfCdaClient
    }
  }
})