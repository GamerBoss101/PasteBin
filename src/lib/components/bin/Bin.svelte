<script lang="ts">

    import { onMount } from "svelte";

    import IconIfy from "../layout/IconIfy.svelte";

    export let id: string;
    export let apikey: string;
    export let CEditor: any;

    let binName: HTMLDivElement, binIcon: HTMLDivElement, binContent: string, binSelect: HTMLSelectElement;
    let binData: any;

    onMount(() => {
        fetch(`/api/bin/${id}`, {
            method: "GET",
            headers: {
                "apiKey": apikey,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            binData = data;
            binContent = data.content;
            binName.innerHTML = data.name;
            setLangIcon(data.language);
        });

    });

    function setLangIcon(language: string) {
        switch(language) {
            case "js": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-js-official",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
            case "html": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-html",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
            case "css": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-css",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
            case "php": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-php",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
            case "py": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-python",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
            case "cpp": {
                new IconIfy({
                    target: binIcon,
                    props: {
                        collection: "vscode-icons",
                        name: "file-type-cpp2",
                        width: "50px",
                        height: "50px"
                    }
                });
                break;
            }
        }
    }

    function exeCommand() {
        switch(binSelect.value) {
            case "1": {
                CEditor.setEditor(binData._id, binData.name, binData.language, binData.content);
                break;
            }
            case "2": {
                fetch(`/api/bin/${id}`, {
                    method: "DELETE",
                    headers: {
                        "apiKey": apikey,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data);
                });
                break;
            }
            default: {
                window.open(`/bin/${id}`);
                break;
            }
        }
    }


</script>

<div class="bin row">
    <div bind:this={binIcon} class="col"></div>
    <div class="col">
        <p bind:this={binName} class="bin-name"></p>
    </div>
    <div class="col"></div>
    <div class="col">
        <select bind:this={binSelect} class="bin-select">
            <option value="0">Open</option>
            <option value="1">Edit</option>
            <option value="2">Delete</option>
        </select>
    </div>
    <div class="col">
        <button on:click={exeCommand} class="bin-btn">EXE</button>
    </div>
</div>

<style>
    .bin {
        border-radius: 10px;
        padding: 5px;
        display: grid;
        grid-template-columns: auto auto 1fr 10% 10%;
        background-color: var(--bg-color);
        max-height: 80px;
        margin-bottom: 10px;
    }

    .bin-name {
        margin: auto;
        padding: 10px;
        font-size: 20px;
    }
    
    .bin-name:hover {
        cursor: pointer;
    }

    .bin-select {
        margin: auto;
        background-color: var(--bg-color-dark);
        color: white !important;
        border: 2px solid var(--bg-color-light);
        width: 100%;
        height: 100%;
        padding: 5px;
        font-size: 22px;
        border-radius: 5px;
    }

    .bin-btn {
        margin: auto;
        background-color: var(--color-success);
        color: white !important;
        border: 2px solid var(--bg-color-light);
        width: 100%;
        height: 100%;
        font-size: 16px;
        border-radius: 5px;
    }

    .bin-btn:hover {
        cursor: pointer;
        background-color: #00723d;
    }

</style>