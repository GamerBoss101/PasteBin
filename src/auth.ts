import { SvelteKitAuth } from "@auth/sveltekit";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { env } from "$env/dynamic/private";
import Discord from "@auth/sveltekit/providers/discord";
import client from "$lib/storage/db";

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Discord({
		clientId: env.AUTH_DISCORD_ID,
		clientSecret: env.AUTH_DISCORD_SECRET
	})],
	adapter: MongoDBAdapter(client),
	trustHost: true
});