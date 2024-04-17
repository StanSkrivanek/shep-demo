<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import MainLogo from '$lib/components/icons/MainLogoNew.svelte';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let form;

	$: data = form?.data;
	$: errors = {} || form?.errors;

	$: isSending = false;
	$: isToastOpen = false;

	// This is my second test massage send from Contact page using node emailer. Hope this will work!
	$: if (form?.success && !isToastOpen) {
		isToastOpen = true;
		setTimeout(() => {
			if (isToastOpen) {
				form.success = false;
				isToastOpen = false;
			}
		}, 5000);
	}
	onMount(() => {
		const textareaEl = document.querySelector('textarea');

		textareaEl?.addEventListener('keyup', () => {
			textareaEl.style.height = AutoSize(textareaEl);
		});

		// AUTOSIZE TEXTAREA
		function AutoSize(textareaEl) {
			function resize() {
				let height = textareaEl.scrollHeight;

				if (window.getComputedStyle) {
					const styles = window.getComputedStyle(textareaEl);
					height -= parseInt(styles['padding-top']) + parseInt(styles['padding-bottom']);
				}

				textareaEl.style.height = `${height + 8}px`;
			}

			if (!textareaEl.oninput) {
				textareaEl.oninput = () => {
					resize();
				};
			} else {
				textareaEl.onkeyup = () => {
					resize();
				};
			}

			return { textareaEl, resize };
		}
	});
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact" />
</svelte:head>

<div class="page__c">
	<div class="contact-header">
		<!-- <h1>Contact</h1> -->
		<MainLogo />
	</div>
	<div class="main__c">
		<!-- TODO: use ZOD to validate data and keep button disabled until all data are filled in an valid -->
		{#if isToastOpen}
			<div
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				in:fly={{ duration: 800, easing: cubicOut, y: -100, x: 0 }}
				out:fly={{ delay: 200, duration: 800, easing: cubicIn, y: -100, x: 0 }}
				class="toast toast-success"
			>
				<p class="text-black">Your message was send successfully</p>	
			</div>
		{/if}
		<form
			method="POST"
			use:enhance={() => {
				isSending = true;
				setTimeout(() => {
					isSending = false;
				}, 2000);
			}}
		>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" required placeholder="What is your full name?" />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="What email we can reach you at?"
				/>
			</div>
			<!-- phone -->
			<div class="form-group">
				<label for="phone">Phone</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					required
					placeholder="What phone number we should contact you on?"
				/>
			</div>
			<div class="relative w-full mb-8 items-baseline">
				<div>Message</div>
				<textarea
					rows="1"
					name="message"
					id="message"
					placeholder=" What we can help you with?"
					value={form?.errors ? data?.message : ''}
					required
				/>
				{#if errors && errors.message}
					<span class=" absolute -bottom-8 left-0 text-sm font-normal p-2">{errors.message[0]}</span
					>
				{/if}
			</div>
			<div class="form-footer">
				<button type="submit" disabled={isSending}>
					{isSending ? 'Sending...' : 'Send'}
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	/* form */
	form {
		/* row-start / col-start / row-end / col-end*/
		grid-area: 1/3/1/7;
		margin-bottom: 6rem;
	}
	/* force input style on autofill */
	input:-webkit-autofill {
		background-color: transparent !important;
		/* -webkit-box-shadow: 0 0 0 80px black inset; */

		/* -webkit-text-fill-color: #fff !important; */
	}

	input {
		width: 100%;
		/* padding-block: 0.5rem; */
		font-size: 1.4rem;
		&:focus {
			outline: none;
			box-shadow: 0 0 0 3px hsl(var(--hsl-blue) / 0.7);
		}
	}
	input,
	textarea {
		border: none;
		border-radius: 0.25rem;
		margin-bottom: 1rem;
		font-size: 1.4rem;
		padding:0.5rem;
	}

	textarea {
		resize: none;
		overflow-wrap: break-word;
		line-break: after-white-space;
		width: 100%;
		/* padding-bottom: 2rem; */
		outline: transparent;
		border-radius: 0.25rem 0.25rem 0 0;
		border-bottom: 2px solid hsl(var(--hsl-gray) / 0.35); 
	}
	textarea::placeholder {
		font-size: --sm;
	}
	button {
		padding: 1rem 2rem;
		border-radius: 0.25rem;
		font-size: 1.4rem;
		background: hsl(var(--hsl-blue) / 0.7);
		color: hsl(var(--hsl-white));
		border: none;
		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			background: hsl(var(--hsl-blue));
		}
	}
	button:disabled {
		cursor: not-allowed;
		background: hsl(var(--hsl-gray) / 0.5);
		border: transparent;
		opacity: 0.5;
	}
	.form-group {
		margin-bottom: 1rem;
	}

	.contact-header {
		grid-area: 1/1/1/9;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
		& h1 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}

	.form-footer {
		display: flex;
		justify-content: flex-end;
	}

	/* Toast */
	.toast {
		position: fixed;
		top: 0;
		right: 0;
		margin: 3rem;
		padding: 2rem;
		border-radius: 0.25rem;
		text-align: center;
		background: hsl(var(--hsl-green) / 0.9);
		color: hsl(var(--hsl-white));
		& .text-black {
			line-height: 1;
			font-weight: 600;
			margin-top: 0.5rem;
		}
	}

	/* Media Queries */

	@media (max-width: 991px) {
		form {
			grid-area: 1/1/1/9;
		}
	}
	@media (max-width: 767px) {
		input::placeholder,
		textarea::placeholder {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 575px) {
		input::placeholder,
		textarea::placeholder {
			font-size: 1rem;
		}
	}
</style>
