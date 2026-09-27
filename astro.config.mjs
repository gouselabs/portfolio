// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

const SITE_URL = 'https://gouselabs.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});