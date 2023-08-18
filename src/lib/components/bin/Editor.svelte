<script lang="ts">

    import { page } from "$app/stores";

    import { onMount } from "svelte";

    import CEditor from "$lib/ts/Editor";
    
    let langSelect: HTMLSelectElement, nameInput: HTMLInputElement;
    let editorHTML: HTMLDivElement, editor: any;
    let id: string | null;

    export async function setEditor(binId: string, name: string, lang: string, code: string) {
        editorHTML.innerHTML = "";
        id = binId;
        nameInput.value = name;
        langSelect.value = lang;
        editor = await CEditor({
            parent: editorHTML,
            language: lang,
            code: code
        });
    }

    onMount(async() => {
        editor = await CEditor({
            parent: editorHTML,
            language: "txt",
        });
    });

    async function selectLanguage(event: any) {
        editorHTML.innerHTML = "";
        console.log(event.target.value);     
        editor = await CEditor({
            parent: editorHTML,
            language: event.target.value,
        });
    }

    function createBin() {
        if(!$page.data.apiKey) return alert("Login to create a bin!");
        fetch("/api/bin", {
            method: "POST",
            headers: {
                "apiKey": $page.data.apiKey, 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                language: langSelect.value,
                content: editor.getCode()
            })
        }).then(res => res.json()).then(data => {
            if(data.missing) return alert(data.message + "\n" + data.missing.join(","));
            window.open(`/bin/${data._id}`);
            location.reload();
        });
    }

    function saveBin() {
        if(!id) return alert("No bin selected");
        fetch(`/api/bin/${id}`, {
            method: "PUT",
            headers: {
                "apiKey": $page.data.apiKey, 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                language: langSelect.value,
                content: editor.getCode()
            })
        }).then(res => res.json()).then(data => {
            if(data.missing) return alert(data.message + "\n" + data.missing.join(","));
        });
    }

</script>

<div>
    <div style="margin-bottom:15px;" class="row bin-bar">
        <div class="col">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button on:click={createBin} type="button" class="btn btn-primary">Create</button>
                <button on:click={saveBin} type="button" class="btn btn-success">Save</button>
            </div>
        </div>
        <div class="col">
            <select bind:this={langSelect} on:change={selectLanguage} class="form-select lang-select" aria-label="Default select example">
                <option selected value="txt">Text</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="cpp">C++</option>
                <option value="rust">Rust</option>
                <option value="sass">Sass</option>
                <option value="md">Markdown</option>
                <option value="json">JSON</option>
                <option value="xml">XML</option>
                <option value="sql">SQL</option>
                <option value="vue">Vue</option>
                <option value="svelte">Svelte</option>
                <option value="ang">Angular</option>
                <option value="graphql">Graphql</option>
            </select>
        </div>
        <div class="col"></div>
        <div class="col">
            <input bind:this={nameInput} type="text" class="text-input" placeholder="Bin Name">
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

    @media (max-width: 768px) {
        .bin-bar {
            display: grid;
            grid-template-columns: auto auto auto;
        }
    }

</style>