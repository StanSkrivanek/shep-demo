<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { trimText } from '$lib/utils/globalhelpers';
	export let data;
</script>

<svelte:head>
	<title>Our Activities</title>
	<meta name="description" content="Our Activities" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Our Activities</h1>
				<p>
					Dive into our enriching collection of articles, meticulously crafted to guide you through
					the labyrinth of mental health and well-being. Explore topics like mindfulness, self-care,
					and positive psychology, and embark on a transformative experience toward a healthier mind
					and a happier life.
				</p>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/e839df8e4afd7bb9a69fa6ff57ff852dbfcdcfc2-800x400.jpg"
					alt="man on paper ship looking into binocular"
				/>
			</div>
		</div>
	</div>
	<div class="main__c">
		<main class="container">
			{#each data.activities as post}
				<div class="posts">
					<div class="card">
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
							<p>{trimText(post.excerpt, 140)}</p>
						</div>
						<div class="card-footer">
							<a class="btn-link" href={`/blog/${post.category_slug}/${post.slug}`}>
								<LinkCircle width={42} height={42} />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</main>
	</div>
</div>

<style>
	main {
		grid-area: main;
		/* padding-inline: 1rem; */
	}
	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'main main main main main main main main';
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
		/* grid-column: 1/-1; */
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
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
			[header] 3.6rem
			[body] auto
			[footer] 2.6rem;

		gap: 0.25rem;
		padding-bottom: 1rem;
		background: hsl(var(--hsl-white));
		border: 1px solid hsl(var(--hsl-blue) / 0.25);
		border-radius: 0.5rem;
		pointer-events: none;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
		border-radius: 0.25rem 0.25rem 0 0;
		margin-bottom: 1rem;
		overflow: hidden;
		& img {
			object-fit: cover;
			display: block;
			width: 100%;
			height: 100%;
		}
	}

	.card-subheading {
		grid-area: subHeader;
		padding-inline: 1rem;
		& p {
			font-size: var(--sm);
		}
		& a {
			font-size: var(--xs);
			color: hsl(var(--hsl-blue));
		}
	}

	.card-header {
		grid-area: header;
		padding-inline: 1rem;
		& h3 {
			font-size: var(--h5);
			color: hsl(var(--hsl-gray) / 0.45);
			font-family: 'fkg-bold', sans-serif;
		}
	}

	.card-body {
		grid-area: body;
		padding-inline: 1rem;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 0.9rem;
			line-height: 1.1;
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
		& svg:hover {
			& circle {
				stroke: var(--clr-brand) !important;
			}
			& path {
				fill: var(--clr-brand) !important;
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
				'image'
				'subHeader '
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
