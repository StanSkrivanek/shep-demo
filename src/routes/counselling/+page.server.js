import { getCounsellingPage } from '$lib/server/sanity.js';
export async function load() {


   // @ts-ignore
   const pageContent = await getCounsellingPage();
   return {
			pageContent
		};
}