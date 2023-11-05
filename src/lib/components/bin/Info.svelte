<script lang="ts">
    import { onMount } from "svelte";
    import IconIfy from "../layout/IconIfy.svelte";
    import Icon from "@iconify/svelte";
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
                <Icon icon="ph:copy" width="20px" />
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
                <h2 class="card-title">Bins</h2>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Icon</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { #each user.bins as bin }
                            <Bin id="{bin}" apikey="{user.apiKey}" CEditor={editor} />
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2 class="card-title">Images</h2>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Icon</th>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { #each user.images as image }
                            <Image id="{image}" apikey="{user.apiKey}" />
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<style>

    table {
        text-align: center;
    }

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
</style>