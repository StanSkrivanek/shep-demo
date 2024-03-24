//  fetch single article by slug
import { getRelatedArticles, getArticleBySlug } from '$lib/server/sanity.js';
export async function load({ params }) {
	// log params
	
	// @ts-ignore
	const post = await getArticleBySlug(params.slug);
	// @ts-ignore
	let catArticles = await getRelatedArticles(params.slug, params.category);
	return {
		post,
		catArticles,
	};
}
