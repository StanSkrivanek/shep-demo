import { getAllUpcomingCoursesForCurrentCourse, getSingleCourse } from '$lib/server/sanity';
export async function load({ params }) {
	// @ts-ignore
	const allOpenCourses = await getAllUpcomingCoursesForCurrentCourse(params.slug);
	// @ts-ignore
	const course = await getSingleCourse(params.slug);
	return {
		course,
		allOpenCourses
	};
}
