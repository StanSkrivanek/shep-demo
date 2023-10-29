import { getLogos } from '$lib/server/sanity';
export async function load() {
	// const logos = import.meta.glob('/src/lib/assets/logos/*.svg');
	const logos = await getLogos();
	// const venues = await getAllVenues();
	// const allOpenCourses = await getAllOpenCourses();
	return {
		// venues,
		// allOpenCourses,
		logos
	};
}
