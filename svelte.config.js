import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	tsconfigFile: "./tsconfig.json",
	compilerOptions: {
		enableSourcemap: true,
	},
	preprocess: [vitePreprocess({
		sourceMap: true
	})],
	kit: {
		adapter: adapter()
	}
};
export default config;