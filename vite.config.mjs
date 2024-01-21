import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	publicDir: false,

	plugins: [react({
		jsxRuntime: 'classic',
	})],
	build: {
		minify: true,
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			name: 'lo-icon',
			fileName: 'lo-icon',
		},
	},

})