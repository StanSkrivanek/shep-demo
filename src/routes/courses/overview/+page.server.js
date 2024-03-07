import { coursesOverview } from '$lib/server/sanity.js';
export async function load({ params }) {
	console.log(params);

	// @ts-ignore
	const pageContent = await coursesOverview();
	return {
		pageContent
	};
}
