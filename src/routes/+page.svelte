<script>
    import { page } from "$app/stores";

    import Editor from "$lib/components/bin/Editor.svelte";
    import Info from "$lib/components/bin/Info.svelte";

    let codeEditor;
</script>

<div class="container" >
    <div class="hero">
        <img alt="Bin Chan" src="/BinChan.png">
        <h1 class="slant-txt">Paste Away!</h1>
    </div>
    <div>
        <div style="background-color: var(--bg-color-dark);" class="card">
            <div style="align-items: center;" class="card-body">
                <Editor bind:this={codeEditor} />
            </div>
        </div>
    </div>
    <section id="info">
        { #if $page.data.id }
            <Info user={$page.data} editor={codeEditor} />
        {/if}
    </section>
</div>

<style>
    .hero {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
    }

    .slant-txt {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-color);
        margin: 0;
    }
</style>