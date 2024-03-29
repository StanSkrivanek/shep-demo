<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
</script>

<svelte:head>
	<title>Facilities</title>
	<meta name="description" content="Our partners venues" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Partners and community facilities</h1>
				<p>
					SHEP offers a wide range of courses in a variety of venues across Ireland. Thanks to our
					partners we can provide our courses in a number of facilities in Cork, Kerry, Limerick,
					Tipperary, Waterford, and Dublin. We also offer courses in other venues around the
					country.
				</p>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/8b137c079b2438d98270dd211b76ea58c1a0210c-1200x719.jpg?w=2000&fit=max&auto=format"
					alt=""
				/>
			</div>
		</div>
	</div>
	<h2>Facilities</h2>
	<div class="container">
		{#each data.venues as venue}
			<div class="card">
				<div class="thumbnail">
					<img src={venue.image} alt="" />
				</div>
				<div class="data">
					<div class="data-header">
						<p>{venue.city}</p>
						<h3>{venue.venue_name}</h3>
						<!-- <p>{venue.excerpt}</p> -->
					</div>
					<a class="link" href="/venues/{venue.slug}">
						<div class="link-desc__w">
							<p class="small-title">See more</p>
						</div>
						<div class="link-icon">
							<LinkCircle width={42} height={42} />
						</div>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Hero */
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
		/* padding: 1rem; */
	}
	.hero-data {
		display: flex;
		flex-direction: column;
		grid-column: 1 / 4;
		grid-row: 1/1;
		grid-area: hero-data;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--orange-50);
		/* max-height: max-content; */
	}
	.hero-img {
		grid-area: hero-img;
		border-radius: 1rem;
		background: var(--gray-100);
		max-height: max-content;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			aspect-ratio: 2.5/1;
		}
	}

	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
		gap: 1rem;
		margin-bottom: 5rem;
	}
	/* Card */
	.card {
		display: grid;
		grid-template-areas: 'thumbnail body';
		grid-template-columns: repeat(2, 1fr);
		background: hsl(var(--hsl-white));
		border: 1px solid hsl(var(--hsl-gray) / .15);
		border-radius: 0.5rem;
		pointer-events: none;
		transition: all 0.3s ease-in-out;
	}

	.thumbnail {
		grid-area: thumbnail;
		max-height: max-content;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.5rem 0 0 0.5rem;
			aspect-ratio: 16/9;
		}
	}
	.data {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		& .data-header {
			& p {
				font-size: var(--sm);
				margin: 0 0 0.25rem 0;
				color: var(--gray-400);
			}
			& h3 {
				font-size: var(--h5);
			}
		}
		& .link {
			display: flex;
			justify-content: space-between;
			align-items: end;
			font-size: var(--xs);
			text-decoration: none;
			color: var(--text-base);
			pointer-events: auto;
			& .link-desc__w {
				width: 20ch;
				color: var(--gray-400);
				& p {
					padding: 0;
					margin: 0;
					line-height: 1;
				}
			}
			& svg {
				display: block;
				transition: all 0.3s ease-in-out;
				&:hover {
					& circle {
					stroke: var(--clr-brand) !important;
				}
				& path {
					fill: var(--clr-brand) !important;
				}
				}
			}
		}
	}
	/* 640px - sm - small devices (mobile)  */
	@media (max-width: 640px) {
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
	}

	/* 1024px - lg - large devices (desktops) */
	@media (max-width: 1024px) {
		.hero-data {
			flex-direction: row;
			gap: 3rem;
		}
		.hero-data h1 {
			margin-bottom: 0;
		}
		.hero-data p {
			margin-bottom: 0;
			max-width: 75ch;
		}
		.hero-col-2__c {
			grid-template-areas:
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img';
		}
		.container {
			grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		
		}
		.thumbnail img {
			border-radius: 1rem 1rem 0 0;
		}
		.card {
			display: block;
		}
	}
</style>
