import { getSingleVenue, getAllOpenCoursesforCurrentVenue } from '$lib/server/sanity';

export async function load({ params }) {
	// @ts-ignore
	const venue = await getSingleVenue(params.slug);
	// @ts-ignore
	const openForApplications = await getAllOpenCoursesforCurrentVenue(params.slug);
	return {
		venue,
		openForApplications
	};
}
