<script lang="ts" scope="module">
	import Search from '$lib/search.svelte';
	import Grid from 'gridjs-svelte';

	const data = [
		{block: '0x1'},
		{block: '0x1'}
	]
</script>

<style lang="scss">
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";

	.text-embossed {
		color: theme('colors.slate.100');
		text-shadow: -1px -1px 1px theme('colors.slate.900');
		background-clip: text;
		-webkit-background-clip: text;
    	-moz-background-clip: text;
	}

	.seperator {
		@apply w-full h-2 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-800;
	}

	.background {
        @apply bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-900;
    }

	:global {
		.gridjs-wrapper {
			@apply shadow-inner;

			th {
				@apply p-4 border-2 border-solid border-slate-200;
			}

			td {
				@apply p-4 h-8 shadow-inner bg-white border border-solid border-slate-200;
			}
		}
	}
</style>

<svelte:head>
	<title>MetaVAC - Home</title>
</svelte:head>

<div class="flex flex-col p-12 gap-y-12 background h-72 w-full">
	<div class="flex flex-row justify-center gap-x-4 text-embossed text-6xl tracking-tighter">
		<span class="font-extrabold">MetaVAC</span>
		<span> | explorer</span>
	</div>
	<div class="w-full">
		<Search  placeholder="Search blocks/txns/accounts..."></Search>
	</div>
</div>

<div class="seperator"></div>

<div class="flex flex-col py-16 px-24 gap-y-6">
	<div class="flex flex-row gap-x-6 w-full">
		<p class="shadow-inner border p-6 h-52 text-center grow rounded">Block One</p>
	</div>

	<div class="seperator"></div>

	<div class="grid grid-cols-4 gap-4">
		<p class="shadow-inner border p-6 h-52 text-center">Block One</p>
		<p class="shadow-inner border p-6 h-52 text-center">Block Two</p>
		<p class="shadow-inner border p-6 h-52 text-center">Block Three</p>
		<p class="shadow-inner border p-6 h-52 text-center">Block Four</p>
	</div>
</div>