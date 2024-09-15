// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-toc',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'zh-CN', iso: 'zh-CN', name: '简体中文' },
      { code: 'zh-TW', iso: 'zh-TW', name: '繁體中文' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
      { code: 'ja', iso: 'ja-JP', name: '日本語' },
      { code: 'ko', iso: 'ko-KR', name: '한국어' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский' },
      { code: 'uk', iso: 'uk-UA', name: 'Українська' },
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  plugins: [
    // '~/plugins/vue-awesome-paginate.js'
    '~/plugins/mermaid.client.js',
  ],
  generate: {
    routes: ['/feed.xml'],
  },

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  content: {
    highlight: {
      theme: 'everforest-dark',
      preload: ['python', 'c', 'java', 'go'],
    },
    markdown: {
      remarkPlugins: ['remark-math', 'remark-gfm'],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html', // the default value is 'htmlAndMathml'
        },
        'remark-mermaid': { simple: true },
      },
    },
  },
});
