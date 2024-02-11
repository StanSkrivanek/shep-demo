import { getSingleVenue, getAllUpcomingCoursesforCurrentVenue } from '$lib/server/sanity';

export async function load({ params }) {
	// @ts-ignore
	const venue = await getSingleVenue(params.slug);
	// console.log("🚀 ~ load ~ venue:", venue)
	// @ts-ignore
	const openForApplications = await getAllUpcomingCoursesforCurrentVenue(params.slug);
	return {
		venue,
		openForApplications
	};
}
