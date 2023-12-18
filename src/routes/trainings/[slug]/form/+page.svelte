<script>
    import {source} from '$lib/utils/globalhelpers';
    import {counties} from '$lib/utils/globalhelpers';
	// get local storage
	const local = localStorage.getItem('courseData');
	// console.log("🚀 ~ file: +page.svelte:4 ~ local:", local)
	// parse local storage
	const data = local ? JSON.parse(local) : null;
	console.log('Parsed', data);

</script>

<!-- <h1>FORM</h1> -->
<!-- <pre>
    {JSON.stringify( data, null, 2)}
</pre> -->
{#if data.training}
	<form action="">
		<p>Application form for {data.training.type}</p>
		<h1>{data.training.title}</h1>
		<p>In {data.venue.venue_name}, {data.venue.city}</p>
		<!-- personal data -->
		<div>
			<!-- name  -->
			<label for="name">Name</label>
			<input type="text" id="name" name="name" placeholder="Your full name.." />
			<!-- email -->
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Your email.." />
			<!-- phone -->
			<label for="phone">Phone</label>
			<input type="tel" id="phone" name="phone" placeholder="Your phone number.." />
			<!-- select county -->

			<label for="county">County you live in</label>
			<select name="county" id="county">
				{#each counties as county}
					<option value={county}>{county}</option>
				{/each}
			</select>
			<!-- source -->
			<label for="source">How did you hear about this course?</label>
			<select name="source" id="source">
				{#each source as source}
					<option value={source}>{source}</option>
				{/each}
			</select>
		</div>
		<div>
            <h2>Course is Available</h2>
            {#if data.in_person.is_active === true && data.online.is_active === true}
                <p>Please select checkbox of preferred option <span>(or both if you can attend either one)</span></p>
                {:else}
                <p>Please select checkbox </p>
                {/if}
			{#if data.in_person.is_active === true }
				<label
					>In person
					<input type="checkbox" id="in-person" name="in-person" value="in-person" />
				</label>
				<p>Starting on {data.in_person.start_date}</p>
				<p>Ending on {data.in_person.end_date}</p>
				<!--group-->
                <p>Group {data.in_person.group}</p>
			{/if}
		</div>
		<div>
			{#if data.online.is_active === true }
				<label
					>Online
					<input type="checkbox" id="online" name="online" value="online" />
				</label>
				<p>Starting on {data.online.start_date}</p>
				<p>Ending on {data.online.end_date}</p>
				<!-- group -->
                 <p>Group {data.online.group}</p>
			{/if}
		</div>
		<p>I have read SHEPs privacy guidelines:</p>
		<label for="privacy">
			<input type="checkbox" id="privacy" name="privacy" value="privacy" />
			Yes</label
		>
		<p>
			I give consent to SHEP to hold these details for the purposes of sending information to me on
			this upcoming course:
		</p>
		<label for="consent">
			<input type="checkbox" id="consent" name="consent" value="consent" />
			Yes</label
		>
	</form>
{/if}

<!--   {
  "form": {
    "asset": "https://cdn.sanity.io/files/gkez65br/production/a94fad3c6cc58d07aa40f23bfb3d4399f4afa447.pdf"
  },
  "id": "f51b75a5-f9e9-4281-b4d9-182e5f7f3128",
  "in_person": {
    "start_date": "2024-01-15T11:45:00.000Z",
    "end_date": "2024-03-18T11:45:00.000Z",
    "training_in_ref": "ITN-00600",
    "training_leader": [
      {
        "_key": "833846f1cdf1",
        "_ref": "eb996fa1-c950-46e6-98e6-1677fd7e4c36",
        "_type": "reference"
      }
    ],
    "is_active": true,
    "weekday": "Monday",
    "leader": [
      {
        "name": "Clara Kerrigan"
      }
    ],
    "group": "1"
  },
  "online": {
    "training_in_ref": "ITN-000868",
    "leader": [
      {
        "name": "Andrea McSweeney "
      }
    ],
    "training_leader": [
      {
        "_ref": "0ea99800-8984-4295-b8b2-2ddd91a57c7b",
        "_type": "reference",
        "_key": "09b9c3c93712"
      }
    ],
    "is_active": true,
    "weekday": "Thursday",
    "group": "1",
    "start_date": "2024-01-18T13:00:00.000Z",
    "end_date": "2024-03-28T13:00:00.000Z"
  },
  "training": {
    "title": "SHEP Certificate in Facilitation",
    "type": "Facilitator Training",
    "excerpt": "he SHEP Certificate in Facilitation Course is an intermediate training in group-work facilitation, intended for those who have completed foundation training in social and health education and who now wish to begin training to support other people in their development.",
    "slug": {
      "current": "shep-certificate-in-facilitation",
      "_type": "slug"
    }
  },
  "venue": {
    "venue_name": "Shine Centre",
    "city": "Midleton",
    "slug": {
      "current": "shine-centre",
      "_type": "slug"
    }
  }
} -->
