import { getAllArticlesByCategory } from '$lib/server/sanity';

export async function load({ params }) {
	const {category} = params;
	// @ts-ignore
	const catArticles = await getAllArticlesByCategory(category);

	return {
		props: {
			catArticles
		}
	};
}
