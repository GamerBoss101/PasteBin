import type { RequestHandler } from '@sveltejs/kit';

import fs from "fs";

import users from "$lib/ts/mongo/user";

import images from "$lib/ts/mongo/image";

export const GET: RequestHandler = async({ request, params }) => {

    const id = params.id;

    const user = await users.searchForImage(id || "");

    if(!user) return new Response(JSON.stringify({ message: "Invalid Image ID" }), { status: 404 });

    const image = await images.get(id || "");

    if(!image) return new Response(JSON.stringify({ message: "Invalid Image ID" }), { status: 404 });

    const file = await fs.readFileSync(`./images/${user._id}/${image._id}`);

    return new Response(file, { headers: { "Content-Type": image.type } });
};