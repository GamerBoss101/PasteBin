<script lang="ts">
    export let path: string;
    export let method: string;
    export let description: string;
</script>


<div class="card">
    <div class="card-content">
        <div>
            <!-- SPAN FOR THE METHOD -->
            { #if method.toLowerCase() == "get"}
                <span class="badge bg-success">{method}</span>
            {:else if method.toLowerCase() == "post"}
                <span class="badge bg-primary">{method}</span>
            {:else if method.toLowerCase() == "put"}
                <span class="badge bg-warning" style="color: black;">{method}</span>
            {:else if method.toLowerCase() == "delete"}
                <span class="badge bg-danger">{method}</span>
            {:else if method.toLowerCase() == "patch"}
                <span class="badge bg-info" style="color: black;">{method}</span>
            {:else if method.toLowerCase() == "head"}
                <span class="badge bg-secondary">{method}</span>
            {:else if method.toLowerCase() == "options"}
                <span class="badge bg-dark">{method}</span>
            {:else}
                <span class="badge bg-light">{method}</span>
            {/if}
            <p class="apikey">{path}</p>
        </div>
        <!-- DIV FOR THE AUTH INFO -->
        <div>
            <span class="badge bg-warning" style="color: black;">Header</span>
            <p>apiKey</p>
        </div>
        <!-- DIV FOR THE DESCRIPTION -->
        <div>
            <span class="badge bg-secondary" style="color: black;">Description</span>
            <p>{description}</p>
        </div>  
    </div>
</div>

<style>
    .card {
        display: flex;
        border-radius: 10px;
        padding: 10px;
        margin: 20px;
        width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: var(--bg-color-dark);
    }

    .card-content {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .card-content div {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card p {
        display: inline-block;
        margin: auto;
        margin-left: 5px;
        margin-right: 5px;
        color: white;
    }

    .apikey {
        background-color: black;
        color: white;
        padding: 7px;
        border-radius: 5px;
    }
</style>