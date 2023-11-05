import fs from "fs";

import images from "$lib/ts/mongo/image";
import users from "$lib/ts/mongo/user";

// @ts-ignore
export const POST: RequestHandler = async ({ request }) => {
    
    if(!request.headers.get("apiKey")) return new Response(JSON.stringify({ message: "Missing API Key" }), { status: 401 });

    const user = await users.getByApiKey(request.headers.get("apiKey"));

    if(!user) return new Response(JSON.stringify({ message: "Invalid API Key" }), { status: 401 });

    let data = await request.formData();

    if(!data.get("file")) return new Response(JSON.stringify({ message: "Missing files" }), { status: 400 });

    const file = data.get("file");

    if(!file) return new Response(JSON.stringify({ message: "Missing files" }), { status: 400 });

    try {
        await fs.writeFileSync(`./images/${user._id}/${file.name}`, new Uint8Array(await file.arrayBuffer()), "base64");
    } catch (e) {
        
        await fs.mkdirSync(`./images/${user._id}`, { recursive: true });

        try {
            await fs.writeFileSync(`./images/${user._id}/${file.name}`, new Uint8Array(await file.arrayBuffer()), "base64");
        } catch (e) {
            return new Response(JSON.stringify({ message: "Error saving image" }), { status: 500 });
        }

    }

    await users.addImage(user._id, file.name);
    
    const image = await images.create(file.name, file.type, file.size);

    if(!image) return new Response(JSON.stringify({ message: "Error creating image" }), { status: 500 });

    return new Response(JSON.stringify(image), { status: 200 });
};