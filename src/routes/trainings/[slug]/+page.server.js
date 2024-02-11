import { getAllUpcomingTrainingsForCurrentTraining, getSingleTraining } from '$lib/server/sanity';
export async function load({ params }) {
	// @ts-ignore
	const allUpcomingTrainings = await getAllUpcomingTrainingsForCurrentTraining(params.slug);
	// console.log("🚀 ~ load ~ allUpcomingTrainings:", allUpcomingTrainings)
	// @ts-ignore
	const upcomingTraning = await getSingleTraining(params.slug);
	return {
		upcomingTraning,
		allUpcomingTrainings
	};
}
