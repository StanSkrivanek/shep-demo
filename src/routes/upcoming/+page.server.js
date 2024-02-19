import { getAllUpcomingCourses, getAllUpcomingTrainings } from '$lib/server/sanity';
export async function load() {
	const upcomingCourses = await getAllUpcomingCourses();
	const upcomingTrainings = await getAllUpcomingTrainings(); 
const allUpcomingEvents = upcomingCourses.concat(upcomingTrainings);
	return {
		allUpcomingEvents
	};
}
