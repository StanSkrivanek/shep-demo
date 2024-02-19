<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	console.log('🚀 ~ data:', data);

	// console.log(data.allCourses);
	// const openCourse = data.allOpenCourses;
	// const { event, online, in_person, venue, form } = data.allCourses;
</script>

<div class="page__c">
	ADD FILTER BY CITY
	<main class="container">
		{#each data.allUpcomingEvents as upcoming}
			<div class="card">
				<div class="card-subheading">
					<p>{upcoming.event.type}</p>
					<p>{upcoming.venue.city}</p>
				</div>
				<div class="card-header">
					<h3>{upcoming.event.title}</h3>
				</div>
				<div class="card-body">
					<p>{upcoming.event.excerpt}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href="/courses/{upcoming.event.slug.current}">
						<LinkCircle width={48} height={48} />
					</a>
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
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
				stroke: var(--shep-orange) !important;
			}
			& path {
				fill: var(--shep-orange) !important;
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
			color: var(--shep-orange);
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
		.intro {
			column-count: 1;
		}
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
