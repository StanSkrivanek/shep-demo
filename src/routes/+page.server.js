import { getAllOpenCourses, getAllVenues } from '$lib/server/sanity';
export async function load() {
	const venues = await getAllVenues();
	const allOpenCourses = await getAllOpenCourses();
	return {
		venues,
		allOpenCourses
	};
}
