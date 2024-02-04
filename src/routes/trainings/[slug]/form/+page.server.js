// @ts-nocheck
import { GOOGLE_APPLICANT_FORM_SCRIPT_URL } from '$env/static/private';
import { courseFormSchema } from '$lib/utils/zodSchemas';
import { fail, redirect } from '@sveltejs/kit';
// svelte default actions
export const actions = {
	default: async ({ request, params }) => {
		const formData = Object.fromEntries(await request.formData());
		if (!formData.inPerson) {
			// if inPerson is not checked, add the key and set it to 'no'
			formData.inPerson = '---';
		}
		if (!formData.online) {
			// if online is not checked, set it to 'no'
			formData.online = '---';
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
		console.log('🚀 ~ default: ~ applicant:', applicant);

		// zod validation using safeParse
		const safeParse = courseFormSchema.safeParse(applicant);

		if (!safeParse.success) {
			return fail(400, {
				data: applicant,
				issues: safeParse.error.issues,
				message: 'Validation failed'
			});
		}
		const url = GOOGLE_APPLICANT_FORM_SCRIPT_URL;

		// if validation is successful, send data to google sheet
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(applicant)
		});

		if (!response.ok) {
			return fail(500, {
				data: applicant,
				message: 'Failed to submit form'
			});
		}

		// if successful, redirect to the training page
		return redirect(303, `/trainings/${params.slug}`);

		// throw redirect(303, `/trainings/${params.slug}`);
	}
};
