import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import postcss_import from 'postcss-import';
import autoprefixer from 'autoprefixer';

import tailwindcss from 'tailwindcss';
import tailwindcss_nesting from 'tailwindcss/nesting/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		postcss: {
			to: 'static/app.css',
			plugins: [
				postcss_import(),
				tailwindcss_nesting(),
				tailwindcss({
					content: ["./src/*.{html,svelte,scss,css}", "./src/**/*.{html,svelte,scss,css}", "./static/*.{html,svelte,scss,css}"],
					purge: ['./src/**/*.svelte'],
					darkMode: 'class', // 'media' or 'class',
					theme: {
						fontFamily: {
							sans: ['Open Sans', 'sans-serif'],
							serif: ['Merriweather', 'serif'],
						},
					},
					variants: {
						extend: {},
					},
					plugins: []
				}),
				autoprefixer()
			]
		}
	}),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},

		paths: {
			assets: '',
			base: ''
		}
	},
};

export default config;
