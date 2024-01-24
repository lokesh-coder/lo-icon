import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: "../core/css",
		minify: true,
		rollupOptions: {
			input: {
				style: resolve(__dirname, "src/index.css"),
			},
			output: {
				assetFileNames: 'index.css',
			}
		},
	},
})