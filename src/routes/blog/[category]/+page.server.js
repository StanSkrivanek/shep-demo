import { getAllArticlesByCategory } from '$lib/server/sanity';

export async function load({ params }) {
	const {category } = params;
	// @ts-ignore
	const catArticles = await getAllArticlesByCategory(category);

	return {
		props: {		
			cat_title: catArticles[0].category,
			cat_excerpt: catArticles[0].category_excerpt,
			cat_img: catArticles[0].category_img,
			catArticles
		}
	};
}
