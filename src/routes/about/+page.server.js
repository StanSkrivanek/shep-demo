import { getAboutUsPosts } from '$lib/server/sanity.js';
export async function load({ params }) {
console.log(params);

   // @ts-ignore
   const posts = await getAboutUsPosts();
   return {
      posts,
   };
}