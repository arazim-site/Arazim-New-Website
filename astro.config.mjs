import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://araz.im',
  base: 'Arazim-Website',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
