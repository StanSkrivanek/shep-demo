import { getSingleTraining, getAllOpenTrainingsForCurrentTraining } from '$lib/server/sanity';
export async function load({ params} ) {
	// @ts-ignore
const allOpenTrainings = await getAllOpenTrainingsForCurrentTraining(params.slug);
	// @ts-ignore
	const trainings = await getSingleTraining(params.slug);
	return {
		trainings,
		allOpenTrainings
	};
}
