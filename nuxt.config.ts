// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@*/dist/katex.min.css'
      }, {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        }]
    }
  },

  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  plugins: [
    // '~/plugins/vue-awesome-paginate.js'
    '~/plugins/mermaid.client.js'
  ],
  generate: {
    routes: [
      '/feed.xml'
    ]
  },

  content: {
    highlight: {
      theme: 'monokai',
      preload: [
        'python',
        'c',
        'java',
      ]
    },
    markdown: {
      remarkPlugins: ['remark-math', 'remark-gfm'],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html' // the default value is 'htmlAndMathml'
        },
        'remark-mermaid': { simple: true }
      }
    },
  },
})
