<script>
    // @ts-nocheck
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    export let form;

    onMount(() => {
        if(form?.success) {
            setTimeout(() => {
                goto(`/api/auth/login`, { replaceState: true });
            }, 2000);
        }
    });
</script>

<div class="container" >
    <div class="card" style="width: 45%;">
        {#if form?.error}
            <div class="alert alert-danger" role="alert">
                {form.message}
            </div>
        {/if}
        {#if form?.success}
            <div class="alert alert-success" role="alert">
                {form.message}
            </div>
        {/if}
        <div class="text-center card-body">
            <form method="POST" >
                <h1 class="h2 mb-3">Register</h1>
                <h5>Username</h5>
                <input type="text" name="username" class="form-control" id="usernameInput" placeholder="AwesomeTurtle">
                <h5>Password</h5>
                <input type="password" name="password" class="form-control" id="passwordInput" placeholder="Password">
                <button class="w-100 btn btn-primary" type="submit">Create</button>
            </form>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        height: 75vh;
    }

    .card {
        background-color: var(--bg-color-dark);
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    .card input {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    input {
        color: white;
        background-color: var(--bg-color-light);
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        /* maked placeholder color white*/
    }

    ::placeholder {
        color: rgb(255, 255, 255);
        opacity: 1;
    }

</style>
