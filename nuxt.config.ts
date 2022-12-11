const host = "lixa.jp"
const domain = host
const projectName = "LIXA"
const pageTitle = "美女ジムLIXA(リクサ) | 男性人気No.1！美女が教えるパーソナルジム"
const description = "群馬初！トレーナーは女子のみ！食事管理、筋トレを通してかっこいい体作りをサポート。女性目線でキメ細やかに指導。理想のモテボディを手に入れましょう。"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/sass/main.sass",
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/_variables.sass"'
        }
      }
    }
  },
  app: {
    head: {
      title: pageTitle,
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { name: 'keywords', content: '男性専用,パーソナルジム,パーソナルトレーニング,プライベートジム'},
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'fb:app_id', content: '328198145005843' },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#1f2233' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,700' },
        { rel: 'canonical', href: `https://${domain}` },
      ]
    }
  },
  runtimeConfig: {
    public: {
      ctfSpaceId: process.env.CTF_SPACE_ID,
      ctfEnvId: process.env.CTF_ENV_ID,
      ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      ctfCmaAccessToken: process.env.CTF_CMA_ACCESS_TOKEN,
      mailgunKey: process.env.MAILGUN_KEY,
      mailBcc: process.env.MAIL_BCC,
      gtmId: process.env.GTM_ID,
      gtmEnabled: process.env.GTM_ENABLED,
      gtmDebug: process.env.GTM_DEBUG,
      host,
      domain,
      projectName,
      pageTitle,
      description,
    }
  },
  router: {
    options: {
      strict: true
    }
  }
})
