<script scope="module" lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let branding_img: string = "";
    export let branding_title: string = "";

    let sidebar;

    const dispatch = createEventDispatcher();

    function toggleNav(event) {
        sidebar.classList.toggle('-translate-x-full');
    }

    function closeNav(event) {        
        if (!sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.toggle('-translate-x-full', true);
        }
    }
</script>

<style lang="scss">
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";

    .seperator {
		@apply sticky w-full h-2 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-800;
	}
    
    #nav-side {
        @apply flex flex-col items-center absolute h-full w-72 p-6 text-slate-50 bg-slate-900;
        @apply transform transition duration-200 ease-in-out;

        @media (min-width: theme('screens.sm')) {
            @apply hidden;
        }

        .nav-branding {
            @apply flex flex-row flex-nowrap overflow-hidden items-center space-x-4 font-semibold;
        }

        .nav-before {
            @apply flex flex-col shrink;
        }

        .nav-after {
            @apply flex flex-col-reverse grow overflow-hidden;
        }
    }

    #nav-main {
        @apply overflow-hidden w-full h-16 z-0 flex flex-row grow bg-slate-900 text-slate-50 p-4 items-center;

        .nav-branding {
            @apply flex flex-row flex-nowrap overflow-hidden items-center gap-x-4 mr-8 font-semibold;
        }

        .nav-before {
            @apply flex flex-row gap-x-4 shrink;
        }

        .nav-after {
            @apply flex flex-row-reverse gap-x-4 items-center grow overflow-hidden;
        }
    }
</style>

<!-- TODO: Should probably replace this with a div overlay that closes on click, more efficient.-->
<svelte:window on:click={closeNav} />

<div id="nav-side" class="-translate-x-full" bind:this={sidebar}>
    <div class="flex flex-row items-center mb-6 space-x-4">
        <a class='nav-branding' href='/'>
            {#if branding_img !== ""}
                <img class="h-8 w-8" src="{branding_img}" alt="{branding_title}" />
            {/if}

            {#if branding_title !== ""}
                <span>{branding_title}</span>
            {/if}
        </a>

        <!-- Do not need on click here since default action of clicking when side nav is open is to close it-->
        <!-- Maybe change this at a later date in case we want expandable menus in the sidenav. -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </div>
    
    <div class="nav-before">
        <slot name="nav-before">
        </slot>
    </div>
    
    <div class="nav-after">
        <slot name="nav-after">
        </slot>
    </div>
</div>

<div class="sticky top-0 shadow-lg">
    <nav id="nav-main">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer flex sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click|stopPropagation={toggleNav}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <a class='nav-branding' href='/'>
            {#if branding_img !== ""}
                <img class="h-8 w-8" src="{branding_img}" alt="{branding_title}" />
            {/if}

            {#if branding_title !== ""}
                <span>{branding_title}</span>
            {/if}
        </a>

        <div class="nav-before hidden sm:flex">
            <slot name="nav-before">
            </slot>
        </div>
        
        <div class="nav-after hidden sm:flex">
            <slot name="nav-after">

            </slot>
        </div>
    </nav>

    <div class="seperator"></div>
</div>