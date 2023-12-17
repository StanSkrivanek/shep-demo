import { getAllTrainings } from '$lib/server/sanity';
export async function load() {
	const allTrainings = await getAllTrainings();

	return {
		allTrainings
	};
}
