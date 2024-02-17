import { z } from 'zod';

export const courseFormSchema = z
	.object({
		name: z
			.string({ required_error: 'The Full Name is required' })
			.min(6, { message: 'Name must be at least 6 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.email({ message: 'Email must be a valid email address' }).toLowerCase(),
		phone: z
			.string({ required_error: 'Phone number is required' })
			.min(8, { message: 'Name must be at least 8 characters' })
			.trim(),
		medicalNeeds: z.string(),
		emergency: z.string(),
		emergencyPhone: z.string(),
		reference: z.string(),
		why: z.string().max(320, { message: 'Why must be less than 320 characters' }).trim(),
		county: z.string(),
		source: z.string(),
		inPerson: z.string(),
		online: z.string(),
		privacy: z.string(),
		consent: z.string(),
		sid: z.string(),
	})
	.refine((data) => data.inPerson === 'yes' || data.online === 'yes', {
		message: 'You must select at least one option',
		path: ['inPerson', 'online']
	});

// export type CourseForm = z.infer<typeof courseFormSchema>;

// on:blur={(e) => {
// 	try {
// 		// check if form has errors
// 		courseFormSchema.pick({ name: true }).parse({ name: e.target.value });
// 		// append errors to errors object
// 		// errors = { ...errors, error: form?.errors };
// 		errors = form?.errors ;
// 		// data = { ...data, name: e.target.value };
// 	} catch (error) {
// 		errors = error.formErrors.fieldErrors;
// 	}
// }}
