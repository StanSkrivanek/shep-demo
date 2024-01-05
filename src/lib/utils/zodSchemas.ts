import { z } from 'zod';

export const courseFormSchema = z.object({
	name: z
		.string({ required_error: 'The Full Name is required' })
		.min(6, { message: 'Name must be at least 6 characters' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email address' }),
	// phone: z
	// 	.string({ required_error: 'Phone number is required' })
	// 	// .min(6, { message: 'Name must be at least 2 characters' })
	// 	.trim(),

	// service: z.array(z.string()).nonempty({ message: 'Please select at least one service' }),
	// budget: z.enum(['500-1.5k', '1.5k-3k', '3k-5k', '5k-10k', '10k+'], {
	// 	errorMap: () => ({ message: 'Please select a budget' })
	// }),
	// message: z
	// 	.string({ required_error: 'Message is required' })
	// 	.min(10, { message: 'Message must be at least 10 characters' })
	// 	.trim()
});

export type CourseForm = z.infer<typeof courseFormSchema>;
