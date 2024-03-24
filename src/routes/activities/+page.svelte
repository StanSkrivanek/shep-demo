<script>
	import { trimText } from '$lib/utils/globalhelpers';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
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
							<p>{post.title}</p>
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
		background: var(--cyan-100);
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		border-radius: 1rem;
		background: var(--gray-100);
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
			color: var(--gray-500);
			border: none;
			border: 1px solid var(--gray-100);
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			background: var(--clr-white);
			transition: all 0.2s ease-in-out;
			word-wrap: none;
			&:hover {
				color: var(--clr-white);
				background-color: var(--cyan-500);
				border-color: transparent;
			}
		}
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

		border: 1px solid var(--gray-100);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		gap: 0.25rem;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-100);
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
			/* color: var(--cyan-50); */
			line-height: 2;
		}
		& a {
			margin: 0;
			font-size: var(--xs);
			line-height: 2;
			pointer-events: all;
			color: var(--gray-400);
			&:hover {
				color: var(--cyan-400);
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
			color: var(--gray-500);
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
		& svg {
			& circle {
					stroke: var(--color-brand) !important;
				}
				& path {
					fill: var(--color-brand) !important;
				}
				&:hover {
					& circle {
						stroke: var(--shep-green) !important;
					}
					& path {
						fill: var(--shep-green) !important;
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
				/* 'image' */
				'header '
				'body '
				'footer ';
			grid-template-rows:
				[subHeader] 2rem
				/* [image] 10rem */
				[header] 3.6rem
				[body] auto
				[footer] 2.6rem;
		}
		.card-img {
			display: none;
		}
	}
</style>