<script>
	/**
	 * @type {any}
	 */
	export let portableText;

	$: ({ indexInParent, global, value } = portableText);
	$: ({ ptBlocks } = global);
	$: ({ style } = value);

	$: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(
		ptBlocks[indexInParent - 1]?.style
	);

	$: anchorId = `${value._key}`;
</script>


<div class="article-title" id={anchorId}>
	{#if style === 'h1'}
		<h1 id={anchorId}><slot /></h1>
	{:else if style === 'h2'}
		<h2 id={anchorId}><slot /></h2>
	{:else if style === 'h3'}
		<h3 id={anchorId}><slot /></h3>
	{:else if style === 'h4'}
		<h4 id={anchorId}><slot /></h4>
	{:else}
		<h5 id={anchorId}><slot /></h5>
	{/if}
</div>

<style>
	/* h1, */
	h2,
	h3,
	h4,
	h5 {
		font-family: var(--ff-fkg-black);
		line-height: 1;
		letter-spacing: -0.025em;
		color: hsl(var(--hsl-gray) / .5);
	}
</style>
