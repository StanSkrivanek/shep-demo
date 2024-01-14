// @ts-nocheck
import { courseFormSchema } from '$lib/utils/zodSchemas';
import { fail, redirect } from '@sveltejs/kit';
// svelte default actions
export const actions = {
	default: async ({ request, params }) => {
	
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
			formData.county = '';
		}
		if (!formData.source) {
			formData.source = '';
		}

		// send data to googleSheet
		// const url = 'https://....";
		// validate form data

		// applicant form object

		const applicant = {
			...formData
		};
		console.log("🚀 ~ default: ~ applicant:", applicant)

		// zod validation using safeParse
		const safeParse = courseFormSchema.safeParse(applicant);

		if (!safeParse.success) {
			return fail(400, {
				data: applicant,
				issues: safeParse.error.issues,
				message: 'Validation failed'
			});
		}

		throw redirect(303, `/trainings/${params.slug}`);
	}
};
