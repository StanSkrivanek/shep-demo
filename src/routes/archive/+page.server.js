import { getNuachtPDFs } from '$lib/server/sanity';


export async function load() {
	const allNuacht = await getNuachtPDFs();
	// set “style-src='self' 'unsafe-inline’;" in the Content-Security-Policy header"
   // to allow inline styles
   // set “script-src='self' 'unsafe-inline’;" in the Content-Security-Policy header"
   // to allow unsafe-inline scripts
   // set “img-src='self' data:” in the Content-Security-Policy header"
   // to allow data urls
   

	return {
		nuachtPDFs: allNuacht.map((/** @type {any} */ item) => {
			return {
				...item
			};
		})
	};
}