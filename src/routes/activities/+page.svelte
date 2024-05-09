<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
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
					src="https://cdn.sanity.io/images/gkez65br/production/d3d19ad9e0b491d54a754f78e408700c8fc1c288-960x540.webp"
					alt=""
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
							<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
							<img src="" alt="" srcset="" />
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
							<Waves currentColor="hsl(var(--hsl-cyan) / .35)" />
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
		min-height: 400px;
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
			aspect-ratio: 9/1;
		}
	}

	.container {
		grid-area: main;
		display: grid;

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
			[header] 3.4rem
			[body] auto
			[footer] 2.9rem;

		height: 100%;
		gap: 0.25rem;
		padding-bottom: 1rem;
	
		border-radius: 0.5rem;
		overflow: hidden;
		pointer-events: none;
		transition: all 0.3s ease-in-out;
		position: relative;
		background: hsl(var(--hsl-cyan) / 0.08);
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
	
	/* Media Query */

	@media screen and (max-width: 1024px) {
		.hero-data {
			padding-inline: 0;
		}
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
		.hero-img {
				aspect-ratio: 8/4;
			
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
				[image] 12rem
				[subHeader] 2rem
				[header] 3.6rem
				[body] auto
				[footer] 2.6rem;
		}
	}
</style>
