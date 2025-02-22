
<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client";

    import { page } from "$app/state";

	function signInClick() {
		signIn();
	}

    function signOutClick() {
        signOut();
    }

</script>

{#if page.data.session}
    <button type="button" on:click={signOutClick} class="btn preset-filled-secondary-500 font-semibold">Logout</button>
{:else}
    <button type="button" on:click={signInClick} class="btn preset-filled-secondary-500 font-semibold">Login</button>
{/if}
