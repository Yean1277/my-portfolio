// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 在最新astro版本(v3+), 一定要加这一行才可以， @astrojs/mdx也要下载到本地
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
});