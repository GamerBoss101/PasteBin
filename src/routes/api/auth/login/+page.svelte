<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    export let form;

    onMount(() => {
        if(form?.success) {
            goto(`${$page.data.redirect}`);
        }
    });

</script>

<div class="container" >
    <div class="card" style="width: 35%;">
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
            <form method="POST" action="/api/auth/login">
                <h1 class="h2 mb-3">Login</h1>
                <h5>Username</h5>
                <input name="user" type="text" class="form-control" id="floatingInput" placeholder="AwesomeTurtle">
                <h5>Password</h5>
                <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <button class="w-100 btn btn-primary" type="submit">Sign in</button>
            </form>
            <br>
            <a style="cursor:pointer;" href="/api/auth/register">Register</a>
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
