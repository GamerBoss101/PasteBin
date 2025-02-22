<script lang="ts">
    import { page } from "$app/state";

    import Editor from "$lib/components/Editor.svelte";
    import BinManager from "$lib/components/BinManager.svelte";
    
</script>

<main class="container mx-auto space-y-5 px-4 py-20">
    <img src="/BinChan.png" alt="BinChan" class="mx-auto w-64" />
    <h1 class="text-4xl text-center font-semibold">Paste Away!</h1>
    <Editor />

    {#if page.data.session}
        <BinManager />
    {/if}

</main>
