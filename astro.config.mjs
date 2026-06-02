import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://araz.im',
  base: '/',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
