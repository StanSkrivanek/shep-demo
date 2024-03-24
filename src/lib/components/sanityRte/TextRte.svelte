<script>
	// import type { BlockComponentProps } from '@portabletext/svelte';

	// export let portableText: BlockComponentProps;
	/**
	 * @type {any}
	 */
	export let portableText;

	$: ({ indexInParent, global, value } = portableText);
	$: ({ ptBlocks } = global);
	$: ({ style } = value);

	// $: precededByHeading = ['normal'].includes(ptBlocks[indexInParent - 1]?.style);
	
</script>

{#if style === 'normal'}
	<p><slot /></p>
{/if}

<style>
	p {
		margin-bottom: 1.4rem;
	}
</style>