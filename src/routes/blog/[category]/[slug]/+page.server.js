//  fetch single article by slug

import { getAllArticlesByCategory, getArticleBySlug } from '$lib/server/sanity.js';
// import { redirect } from '@sveltejs/kit';
export async function load({ params, }) {
	// @ts-ignore
	const post = await getArticleBySlug(params.slug);
	const catArticles = await getAllArticlesByCategory(  post.category_slug, post.slug);
	return {
		post,
		catArticles
	};
}

// export const actions = {
// 	refresh: async ({ params }) => {
// 		// @ts-ignore
// 		const post = await getArticleBySlug(params.slug);
// 		throw redirect(307, `/blog/${post.slug}`);
// 	}
// };
