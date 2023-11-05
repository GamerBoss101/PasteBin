<script lang="ts">
    import { onMount } from "svelte";
    import IconIfy from "../layout/IconIfy.svelte";
    import Bin from "./Bin.svelte";
    import Image from "./Image.svelte";

    export let user: any;
    export let editor: any;

    let size: number = 0;

    function copyToClipboard() {
        navigator.clipboard.writeText(user.apiKey);
    }

    async function getImage(Id: string) {
        const res = await fetch(`/api/image/${Id}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "apiKey": user.apiKey,
            }
        });
        return await res.json();
    }

    onMount(() => {
        user.images.forEach(async(image: any) => {
            let img = await getImage(image)
            size += img.size;
        });
    });

</script>

<div style="background-color: var(--bg-color-dark);" class="card">
    <h1 class="card-title">Your Info</h1>
    <div class="row">
        <div class="col" style="text-align: center;">Username - <b>{user.username}</b></div>
        <div class="col-sm-5">API KEY - 
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span  on:click={copyToClipboard} class="apikey">
                {user.apiKey}
                <IconIfy collection="ph" name="copy" width="20px" svg='<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="white" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/></svg>' />
            </span>
        </div>
        <div class="col" style="text-align: center;">
            Image Data -
            {#if size > 1000000000}
                <span style="color: red;"><b>{`${(size / 1000000000).toFixed(2)} GB`}</b></span>
            {:else if size > 1000000}
                <span style="color: yellow;"><b>{`${(size / 1000000).toFixed(2)} MB`}</b></span>
            {:else if size > 1000}
                <span style="color: #00b35f;"><b>{`${(size / 1000).toFixed(2)} KB`}</b></span>
            {:else}
                <span style="color: green;"><b>{`${size} B`}</b></span>
            {/if}
        </div>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col">
                <div class="card" style="background-color: var(--bg-color-light);">
                    <h3 class="card-title">Bins</h3>
                    <div class="card-body panel">
                        { #each user.bins as bin }
                            <Bin id="{bin}" apikey="{user.apiKey}" CEditor={editor} />
                        {/each}
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="background-color: var(--bg-color-light);">
                    <h3 class="card-title">Images</h3>
                    <div class="card-body panel">
                        { #each user.images as images }
                            <Image id="{images}" apikey="{user.apiKey}" />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .card-title {
        color: var(--text-color-light);
        text-align: center;
    }

    .apikey {
        background-color: black;
        color: white;
        padding: 7px;
        cursor: pointer;
        border-radius: 5px;
    }

    .row > div {
        padding: 10px;
    }

    .panel {
        max-height: 500px;
        overflow-y: scroll;
    }

</style>