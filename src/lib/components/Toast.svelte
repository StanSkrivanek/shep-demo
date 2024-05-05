<script>
	import { toast } from '$lib/stores/ToastStore';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Portal from './Portal.svelte';
	import ToastMesage from './ToastMesage.svelte';
	$: console.log($toast);
</script>

<Portal>
	<div class="toaster">
		{#each $toast as msg (msg.id)}
			<div
				id={msg.id}
				class:info={msg.type === 'info'}
				class:error={msg.type === 'error'}
				class:warning={msg.type === 'warning'}
				class:success={msg.type === 'success'}
				class="toast-msg"
				in:fly={{ duration: 800, easing: cubicOut, y: -100, x: 0 }}
				out:fly={{ delay: 200, duration: 800, easing: cubicIn, y: -100, x: 0 }}
				role="alert"
				aria-live="polite"
				aria-atomic="true"
			>
				<div>
					<ToastMesage msg={msg.msg} />
				</div>
			</div>
		{/each}
	</div>
</Portal>

<style>
	.info {
		background-color: #f0f9ff;
		color: #0366d6;
		border: 1px solid #0366d6;
	}

	.error {
		background-color: #f8d7da;
		color: #721c24;
		border: 1px solid #721c24;
	}

	.warning {
		background-color: #fff3cd;
		color: #856404;
		border: 1px solid #856404;
	}

	.success {
		background-color: #d4edda;
		color: #155724;
		border: 1px solid #155724;
	}
	.toaster {
		position: fixed;
		top: 24px;
		right: 50%;
		transform: translateX(50%);
		z-index: 9999;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		& .toast-msg {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			padding: .5rem;
			border-radius: .25rem;
		}
	}
</style>
