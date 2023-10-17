<script>
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { PortableText } from '@portabletext/svelte';
	export let data;
	const posts = data.posts;
	console.log("🚀 ~ file: +page.svelte:6 ~ posts:", posts)
</script>

<h1>Blog Page</h1>

{#each posts as post}
	<div>
		<h2>{post.article_title}</h2>
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
{/each}

