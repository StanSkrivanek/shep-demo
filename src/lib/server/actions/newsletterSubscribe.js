// @ts-nocheck
import { NEWSLETTER_URL, NEWSLETTER_SHEET_ID, GOOGLE_EMAIL } from '$env/static/private';

import transporter from '$lib/mail/nodemailer.server.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	sendToNewsletter: async function ({ request }) {
		const formData = Object.fromEntries(await request.formData());
		const applicant = { ...formData, sheetId: NEWSLETTER_SHEET_ID };
		const scriptUrl = NEWSLETTER_URL;

		try {
			const response = await fetch(scriptUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(applicant)
			});

			if (!response.ok) {
				return fail(response.status, {
					status: response.status,
					statusText: response.statusText
				});
			}

			const htmlClient = `
			<div>
			<p>Thank you for subscribing to our newsletter.</p>
			<p>You can view past issues in our <a href="http://localhost:5173/archive">Archive</a></p>
			<img src="https://cdn.sanity.io/images/gkez65br/production/d4881aa85a12a4b55de32a576068e958057fd27c-263x265.svg" style="width: 128px; height: 128px;" alt="Shep logo" />
			</div>
			`;

			const emailMessage = {
				from: `"FineDiv Studio" <${GOOGLE_EMAIL}>`,
				to: `${applicant.email}`,
				subject: 'Newsletter Subscription',
				html: htmlClient
			};

			await transporter.sendMail(emailMessage);

			const senderEmailMessage = {
				from: `${applicant.email}`,
				to: GOOGLE_EMAIL,
				subject: 'New Newsletter Subscription',
				html: `
				<div>
				<p>New Newsletter subscription added to Google Sheet:</p>
				<p>Email: ${applicant.email}</p>
				</div>
				`
			};

			await transporter.sendMail(senderEmailMessage);

			return { success: true };
		} catch (error) {
			return fail(500, { status: '500', statusText: 'Internal Server Error' });
		}
	}
};
