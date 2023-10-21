<script>
	export let data;
	let { catArticles, } = data.props;
</script>

<pre>
    {JSON.stringify(catArticles, null, 2)}
</pre>

{#each catArticles as article}
	<div class="card">
		<div class="card_header">
			<img src={article.main_img} alt={article.title} />
			<div class="headings">
				<p>{article.category}</p>
				<h2>{article.title}</h2>
			</div>
		</div>
		<div class="card-body">
			<p>{article.excerpt}</p>
		</div>
		<div class="card-footer">
			<a href="/blog/{article.category_slug}/{article.slug}">Read More</a>
		</div>
	</div>
{/each}
