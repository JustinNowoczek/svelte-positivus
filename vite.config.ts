import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@sections': path.resolve(__dirname, 'src/sections'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
})

