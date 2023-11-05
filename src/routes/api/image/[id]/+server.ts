import type { RequestHandler } from '@sveltejs/kit';

import fs from "fs";

import users from "$lib/ts/mongo/user";

import images from "$lib/ts/mongo/image";

export const GET: RequestHandler = async({ params }) => {
    const image = await images.get(params.id || "");

    if(!image) return new Response(JSON.stringify({ message: "Invalid Image ID" }), { status: 404 });

    return new Response(JSON.stringify(image), { status: 200 });
};

export const DELETE: RequestHandler = async({ request, params }) => {
    if(!request.headers.get("apiKey")) return new Response(JSON.stringify({ message: "Missing API Key" }), { status: 401 });

    const user = await users.getByApiKey(request.headers.get("apiKey")|| "");

    if(!user) return new Response(JSON.stringify({ message: "Invalid API Key" }), { status: 401 });

    const image = await images.get(params.id || "");

    if(!image) return new Response(JSON.stringify({ message: "Invalid Image ID" }), { status: 404 });

    await images.delete(params.id || "");

    await users.removeImage(user._id, params.id || "");

    await fs.unlinkSync(`./images/${user._id}/${image._id}`);

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};