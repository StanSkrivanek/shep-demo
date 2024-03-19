import { getNuachtPDFs, getPublicationsPDFs } from '$lib/server/sanity';


export async function load() {
	const allNuacht = await getNuachtPDFs();
	const allPublications = await getPublicationsPDFs();
   

	return {
		props: {
			allNuacht,
			allPublications
		}
		// nuachtPDFs: allNuacht.map((/** @type {any} */ item) => {
		// 	return {
		// 		...item
		// 	};
		// })
	};
}