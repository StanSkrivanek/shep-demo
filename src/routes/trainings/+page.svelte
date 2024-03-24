<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	// console.log(data.allTrainings);
	// const openCourse = data.allOpenCourses;
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
					src="https://cdn.sanity.io/images/gkez65br/production/8b137c079b2438d98270dd211b76ea58c1a0210c-1200x719.jpg"
					alt="pinky theme"
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
		background: var(--orange-light);
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		border-radius: 1rem;
		background: var(--gray-1);
		max-height: max-content;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			aspect-ratio: 2.4/1;
		}
	}
	/* .separator-heading {
		grid-column: 1/-1;
		margin-bottom: 2rem;
	} */
	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}
	.card {
		display: grid;
		grid-template-areas:
			'subHeader '
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[subHeader] 2.5rem
			[header] 5.2rem
			[body] auto
			[footer] 4rem;

		border: 1px solid var(--gray-2);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		& svg {
			& circle {
				stroke: var(--color-brand) !important;
			}
			& path {
				fill: var(--color-brand) !important;
			}
		}
	}
	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-2);
		background: var(--green-light);
		& svg {
			& circle {
				stroke: var(--shep-green) !important;
			}
			& path {
				fill: var(--shep-green) !important;
			}
		}
	}

	.card-header {
		grid-area: header;

		& h3 {
			font-size: 1.5rem;
			font-weight: 400;
			color: var(--color-brand);
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
			margin-bottom: 1rem;
			font-size: var(--sm);
		}
	}
	.card-body {
		grid-area: body;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 1rem;
			color: var(--fc-mid);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		& p {
			align-self: flex-end;
			margin: 0;
			font-size: var(--xs);
			color: var(--gray-3);
		}

		& .btn-link {
			pointer-events: all;
		}
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
	}

	/* @media (max-width: 500px) {
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
	} */
</style>
