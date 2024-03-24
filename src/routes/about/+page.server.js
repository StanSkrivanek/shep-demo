import { getAboutUsPage } from '$lib/server/sanity.js';
export async function load() {


   // @ts-ignore
   const pageContent = await getAboutUsPage();
   return {
			pageContent
		};
}