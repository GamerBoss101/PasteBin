<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Editor from "$lib/ts/Editor";

    let editorHTML: HTMLDivElement, editor: any, binName: HTMLHeadElement;

    onMount(() => {
        if ($page.data.status != 404) {
            editor = Editor({
                parent: editorHTML,
                language: $page.data.language,
                code: $page.data.content
            });
        }
    });

</script>

<div class="container" >
    <div style="background-color: var(--bg-color-dark);" class="card">
        <!-- svelte-ignore a11y-missing-content -->
        { #if $page.data.status != 404 }
            <h2 bind:this={binName}>{$page.data.name}</h2>
            <div style="align-items: center;" class="card-body">
                <div bind:this={editorHTML}></div>
            </div>
        { :else }
            <h2>Not Found</h2>
        { /if }
    </div>
</div>

<style>
    .container {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h2 {
        margin: 10px;
        padding: 10px;
    }
</style>
