import { getAllOpenTrainingsForCurrentTraining, getSingleTraining } from '$lib/server/sanity';
export async function load({ params }) {
	// @ts-ignore
	const allOpenTrainings = await getAllOpenTrainingsForCurrentTraining(params.slug);
	// console.log("🚀 ~ file: +page.server.js:5 ~ load ~ allOpenTrainings:", allOpenTrainings)
	// @ts-ignore
	const trainings = await getSingleTraining(params.slug);
	return {
		trainings,
		allOpenTrainings
	};
}
