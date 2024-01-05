// import { z } from 'zod';

// const courseFormSchema = z.object({
// 	name: z
// 		.string({ required_error: 'Name is required' })
// 		.min(6, { message: 'Name must be at least 2 characters' })
// 		.trim(),
// 	email: z
// 		.string({ required_error: 'Email is required' })
// 		.email({ message: 'Email must be a valid email address' }),
// 	phone: z
// 		.string({ required_error: 'Phone number is required' })
// 		// .min(6, { message: 'Name must be at least 2 characters' })
// 		.trim(),
// })

// svelte default actions
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		if (!formData.inPerson) {
			// if inPerson is not checked, add the key and set it to 'no'
			formData.inPerson = 'no';
		}
		if (!formData.online) {
			// if online is not checked, set it to 'no'
			formData.online = 'no';
		}
		if (!formData.county) {
			// if county is not selected, set it to 'none'
			formData.county = '';
		}
		if (!formData.source) {
			// if source is not selected, set it to 'none'
			formData.source = '';
		}


		// send data to googleSheet

		// const url = 'https://....";

		// console.log('🚀 ~ file: +page.server.js:14 ~ default: ~ formData:', formData);

		// validate form data
		// try {
		// 	const result = courseFormSchema.parse(formData);
		// 	console.log("SUCCESS");
		// 	console.log(result);
		// } catch (err) {
		// 	const { fieldErrors: errors } = err.flatten();
		// 	return {
		// 		data: formData,
		// 		errors // return data to client side and get these data in `export let form;`
		// 	};
		// }
	}
};
