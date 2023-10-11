import { getSingleCourse } from '$lib/server/sanity';
export async function load({ params} ) {
	console.log(params);

	// @ts-ignore
	const course = await getSingleCourse(params.slug);
	return {
		course
	};
}
