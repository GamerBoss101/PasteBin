<script>
    import IconIfy from "../layout/IconIfy.svelte";
</script>

<div class="bin row">
    <div class="col">
        <IconIfy collection="vscode-icons" name="file-type-js-official" />
    </div>
    <div class="col">
        <p class="bin-name">HOW TO BE SMART</p>
    </div>
    <div class="col"></div>
    <div class="col">
        <select class="bin-select">
            <option>Edit</option>
            <option>Delete</option>
        </select>
    </div>
    <div class="col">
        <button class="bin-btn">EXE</button>
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