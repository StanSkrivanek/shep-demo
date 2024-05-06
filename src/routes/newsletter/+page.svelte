<script>
	//@ts-nocheck
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/ToastStore';

	export let form;

	$: isSending = false;

	$: if (form?.success) {
		toast.send({
			msg: 'Thank you for "Nuacht" subscription',
			type: 'success'
		});
		goto('/');
	}
</script>

<div class="page__c">
	<div class="sign-up__c">
		<div class="group logo">
			
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/4006e3dd46fac8441e6d714a48c7e4006d3385f1-1024x1024.png"
				alt=""
			/>
		</div>
		<div class="group ">
			<div class="sign-up--title">
				<h1>Join Our Comunity Newsletter</h1>
				<p>Stay up to date with the latest news, events and activities from SHEP and the community.</p>
			</div>
			<form
				method="POST"
				action="?/sendToNewsletter"
				use:enhance={() => {
					isSending = true;
					if (form?.success) isSending = false;
				}}
				id="newsletter-signup"
			>
				<!-- <label for="email">Stay up to date with the latest news and events</label> -->
				<!-- <input type="text" name="name" id="name" placeholder="Your name and surname" /> -->
				<input type="email" name="email" id="email" placeholder="Your email address" />
				<button type="submit" disabled={isSending} value="Sign up">
					{isSending ? 'Sending...' : 'Sign Up'}
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
		min-height: 56svh;
		justify-content: center;
	}

	.sign-up__c {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		& h1, p {
			text-align: center;
			max-width: 40ch;
			margin-inline: auto;
		}
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
	.sign-up--title{
		margin-bottom: 4rem;
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
		display: inline-flex;
		align-self: center;
		justify-content: center;
		align-items: center;
		max-width: max-content;
		padding: 1rem 4rem;
		border: none;
		border-radius: 0.25rem;
		background-color: hsl(var(--hsl-blue));
		font-weight: 600;
		font-size: var(--sm);
		letter-spacing: 0.05em;
		color: white;
		cursor: pointer;
		text-transform: uppercase;
		transition: 0.3s ease;
	}

	button:hover {
		background-color: hsl(var(--hsl-green));
		color: color-mix(in oklab, hsl(var(--hsl-green)) 70%, black);
	}

</style>
