import {
	getAllUpcomingCoursesforCurrentVenue,
	getAllUpcomingTrainingsforCurrentVenue,
	getSingleVenue
} from '$lib/server/sanity';

// @ts-ignore
export async function load({ params }) {
	const slug = params.slug;
	if (!params || typeof slug !== 'string') {
		throw new Error('Invalid params');
	}
	// @ts-ignore
		const venue = await getSingleVenue(slug);
		// @ts-ignore
		const upcomingCourses = await getAllUpcomingCoursesforCurrentVenue(slug);
		// @ts-ignore
		const upcomingTrainings = await getAllUpcomingTrainingsforCurrentVenue(slug);

		const allUpcomingEvents = await upcomingCourses.concat(upcomingTrainings);
		console.log('🚀 ~ load ~ allUpcomingEvents:', upcomingTrainings);

		return {
			venue,
			allUpcomingEvents
			// upcomingCourses,
			// upcomingTrainings
		};
}
