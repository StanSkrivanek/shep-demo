 // get dataObj from form

// export async function load(event) {
// 	console.log("event", event);
   
// }



// svelte default actions
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const dataEntries = Object.fromEntries(formData);
		console.log("🚀 ~ file: +page.server.js:20 ~ default: ~ dataEntries:", dataEntries)

		return {
			success: true,
			formEntries: dataEntries
		};
	}
};
