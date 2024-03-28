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

	// $: anchorId = `heading-${value._key}`;
	$: anchorId = `${value._key}`;
</script>

<!-- <div class="relative {precededByHeading ? 'mt-10' : 'mt-4'}" id={anchorId}> -->
<div class="article-title" id={anchorId}>
	<!-- <a href="#{anchorId}">
		<span class="sr-only">Link to this heading</span>
	</a> -->
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
<!-- </div> -->

<style>
	/* a {
		color: blue;
		position: absolute;
		top: -0.5rem;
		left: -1.5rem;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	} */

	/* a:hover {
		color: red;
		opacity: 1;
	} */
	/* h1, */
	h2,
	h3,
	h4,
	h5 {
		font-family: 'fkg-bold', sans-serif;
		line-height: 1;
		letter-spacing: -0.025em;
		color: hsl(var(--hsl-gray) / .5);
	
		/* margin-block: 2rem 0.5rem; */
	}
	/* h1 {
		font-size: 4.209rem;
	}

	h2 {
		font-size: 3.157rem;
	}

	h3 {
		font-size: 2.369rem;
	}

	h4 {
		font-size: 1.777rem;
	}
	h5 {
		font-size: 1.333rem;
	}  */
</style>
