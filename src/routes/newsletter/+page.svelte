<script>
	//@ts-nocheck
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let form;
	$: console.log('🚀 ~ form:', form);

	$: isSending = false;
	// $: console.log("🚀 ~ isSending:", isSending)
	$: isToastOpen = false;

	$: if (form?.success && !isToastOpen) {
		isToastOpen = true;
		setTimeout(() => {
			if (isToastOpen) {
				// form.success = false;
				isToastOpen = false;
			}
			goto('/');
		}, 3000);
	}
</script>

{#if isToastOpen}
	<!-- display success thankyou if form success is true display it for 3s -->
	<div
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		in:fly={{ duration: 400, easing: cubicOut, y: -100, x: 0 }}
		out:fly={{ duration: 400, easing: cubicIn, y: 100, x: 0 }}
		class="toast toast-success"
	>
		<p class="text-black">Thank you for newsletter subscription</p>
		<!-- <p class="text-black">
			We have received your application and will be in touch with you shortly.
		</p> -->
	</div>
{/if}
<div class="page__c">
	<div class="sign-up__c">
		<div class="group sign-up">
			<h1>Sign up for our newsletter</h1>
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/4006e3dd46fac8441e6d714a48c7e4006d3385f1-1024x1024.png"
				alt=""
			/>
		</div>
		<div class="group sign-up">
			<form
				method="POST"
				action="?/sendToNewsletter"
				use:enhance={() => {
					isSending = true;
					setTimeout(() => {
						isSending = false;
					}, 2000);
				}}
				id="newsletter-signup"
			>
				<!-- <label for="email">Stay up to date with the latest news and events</label> -->
				<input type="text" name="name" id="name" placeholder="Your name and surname" />
				<input type="email" name="email" id="email" placeholder="Your email address" />
				<!-- <input type="hidden" name="sheetID" value="1Zx1SOOPnT2V_ldVi6vvIl3MrwvDsKTKsL0bJqTKbBnA"> -->
				<!-- <input bind:this={form} type="hidden" name="refName" value="newsletter-clients" /> -->
				<button type="submit" disabled={isSending} value="Sign up">
					{isSending ? 'Sending...' : 'Send'}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	.page__c {
		display: flex;
		border-radius: 0.5rem;
		margin-bottom: 3rem;
		min-height: 70vh;
		justify-content: center;
	}

	.sign-up__c {

		gap: 2rem;
		& img {
			border-radius: 0.25rem;
			aspect-ratio: 1/1;
			width: 100%;
			object-fit: cover;
			margin-bottom: 2rem;
		}
		@media screen and (max-width: 1440px) {
			grid-template-columns: 1fr 1fr;
		}
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	.group {
		max-width: 600px;
		margin-inline: auto;
		max-height: 100%;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 600px;
		margin-inline: auto;
	}

	input {
		display: inline-flex;
		padding: 1rem;
		border: none;
		border-radius: 0.25rem;
		font-size: 1rem;
	}

	button {
		padding: 1rem;
		border: none;
		border-radius: 0.25rem;
		background-color: hsl(var(--hsl-blue) / 0.75);
		font-weight: 600;
		font-size: var(--sm);
		letter-spacing: 0.05em;
		color: white;
		cursor: pointer;
		text-transform: uppercase;
	}
	.toast {
		position: fixed;
		top: 0;
		right: 0;
		margin: 3rem;
		padding: 1rem 2rem;
		border-radius: 0.25rem;
		background: hsl(var(--hsl-white));
		border: 2px solid hsl(var(--hsl-green));
		border-left-width: 3rem;
		color: hsl(var(--hsl-gray));
		z-index: 1000;

		& .text-black {
			line-height: 1.4;

			margin-top: 0.5rem;
			max-width: 40ch;
			&:first-child {
				text-transform: uppercase;
				font-weight: 600;
			}
		}
	}
</style>
