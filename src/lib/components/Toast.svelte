<script>
	import { toast } from '$lib/stores/ToastStore';
	import { flip } from 'svelte/animate';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Portal from './Portal.svelte';
	import ToastMesage from './ToastMesage.svelte';
</script>

<Portal>
	<div class="toaster">
		{#each $toast as msg (msg.id)}
			<div
				class="toast-msg"
				role="alert"
				aria-live="polite"
				aria-atomic="true"
				id={msg.id}
				class:info={msg.type === 'info'}
				class:error={msg.type === 'error'}
				class:warning={msg.type === 'warning'}
				class:success={msg.type === 'success'}
				in:fly={{ duration: 800, easing: cubicOut, y: -100, x: 0 }}
				out:fly={{ duration: 800, easing: cubicIn, y: -100, x: 0 }}
				animate:flip={{ delay: 600, duration: 600, easing: cubicOut }}
			>
				<div>
					<ToastMesage msg={msg.msg} type={msg.type} />
				</div>
			</div>
		{/each}
	</div>
</Portal>

<style>
	.info {
		background-color: color-mix(in oklab, hsl(var(--hsl-info)) 10%, white);
		color: color-mix(in oklab, hsl(var(--hsl-info)) 70%, black);
		border: 1px solid hsl(var(--hsl-info));
	}

	.error {
		background-color: color-mix(in oklab, hsl(var(--hsl-error)) 10%, white);
		color: color-mix(in oklab, hsl(var(--hsl-error)) 70%, black);
		border: 1px solid hsl(var(--hsl-error));
	}

	.warning {
		background-color: color-mix(in oklab, hsl(var(--hsl-warning)) 10%, white);
		color: color-mix(in oklab, hsl(var(--hsl-warning)) 70%, black);
		border: 1px solid hsl(var(--hsl-warning));
	}

	.success {
		background-color: color-mix(in oklab, hsl(var(--hsl-success)) 10%, white);
		color: color-mix(in oklab, hsl(var(--hsl-success)) 70%, black);
		border: 1px solid hsl(var(--hsl-success));
	}
	.toaster {
		position: fixed;
		top: 24px;
		right: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transform: translateX(50%);
		z-index: 9999;
		/* transition: all 0.3s ease-in-out; */
		& .toast-msg {
			display: flex;
			align-items: center;
			justify-content: center;
			/* gap: 1rem; */
			/* padding: 0.5rem; */
			border-radius: 0.25rem;
		}
	}
</style>
