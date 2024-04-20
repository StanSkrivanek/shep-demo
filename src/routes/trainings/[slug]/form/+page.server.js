// @ts-nocheck
import { API3_URL, GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/mail/nodemailer.server';
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
		// const sid = applicant.sheetID;

		// `url` is link to google script that will trigger function to add data to google sheet
		const scriptUrl = API3_URL;
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

			const htmlClient = `
			<div>
			<h2>Hello ${applicant.name}</h2>
			<p>Thank you for your application for 
				<b>${applicant.courseTitle}</b> in <b>${applicant.courseVenue}</b>, 
				<b>${applicant.courseCity}</b> starting <b>${applicant.course_start}</b>.
			</p>
			<p>We will be in touch soon.</p>
			</div>
			`;

			// email message setup
			const emailMessage = {
				from: `"FineDiv Studio" <${GOOGLE_EMAIL}>`,
				to: `"${applicant.email}"`,
				subject: `Application confirmation`,
				html: htmlClient
			};
			// @ts-ignore
			const sendEmail = async (emailMessage) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(emailMessage, (err, info) => {
						if (err) {
							console.log('transporter ERR', err);
							reject(err);
						} else {
							console.log('transporter messageId', info.messageId);
							resolve(info);
						}
					});
				});
			};
			await sendEmail(emailMessage);

			// send emails to self
			const htmlSender = `
			<div>
			<p>New application from ${applicant.name} for 
				<b>${applicant.courseTitle}</b> in <b>${applicant.courseVenue}</b>, 
				<b>${applicant.courseCity}</b> starting <b>${applicant.course_start}</b> was add to Google Sheet
			</p>
			refName / Google sheet : ${applicant.refName}

			<p>Applicant email: ${applicant.email}</p>
			<p>Applicant phone: ${applicant.phone}</p>

			</div>
			`;

			// email message setup
			const senderEmailMessage = {
				from: `"FineDiv Studio" <${applicant.email}>`,
				to: GOOGLE_EMAIL,
				subject: `"New Applicant Notification for ${applicant.courseTitle} | ref: ${applicant.refName}"`,
				html: htmlSender
			};
			// @ts-ignore
			const sendSelfEmail = async (senderEmailMessage) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(senderEmailMessage, (err, info) => {
						if (err) {
							console.log('transporter ERR', err);
							reject(err);
						} else {
							console.log('transporter messageId', info.messageId);
							resolve(info);
						}
					});
				});
			};
			await sendSelfEmail(senderEmailMessage);

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
