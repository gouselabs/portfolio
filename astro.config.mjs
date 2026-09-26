// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: replace with the real production domain before deploying.
const SITE_URL = 'https://gouselabs.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx()]
});