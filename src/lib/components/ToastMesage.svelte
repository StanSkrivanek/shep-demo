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
			<IcnError width={32} height={32} currentColor="hsl(var(--hsl-error-light))"></IcnError>
		{/if}

		{#if type === 'info'}
			<IcnInfo width={32} height={32} currentColor="hsl(var(--hsl-info-light))"></IcnInfo>
		{/if}
		{#if type === 'warning'}
			<IcnWarning width={32} height={32} currentColor="hsl(var(--hsl-warning-light))"></IcnWarning>
		{/if}
		{#if type === 'success'}
			<IcnSuccess width={32} height={32} currentColor="hsl(var(--hsl-success-light))"></IcnSuccess>
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
