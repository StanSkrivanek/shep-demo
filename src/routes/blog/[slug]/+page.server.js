//  fetch single article by slug

import { getArticleBySlug } from '$lib/server/sanity.js';

export async function load({ params }) {
   // @ts-ignore
   const post = await getArticleBySlug(params.slug);
   return {
      post
   };
}



// fetch single article base on id
// import { getSingleArticle } from '$lib/server/sanity.js';
// export async function load({ params }) {

//    // @ts-ignore
//    const post = await getSingleArticle(params.id);
//    console.log("🚀 ~ file: +page.server.js:7 ~ load ~ post:", post)
   
//    return {
//       post
//    };
// }