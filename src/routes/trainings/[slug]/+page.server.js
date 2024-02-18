import { getAllUpcomingTrainingsForCurrentTraining, getSingleTraining } from '$lib/server/sanity';
export async function load({ params }) {
	// @ts-ignore
	const allUpcomingTrainings = await getAllUpcomingTrainingsForCurrentTraining(params.slug);
	// @ts-ignore
	const traning = await getSingleTraining(params.slug);
	return {
		traning,
		allUpcomingTrainings
	};
}
