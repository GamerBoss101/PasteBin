import type { PageServerLoad } from './$types';

import { db } from '$lib/ts/db';

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth();

    if(!session) return { session };
    let bins = await db.getBins({ email: session?.user?.email });

    return { session, bins };
};