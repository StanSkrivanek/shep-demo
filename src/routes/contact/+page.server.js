import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/mail/nodemailer.server';
// import { contactEmailSchema } from '$lib/types';

/** @type {import('./$types').PageServerLoad} */
// import { getAllProjects } from '$lib/server/sanity';

// export async function load() {
// 	const projects = await getAllProjects();
// 	return {
// 		projects
// 	};
// }

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const contactEmailData = {
			name: formData.get('name'),
			email: formData.get('email'),
			service: formData.getAll('service'),
			budget: formData.get('budget'),
			message: formData.get('message')
		};
		try {
			// try validate data
			// contactEmailSchema.parse(contactEmailData);
			// email HTML template
			const html = `
			<table>
				<thead>
					<tr style="padding: 8px; border:1px solid #ccc; background: #ccc;">
						<th>Info</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr style="">
						<td style="padding: 8px; background: #eee;">Name</td>
						<td style="padding: 8px;">${contactEmailData.name}</td>
					</tr>
					<tr>
						<td style="padding: 8px; background: #eee;">Email</td>
						<td style="padding: 8px;">${contactEmailData.email}</td>
						
					</tr>
					<tr>
						<td style="padding: 8px; background: #eee;">Services</td>
						<td style="padding: 8px;">${contactEmailData.service}</td>
						
					</tr>
					<tr>
						<td style="padding: 8px; background: #eee;">Budget</td>
						<td style="padding: 8px;">${contactEmailData.budget}</td>
						
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
				subject: `New message from Profile website`,
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
