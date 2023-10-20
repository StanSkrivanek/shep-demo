<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	// console.log(data.allCourses);
	// const openCourse = data.allOpenCourses;
	const { course, online, in_person, venue, form } = data.allCourses;
</script>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>All our courses and trainings for Mental Health & Wellbeing</h1>
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
	<h1 class="separator-heading">Courses</h1>
	<main class="container">
		{#each data.allCourses as course}
			<div class="card">
				<div class="card-subheading">
					<p>{course.type}</p>
					<!-- <p>{course.venue.city}</p> -->
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
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 1rem;
			color: var(--gray-3);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;

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
