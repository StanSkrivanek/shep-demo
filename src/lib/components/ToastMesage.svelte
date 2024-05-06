<script>
	// @ts-nocheck
	import IcnError from '$lib/components/icons/IcnError.svelte';
	import IcnInfo from '$lib/components/icons/IcnInfo.svelte';
   import IcnSuccess from '$lib/components/icons/IcnSuccess.svelte';
   import IcnWarning from '$lib/components/icons/IcnWarning.svelte';
	export let msg = '';
	export let type = '';
</script>

<div class="toast">
	<div
		class="icon"
		class:info={type === 'info'}
		class:error={type === 'error'}
		class:warning={type === 'warning'}
		class:success={type === 'success'}
	>
		{#if type === 'error'}
			<IcnError width={32} height={32} currentColor="color-mix(in oklab, hsl(var(--hsl-error)) 10%, white)"></IcnError>
		{/if}

		{#if type === 'info'}
			<IcnInfo width={32} height={32} currentColor="color-mix(in oklab, hsl(var(--hsl-info)) 10%, white)"></IcnInfo>
		{/if}
		{#if type === 'warning'}
			<IcnWarning width={32} height={32} currentColor="color-mix(in oklab, hsl(var(--hsl-warning)) 60%, black)"></IcnWarning>
		{/if}
		{#if type === 'success'}
			<IcnSuccess width={32} height={32} currentColor="color-mix(in oklab, hsl(var(--hsl-success)) 60%, black)"></IcnSuccess>
		{/if}
	</div>
	<div class="toast__body">
		<p>
			{msg}
		</p>
	</div>
</div>

<style>
	.toast {
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		gap: 1rem;
		& .icon {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 100%;
			padding-inline: 1rem;
		}
		& p {
			padding-block: 1.5rem;
			padding-right: 2rem;
			margin: 0;
		}
	}

	.info {
		background: hsl(var(--hsl-info));
	}
	.error {
		background: hsl(var(--hsl-error));
	}

	.warning {
		background: hsl(var(--hsl-warning));
	}

	.success {
		background: hsl(var(--hsl-success));
	}
</style>
