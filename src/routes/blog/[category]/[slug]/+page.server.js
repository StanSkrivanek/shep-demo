//  fetch single article by slug
import { getRelatedArticles, getArticleBySlug } from '$lib/server/sanity.js';
export async function load({ params }) {
	// log params
	console.log("🚀 ~ file: +page.server.js:7 ~ load ~ params", params)
	// @ts-ignore
	const post = await getArticleBySlug(params.slug);
	// @ts-ignore
	let catArticles = await getRelatedArticles(params.slug, params.category);
	return {
		post,
		catArticles,
	};
}
