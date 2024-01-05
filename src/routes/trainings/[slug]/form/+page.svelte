<script>
	// @ts-nocheck

	import { singleTrainingStore } from '$lib/stores/forms';
	import { formatTime12, monthNameDateYear, monthYear } from '$lib/utils/datehelpers';
	import { counties, source } from '$lib/utils/globalhelpers';
	import { courseFormSchema } from '$lib/utils/zodSchemas';
	import { onMount } from 'svelte';

	export let form;
	// console.log('🚀 ~ file: +page.svelte:10 ~ form:', form);
	$: data = form?.data;
	$: errors = {} || form?.errors;
	$: console.log('🚀 ~ file: +page.svelte:14 ~ errors:', errors);
	// localStorage.setItem('singleTrainingStore', JSON.stringify(form));
	let courseData = $singleTrainingStore;

	// Toggle value for checkbox input
	function eventHandler(e) {
		canAttend = e.target.checked
			? [...canAttend, e.target.name]
			: canAttend.filter((name) => name !== e.target.name);
		return (e.target.value = e.target.checked ? 'yes' : 'no');
	}

	onMount(() => {
		// if courseData is empty object get data from local storage
		if (Object.keys(courseData).length === 0) {
			courseData = JSON.parse(localStorage.getItem('singleTrainingStore'));
		}
	});
</script>

<div class="page__c">
	{#if courseData.training}
		<form method="POST">
			<!-- <form method="POST" on:submit|preventDefault={submitHandler()}> -->
			<div class="form-header">
				<p>Application form for {courseData.training.type}</p>
				<h1>{courseData.training.title}</h1>
				<p>
					In <b>{courseData.venue.venue_name}</b>, {courseData.venue.city} starting
					<b>{monthYear(courseData.in_person.start_date)}<b /></b>
				</p>
			</div>
			<!-- personal coursedata -->
			<div class="personal-data">
				<h2>Personal data <span><i>( mandatory )</i></span></h2>
				<!-- name  -->

				<div class="form-group">
					<div class="input-group">
						<label for="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your full name.."
							value={form?.data?.name || ''}
							on:blur={(e) => {
								// console.log(courseFormSchema.pick({ name: true }).parse({ name: e.target.value }))
								try {
									// check  value of input field against schema
									courseFormSchema.pick({ name: true }).parse({ name: e.target.value });
									// if errors update errors
									errors = form?.errors;
									// if no errors set data to form
									data = { ...data, name: e.target.value };
								} catch (error) {
									// if errors flatten errors
									const { fieldErrors } = error.flatten();
									// update errors
									errors = fieldErrors;
								}
							}}
						/>
						{#if errors?.name}
							<span class="form-err-msg">{errors.name[0]}</span>
						{/if}
					</div>
					<!-- email -->
					<div class="input-group">
						<label for="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email.."
							value={form?.data?.email || ''}
						/>
					</div>
					<!-- phone -->
					<div class="input-group">
						<label for="phone">Phone</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Your phone number.."
							value={form?.data?.phone || ''}
						/>
					</div>
					<!-- address -->
					<div class="input-group">
						<label for="county">County you live in <span><i>( optional )</i></span></label>
						<select name="county" id="county">
							<option disabled selected value="">-- Select an Option --</option>
							{#each counties as county}
								<option value={county}>{county}</option>
							{/each}
						</select>
					</div>
					<!-- Medical needs -->
					<div class="input-group">
						<label for="medicalNeeds"
							>Please specify if there are any special or medical needs that we should be aware of
							for practical purposes <span><i>( optional )</i></span></label
						>
						<textarea
							id="medical-needs"
							name="medicalNeeds"
							placeholder="Please specify or leave empty"
							cols="30"
							rows="10"
							value={form?.data?.medicalNeeds || ''}
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
							value={form?.data?.emergency || ''}
						/>
						<label for="emergencyPhone">Emergency contact phone number</label>
						<input
							type="tel"
							id="emergency-phone"
							name="emergencyPhone"
							placeholder="Emergency contact phone number.."
							value={form?.data?.emergencyPhone || ''}
						/>
					</div>
				</div>
			</div>
			<div class="additional-data">
				<h2>Additional data <span><i>( optional )</i></span></h2>
				<!-- source -->
				<div class="form-group">
					<div class="input-group">
						<label for="source">How did you hear about this course?</label>
						<select name="source" id="source">
							<option disabled selected value="">-- Select an Option --</option>
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
						<input
							type="text"
							id="reference"
							name="reference"
							placeholder="person name"
							value={form?.data?.reference || ''}
						/>
					</div>
					<div class="input-group">
						<label for="why">Why are you applying for the course?</label>
						<textarea
							id="why"
							name="why"
							cols="30"
							rows="10"
							placeholder="Why are you applying for the course?"
							value={form?.data?.why || ''}
						/>
					</div>
				</div>

				<!-- <input type="text" id="medical-needs" name="medical-needs" placeholder="Please specify if any special/medical needs that we should be aware of for practical purposes" /> -->
			</div>
			<div class="attending-opt">
				<h2>
					Attending options
					{#if courseData.in_person.is_active === true && courseData.online.is_active === true}
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
						{#if courseData.in_person?.is_active === true}
							<tr>
								<td>
									<label for="inPerson" class="ticker">
										<input
											type="checkbox"
											id="in-person"
											name="inPerson"
											value="no"
											on:change={eventHandler}
										/>
										In person</label
									>
								</td>
								<!-- <td>{coursedata.in_person.group}</td> -->
								<td>{courseData.in_person.weekday}</td>
								<td>{monthNameDateYear(courseData.in_person.start_date)}</td>
								<td>{monthNameDateYear(courseData.in_person.end_date)}</td>
								<td>{formatTime12(courseData.in_person.start_date)}</td>
								<td>{formatTime12(courseData.in_person.end_date)}</td>
								<!-- <td>
									{#each courseData.in_person.leader as trainer}
										<p>{trainer.name}</p>
									{/each}
								</td> -->
							</tr>
						{/if}
						<tr />
						{#if courseData.online?.is_active === true}
							<tr>
								<td
									><label for="online" class="ticker">
										<input
											type="checkbox"
											id="online"
											name="online"
											value="no"
											on:change={eventHandler}
										/>
										Online</label
									>
								</td>
								<!-- <td>{courseData.online.group}</td> -->
								<td>{courseData.online.weekday}</td>
								<td>{monthNameDateYear(courseData.online.start_date)}</td>
								<td>{monthNameDateYear(courseData.online.end_date)}</td>
								<td>{formatTime12(courseData.online.start_date)}</td>
								<td>{formatTime12(courseData.online.end_date)}</td>
								<!-- <td>
									{#each courseData.online.leader as trainer}
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
					<input type="checkbox" id="privacy" name="privacy" value="yes" required />
					Yes, I have read SHEPs privacy guidelines and agree to them
				</label>
				<label for="consent">
					<input type="checkbox" id="consent" name="consent" value="yes" required />
					Yes, I give consent to SHEP to hold these details for the purposes of sending information to
					me on this upcoming course and other SHEP courses and events.
				</label>
				<!-- <input type="text" id="coursedata" name="coursedata" value={coursedata.id} > -->
			</div>
			<div hidden>
				<!-- NOTE:
				Send open course ID to form and use it to get course data venue, course name etc. from DB
				
				-->
				<!-- <input type="hidden" name="courseId" value={courseData.id} /> -->
				<input type="hidden" name="courseId" value={courseData.ref} />
				<input type="hidden" name="courseCity" value={courseData.venue.city} />
				<input type="hidden" name="courseVenue" value={courseData.venue.venue_name} />
				<input type="hidden" name="courseTitle" value={courseData.training.title} />
				<input
					type="hidden"
					name="course_start"
					value={monthYear(courseData.in_person.start_date)}
				/>
				<input type="hidden" name="courseGroup" value={courseData.online.group} />
				<!-- <input type="hidden" name="courseData" value={courseData} /> -->
			</div>
			<div class="submit">
				<button type="submit">Submit</button>
			</div>
		</form>
	{/if}
</div>

<!-- TODO: 1) validate inputs with ZOD -->
<!-- TODO: 2) send data with action -->

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
				& .ticker {
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

	.form-err-msg {
		color: var(--shep-red);
		font-size: var(--xs);
		font-weight: 400;
	}
</style>
