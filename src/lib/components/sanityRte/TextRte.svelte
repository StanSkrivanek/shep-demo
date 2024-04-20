<script>;
	/**
	 * @type {any}
	 */
	export let portableText;

	$: ({ indexInParent, global, value } = portableText);
	$: ({ ptBlocks } = global);
	$: ({ style } = value);


	
</script>

{#if style === 'normal'}
	<p><slot /></p>
{/if}

<style>
	p {
		margin-bottom: 1.4rem;
	}
</style>