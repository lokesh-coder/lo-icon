import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	outDir: '../../docs-dist',
	site: 'https://lokesh-coder.github.io/',
	base: '/lo-icon',
	integrations: [mdx(), tailwind()],
	markdown: {
		shikiConfig: {
			theme: 'github-light',
		},
	},
});