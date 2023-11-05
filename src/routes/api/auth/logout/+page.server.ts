// @ts-nocheck

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {

    if (cookies.get('authKey', { path: '/' })) {
        cookies.delete('authKey', { path: '/' });
    }

    return {
        status: 200,
    }

}