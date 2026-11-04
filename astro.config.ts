import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site';

const base = '/politikmitkopf';

export default defineConfig({
  site: site.url,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/overlay/') && !page.includes('/redaktion'),
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  redirects: {
    '/kontakt/': `${base}/informant-werden/`,
    '/themen/': `${base}/videos/`,
    '/themen/gesellschaft/': `${base}/videos/`,
    '/themen/wirtschaft/': `${base}/videos/`,
    '/themen/medien/': `${base}/videos/`,
    '/themen/politik/': `${base}/videos/`,
  },
});
