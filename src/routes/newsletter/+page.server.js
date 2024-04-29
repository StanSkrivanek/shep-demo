// @ts-nocheck

import { GOOGLE_EMAIL, NEWSLETTER_SHEET_ID, NEWSLETTER_URL } from '$env/static/private';

import transporter from '$lib/mail/nodemailer.server.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	sendToNewsletter: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		const applicant = {
			...formData,
			sheetID: NEWSLETTER_SHEET_ID
		};

		const scriptUrl = NEWSLETTER_URL;

		try {
			const response = await fetch(scriptUrl, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(applicant)
			});

			// if response is not ok, return fail
			if (!response.ok) {
				return fail(response.status, {
					status: response.status,
					statusText: response.statusText
				});
			}

			// send email to client
			const htmlClient = `
			<div>
			<p>Thank you for Newsletter subscription.</p>
			<p>You can check old newsletters in our <a href="http://localhost:5173/archive">Archive</a></p>
			<img src="https://cdn.sanity.io/images/gkez65br/production/d4881aa85a12a4b55de32a576068e958057fd27c-263x265.svg" style="width: 128px; height: 128px;" alt="shep logo" />
			</div>
			`;

			// email message setup
			const emailMessage = {
				from: `"FineDiv Studio" <${GOOGLE_EMAIL}>`,
				to: `"${applicant.email}" <${applicant.email}>`,
				subject: `Newsletter subscription`,
				html: htmlClient
			};
			const sendEmail = async (message) => {
				const sentInfo = await transporter.sendMail(message);
				return sentInfo;
			};
			await sendEmail(emailMessage);

			// send emails to your self
			const htmlSender = `
			<div>
			<p>New Newsletter subscription was added to Google Sheet</p>
			<p>Applicant email: ${applicant.email}</p>
			</div>
			`;

			// email message setup
			const senderEmailMessage = {
				from: `"FineDiv Studio" <${applicant.email}>`,
				to: GOOGLE_EMAIL,
				subject: `"New Newsletter subscription"`,
				html: htmlSender
			};

			/**
			 * Sends an email to the sender with the provided message.
			 *
			 * @param {object} senderEmailMessage - The email message to be sent.
			 * @return {Promise} A Promise that resolves with information about the sent email.
			 */

			const sendToSelf = async (message) => {
				try {
					const info = await transporter.sendMail(message);
					return info;
				} catch (error) {
					console.error('Failed to send email to self', error);
					throw error;
				}
			};

			await sendToSelf(senderEmailMessage);

			return { success: true };

		} catch (error) {
			console.log('🚀 ~ default: ~ error:', error);

			return fail(500, {
				status: '500',
				statusText: 'Internal Server Error'
			});
		}
	}
};
