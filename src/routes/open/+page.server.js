import { getAllOpenCourses } from '$lib/server/sanity';
export async function load() {
	const allOpenCourses = await getAllOpenCourses();
	return {
		allOpenCourses
	};
}
