
<script lang="ts">
    import { SignIn, SignOut } from "@auth/sveltekit/components"
    import { page } from "$app/state";
</script>

{#if page.data.session}
    <SignOut>
        <div slot="submitButton" class="btn preset-filled-secondary-500 font-semibold">Logout</div> 
    </SignOut>
{:else}
    <SignIn provider="discord" >
        <div slot="submitButton" class="btn preset-filled-secondary-500 font-semibold">Sign in</div>
    </SignIn>
{/if}
