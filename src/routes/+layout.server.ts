// @ts-nocheck
import users from '$lib/ts/mongo/user';

import { encoderChan } from '$lib/ts/baseEncoder/EncoderChan.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let user = null;
    if (cookies.get('authKey', { path: '/' })) {
        user = await users.get(cookies.get('authKey', { path: '/' }));
        user.password = null;
        return { id: user._id, username: user.username, apiKey: encoderChan.decode(user.apiKey), bins: user.bins, images: user.images };
    }
    return { id: null, username: null, apiKey: null };
}