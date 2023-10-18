<script>
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { PortableText } from '@portabletext/svelte';
   import Toc from '$lib/components/icons/Toc.svelte';
	export let data;
	const post = data.post;
	console.log('🚀 ~ file: +page.svelte:6 ~ Article:', data);
</script>

<h1 id="top">Article Page</h1>

<div>
	<h2>{post.article_title}</h2>
</div>
<main class="smooth">
   <div class="toc">
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
         <Toc width={48} height={48}/>
      </div>
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
      width: auto;
      height: auto;
      overflow-y: auto;
      padding: 1rem;
      background: var(--color-bg);
      z-index: 1;
      background: var(--clr-white);
      border-radius: 1rem 0 0 0;
      border: 1px solid var(--clr-gray);
   }

   .toc__c__bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
   }
</style>
