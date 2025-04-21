<script lang="ts">
    import Icon from "@iconify/svelte";
    import LightSwitch from "./LightSwitch.svelte";
    import Login from "./Login.svelte";

    export let title = "";

    export let items: any[] = [];
    
    let isOpen = false;
    const toggleMenu = () => (isOpen = !isOpen);
</script>

<nav class="sticky top-0 z-50 shadow-md bg-surface-100 dark:bg-neutral-900 text-black dark:text-white p-2">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-2 font-semibold">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <h1 class="text-xl"><a href="/">{title}</a></h1>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden justify-self-end" on:click={toggleMenu}>
                {#if isOpen}
                    <Icon icon="eva:close-outline" class="w-6 h-6" />
                {:else}
                    <Icon icon="eva:menu-outline" class="w-6 h-6" />
                {/if}
            </button>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-4 justify-center">
                {#each items as item}
                    <a href="{item.href}" class="btn variant-ghost">{item.title}</a>
                {/each}
            </div>

            <!-- Light Switch -->
            <div class="justify-self-end flex items-center gap-4">
                <Login />
            </div>
        </div>

        <!-- Mobile Menu -->
        {#if isOpen}
            <div class="md:hidden p-4 space-y-2">
                {#each items as item}
                    <a href="{item.href}" class="btn variant-ghost">{item.title}</a>
                {/each}
            </div>
        {/if}
    </div>
</nav>
