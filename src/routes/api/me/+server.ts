import users from "$lib/ts/mongo/user";

// @ts-ignore
export const GET: RequestHandler = async ({ request, cookies }) => {
    let user = null;
    if (cookies.get('authKey', { path: '/' })) {
        user = await users.get(cookies.get('authKey', { path: '/' }));
        user.password = null;
    }
    return new Response(JSON.stringify(user));
};