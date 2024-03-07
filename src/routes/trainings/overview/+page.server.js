import { trainingsOverview } from '$lib/server/sanity.js';
export async function load({ params }) {
	console.log(params);

	// @ts-ignore
	const pageContent = await trainingsOverview();
	return {
		pageContent
	};
}
