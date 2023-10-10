import { getAllOpenCouses, getAllVenues } from '$lib/server/sanity';
export async function load() {
	const venues = await getAllVenues();
	const allOpenCourses = await getAllOpenCouses();
	return {
		venues,
		allOpenCourses
	};
}
