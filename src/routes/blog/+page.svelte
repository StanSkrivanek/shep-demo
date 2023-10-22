<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { trimText } from '$lib/utils/globalhelpers.js';
	// import { reset } from '__sveltekit/paths';
	// import { get } from 'svelte/store';
	export let data;
	let { posts, categories } = data;

	let filteredPosts = posts;
	// filter categories for unique values
	// let uniqueCategories = categories.filter((v, i, a) => a.findIndex(t => (t.category === v.category)) === i);

	let uniqueCategories = categories.filter(
		(
			/** @type {{ category: Text; slug: Text }} */ v,
			/** @type {number} */ i,
			/** @type {Array<Object>} */ a
		) => {
			let cat = posts.filter(
				(/** @type {{ category: any; }} */ post) => post.category === v.category
			);
			if (cat.length > 0) {
				return cat;
			}
		}
	);

	//  filter posts for unique categories
	// let uniquePosts = posts.filter((v, i, a) => a.findIndex((t) => t.category === v.category) === i);
	const uniquePosts = (/** @type {Text} */ category) => {
		let filtered = posts.filter(
			(/** @type {{ category: Text; }} */ post) => post.category === category
		);
	
		filteredPosts = filtered;
	};

	const allposts = () => {
		console.log("POSTS",posts);
		filteredPosts = posts;
	};
</script>

<div class="page__c">
	<h1 class="page-header">All Articles</h1>
	<div class="main__c">
		<aside>
			<p>Categories</p>
			<div class="tags">
				<button class="btn-tag" on:click={() => allposts()}>All</button>
				{#each uniqueCategories as category}
					<button class="btn-tag" type="button" on:click={() => uniquePosts(category.category)}>
						{category.category}
					</button>
				{/each}
			</div>
		</aside>
		<main class="container">
			{#each filteredPosts as post}
				<div class="posts">
					<div class="card">
						<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
						<div class="card-subheading">
							<a class="btn-link" href={`./blog/${post.category_slug}`}>{post.category}</a>
						</div>
						<div class="card-img">
							<img src={post.main_img} alt={post.title} />
						</div>
						<div class="card-header">
							<p>{post.title}</p>
						</div>
						<div class="card-body">
							<!-- <p>{post.author[0].name}</p> -->
							<p>{trimText(post.excerpt, 140)}</p>
						</div>
						<div class="card-footer">
							<a class="btn-link" href={`./blog/${post.category_slug}/${post.slug}`}>
								<LinkCircle width={40} height={40} />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</main>
	</div>
</div>

<style>
	aside {
		grid-area: aside;
		/* border-right: 1px solid var(--gray-2); */
		& p {
			margin: 0;
			margin-bottom: 1rem;
			padding-bottom: 0.5rem;
			/* font-size: var(--xs); */
			line-height: 1;
			border-bottom: 1px solid var(--gray-2);
			color: var(--gray-3);
		}
	}
	main {
		grid-area: main;
		padding-inline: 1rem;
	}
	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside main main main main main main main';
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}
	.page-header {
		grid-column: 1/4;
	}
	.container {
		grid-area: main;
		display: grid;
		/* grid-column: 1/-1; */
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}

	.tags {
		/* grid-area: aside; */
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		max-width: 300px;
		/* border-right: 1px solid var(--gray-2); */
		& .btn-tag {
			margin: 0;
			font-size: var(--xs);
			line-height: 1;
			pointer-events: all;
			color: var(--gray-3);
			border: none;
			border: 1px solid var(--gray-2);
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			background: var(--clr-white);
			transition: all 0.2s ease-in-out;
			&:hover {
				color: var(--clr-white);
				background-color: var(--clr-cyan);
				border-color: transparent;
			}
		}
		/* & .btn-tag{
			margin: 0;
			font-size: var(--xs);
			line-height: 1;
			pointer-events: all;
			color: var(--gray-3);
			border: 1px solid var(--gray-2);
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: var(--clr-white);
				background-color: var(--clr-cyan);
				border-color: transparent;
			}
		} */
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
			[image] 10rem
			[header] 3.6rem
			[body] auto
			[footer] 2.6rem;

		border: 1px solid var(--gray-2);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		gap: 0.25rem;
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
			line-height: 1.1;
			font-family: var(--ff-gilroy-smb);
		}
	}
	.card-subheading {
		grid-area: subHeader;
		display: flex;
		justify-content: space-between;
		& p {
			font-size: var(--xs);
			color: var(--gray-3);
			line-height: 2;
		}
		& a {
			margin: 0;
			font-size: var(--xs);
			line-height: 2;
			pointer-events: all;
			color: var(--gray-3);
			&:hover {
				color: var(--clr-green);
			}
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
			font-size: 0.9rem;
			line-height: 1.1;
			color: var(--gray-3);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		/* & p {
			align-self: flex-end;
			margin: 0;
			font-size: var(--xs);
			color: var(--gray-3);
		} */
	}
	.btn-link {
		pointer-events: all;
	}
</style>
