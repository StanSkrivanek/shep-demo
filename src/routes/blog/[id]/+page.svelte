<script>
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { PortableText } from '@portabletext/svelte';
	export let data;
	const post = data.post;
	console.log('🚀 ~ file: +page.svelte:6 ~ Article:', data);
	/**
	 * @param {string} str
	 */
	// function slugify(str) {
	// 	str = str.replace(/^\s+|\s+$/g, ''); // trim
	// 	str = str.toLowerCase();
	// 	// remove accents, swap ñ for n, etc
	// 	var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
	// 	var to = 'aaaaeeeeiiiioooouuuunc------';
	// 	for (var i = 0, l = from.length; i < l; i++) {
	// 		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	// 	}
	// 	str = str
	// 		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	// 		.replace(/\s+/g, '-') // collapse whitespace and replace by -
	// 		.replace(/-+/g, '-'); // collapse dashes
	// 	return str;
	// }
</script>

<h1>Article Page</h1>

<div>
	<h2>{post.article_title}</h2>
</div>
<main>
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
