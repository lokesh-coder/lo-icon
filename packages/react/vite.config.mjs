import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	outDir: "../core/react",
	plugins: [react({
		jsxRuntime: 'classic',
	})],
	build: {
		minify: true,
		outDir: "../core/react",
		rollupOptions: {
			external: ['react', 'react-dom'],
		},
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			name: 'index',
			fileName: 'index',
		},
	},

})