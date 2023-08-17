// @ts-nocheck

import user from '$lib/ts/mongo/user';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ request }) => {

        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        const allUsers = await user.get();

        if (allUsers.find(user => user.username === username)) return { error: true, message: 'Username already exists' };

        let newUser = await user.create(username, password);
        
        if (!newUser) return { error: true, message: 'Error creating user' };
        else return { success: true, message: 'User created' };
    }
};