<script>
	import Toc from '$lib/components/icons/Toc.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { PortableText } from '@portabletext/svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let data;
	const post = data.post;
	// console.log('🚀 ~ file: +page.svelte:6 ~ Article:', data);
	$: isTocOpen = false;
	$: console.log('🚀 ~ file: +page.svelte:11 ~ isTocOpen:', isTocOpen);
</script>

<h1 id="top">Article Page</h1>

<div>
	<h2>{post.article_title}</h2>
</div>
<main class="smooth">
	{#if isTocOpen}
	<div class="toc" transition:fly={{ duration: 600, easing: quintOut, x:300}}>
		<ul class="toc__c">
			{#each post.content as item}
				{#if item.style == 'h2' || item.style == 'h3'}
					<li class="toc__item">
						<a href="#{item._key}">{item.children[0].text}</a>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="toc__c__bottom">
			<a href="#top">Back to top</a>
		</div>
	</div>
	{/if}
	<div
		class="toc-icon__w"
		role="button"
		tabindex="0"
		on:click={() => isTocOpen = !isTocOpen}
		on:keydown={() => alert('key pressed')}
		on:keyup={() => alert('key released')}
	>
		<Toc width={48} height={48} />
	</div>
	<PortableText
		value={post.content}
		onMissingComponent={false}
		components={{
			block: {
				// blockquote: Quote,
				h1: CustomHeading,
				h2: CustomHeading,
				h3: CustomHeading,
				h4: CustomHeading,
				h5: CustomHeading,
				normal: TextRte
			},
			types: {
				image: ImageRte
			}
		}}
	/>
</main>

<style>
	/* style */
	.toc {
		position: fixed;
		bottom: 0;
		right: 0;
		/* min-width: 300px; */
		/* height: 50vh; */
		overflow-y: auto;
		padding: 1rem;
		background: var(--color-bg);
		z-index: 1;
		background: var(--clr-white);
		border-radius: 1rem 0 0 0;
		border: 1px solid var(--gray-2);
	}

	.toc__c__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
	.toc-icon__w {
		position: fixed;
		bottom: 2rem;
		right: 3rem;
		width: auto;
		height: auto;
		z-index: 2;
		border-radius: 200px;
		background: var(--green);
		cursor: pointer;
      padding:1rem;
	}
</style>
