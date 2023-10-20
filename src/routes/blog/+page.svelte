<script>
	export let data;
	const posts = data.posts;
	console.log('🚀 ~ file: +page.svelte:6 ~ posts:', posts);
</script>

<h1>Blog Page</h1>

{#each posts as post}
	<div>
		<img src={post.main_img} alt="" />
		<span>{post.category_slug}</span>
		<h2>{post.title}</h2>
		<p>{post.author[0].name}</p>
		<p>{post.excerpt}</p>
		<a href="./blog/{post.category_slug}/{post.slug}"> Read more</a>
		<!-- <PortableText blocks={post.body} /> -->
	</div>
{/each}
