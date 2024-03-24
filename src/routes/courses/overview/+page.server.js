import { coursesOverview } from '$lib/server/sanity.js';
export async function load() {
	// @ts-ignore
	const pageContent = await coursesOverview();
	return {
		pageContent
	};
}
