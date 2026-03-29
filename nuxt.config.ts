export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],

  experimental: {
    appManifest: false,
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FAFAF7' },
      ],
      title: 'PEKEMIND - Tranquilidad para padres de bebés',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'PEKEMIND',
      short_name: 'PEKEMIND',
      description: 'Tranquilidad para padres de bebés',
      theme_color: '#98C1D9',
      icons: [
        {
          src: '/pekemind_logo_v4.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    client: {
      installPrompt: 'off',
    },
    devOptions: {
      enabled: false,
    },
  },
});
