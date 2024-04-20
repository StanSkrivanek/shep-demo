import { getLogos, getPostsForSlider } from '$lib/server/sanity';
export async function load() {
	const logos = await getLogos();
	const slides = await getPostsForSlider();
	return {
		logos,
		slides
	};
}
