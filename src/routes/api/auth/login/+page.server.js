// @ts-nocheck

import { fail } from '@sveltejs/kit';

import users from '$lib/ts/mongo/user';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const redirectURL = url.searchParams.get('redirect');

    return {
        redirect: redirectURL ? redirectURL : '/',
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ request, cookies}) => {

        const data = await request.formData();
        const username = data.get('user');
        const password = data.get('password');

        const user = await users.getByUsername(username);

        if(!user) return fail(404, { error: true, message: 'User not found' });

        if(user.password !== password) return fail(401, { error: true, message: 'Incorrect password' });
        else cookies.set('authKey', user._id, { path: '/' });

        return { success: true, message: 'Logged in' };
    }
};