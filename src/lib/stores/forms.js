import { writable } from 'svelte/store';
// set array of slugs strings to store
export const singleEventStore = writable({});
// export const newsletterFormStore = writable({});

// Create a writable store with the form data and a submit function
// export const newsletterSignup = writable({
// 	email: '',
// 	isSending: false,
// 	submit: async function () {
// 		this.isSending = true;
// 		// Your code to submit the form goes here
// 		// For example: await fetch('/api/newsletter-signup', { method: 'POST', body: JSON.stringify({ email: this.email }) });
// 		this.isSending = false;
// 	}
// });
