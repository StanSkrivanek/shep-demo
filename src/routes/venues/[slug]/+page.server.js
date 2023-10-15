import { getSingleVenue } from "$lib/server/sanity";


export async function load({ params }) {
   // @ts-ignore
   const venue = await getSingleVenue(params.slug);
   return {
      venue
   };
}