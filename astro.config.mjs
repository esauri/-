import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), solidJs(), tailwind()],
  redirects: {
    "/horsemask": "/projects/dawn-of-the-living-horsemasks",
    "/poseidon": "/projects/poseidon",
    "/quickpost": "/projects/neighbor-post",
    "/tiptap": "/projects/tip-tap",
    "/trumpcard": "/projects/trump-card",
    "/twosevenzero": "/projects/two-seven-zero",
    "/venu": "/projects/venu",
  },
  site: 'https://ericksauri.com',
});
