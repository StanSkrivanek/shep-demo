<script>
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { PortableText } from '@portabletext/svelte';
	export let data;
	const post = data.post;
	console.log('🚀 ~ file: +page.svelte:6 ~ Article:', data);
</script>

<h1>Article Page</h1>

<div>
	<h2>{post.article_title}</h2>
</div>
<main class="smooth">
	<ul class="toc__c">
		{#each post.content as item}
			{#if item.style == 'h2' || item.style == 'h3'}
				<li class="toc__item">
					<a href="#{item._key}">{item.children[0].text}</a>
				</li>
			{/if}
		{/each}
	</ul>
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
</style>
