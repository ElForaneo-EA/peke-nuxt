const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isUserSite =
  owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = owner
  ? `https://${owner}.github.io`
  : 'https://example.github.io';
const base = owner && repo && !isUserSite ? `/${repo}/` : '/';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  experimental: {
    appManifest: false,
  },

  app: {
    baseURL: base,
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      title: 'PEKEMIND - Tranquilidad para padres de bebés',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` },
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

  runtimeConfig: {
    public: {
      site,
    },
  },
});
