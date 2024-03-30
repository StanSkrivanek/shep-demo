// fetch all articles with pagination and preview

import { getAllPosts, getAllCategories} from '$lib/server/sanity';

export async function load() {
	const posts = await getAllPosts();
	console.log("🚀 ~ load ~ posts:", posts)
	const categories = await getAllCategories();
	// const paginated = await getAllPostsWithPagination();

	return {
		posts,
		categories,
		// paginated
	};
}
