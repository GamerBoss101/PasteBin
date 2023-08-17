import type { RequestHandler } from './$types';

import bins from "$lib/ts/mongo/bin";
import users from "$lib/ts/mongo/user";
 
export const GET: RequestHandler = async({ request, params }) => {
    const id = params.id;

    const bin = await bins.get(id);
    if(!bin) return new Response(JSON.stringify({ message: "Invalid bin ID" }), { status: 404 });

    return new Response(JSON.stringify(bin));
};

export const PUT: RequestHandler = async({ request, params }) => {
    const id = params.id;

    if(!request.headers.get("apiKey")) return new Response(JSON.stringify({ message: "Missing API Key" }), { status: 401 });

    const user = await users.getByApiKey(request.headers.get("apiKey"));
    if(!user) return new Response(JSON.stringify({ message: "Invalid API Key" }), { status: 401 });

    const bin = await bins.get(id);
    if(!bin) return new Response(JSON.stringify({ message: "Invalid bin ID" }), { status: 404 });

    // @ts-ignore
    if(!user.bins.includes(bin._id)) return new Response(JSON.stringify({ message: "You do not own this bin" }), { status: 401 });

    const { name, content } = await request.json();

    if(!name || !content) return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });

    await bins.update(id, name, content);

    return new Response(JSON.stringify({ message: "Bin updated" }));
}


export const DELETE: RequestHandler = async({ request, params }) => {
    const id = params.id;

    if(!request.headers.get("apiKey")) return new Response(JSON.stringify({ message: "Missing API Key" }), { status: 401 });

    const user = await users.getByApiKey(request.headers.get("apiKey"));
    if(!user) return new Response(JSON.stringify({ message: "Invalid API Key" }), { status: 401 });

    const bin = await bins.get(id);
    if(!bin) return new Response(JSON.stringify({ message: "Invalid bin ID" }), { status: 404 });

    // @ts-ignore
    if(!user.bins.includes(bin._id)) return new Response(JSON.stringify({ message: "You do not own this bin" }), { status: 401 });

    await bins.delete(id);
    await users.removeBin(user._id, id);

    return new Response(JSON.stringify({ message: "Bin deleted" }));
}
