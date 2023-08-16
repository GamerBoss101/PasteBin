<script>
    import Editor from "$lib/components/bin/Editor.svelte";
</script>

<div class="container" >
    <div class="text-center p-4 p-lg-5">
        <h1>Pastebin</h1>
        <p>Paste Away!</p>
        <div style="background-color: var(--bg-color-dark);" class="card">
            <div style="align-items: center;" class="card-body">
                <Editor />
            </div>
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 65px;
        margin: 10px;
    }

    p {
        font-size: 25px;
        margin: 10px;
    }
</style>