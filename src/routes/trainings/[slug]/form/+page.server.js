// @ts-nocheck
import { courseFormSchema } from '$lib/utils/zodSchemas';
// svelte default actions
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		if (!formData.inPerson) {
			// if inPerson is not checked, add the key and set it to 'no'
			formData.inPerson = 'no' ;
		}
		if (!formData.online) {
			// if online is not checked, set it to 'no'
			formData.online = 'no';
		}
		if (!formData.county) {
			formData.county = '';
		}
		if (!formData.source) {
			formData.source = '';
		}

		// send data to googleSheet

		// const url = 'https://....";

		// console.log('🚀 ~ file: +page.server.js:14 ~ default: ~ formData:', formData);

		// validate form data
		try {
			const result = courseFormSchema.parse(formData);
			console.log('SUCCESS');
			console.log('ZOD PARSE RESULT', result);

			// return{
			// 	success: true,
			// 	data: result
			// }
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			console.log('🚀 ~ SERVER: ~ errors', errors);
			return {
				success: false,
				data: formData,
				errors
			};
		}
		// return {
		// 	success: true,
		// 	data: formData
		// };
	}
};
