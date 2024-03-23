import { getJobs } from '$lib/server/sanity';

export async function load() {

	const allJobs = await getJobs();

	return {
		props: {
			allJobs
		}
	};
}
