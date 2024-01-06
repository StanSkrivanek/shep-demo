import { z } from 'zod';

export const courseFormSchema = z
	.object({
		name: z
			.string({ required_error: 'The Full Name is required' })
			.min(6, { message: 'Name must be at least 6 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.email({ message: 'Email must be a valid email address' }),
		phone: z
			.string({ required_error: 'Phone number is required' })
			.min(8, { message: 'Name must be at least 8 characters' })
			.trim(),

		inPerson: z.enum(['yes', 'no']).default('no'),
		online: z.enum(['yes', 'no']).default('no'),
		// inPerson: z.string().default('no'),
		// online: z.string().default('no'),
		// invalidate if checked is false

		privacy: z.boolean().default(false),
		consent: z.boolean().default(false)
	})
	.refine((data) => {
		if (data.inPerson === 'no' && data.online === 'no') {
			message: 'Please select at least one option';
		}
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
