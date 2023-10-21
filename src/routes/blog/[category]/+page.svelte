<script>
	export let data;
	let { catArticles, } = data.props;
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

</script>

<div class="page__c">
	<h1>All Category Posts</h1>
	<main class="container">
		{#each catArticles as post}
			<div class="card">
				<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
				<div class="card-subheading">
					<a class="btn-link" href={`./${post.category_slug}`}>{post.category}</a>
				</div>
				<div class="card-img">
					<img src={post.main_img} alt="" />
				</div>
				<div class="card-header">
					<h3>{post.title}</h3>
				</div>
				<div class="card-body">
					<!-- <p>{post.author[0].name}</p> -->
					<p>{post.excerpt}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href={`./${post.category_slug}/${post.slug}`}>
						<LinkCircle width={48} height={48} />
					</a>
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-column: 1/-1;
		/* TODO: auto-fit IF more that 5 articles */
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
	.card {
		display: grid;
		grid-template-areas:
			'subHeader '
			'image'
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[subHeader] 2rem
			[image] 14rem
			[header] 4rem
			[body] auto
			[footer] 4rem;

		border: 1px solid var(--gray-2);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		gap: .25rem;
	/* max-width:max-content */
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-2);
		/* background: var(--green-light); */
	}
	.card-header {
		grid-area: header;

		& h3 {
			font-size: 1.5rem;
			font-weight: 16rem;
		}

		& p {
			margin: 0;
		}
	}
	.card-subheading {
		grid-area: subHeader;
		display: flex;
		justify-content: space-between;
		color:red;

		& p
		 {
			margin-bottom: 1rem;
			color: var(--gray-3);
		}
		& a {
			display: inline-block;
			font-size: var(--sm);
			line-height: 2;
			pointer-events: all;
			color: var(--gray-3);
			text-decoration: none;
			&:hover {
				color: var(--clr-green);
			}
			/* padding: 1rem 0; */
			/* border: 1px solid var(--gray-3); */
			/* border-radius: 50px; */
		}
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
		/* border: 2px solid red; */
		& img {
			object-fit: cover;
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 1rem;
			
			/* aspect-ratio: 2.4/1; */
		}
	}
	.card-body {
		grid-area: body;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 1rem;
			color: var(--gray-3);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;

		& p {
			align-self: flex-end;
			margin: 0;
			font-size: var(--xs);
			color: var(--gray-3);
		}
	}
	.btn-link {
		pointer-events: all;
	}
</style>

