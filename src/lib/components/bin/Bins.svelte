<script lang="ts">
    import IconIfy from "../layout/IconIfy.svelte";
    import Bin from "./Bin.svelte";

    export let user: any;

    function copyToClipboard() {
        navigator.clipboard.writeText(user.apiKey);
    }

</script>

<div style="background-color: var(--bg-color-dark);" class="card">
    <h1 class="card-title">You Bins</h1>
    <div class="user-info">
        <div>{user.username}</div>
        <div>API KEY:
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span  on:click={copyToClipboard} class="apikey">
                {user.apiKey}
                <IconIfy collection="ph" name="copy" width="20px" svg='<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="white" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/></svg>' />
            </span>
        </div>
    </div>
    <div class="card-body">
        <Bin />
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

    .user-info {
        display: grid;
        grid-template-columns: auto auto 1fr;
    }

    .user-info > div {
        padding: 10px;
    }

    .apikey {
        background-color: black;
        color: white;
        padding: 7px;
        cursor: pointer;
        border-radius: 5px;
    }

</style>