// @ts-nocheck
import users from '$lib/ts/mongo/user';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let user = null;
    if (cookies.get('authKey', { path: '/' })) {
        user = await users.get(cookies.get('authKey', { path: '/' }));
        user.password = null;
        console.log(user);
        return { id: user._id, username: user.username, apiKey: user.apiKey };
    }
    return { id: null, username: null, apiKey: null };
}