// import { env } from '$env/dynamic/private';
// import { createClient } from '@sanity/client';
// function sanityClient() {
// 	const config = {
// 		projectId: env.SANITY_PROJECT_ID,
// 		dataset: env.SANITY_PROJECT_DATASET,
// 		apiVersion: '2021-10-21'
// 		// useCdn: true,
// 		// token: env.SANITY_TOKEN,
// 	};
// 	return createClient({ ...config });
// }
// import imageUrlBuilder from '@sanity/image-url';
// const builder = imageUrlBuilder(sanityClient());

// /**
//  * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
//  */
// export const urlFor = (source) => {
// 	return builder.image(source);
// };
