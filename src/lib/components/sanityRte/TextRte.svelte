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
	// $: console.log('🚀 ~ file: textRte.svelte:5 ~ precededByHeading:', precededByHeading);
</script>

{#if style === 'normal'}
	<p><slot /></p>
{/if}

<style>
	p {
		/* color: red; */
      /* max-width: 75ch; */
      /* line-height: 1.6; */
      width: 100%;
      margin: 0 auto;
      margin-bottom: 2rem;
	}
</style>
