// @ts-nocheck
import { API3_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
// svelte default actions
export const actions = {
	sendToGoogle: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		// const formData = await request.formData();
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

		// applicant form object
		const applicant = {
			...formData
		};
		console.log('🚀 ~ default: ~ applicant:', applicant);
		const sid = applicant.sheetID;

		// add sheet url with ID as searchParam
		const sheetUrl = `https://script.google.com/macros/s/${sid}/exec`;

		console.log('🚀 ~ sendToGoogle: ~ sheetUrl:', sheetUrl);
		// `url` is link to google script that will trigger function to add data to google sheet
		const scriptUrl = API3_URL;

		console.log(`Please hold ${applicant.name}, we are Sending your application...`);
		try {
			// run sending data toast

			const response = await fetch(scriptUrl, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(applicant)
			});
			// console.log('🚀 ~ default: ~ response:', response);
			// if response is not ok, return fail
			if (!response.ok) {
				console.log('🚀 ~ default: ~ BAD-response:', response);
				return fail(response.status, {
					status: response.status,
					statusText: response.statusText
				});
			}
			console.log('🚀 ~ default: ~ GOOD-response:', response);
			// run Thank you toast
			console.log('Thank you for your application. We will be in touch soon.');
			return { success: true };
		} catch (error) {
			console.log('🚀 ~ default: ~ error:', error);
			return fail('500', {
				status: '500',
				statusText: 'Internal Server Error'
			});
		}
	}
};
