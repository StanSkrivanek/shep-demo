<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
	import { trimText } from '$lib/utils/globalhelpers.js';

	export let data;
	let { posts, categories } = data;

	let filteredPosts = posts;

	// pagination base values
	let currentPage = 1;
	const itemsPerPage = 12;

	//  check these functions
	// let uniqueCategories = categories.filter((v, i, a) => a.findIndex(t => (t.category === v.category)) === i);
	// let uniquePosts = posts.filter((v, i, a) => a.findIndex((t) => t.category === v.category) === i);

	// filter categories for unique values (render only categories that have posts)
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

	//  filter posts by category
	const uniquePosts = (/** @type {Text} */ category) => {
		//  reset currentPage to 1 when filter is applied to show the first page of the filtered posts
		currentPage = 1;
		let filtered = posts.filter(
			(/** @type {{ category: Text; }} */ post) => post.category === category
		);
		filteredPosts = filtered;
	};

	// show all posts - reset filter
	const allposts = () => {
		filteredPosts = posts;
	};

	// PAGINATION
	// Assuming `allPosts` is an array of all your posts
	$: allPosts = filteredPosts;

	// Calculate the start and end indices for the current page's items
	$: start = (currentPage - 1) * itemsPerPage;
	$: end = start + itemsPerPage;

	// Get the current page's items
	$: currentPageItems = allPosts.slice(start, end);

	// Calculate the total number of pages
	$: totalPages = Math.ceil(allPosts.length / itemsPerPage);

	function goToPreviousPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function goToNextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}
</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Articles on mental health and well-being" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>All Articles</h1>
				<p>
					Dive into our enriching collection of articles, meticulously crafted to guide you through
					the labyrinth of mental health and well-being. Explore topics like mindfulness, self-care,
					and positive psychology, and embark on a transformative experience toward a healthier mind
					and a happier life.
				</p>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/6f18003aa9dbf7a434ff295fbc17323eb29bf59d-960x540.webp"
					alt=""
				/>
			</div>
		</div>
	</div>
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
			{#each currentPageItems as post (post.id)}
				<div class="posts">
					<div class="card">
						<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
						<div class="card-subheading">
							<a class="btn-link" href={`/blog/${post.category_slug}`}>{post.category}</a>
						</div>
						<div class="card-img">
							<img src={post.main_img} alt={post.title} />
						</div>
						<div class="card-header">
							<h3>{post.title}</h3>
						</div>
						<div class="card-body">
							<!-- <p>{post.author[0].name}</p> -->
							<p>{trimText(post.excerpt, 128)}</p>
						</div>
						<div class="card-footer">
							<a class="btn-link" href={`/blog/${post.category_slug}/${post.slug}`}>
								<LinkCircle width={48} height={48} />
							</a>
						</div>
						<div class="bg">
							<Waves currentColor="hsl(var(--hsl-cyan) / 0.35)" />
						</div>
					</div>
				</div>
				
			{/each}
		</main>
	
		<div class="pagination__w">
			{#if totalPages > 1}
				<button on:click={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
			{/if}
			<div class="page-num__c">
				<p>page</p>
				<p>{currentPage} of {totalPages}</p>
			</div>
			{#if totalPages > 1}
				<button on:click={goToNextPage} disabled={currentPage === totalPages}>Next</button>
			{/if}
		</div>
	</div>
</div>

<style>
	aside {
		grid-area: aside;
		& p {
			margin: 0;
			margin-bottom: 1rem;
			padding-bottom: 0.5rem;
		
			line-height: 1;
			border-bottom: 1px solid hsl(var(--hsl-gray) / 0.25);
			color: var(--gray-3);
		}
	}
	main {
		grid-area: main;
	
	}
	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside main main main main main main main';
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}

	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		margin-bottom: 5rem;
	}

	.hero-col-2__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		grid-template-areas: 'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-img';
		grid-template-rows: auto;
		gap: 1rem;
	}

	.hero-data {
		display: flex;
		flex-direction: column;
		grid-column: 1 / 4;
		grid-row: 1/1;
		grid-area: hero-data;
		padding: 2rem;
		border-radius: 1rem;
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		border-radius: 1rem;
		max-height: max-content;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			aspect-ratio: 2.4/1;
		}
	}

	.container {
		grid-area: main;
		display: grid;
	
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}

	.tags {

		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		& .btn-tag {
			margin: 0;
			font-size: var(--xs);
			line-height: 1;
			pointer-events: all;
			color: hsl(var(--hsl-gray));
	
			border: 1px solid hsl(var(--hsl-gray) / 0.25);
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			background: hsl(var(--hsl-white));
			transition: all 0.2s ease-in-out;
			text-transform: uppercase;
			word-wrap: none;
			&:hover {
				color: hsl(var(--hsl-white));
				background-color: hsl(var(--hsl-gray));
				border-color: transparent;
			}
		}
	}

	.card {
		position: relative;
		display: grid;
		grid-template-areas:
			'image'
			'subHeader '
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[image] 15rem
			[subHeader] 1.6rem
			[header] 3.6rem
			[body] auto
			[footer] 2.9rem;

		height: 100%;
		gap: 0.25rem;
		padding-bottom: 1rem;
		border-radius: 0.5rem;
		overflow: hidden;
		pointer-events: none;
		background: hsl(var(--hsl-cyan) / 0.15);
		transition: all 0.3s ease-in-out;
	}
.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);
		& svg {
			& circle {
				stroke: hsl(var(--hsl-cyan)) !important;
			}
		}
	}
	.card-subheading {
		grid-area: subHeader;
		padding-inline: 1rem;
		& p {
			font-size: var(--sm);
		}
		& a {
			font-size: var(--sm);
			color: hsl(var(--hsl-gray) / 0.8);
			text-decoration: none;
			pointer-events: none;
		}
	}

	.card-header {
		grid-area: header;
		padding-inline: 1rem;
		& h3 {
			font-size: var(--h6);
			line-height: 1.1;
			color: hsl(var(--hsl-gray));
			letter-spacing: 0.05rem;
		
		}
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
	
		border-radius: 0.25rem 0.25rem 0 0;
		overflow: hidden;
		& img {
			object-fit: cover;
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.card-body {
		grid-area: body;
		padding-inline: 1rem;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 1rem;
			line-height: 1.2;
			color: hsl(var(--hsl-gray) / 0.75);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		padding-inline: 1rem;
	}
	.btn-link {
		pointer-events: all;
	}
		.bg {
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: -1;
			width: 100%;
		}
	.pagination__w {
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		& button {
			margin: 0 0.5rem;
			min-width: 100px;
			padding: 0.5rem 1rem;
			border: 1px solid hsl(var(--hsl-gray) / 0.25);
			border-radius: 0.25rem;
			background: hsl(var(--hsl-white));
			font-size: 1rem;
			color: hsl(var(--hsl-gray));
			transition: all 0.2s ease-in-out;
			&:hover {
				background: hsl(var(--hsl-gray));
				color: hsl(var(--hsl-white));
			}
			&:disabled {
				opacity: 0.5;
				pointer-events: none;
			}
		}
		& .page-num__c {
			& p {
				font-family: var(--ff-fkg-black);
				font-size: 1rem;
				color: hsl(var(--hsl-gray));
				margin: 0;
				width: 120px;
				text-align: center;
				&:first-child {
					font-size: var(--xs);
					color: hsl(var(--hsl-gray) / 0.75);
					text-transform: uppercase;
				}
			}
		}
	}
	/* Media Query */

	@media screen and (max-width: 1024px) {
		.hero-data h1 {
			margin-bottom: 0;
		}
		.hero-data p {
			margin-bottom: 0;
			max-width: 56ch;
		}
		.hero-col-2__c {
			grid-template-areas:
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img';
		}
		.main__c {
			display: block;
		}
		.tags {
			margin-bottom: 1.6rem;
		}
	}

	@media screen and (max-width: 480px) {
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
		.card {
			grid-template-areas:
				'subHeader '
				'image'
				'header '
				'body '
				'footer ';
			grid-template-rows:
				[image] 10rem
				[subHeader] 2rem
				[header] 3.6rem
				[body] auto
				[footer] 2.6rem;
		}
		.card-img {
			display: none;
		}
	}
</style>
