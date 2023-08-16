<script>
    // @ts-nocheck
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import Editor from "$lib/js/Editor";

    import ms from 'ms';

    let startBtn, langSelect;
    let editorHTML;
    let lang = "1";

    onMount(() => {
        new Editor({
            parent: editorHTML
        });
    });

    function selectLanguage(event) {
        lang = event.target.value;
        console.log(event.target.value);
    }

    function createBin() {

    }

</script>

<div>
    <div style="margin-top: 50px; margin-bottom:15px;" class="row">
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
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
    <div style="text-align: left;" bind:this={editorHTML}></div>
</div>

<style>
    .lang-select {
        background-color: var(--bg-color-dark);
        color: white !important;
        border: 2px solid var(--bg-color-light);
    }

    .btn {
        width: 100%;
    }

</style>