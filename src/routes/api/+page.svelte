<script lang="ts">
    import Route from "$lib/components/api/Route.svelte";
</script>

<div class="container" >
    <section>
        <h2>BIN API</h2>
        <Route path="/api/bin" method="POST" description="Create a bin" />
        <Route path="/api/bin/:id" method="GET" description="Get a bin" />
        <Route path="/api/bin/:id" method="PUT" description="Update a bin" />
        <Route path="/api/bin/:id" method="DELETE" description="Delete a bin" />
        <Route path="/api/bin/:id" method="PATCH" description="Patch a bin" />
    </section>
    <section>
        <h2>IMAGE API</h2>
        <Route path="/api/image" method="POST" description="Create an image" />
        <Route path="/api/image/:id" method="GET" description="Get an image" />
        <Route path="/api/image/:id" method="DELETE" description="Delete an image" />
    </section>
</div>

<style>
    .container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>