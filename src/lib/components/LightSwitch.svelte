<script lang="ts">
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    let isDark: boolean;

    onMount(() => {
        isDark = localStorage.theme === 'dark';
    });

    function toggleTheme() {
        isDark = !isDark;
        localStorage.theme = isDark ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', isDark);
    }
</script>

<button
    class="btn variant-ghost-surface"
    on:click={toggleTheme}
    aria-label="Light Switch"
>
    {#if isDark}
        <Icon icon="mdi:weather-sunny" class="w-6 h-6" />
    {:else}
        <Icon icon="mdi:weather-night" class="w-6 h-6" />
    {/if}
</button>

<style>
    button {
        transition: all 0.2s ease-in-out;
    }
    button:hover {
        transform: scale(1.1);
    }
</style>