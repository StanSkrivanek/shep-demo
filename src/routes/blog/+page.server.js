// fetch all articles with pagination and preview

import { getAllPosts, getAllCategories } from '$lib/server/sanity';

export async function load() {
	const posts = await getAllPosts();
	const categories = await getAllCategories();

	return {
		posts,
		categories,
	};
}
