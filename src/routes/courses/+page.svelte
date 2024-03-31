<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
</script>

<svelte:head>
	<title>Courses</title>
	<meta name="description" content="Courses" />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Short courses and workshops for Mental Health & Wellbeing</h1>
				<p>
					The SHEP programme of short Community Education course for Health & Wellbeing usually runs
					around 70-80 courses each year spread across counties Cork, Kerry, Limerick, Clare and
					Tipperary.
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
	<main class="container">
		{#each data.allCourses as course}
			<div class="card">
				<div class="card-subheading">
					<p>{course.type}</p>
				</div>
				<div class="card-header">
					<h3>{course.title}</h3>
				</div>
				<div class="card-body">
					<p>{course.excerpt}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href="/courses/{course.slug}">
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

	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 5rem;
	}
	.card {
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
		background: hsl(var(--hsl-brand) / 0.1);
		transition: all 0.2s ease-in-out;
		pointer-events: none;

	}
	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.15);
		background: hsl(var(--hsl-gray) / .75);
		& .card-header h3, p {
			color: hsl(var(--hsl-white)) !important;
		}
		/* border: 1px solid hsl(var(--hsl-brand) / 0.25); */
		& svg {
			& circle {
				stroke: hsl(var(--hsl-white) / 0.75) !important;
			}
			& path {
				fill: hsl(var(--hsl-white) / 0.75) !important;
			}
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
			color: hsl(var(--hsl-gray) / 0.9);
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
			color: hsl(var(--hsl-gray) / 0.5);
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
