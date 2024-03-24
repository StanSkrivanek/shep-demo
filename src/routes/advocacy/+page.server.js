import { getShepAdvocacyPage } from '$lib/server/sanity.js';
export async function load() {


   // @ts-ignore
   const pageContent = await getShepAdvocacyPage();
   return {
			pageContent
		};
}