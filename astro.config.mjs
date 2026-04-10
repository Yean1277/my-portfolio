import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind(), mdx()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/mdx'],
    },
  },
});
