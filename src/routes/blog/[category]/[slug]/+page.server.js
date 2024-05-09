// @ts-nocheck
//  fetch single article by slug
import { getRelatedArticles, getArticleBySlug } from '$lib/server/sanity.js';
export async function load({ params }) {

	const post = await getArticleBySlug(params.slug);

	let catArticles = await getRelatedArticles(params.slug, params.category);
	return {
		post,
		catArticles,
	};
}
