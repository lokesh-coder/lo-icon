/** @type {import('tailwindcss').Config} */

import tyographyPlugin from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				sans: ['JetBrains Mono', 'monospace']
			}
		},
	},
	plugins: [tyographyPlugin],
}
