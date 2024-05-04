<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
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
					src="https://cdn.sanity.io/images/gkez65br/production/b86d16c779223124f54af95e8741da5958424ba8-960x539.webp"
					alt=""
				/>
			</div>
		</div>
	</div>
	<h2>Partners facilities</h2>
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
					<div class="card-footer">
						<a class="link" href="/venues/{venue.slug}">
							<!-- <div class="link-desc__w">
								<p class="small-title">See more</p>
							</div> -->
							<!-- <div class="link-icon"> -->
							<LinkCircle width={48} height={48} />
							<!-- </div> -->
						</a>
					</div>
				</div>
				<div class="bg">
					<Waves currentColor="hsl(var(--hsl-green) / .35)" />
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
		background: color-mix(in oklab, hsl(var(--hsl-green)) 8%, white 10%);
	}
	.hero-img {
		grid-area: hero-img;
		border-radius: 1rem;
		max-height: max-content;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			aspect-ratio: 9/1;
		}
	}

	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 5rem;
	}
	/* Card */
	.card {
		position: relative;
		background: hsl(var(--hsl-cyan)/0.08);
		border-radius: 0.5rem;
		pointer-events: none;
		transition: all 0.3s ease-in-out;
		overflow: hidden;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
			box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);
		& svg {
			& circle {
				stroke: hsl(var(--hsl-green)) !important;
			}

		}
	}

	.thumbnail {
		grid-area: thumbnail;
		max-height: max-content;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
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
		& .card-footer {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			z-index: 1;
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
					& circle {
						stroke: hsl(var(--hsl-gray));
					}
					/* & path {
						fill: hsl(var(--hsl-gray)) ;
					} */
			}
		}
	}
	 .bg {
			position: absolute;
			bottom: 0;
			left: 0;
			/* z-index: 1; */
			width: 100%;
			/* & svg {
				width: 100%;
			} */
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
			padding-inline: 0;
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
		.hero-img {
			aspect-ratio: 8/4;
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
