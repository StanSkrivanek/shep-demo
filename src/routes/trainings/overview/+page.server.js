import { trainingsOverview } from '$lib/server/sanity.js';
export async function load() {
	// @ts-ignore
	const pageContent = await trainingsOverview();
	return {
		pageContent
	};
}
