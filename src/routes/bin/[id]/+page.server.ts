import bins from '$lib/ts/mongo/bin';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    const bin = await bins.get(params.id);
    if (!bin) return { status: 404 };

    return { id: bin._id, name: bin.name, content: bin.content, status: 200, language: bin.language };
}