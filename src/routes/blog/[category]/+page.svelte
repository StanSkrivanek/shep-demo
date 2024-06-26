<script>
	export let data;

	let { catArticles } = data.props;
	const allPosts = catArticles;
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
	import { trimText } from '$lib/utils/globalhelpers.js';

	// pagination base values
	let currentPage = 1;
	const itemsPerPage = 12;
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
	<div class="hero" id="top">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<div>
					<h1 class="page-header">{data.props.cat_title}</h1>
					<p class="excerpt">{data.props.cat_excerpt}</p>
				</div>
		
			</div>
			<div class="hero-img">
				<img src={data.props.cat_img} alt="illustration of boy reading a news" />
			</div>
		</div>
	</div>
	<div class="main__c">
		<main class="container">
			{#each catArticles as post}
				<div class="card">
					<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
					<div class="card-subheading">
						<p class="btn-link">{post.category}</p>
					</div>
					<div class="card-img">
						<img src={post.main_img} alt={post.title} />
					</div>
					<div class="card-header">
						<h3>{post.title}</h3>
					</div>
					<div class="card-body">
						
						<p>{trimText(post.excerpt, 128)}</p>
					</div>
					<div class="card-footer">
						<a class="btn-link" href={`/blog/${post.category_slug}/${post.slug}`}>
							<LinkCircle width={48} height={48} />
						</a>
					</div>
					<div class="bg">
						<Waves currentColor="hsl(var(--hsl-blue) / .35)" />
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
	main {
		grid-area: main;
		padding-inline: 1rem;
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
		grid-template-areas: 'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img';
		grid-template-rows: auto;
	}
	.hero-data {
		position: relative;
		
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		grid-row: 1/-1;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		border-radius: 0.5rem 0 0 0.5rem;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				90deg,
				hsla(188, 95%, 8%, 0.574) 0%,
				hsla(188, 95%, 8%, 0.315) 65%,
				hsla(188, 95%, 8%, 0.069) 100%
			);
			border-radius: 0.5rem;
			z-index: -1;
		}
		& h1 {
			color: hsl(var(--hsl-white));
			max-width: 20ch;
		}
		& .excerpt {
			max-width: 40ch;
			color: hsl(var(--hsl-white));
			font-size: 1.1rem;
		}
& .article_cat {
			padding: 0.8rem 1.6rem;
			border-radius: 100px;
			text-decoration: none;
			line-height: 1;
			border: 1px solid hsl(var(--hsl-white) / 0.25);
			text-transform: uppercase;
			letter-spacing: 0.07rem;
			color: hsl(var(--hsl-white));
			font-size: 0.9rem;
			font-weight: 500;
			align-self: flex-start;
			background: hsl(var(--hsl-gray) / 0.15);
		}
		
	}
	.hero-img {
		grid-area: hero-img;
		position: relative;
		border-radius: 0.5rem;

		max-height: 480px;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
			border-radius: 0.5rem;
		}
	}

	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'main main main main main main main main';
		grid-column: 1/-1;
		grid-row: 2 / auto;
		margin-bottom: 5rem;
		gap: 1rem;
	}
	.container {
		grid-area: main;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}
	.page-header {
		grid-column: 1/4;
	}
	.card {
		display: grid;
		grid-template-areas:
			'image'
			'subHeader '
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[image] 15rem
			[subHeader] 2rem
			[header] 3.4rem
			[body] auto
			[footer] 2.9rem;

		height: 100%;
		gap: 0.25rem;
		padding-bottom: 1rem;
		background: hsl(var(--hsl-white));
		border-radius: 0.5rem;
		overflow: hidden;
		pointer-events: none;
		transition: all 0.3s ease-in-out;
		position: relative;
		background: hsl(var(--hsl-blue) / 0.15);
	}
	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);
		& circle {
			stroke: hsl(var(--hsl-blue)) !important;
		}
	}
	.card-subheading {
		grid-area: subHeader;
		padding-inline: 1rem;
		& p {
			font-size: var(--sm);
			pointer-events: none ;
		}
	}

	.card-header {
		grid-area: header;
		padding-inline: 1rem;
		& h3 {
			font-size: var(--h6);
			line-height: 1.1;
			color: hsl(var(--hsl-gray) / 0.45);
			font-family: var(--ff-fkg-bold);
		}
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
		border-radius: 0.5rem 0.5rem 0 0;
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
	.bg {
		position: absolute;
		bottom: 0;
		left: 0;
		
		width: 100%;
	
	}
	.btn-link {
		pointer-events: all;
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
			border-radius: 0.5rem;
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
</style>
