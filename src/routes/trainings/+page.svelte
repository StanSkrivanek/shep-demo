<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
	export let data;
	const alUpcomingTrainings = data.allTrainings;
</script>

<svelte:head>
	<title>Trainings</title>
	<meta name="description" content="Intensive trainings for Mental Health & Wellbeing" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Intensive trainings for Mental Health & Wellbeing</h1>
				<p>
					SHEP Courses and Trainings offer personalized learning experiences that prioritize
					individual needs, creating a nurturing environment where participants are heard, fostering
					a strong sense of belonging, safety, and respect within small, diverse groups.
				</p>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/050fb861803cab6007044e16fd3836a854e35da1-1400x525.webp"
					alt=""
				/>
			</div>
		</div>
	</div>
	<!-- <h1 class="separator-heading">Trainings</h1> -->
	<main class="container">
		{#each alUpcomingTrainings as training}
			<div class="card">
				<div class="card-subheading">
					<p>{training.type}</p>
				</div>
				<div class="card-header">
					<h3>{training.title}</h3>
				</div>
				<div class="card-body">
					<p>{training.excerpt}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href="/trainings/{training.slug}">
						<LinkCircle width={48} height={48} />
					</a>
				</div>
				<div class="bg">
					<Waves currentColor="hsl(var(--hsl-pink) / .35)" />
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
		padding: 1rem;
		border-radius: 1rem;
		background: color-mix(in oklab, hsl(var(--hsl-purple)) 8%, white 10%);
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		border-radius: 1rem;
		/* background: var(--gray-1); */
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
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 5rem;
	}
	.card {
		position: relative;
		display: grid;
		grid-template-areas:
			'subHeader '
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[subHeader] 2rem
			[header] 4.6rem
			[body] auto
			[footer] 4rem;

		border-radius: 0.5rem;
		padding: 1rem;
		background: hsl(var(--hsl-purple) / 0.15);
		overflow: hidden;
		pointer-events: none;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);
		& svg {
			& circle {
				stroke: hsl(var(--hsl-purple)/.5) !important;
			}
			/* & path {
				fill: hsl(var(--hsl-purple)/.5) ;
			} */
		}
	}

	.card-header {
		grid-area: header;
		& h3 {
			font-size: 1.3rem;
			color: hsl(var(--hsl-gray));
			line-height: 1.1;
		}
		& p {
			margin: 0;
		}
	}
	.card-subheading {
		grid-area: subHeader;
		display: flex;
		justify-content: space-between;
		& p {
			margin-top: 0;
			font-size: var(--sm);
			color: hsl(var(--hsl-gray) / 0.75);
		}
	}
	.card-body {
		grid-area: body;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 1rem;
			line-height: 1.2;
			color: hsl(var(--hsl-gray) / 0.9);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		& p {
			align-self: flex-end;
			margin: 0;
			font-size: var(--xs);
			color: hsl(var(--hsl-gray) / 0.5);
		}

		& .btn-link {
			pointer-events: all;
		}
	}
	.bg {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		/* & svg {
			width: 100%;
		} */
	}

	@media (max-width: 996px) {
		.hero-data {
			flex-direction: column;
			gap: 1rem;
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
		/* .intro {
			column-count: 1;
		} */
	}

	@media (max-width: 500px) {
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
	}
</style>
