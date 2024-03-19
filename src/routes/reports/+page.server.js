import { getPublicationsPDFs } from '$lib/server/sanity';

export async function load() {

	const allPublications = await getPublicationsPDFs();

	return {
		props: {
			allPublications
		}
	};
}
