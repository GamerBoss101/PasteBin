<script lang="ts">

    import { onMount } from "svelte";

    import { setIcon } from "$lib/ts/Editor";

    export let id: string;
    export let apikey: string;
    export let CEditor: any;

    let binName: HTMLDivElement, binIcon: HTMLDivElement, binContent: string, binId: string;
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
            binId = data._id;
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

    function openBin() {
        window.open(`/bin/${id}`);
    }

    function updateBtn() {
        CEditor.setEditor(binData._id, binData.name, binData.language, binData.content);
    }

    function deleteBtn() {
        fetch(`/api/bin/${id}`, {
            method: "DELETE",
            headers: {
                "apiKey": apikey,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            location.reload();
        });
    }

</script>

<tr>
    <td>
        <div bind:this={binIcon} class="bin-icon"></div>
    </td>
    <td>
        <p class="bin-id">{binId}</p>
    </td>
    <td>
        <p bind:this={binName} class="bin-name"></p>
    </td>
    <td>
        <button on:click={openBin} class="btn bg-success col">Open</button>
        <button on:click={updateBtn} class="btn bg-warning col">Edit</button>
        <button on:click={deleteBtn} class="btn bg-danger col">Delete</button>
    </td>
</tr>

<style>

    .btn {
        color: white;
        margin: auto;
    }

    .btn:hover {
        cursor: pointer;
    }

    .bin-id {
        margin: auto;
        padding: 10px;
        font-size: 20px;
    }

    .bin-name {
        margin: auto;
        padding: 10px;
        font-size: 20px;
    }
    
    .bin-name:hover {
        cursor: pointer;
    }

</style>