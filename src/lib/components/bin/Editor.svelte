<script>
    // @ts-nocheck
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import Editor from "$lib/ts/Editor";
    
    let startBtn, langSelect;
    let editorHTML, editor;
    let lang = "1";

    onMount(() => {
        editor = new Editor({
            parent: editorHTML,
            language: lang,
        });
    });

    function selectLanguage(event) {
        editorHTML.innerHTML = "";
        lang = event.target.value;        
        editor = new Editor({
            parent: editorHTML,
            language: lang,
        });
    }

    function createBin() {

    }

</script>

<div>
    <div style="margin-bottom:15px;" class="row bin-bar">
        <div class="col">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button bind:this={startBtn} on:click={createBin} type="button" class="btn btn-success">Create</button>
            </div>
        </div>
        <div class="col">
            <select bind:this={langSelect} on:change={selectLanguage} class="form-select lang-select" aria-label="Default select example">
                <option selected value="1">Text</option>
                <option value="2">HTML</option>
                <option value="3">CSS</option>
                <option value="4">JavaScript</option>
                <option value="5">PHP</option>
                <option value="6">Python</option>
                <option value="7">Cpp</option>
            </select>
        </div>
        <div class="col"></div>
        <div class="col">
            <input type="text" class="text-input" placeholder="Bin Name">
        </div>
    </div>
    <div style="text-align: left;" bind:this={editorHTML}></div>
</div>

<style>

    .bin-bar {
        display: grid;
        grid-template-columns: auto auto 1fr auto;
    }

    .lang-select {
        background-color: var(--bg-color-dark);
        color: white !important;
        border: 2px solid var(--bg-color-light);
    }

    .btn {
        width: 100%;
    }

    .text-input {
        background-color: var(--bg-color-dark);
        color: white !important;
        border: 2px solid var(--bg-color-light);
        border-radius: 5px;
        padding: 5px;
    }

</style>