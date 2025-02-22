import { SvelteKitAuth } from "@auth/sveltekit";
import { env } from "$env/dynamic/private";
import Discord from "@auth/sveltekit/providers/discord";

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Discord({
		clientId: env.AUTH_DISCORD_ID,
		clientSecret: env.AUTH_DISCORD_SECRET
	})],
	trustHost: true
});