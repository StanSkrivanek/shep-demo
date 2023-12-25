<script>
	import { formatTime12, monthNameDateYear, monthYear } from '$lib/utils/datehelpers';
	import { counties, source } from '$lib/utils/globalhelpers';
	// get local storage
	const local = localStorage.getItem('courseData');
	// parse local storage
	const data = local ? JSON.parse(local) : null;
	console.log('Parsed', data);
</script>

<!-- <h1>FORM</h1> -->
<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->
<div class="page__c">
	{#if data.training}
		<form action="">
			<div class="form-header">
				<p>Application form for {data.training.type}</p>
				<h1>{data.training.title}</h1>
				<p>
					In <b>{data.venue.venue_name}</b>, {data.venue.city} starting
					<b>{monthYear(data.in_person.start_date)}<b /></b>
				</p>
			</div>
			<!-- personal data -->
			<div class="personal-data">
				<h2>Personal data <span>(mandatory)</span></h2>
				<!-- name  -->
				<div class="form-group">
					<div class="input-group">
						<label for="name">Name</label>
						<input type="text" id="name" name="name" placeholder="Your full name.." />
					</div>
					<!-- email -->
					<div class="input-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Your email.." />
					</div>
					<!-- phone -->
					<div class="input-group">
						<label for="phone">Phone</label>
						<input type="tel" id="phone" name="phone" placeholder="Your phone number.." />
					</div>
					<!-- address -->
					<div class="input-group">
						<label for="county">County you live in</label>
						<select name="county" id="county">
							{#each counties as county}
								<option value={county}>{county}</option>
							{/each}
						</select>
					</div>
					<!-- Medical needs -->
					<div class="input-group">
						<label for="medical-needs"
							>Please specify if any special/medical needs that we should be aware of for practical
							purposes</label
						>
						<textarea
							id="medical-needs"
							name="medical-needs"
							placeholder="Please specify if any special/medical needs that we should be aware of for practical purposes"
							cols="30"
							rows="10"
						/>
					</div>
					<div class="input-group">
						<!-- emergency contact -->
						<label for="emergency">Emergency contact</label>
						<input
							type="text"
							id="emergency"
							name="emergency"
							placeholder="Emergency contact name.."
						/>
						<label for="emergency-phone">Emergency contact phone number</label>
						<input
							type="tel"
							id="emergency-phone"
							name="emergency-phone"
							placeholder="Emergency contact phone number.."
						/>
					</div>
				</div>
			</div>
			<div class="additional-data">
				<h2>Additional data</h2>
				<!-- source -->
				<div class="form-group">
					<div class="input-group">
						<label for="source">How did you hear about this course?</label>
						<select name="source" id="source">
							{#each source as source}
								<option value={source}>{source}</option>
							{/each}
						</select>
					</div>

					<!-- reference -->
					<div class="input-group">
						<label for="reference"
							>If referred to the course by another person please specify?<span>(optional)</span
							></label
						>
						<input type="text" id="reference" name="reference" placeholder="person name" />
					</div>
					<div class="input-group">
						<label for="why">Why are you applying for the course?</label>
						<textarea
							id="why"
							name="why"
							cols="30"
							rows="10"
							placeholder="Why are you applying for the course?"
						/>
					</div>
				</div>

				<!-- <input type="text" id="medical-needs" name="medical-needs" placeholder="Please specify if any special/medical needs that we should be aware of for practical purposes" /> -->
			</div>
			<div class="attending-opt">
				<h2>
					Attending options
					{#if data.in_person.is_active === true && data.online.is_active === true}
						<span>
							Please select preferred option <span>( or both if you can attend either one )</span>
						</span>
					{:else}
						<span>( Please select option )</span>
					{/if}
				</h2>
				<!-- table -->
				<table>
					<thead>
						<tr>
							<th>Option</th>
							<!-- <th>Group</th> -->
							<th>Weekday</th>
							<th>Starts</th>
							<th>Ends</th>
							<th>From</th>
							<th>To</th>
							<!-- <th>Trainers</th> -->
						</tr>
					</thead>
					<tbody>
						{#if data.in_person.is_active === true}
							<tr>
								<td>
									<label for="in-person" class="thicker">
										<input type="checkbox" id="in-person" name="in-person" value="in-person" />
										In person</label
									>
								</td>
								<!-- <td>{data.in_person.group}</td> -->
								<td>{data.in_person.weekday}</td>
								<td>{monthNameDateYear(data.in_person.start_date)}</td>
								<td>{monthNameDateYear(data.in_person.end_date)}</td>
								<td>{formatTime12(data.in_person.start_date)}</td>
								<td>{formatTime12(data.in_person.end_date)}</td>
								<!-- <td>
									{#each data.in_person.leader as trainer}
										<p>{trainer.name}</p>
									{/each}
								</td> -->
							</tr>
						{/if}
						<tr />
						{#if data.online.is_active === true}
							<tr>
								<td
									><label for="online" class="thicker">
										<input type="checkbox" id="online" name="online" value="online" />
										Online</label
									>
								</td>
								<!-- <td>{data.online.group}</td> -->
								<td>{data.online.weekday}</td>
								<td>{monthNameDateYear(data.online.start_date)}</td>
								<td>{monthNameDateYear(data.online.end_date)}</td>
								<td>{formatTime12(data.online.start_date)}</td>
								<td>{formatTime12(data.online.end_date)}</td>
								<!-- <td>
									{#each data.online.leader as trainer}
										<p>{trainer.name}</p>
									{/each}
								</td> -->
							</tr>
						{/if}
					</tbody>
				</table>
			</div>
			<div class="agreement">
				<label for="privacy">
					<input type="checkbox" id="privacy" name="privacy" value="privacy" />
					Yes, I have read SHEPs privacy guidelines and agree to them
				</label>
				<!-- </div> -->
				<!-- <div class="agreement"> -->
				<label for="consent">
					<input type="checkbox" id="consent" name="consent" value="consent" />
					Yes, I give consent to SHEP to hold these details for the purposes of sending information to
					me on this upcoming course and other SHEP courses and events.
				</label>
			</div>
			<div class="submit">
				<button type="submit">Submit</button>
			</div>
		</form>
	{/if}
</div>

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

<style>
	.page__c {
		display: flex;
		flex-direction: column;
		background-color: var(--fc-white);
		/* padding: 1rem; */
	}
	form {
		padding-bottom: 2rem;
		& .form-header {
			padding: 1rem;
			margin-bottom: 1rem;
		}
		& h1 {
			margin-bottom: 0.25rem;
		}
		& h2 {
			font-size: 1.5rem;
			font-weight: 700;
			margin-bottom: 1rem;
			padding: 1rem;
			background-color: var(--gray-2);
		}
		& p {
			margin: 0.25rem;
		}
		& p:first-child {
			margin-bottom: 1rem;
		}
		& span {
			font-size: var(--sm);
			font-weight: 400;
		}
		& .personal-data,
		& .additional-data,
		& .form-group {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			margin-bottom: 1rem;
			& .input-group {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.5rem;
				& label {
					font-size: 1.2rem;
					font-weight: 600;
					margin-bottom: 0.25rem;
				}
				& input,
				textarea,
				select {
					padding: 0.5rem;
					border: 1px solid var(--gray-2);
					border-radius: 0.5rem;
					font-size: 1.5rem;
					font-weight: 400;
					color: var(--fc-main);
					margin-bottom: 1rem;
				}
				& textarea {
					resize: none;
					height: 10rem;
				}
			}
		}
		/* table */
		& .attending-opt {
			padding: 1rem;
			& table {
				width: 100%;
				border-collapse: collapse;
				& thead {
					& tr {
						& th {
							padding: 0.5rem;
							border-bottom: 1px solid var(--gray-2);
							font-size: 1.2rem;
							font-weight: 600;
							text-align: left;
						}
					}
				}
				& tbody {
					& tr {
						& td {
							padding: 0.5rem;
							border-bottom: 1px solid var(--gray-2);
							font-size: 1.2rem;
							font-weight: 400;
							text-align: left;
						}
					}
				}
				& .thicker {
					font-weight: 600;
				}
			}
		}

		& .agreement {
			display: flex;
			flex-direction: column;
			padding: 3rem 1.5rem;
			& label {
				font-size: var(--sm);
				font-weight: 600;
				margin-bottom: 0.25rem;
				position: relative;
				cursor: pointer;
			}
		}

		/* custom checkbox */
		& input[type='checkbox'] {
			--unit: 0.6rem;
			position: relative;
			appearance: none;
			font-size: inherit;
			border: calc(var(--unit) * 0.3) solid;
			padding: var(--unit);
			margin: 0 calc(var(--unit) / 2) 0 0;
			border-radius: calc(var(--unit) * 0.3);
			background: var(--bg);
			line-height: 1;
			vertical-align: middle;
			outline: none;
			perspective: 25;

			/* at least make checkbox bigger in Firefox */
			width: calc(var(--unit) * 2);
			height: calc(var(--unit) * 2);
		}

		& input[type='checkbox']:checked::after {
			content: '';
			position: absolute;
			top: 40%;
			left: 60%;
			border: calc(var(--unit) * 0.4) solid var(--shep-blue);
			border-top-width: 0;
			border-right-width: 0;
			/* border-radius: calc(var(--unit) * 0.3);
			box-shadow: 0 0.5em 0.5em 0 rgba(0, 0, 0, 0.3); */
			transform: translate(-50%, -50%) rotate(-45deg);
			width: calc(var(--unit) * 1.8);
			height: calc(var(--unit) * 0.9);
		}

		& .submit {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 2rem;
			& button {
				padding: 1rem 6rem;
				background-color: var(--shep-blue);
				border: none;
				border-radius: 1rem;
				font-size: 1.5rem;
				font-weight: 700;
				color: var(--fc-white);
				cursor: pointer;
			}
		}
	}
</style>
