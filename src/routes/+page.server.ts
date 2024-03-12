// @ts-nocheck
import fs from "fs";

import images from "$lib/ts/mongo/image";
import users from '$lib/ts/mongo/user';

/** @type {import('./$types').Actions} */
export const actions = {
	image: async ({ cookies, request }) => {
		let user = null;
		if (cookies.get('authKey', { path: '/' })) {
			user = await users.get(cookies.get('authKey', { path: '/' }));
			user.password = null;
		}

		let formData = await request.formData();

		const data = Object.fromEntries(formData);

		try {
			await fs.writeFileSync(`./images/${user._id}/${formData.get("file").name}`, Buffer.from(await (data.file as Blob).arrayBuffer()), "base64");
		} catch (e) {
			
			await fs.mkdirSync(`./images/${user._id}`, { recursive: true });
	
			try {
				await fs.writeFileSync(`./images/${user._id}/${formData.get("file").name}`, Buffer.from(await (data.file as Blob).arrayBuffer()), "base64");
			} catch (e) {
				return;
			}
		}

		await users.addImage(user._id, formData.get("file").name);
    
		await images.create(formData.get("file").name, formData.get("file").type, formData.get("file").size);
	}
};