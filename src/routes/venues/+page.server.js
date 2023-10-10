import { getAllVenues } from '$lib/server/sanity';
export async function load() {
	const venues = await getAllVenues();
	return {
		venues
	};
}
