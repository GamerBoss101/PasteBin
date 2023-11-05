import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import bins from "$lib/ts/mongo/bin";
import users from "$lib/ts/mongo/user";

// @ts-ignore
export const POST: RequestHandler = async ({ request }) => {
    
    if(!request.headers.get("apiKey")) return new Response(JSON.stringify({ message: "Missing API Key" }), { status: 401 });

    const user = await users.getByApiKey(request.headers.get("apiKey"));

    if(!user) return new Response(JSON.stringify({ message: "Invalid API Key" }), { status: 401 });

    const { name, language, content } = await request.json();

    if(!name || !language || !content) {
        let missing = [];
        if(!name) missing.push("name");
        if(!language) missing.push("language");
        if(!content) missing.push("content");
        
        return new Response(JSON.stringify({ message: "Missing required fields", missing }), { status: 400 });
    }
    const bin = await bins.create(name, language, content);

    users.addBin(user._id, bin._id);

    return new Response(JSON.stringify(bin));
};