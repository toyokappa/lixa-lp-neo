const host = "lixa.jp"
const domain = host
const projectName = "LIXA"
const pageTitle = "LIXA(リクサ) | イケてる男性であり続けるためのパーソナルジム"
const description = "群馬初、トレーナーが全員女性！食事管理、筋トレを通してかっこいい体作りをサポート。女性目線でキメ細やかに指導。理想のモテボディを手に入れましょう。"

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
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,700' },
      ]
    }
  },
  runtimeConfig: {
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfEnvId: process.env.CTF_ENV_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    ctfCmaAccessToken: process.env.CTF_CMA_ACCESS_TOKEN,
    public: {
      mailgunKey: process.env.MAILGUN_KEY,
      mailBcc: process.env.MAIL_BCC,
      host,
      domain,
      projectName,
      pageTitle,
      description,
    }
  }
})
