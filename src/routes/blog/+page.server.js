// fetch all articles with pagination and preview

import { getAllPosts } from '$lib/server/sanity';

export async function load() {
	const posts = await getAllPosts();
	return {
		posts
	};
}
