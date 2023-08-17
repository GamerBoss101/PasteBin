<script lang="ts">

    import { onMount } from "svelte";

    import { page } from "$app/stores";

    import Editor from "$lib/ts/Editor";

    let editorHTML: HTMLDivElement, editor: Editor, binName: string;

    onMount(() => {
        fetch(`/api/bin/${$page.data.binId}`, {
            method: "GET",
        }).then(res => res.json()).then(data => {
            if(!data.name) return binName = "Not Found";
            binName = data.name;
            editor = new Editor({
                parent: editorHTML,
                language: data.language,
                code: data.content
            });
        });
    });

</script>


<div class="container" >
    <div style="background-color: var(--bg-color-dark);" class="card">
        <h2>{binName}</h2>
        <div style="align-items: center;" class="card-body">
            <div bind:this={editorHTML}></div>
        </div>
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
