<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	// console.log(data.allOpenCourses);
	// const openCourse = data.allOpenCourses;
	const { course, online, in_person, venue, form } = data.allOpenCourses;
</script>

<div class="conetnt">
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
	<h1 class="separator-heading">Open Courses</h1>
	<main class="container">
		{#each data.allOpenCourses as course}
			<div class="card">
				<div class="card-subheading">
					<p>{course.venue.venue_name}</p>
					<p>{course.venue.city}</p>
				</div>
				<div class="card-header">
					<h3>{course.course.title}</h3>
				</div>
				<div class="card-body">
					<p>{course.course.excerpt}</p>
				</div>
				<div class="card-footer">
					<p>{course.course.type}</p>
					<a class="btn-link" href="courses/{course.course.slug.current}">
						<LinkCircle width={64} height={64}/>
					</a>
				</div>

				<!-- <p>{course.venue.venue_name}</p> -->
				<!-- <p>{course.course.type}</p> -->
				<!-- {#if course.in_person.is_active}
				<div>
					<h4>In Person</h4>
					<p>Group: {course.in_person.group}</p>
					<p>Weekday: {course.in_person.weekday}</p>
					<p>Starts: {formatDateMonthName(course.in_person.start_date)}</p>
					<p>Ends:{formatDateMonthName(course.in_person.end_date)}</p>
					<p>
						From: {formatTime12(course.in_person.start_date)}
					</p>
					<p>
						To: {formatTime12(course.in_person.end_date)}
					</p>
					<div class="trainers">
						{#each course.in_person.leader as trainer}
							<p>{trainer.name}</p>
						{/each}
					</div>
					<p>refNo: {course.in_person.course_in_ref}</p>
				</div>
			{:else}
				<p>Not In-Person Course provided</p>
			{/if} -->
				<!-- {#if course.online.is_active}
				<div>
					<h4>Online</h4>
					<p>Group: {course.online.group}</p>
					<p>weekday: {course.online.weekday}</p>
					<p>
						Starts: {formatDateMonthName(course.online.start_date)}
					</p>
					<p>
						Ends: {formatDateMonthName(course.online.end_date)}
					</p>
					<p>
						From: {formatTime12(course.online.start_date)}
					</p>
					<p>
						To: {formatTime12(course.online.end_date)}
					</p>
					<div class="trainers">
						{#each course.online.leader as trainer}
							<p>{trainer.name}</p>
						{/each}
					</div>
					<p>refNo: {course.online.course_in_ref}</p>
				</div>
			{:else}
				<p>No Online course provided</p>
			{/if} -->
			</div>
		{/each}
	</main>
</div>

<style>
	.conetnt {
		max-width: 1680px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 0.5fr 0.5fr 1fr 1fr 0.5fr 0.5fr 1fr;
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
		/* grid-column: 4 / -1; */
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
		/* border: 1px solid var(--gray-2); */

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
