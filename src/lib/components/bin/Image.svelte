<script lang="ts">

    import { onMount } from "svelte";

    import setIcon from "$lib/ts/ImageUtil";

    export let id: string;
    export let apikey: string;

    let imageName: HTMLDivElement, imageIcon: HTMLDivElement, imageSize: number;

    onMount(() => {
        fetch(`/api/image/${id}`, {
            method: "GET",
            headers: {
                "apiKey": apikey,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            imageName.innerHTML = data._id;
            imageSize = data.size;
            setLangIcon(data._id.split(".")[data._id.split(".").length - 1]);
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

<tr>
    <td>
        <div bind:this={imageIcon} class="col"></div>
    </td>
    <td>
        <p bind:this={imageName} class="image-name"></p>
    </td>
    <td>
        {#if imageSize > 1000000000}
            <p class="image-name" style="color: red;"><b>{`${(imageSize / 1000000000).toFixed(2)} GB`}</b></p>
        {:else if imageSize > 1000000}
            <p class="image-name" style="color: yellow;"><b>{`${(imageSize / 1000000).toFixed(2)} MB`}</b></p>
        {:else if imageSize > 1000}
            <p class="image-name" style="color: #00b35f;"><b>{`${(imageSize / 1000).toFixed(2)} KB`}</b></p>
        {:else}
            <p class="image-name" style="color: green;"><b>{`${imageSize} B`}</b></p>
        {/if}
    </td>

    <td>
        <button class="btn btn-success" on:click={openImage}>Open</button>
        <button class="btn btn-danger" on:click={deleteImage}>Delete</button>
    </td>
</tr>

<style>

    .btn {
        margin-top: 5px;
        margin-bottom: 5px;
        margin: auto;
        color: white;
    }

    .image-name {
        margin: auto;
        padding: 10px;
        font-size: 18px;
    }
</style>