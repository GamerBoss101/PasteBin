<script lang="ts">

    import { onMount } from "svelte";

    import { setIcon } from "$lib/ts/Editor";

    export let id: string;
    export let apikey: string;
    export let CEditor: any;

    let BIN: any;
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
        setIcon({
            parent: binIcon,
            lang: language
        });
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
                    location.reload();
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

<div bind:this={BIN} class="bin row">
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
        grid-template-columns: auto auto 1fr auto auto;
        background-color: var(--bg-color);
        margin-bottom: 10px;
        overflow: hidden;
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
        min-width: 100px;
        height: 100%;
        font-size: 20px;
        border-radius: 5px;
        font-weight: bold;
    }

    .bin-btn:hover {
        cursor: pointer;
        background-color: #00723d;
    }

    @media screen and (max-width: 600px) {
        .bin-name {
            font-size: 16px;
        }

        .bin-select {
            font-size: 18px;
            min-width: 85px;
        }
    }

</style>