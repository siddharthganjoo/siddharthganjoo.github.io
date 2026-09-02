import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://siddharthganjoo.github.io',
  trailingSlash: 'never',

  build: {
    format: 'file'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});