<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let form;
	$: data = form?.data;
	$: errors = {} || form?.errors;

	$: isLoading = false;
	$: isToastOpen = false;

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
	<h1>Contact</h1>
	<div class="main__c">
		<!-- contact Us form -->
		{#if isToastOpen}
			<div
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				in:fly={{ duration: 800, easing: cubicOut, y: -100, x: 0 }}
				out:fly={{ delay: 200, duration: 800, easing: cubicIn, y: -100, x: 0 }}
				class="toast toast-success"
			>
				<!-- fixed top-0 end-0 m-3 p-4 rounded text-2xl sm:text-lg font-light sm:font-light uppercase bg-green-300 -->
				<p class="text-black">Thank you for your request!</p>
				<p class="text-black">I will contact you shortly.</p>
			</div>
		{/if}
		<form
			method="POST"
			use:enhance={() => {
				isLoading = true;
				setTimeout(() => {
					isLoading = false;
				}, 2000);
			}}
		>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<!-- phone -->
			<div class="form-group">
				<label for="phone">Phone</label>
				<input type="tel" id="phone" name="phone" required />
			</div>
			<div class="relative w-full mb-8 items-baseline">
				<div>Message</div>
				<textarea
					rows="1"
					name="message"
					id="message"
					placeholder="Type your request* "
					value={form?.errors ? data?.message : ''}
					required
				/>
				{#if errors && errors.message}
					<span class=" absolute -bottom-8 left-0 text-sm font-normal p-2">{errors.message[0]}</span
					>
				{/if}
			</div>
			<button type="submit" disabled={isLoading}>
				{isLoading ? 'Sending...' : 'Send'}
			</button>
		</form>
	</div>
</div>

<style>
	/* form */
	form {
		/* row-start / col-start / row-end / col-end*/
		grid-area: 1/3/1/7;
	}
	/* force input style on autofill */
	input:-webkit-autofill {
		background-color: transparent !important;
		/* -webkit-box-shadow: 0 0 0 80px black inset; */

		/* -webkit-text-fill-color: #fff !important; */
	}

	.form-group {
		margin-bottom: 1rem;
	}
	input {
		width: 100%;
		padding-block: 0.5rem;
		font-size: 1.4rem;
		&:focus {
			outline: none;
			box-shadow: 0 0 0 3px var(--blue-300);
		}
	}
	input,
	textarea {
		border: none;
		border-bottom: 2px solid var(--gray-2);
		border-radius: 0.25rem;
		margin-bottom: 1rem;
		font-size: 1.4rem;
	}

	textarea {
		resize: none;
		overflow-wrap: break-word;
		line-break: after-white-space;
		width: 100%;
		padding-bottom: 2rem;
		outline: transparent;
	}
	button{
		padding: 1rem 2rem;
		border-radius: 0.25rem;
		font-size: 1.4rem;
		background: var(--blue-300);
		color: var(--fc-white);
		border: none;
		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			background: var(--blue-400);
		}
	}
	button:disabled {
		cursor: not-allowed;
		background: gray;
		border: transparent;
		opacity: 0.5;
	}
</style>
