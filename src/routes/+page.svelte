<script>
	import { formatDate, formatTime, formatDateMonthName } from '$lib/utils/datehelpers.js';
	export let data;
	// console.log(data.allOpenCourses);
	// const openCourse = data.allOpenCourses;
	const { course, online, in_person, venue, form } = data.allOpenCourses;

</script>

<div class="conetnt">
	<h1>Open Courses</h1>
	{#each data.allOpenCourses as course}
		<p>{formatDateMonthName(course.in_person.start_date)}</p>
		<h3>{course.course.title}</h3>
		<p>{course.venue.venue_name}</p>
		<p>{course.course.type}</p>
		{#if course.in_person.is_active}
			<div>
				<h4>In Person</h4>
				<p>Group: {course.in_person.group}</p>
				<p>Weekday: {course.in_person.weekday}</p>
				<p>Starts: {formatDateMonthName(course.in_person.start_date)}</p>
				<p>Ends:{formatDateMonthName(course.in_person.end_date)}</p>
				<p>
					From: {formatTime(course.in_person.start_date)}
				</p>
				<p>
					To: {formatTime(course.in_person.end_date)}
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
		{/if}
		{#if course.online.is_active}
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
					From: {formatTime(course.online.start_date)}
				</p>
				<p>
					To: {formatTime(course.online.end_date)}
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
		{/if}
	{/each}
	<!-- <PortableText
		value={data.venues[0].content}
		onMissingComponent={false}
		components={{
			block: {
				
				// blockquote: Quote,
				h1: CustomHeading,
				h2: CustomHeading,
				h3: CustomHeading,
				h4: CustomHeading,
				h5: CustomHeading,
				normal: TextRte
			},
			types: {
				image: ImageRte
			}
		}}
	/> -->
</div>

<style>
	.conetnt {
		max-width: 900px;
		margin: 0 auto;
		/* display:flex; */
		/* flex-direction: column; */
		/* justify-content: center; */
		/* align-items: center; */
	}
</style>
