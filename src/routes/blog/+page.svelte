<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

	export let data;
	let posts = data.posts;
</script>

<h1>All Blog Posts</h1>

{#each posts as post}
	<div>
		<img src={post.main_img} alt="" />
		<span>{post.category_slug}</span>
		<h2>{post.title}</h2>
		<p>{post.author[0].name}</p>
		<p>{post.excerpt}</p>
		<a href={`./blog/${post.category_slug}/${post.slug}`}>
			<LinkCircle width={48} height={48} />
		</a>
	</div>
{/each}
