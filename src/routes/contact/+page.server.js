import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/mail/nodemailer.server';
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const contactEmailData = {
			name: formData.get('name'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			message: formData.get('message')
		};
		try {
			// try validate data
			// contactEmailSchema.parse(contactEmailData);
			// email HTML template
			const html = `
			<table>
				<thead>
					<tr style="padding: 16px; border:1px solid #eee; background: #cde2f4;">
						<th style="font-size: 1.2rem; padding: 16px 8px;">Label</th>
						<th style="font-size: 1.2rem; padding: 16px 8px;">Data</th>
					</tr>
				</thead>
				<tbody>
					<tr style="font-size: 1.2rem">
						<td style="padding: 8px; background: #eee;">Name</td>
						<td style="padding: 8px;">${contactEmailData.name}</td>
					</tr>
					<tr style="font-size: 1.2rem">
						<td style="padding: 8px; background: #eee;">Email</td>
						<td style="padding: 8px;">${contactEmailData.email}</td>
						
					</tr>
					<tr style="font-size: 1.2rem">
						<td style="padding: 8px; background: #eee;">Phone</td>
						<td style="padding: 8px;">${contactEmailData.phone}</td>
						
					</tr>
				</tbody>
			</table>
		
			<hr />
			<h3>Message</h3>
			<p style="font-size: 1.2rem;">${contactEmailData.message}</p>
				`;
			// email message setup
			const emailMessage = {
				from: `"${contactEmailData.name}" <${contactEmailData.email}>`,
				to: GOOGLE_EMAIL,
				subject: `New message from SHEP website`,
				html
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
		} catch (err) {
			// if not valid return errors
			// @ts-ignore
			const { fieldErrors } = err.flatten();
			const { ...rest } = contactEmailData;
			return {
				errors: fieldErrors,
				data: rest
			};
		}

		return {
			// if data pass zod validation -> return success
			success: true
		};
	}
};
