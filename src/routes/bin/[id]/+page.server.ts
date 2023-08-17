// @ts-nocheck
import users from '$lib/ts/mongo/user';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {

    let user = null;
    if (cookies.get('authKey', { path: '/' })) {
        user = await users.get(cookies.get('authKey', { path: '/' }));
        user.password = null;
        return { id: user._id, username: user.username, apiKey: user.apiKey, bins: user.bins, binId: params.id };
    }
    return { id: null, username: null, apiKey: null, binId: params.id };
}