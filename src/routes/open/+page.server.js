import { getAllOpenCouses} from '$lib/server/sanity';
export async function load() {
	const allOpenCourses = await getAllOpenCouses();
	return {
		allOpenCourses
	};
}
