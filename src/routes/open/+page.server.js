import { getAllUpcomingCourses, getAllUpcomingTrainings } from '$lib/server/sanity';
export async function load() {
	// get all upcoming courses and upcoming trainings
	const allUpCourses = await getAllUpcomingCourses();
	// console.log("🚀 ~ load ~ allOpenCourses:", allUpCourses)
	const allUpTrainings = await getAllUpcomingTrainings();
	// console.log("🚀 ~ load ~ allUpTrainings:", allUpTrainings)
	const allUpcomingCourses = allUpCourses.concat(allUpTrainings);
	console.log("🚀 ~ load ~ allUpcomingCourses:", allUpcomingCourses)
	return {
		allUpcomingCourses
	};
}

	// const allOpenCourses = await getAllUpcomingCourses();
	// const allOpenTrainings = await getAllUpcomingTrainings();
	// const allUpcoming = allOpenCourses.concat(allOpenTrainings);
// 	return {
// 		allOpenCourses
// 	};
// }
