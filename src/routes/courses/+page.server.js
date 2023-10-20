import { getAllCourses } from '$lib/server/sanity';
export async function load() {
	const allCourses = await getAllCourses();

	return {
		allCourses
	};
}
