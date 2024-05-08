//@ts-nocheck
import {
	getAllUpcomingCoursesforCurrentVenue,
	getAllUpcomingTrainingsforCurrentVenue,
	getSingleVenue
} from '$lib/server/sanity';


export async function load({ params }) {
	const slug = params.slug;
	if (!params || typeof slug !== 'string') {
		throw new Error('Invalid params');
	}
	
		const venue = await getSingleVenue(slug);
	
		const upcomingCourses = await getAllUpcomingCoursesforCurrentVenue(slug);
	
		const upcomingTrainings = await getAllUpcomingTrainingsforCurrentVenue(slug);

		const allUpcomingEvents = await upcomingCourses.concat(upcomingTrainings);


		return {
			venue,
			allUpcomingEvents
		};
}
