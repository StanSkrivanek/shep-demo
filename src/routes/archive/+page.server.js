import { getNuachtPDFs} from '$lib/server/sanity';

export async function load() {
	const allNuacht = await getNuachtPDFs();


	return {
		props: {
			allNuacht,
	
		}
	};
}
