import { getNuachtPDFs } from '$lib/server/sanity';


export async function load({params}) {
   console.log("🚀 ~ load ~ params:", params)
   const allNuacht = await getNuachtPDFs();

   return {
		
				allPDFs: allNuacht.map((item) => {
               return {
                ...item
               }
         }
      )

			
		};
}