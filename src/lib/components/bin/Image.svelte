<script lang="ts">

    import { onMount } from "svelte";

    import setIcon from "$lib/ts/ImageUtil";

    export let id: string;
    export let apikey: string;

    let IMAGE: any;
    let imageName: HTMLDivElement, imageIcon: HTMLDivElement, binContent: string, imageSelect: HTMLSelectElement;
    let imageData: any;

    onMount(() => {
        fetch(`/api/image/${id}`, {
            method: "GET",
            headers: {
                "apiKey": apikey,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            imageData = data;
            imageName.innerHTML = data._id;
            setLangIcon(data._id.split(".")[1]);
        });
    });

    function setLangIcon(extension: string) {
        setIcon({
            parent: imageIcon,
            extension: extension
        });
    }

    function openImage() {
        window.open(`/image/${id}`);
    }

    function deleteImage() {
        fetch(`/api/image/${id}`, {
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

<div bind:this={IMAGE} class="image row">
    <div bind:this={imageIcon} class="col"></div>
    <div class="col">
        <p bind:this={imageName} class="image-name"></p>
    </div>
    <div class="col" style="float: right;">
        <button class="bg-success btn image-btn" on:click={openImage}>Open</button>
        <button class="bg-danger btn image-btn" on:click={deleteImage}>Delete</button>
    </div>
</div>

<style>

    .btn {
        margin-top: 5px;
        margin-bottom: 5px;
        margin: auto;
        color: white;
    }

    .image {
        border-radius: 10px;
        padding: 10px;
        display: grid;
        grid-template-columns: auto auto 1fr auto auto;
        background-color: var(--bg-color);
        margin-bottom: 10px;
        overflow: hidden;
    }

    .image-name {
        margin: auto;
        padding: 10px;
        font-size: 15px;
    }
    
    .image-name:hover {
        cursor: pointer;
    }

    .image-btn {
        margin: auto;
    }

    @media screen and (max-width: 600px) {
        .image-name {
            font-size: 16px;
        }
    }

</style>