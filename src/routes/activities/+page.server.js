import { getAllActivities } from '$lib/server/sanity';

export async function load() {
   const activities = await getAllActivities();

   return {
      activities,
   };
}
