<script lang="ts">
    export let placeholder:string = ""
    export let large: boolean = false;
</script>

<style lang="scss">
    @import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>

<div class="flex flex-row space-x-4 text-slate-900 bg-white shadow-inner border rounded-lg {large ? 'p-4' : 'p-2'}">
    <input class="grow" type="text" placeholder={placeholder} />
    <svg xmlns="http://www.w3.org/2000/svg" class="shrink h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
</div>