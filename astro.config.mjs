import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arsbudinvest.ua',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
