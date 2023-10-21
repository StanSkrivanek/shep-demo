//  fetch single article by slug

import { getAllArticlesByCategory, getArticleBySlug } from '$lib/server/sanity.js';
// import { redirect } from '@sveltejs/kit';
export async function load({ params }) {
	// log params
	console.log("🚀 ~ file: +page.server.js:7 ~ load ~ params", params)
	// @ts-ignore
	const post = await getArticleBySlug(params.slug);
	// @ts-ignore
	let catArticles = await getAllArticlesByCategory(params.slug, params.category);
	return {
		// @ts-ignore

		post,
		catArticles,
	};
}
