<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	console.log(data.allUpcomingCourses);

	// console.log(data.allOpenCourses);
	// const openCourse = data.allOpenCourses;
	const { training, course, online, in_person, venue, form } = data.allUpcomingCourses;
</script>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>SHEP courses and trainings currently open for applications</h1>
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
	<h1 class="separator-heading">Upcoming</h1>
	<main class="container">
		{#each data.allUpcomingCourses as course}
			<div class="card">
				<div class="card-subheading">
					<p>{course.venue.venue_name}</p>
					<p>{course.venue.city}</p>
				</div>
				<div class="card-header">
					{#if course.training}
						<h3>{course.training.title}</h3>
					{:else}
						<h3>{course.course.title}</h3>
					{/if}
				</div>
				<div class="card-body">
					{#if course.training}
						<p>{course.training.excerpt}</p>
					{:else}
						<p>{course.course.excerpt}</p>
					{/if}
				</div>
				<div class="card-footer">
					{#if course.training}
						<p>{course.training.type}</p>
						<a class="btn-link" href="trainings/{course.training.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{:else}
						<p>{course.course.type}</p>
						<a class="btn-link" href="courses/{course.course.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{/if}
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
		grid-area: hero-data;
		display: flex;
		flex-direction: column;
		/* grid-column: 1 / 4; */
		/* grid-row: 1/1; */
		padding: 2rem;
		border-radius: 1rem;
		background: var(--orange-light);
	}
	.hero-img {
		grid-area: hero-img;
		border-radius: 1rem;
		background: var(--gray-1);
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
	.separator-heading {
		grid-column: 1/-1;
		margin-bottom: 2rem;
	}
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
			[header] 4rem
			[body] auto
			[footer] 4rem;

		border: 1px solid var(--gray-2);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
	}
	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-2);
		background: var(--green-light);
	}
	.card-header {
		grid-area: header;
		& h3 {
			font-size: 1.5rem;
			font-weight: 16rem;
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
			font-size: var(--xs);
			color: var(--gray-3);
		}
	}
	.card-body {
		grid-area: body;
		& p {
			margin: 0;
			font-size: 1rem;
			color: var(--gray-3);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: space-between;
		align-items: end;
		& p {
			align-self: flex-end;
			margin: 0;
			line-height: 1;
			font-size: var(--xs);
			color: var(--gray-3);
		}
		& .btn-link {
			pointer-events: all;
		}
	}

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
	}

	@media (max-width: 480px) {
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
	}
</style>
