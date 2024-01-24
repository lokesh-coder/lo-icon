import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	outDir: '../../docs-dist',
	integrations: [mdx(), tailwind()],
	markdown: {
		shikiConfig: {
			theme: 'material-theme-palenight',
		},
	},
});