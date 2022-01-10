import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import autoprefixer from 'autoprefixer';
import plugin from 'tailwindcss';

const tailwindcss = plugin;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		postcss: {
			plugins: [
				tailwindcss({
					content: ["./src/**/*.{html,svelte,scss,css}"],
					darkMode: 'class', // 'media' or 'class',
					theme: {
						extend: {},
					},
					variants: {
						extend: {},
					},
					plugins: []
				}),
				autoprefixer()
			]
		},
	}),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	css: {
		
	}
};

export default config;
