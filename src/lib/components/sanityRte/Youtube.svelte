<script>
	// @ts-nocheck

	export let portableText;
	// $: console.log('🚀 ~ file: ImageRte.svelte:5 ~ portableText:', portableText);
	$: ({ value } = portableText);
	// $: ({ ptBlocks } = global);
	$: ({ _type } = value);
	// $: precededByYoutubeVideo = ['youtube'].includes(ptBlocks[indexInParent - 1]?._type);
	$: anchorId = `${value._key}`;

	function getYoutubeId(url) {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);

		return match && match[2].length === 11 ? match[2] : null;
	}

	$: videoId = getYoutubeId(value.url);
</script>

<div class="youtube-video" id={anchorId}>
	{#if _type === 'youtube'}
		<iframe
			width="600"
			height="450"
			src="https://www.youtube.com/embed/{videoId}"
			title={value.title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{/if}
</div>

<style>
	iframe {
		width: 100%;
		height: 100%;
	}
	.youtube-video {
		position: relative;
		aspect-ratio: 4/3;
		margin-block: 4rem;
	}
	.youtube-video iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
