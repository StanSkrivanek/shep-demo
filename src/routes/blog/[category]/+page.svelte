<script>
	export let data;

	let { catArticles } = data.props;

	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { trimText } from '$lib/utils/globalhelpers.js';
</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Articles on mental health and well-being" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1 class="page-header">{catArticles[0].category}</h1>
				<!-- <h1>Short courses and workshops for Mental Health & Wellbeing</h1>
				<p>
					SHEP Courses and Trainings offer personalized learning experiences that prioritize
					individual needs, creating a nurturing environment where participants are heard, fostering
					a strong sense of belonging, safety, and respect within small, diverse groups.
				</p> -->
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/e839df8e4afd7bb9a69fa6ff57ff852dbfcdcfc2-800x400.jpg"
					alt="man on paper ship looking into binocular"
				/>
			</div>
		</div>
	</div>

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
					<p>{post.title}</p>
				</div>
				<div class="card-body">
					<!-- <p>{post.author[0].name}</p> -->
					<p>{trimText(post.excerpt, 140)}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href={`/blog/${post.category_slug}/${post.slug}`}>
						<LinkCircle width={48} height={48} />
					</a>
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		margin-bottom: 2rem;
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
		align-items: center;
		justify-content: center;
		flex-direction: column;
		grid-column: 1 / 4;
		grid-row: 1/1;
		grid-area: hero-data;
		padding: 2rem;
		border-radius: 1rem;
		/* background: var(--clr-brand); */
		& h1 {
			color: var(--fc-white);
			margin: 0;
		}
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		border-radius: 1rem;
		/* background: var(--gray-100); */
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
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
	.page-header {
		grid-column: 1/4;
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
			[footer] 3.1rem;

		/* border: 1px solid var(--gray-100); */
		background: hsl(var(--hsl-white));
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		gap: 0.25rem;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);
		/* background: var(--hsl-off-white); */
	}
	.card-header {
		grid-area: header;
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
			margin: 0;
			font-size: var(--xs);
			line-height: 2;
			color: var(--gray-400);
			color: var(--clr-brand);
		}
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
		margin-bottom: 1rem;
		& img {
			object-fit: cover;
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
		}
	}
	.card-body {
		grid-area: body;
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
		align-items: center;
	
		& svg {
			& circle {
				stroke: hsl(var(--hsl-gray) / 0.75) !important;
			}
			& path {
				fill: hsl(var(--hsl-gray) / 0.75);
			}
			&:hover {
				& circle {
					stroke: hsl(var(--hsl-brand)) !important;
				}
				& path {
					fill: hsl(var(--hsl-brand));
				}
			}
		}
	}
	.btn-link {
		pointer-events: all;
	}
</style>
