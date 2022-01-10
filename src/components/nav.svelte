<script>
    
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<nav class="overflow-hidden inset-x-0 top-02 z-0 flex flex-row grow">
    <div name="nav-before" class="nav-before flex-1 flex-row">
        <slot name="nav-before">
            <button class="flex missing">
                <span>link1</span>
            </button>
        </slot>
    </div>
    <div class="nav-after flex flex-row-reverse grow">
        <slot name="nav-after">
            <button class="flex missing">
                <span>after</span>
            </button>
        </slot>
    </div>
</nav>