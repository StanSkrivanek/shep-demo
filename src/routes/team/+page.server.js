import { getTeam } from '$lib/server/sanity';
export async function load() {
	const team = await getTeam();
	return {
		team
	};
}
