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
		margin-bottom: 1.4rem;
	}
</style>
<!-- <iframe width="600" height="450" src="https://www.youtube.com/embed/PghJVYt1A54" title="Voices From the Heart SHEP 2014" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->