<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/ToastStore';
	import { singleEventStore } from '$lib/stores/forms';
	import { formatTime12, monthNameDateYear, monthYear } from '$lib/utils/datehelpers';
	import { counties, source } from '$lib/utils/globalhelpers';
	import { onMount } from 'svelte';

	// variable form contain the form `data` and `issues` from validation
	export let form;

	let courseData = $singleEventStore;

	$: isSending = false;

	$: if (form?.success) {
		toast.send({
			msg: 'Thank you for your application, we will be in contact soon',
			type: 'success'
		});

		goto('/upcoming');
	}
	let canAttend = [];

	/**
	 * @param {{ target: { checked: any; name: any; value: string; }; }} e
	 */
	function eventHandler(e) {
		canAttend = e.target.checked
			? [...canAttend, e.target.name]
			: canAttend.filter((name) => name !== e.target.name);
		return (e.target.value = e.target.checked ? 'yes' : 'no');
	}

	onMount(() => {
		// if courseData is empty object get data from local storage
		// need for refreshing form page without losing data
		if (Object.keys(courseData).length === 0) {
			courseData = JSON.parse(localStorage.getItem('singleEventStore'));
		}
	});
</script>

<svelte:head>
	<title>Application form</title>
	<meta name="description" content="Application form for upcoming courses" />
</svelte:head>

<div class="page__c">
	

	{#if courseData.event}
		<form
			method="POST"
			action="?/sendToGoogle"
			use:enhance={() => {
				isSending = true;
				if (form?.success) isSending = false;
			}}
		>
			<div class="form-header">
				<p>Application form for {courseData.event.type}</p>
				<h1>{courseData.event.title}</h1>
				<p>
					In <b>{courseData.venue.city} - {courseData.venue.venue_name}</b> starting
					<b>{monthYear(courseData.in_person.start_date)}<b /></b>
				</p>
			</div>
			<!-- personal coursedata -->
			<div class="personal-data">
				<h2>Personal data <span><i>( mandatory )</i></span></h2>
				<!-- name  -->
				<div class="form-group">
					<div class="row">
						<div class="input-group">
							<label for="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your full name.."
								value={form?.data?.name ?? ''}
								required
							/>
							{#if form?.errors?.name}
								<span class="form-err-msg">{form?.issues.message[0]}</span>
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
								value={form?.data?.email ?? ''}
								reqquired
							/>
						</div>
					</div>
					<!-- phone -->
					<div class="row">
						<div class="input-group">
							<label for="county">County you live in <span><i>( optional )</i></span></label>
							<select name="county" id="county">
								<option disabled selected value="">-- Select an Option --</option>
								{#each counties as county}
									<option value={county}>{county}</option>
								{/each}
							</select>
						</div>
						<div class="input-group">
							<label for="phone">Phone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Your phone number.."
								value={form?.data?.phone ?? ''}
								required
							/>
						</div>
					</div>
					<!-- Medical needs -->
					<div class="input-group">
						<label for="medicalNeeds"
							>Please specify if there are any special or medical needs that we should be aware of
							for practical purposes</label
						>
						<textarea
							id="medicalNeeds"
							name="medicalNeeds"
							placeholder="Please specify or leave empty"
							cols="30"
							rows="10"
							value={form?.data?.medicalNeeds ?? ''}
						/>
					</div>
					<div class="row">
						<div class="input-group">
							<!-- emergency contact -->
							<label for="emergency">Emergency contact</label>
							<input
								type="text"
								id="emergency"
								name="emergency"
								placeholder="Emergency contact name.."
								value={form?.data?.emergency ?? ''}
							/>
						</div>
						<div class="input-group">
							<label for="emergencyPhone">Emergency contact phone number</label>
							<input
								type="tel"
								id="emergencyPhone"
								name="emergencyPhone"
								placeholder="Emergency contact phone number.."
								value={form?.data?.emergencyPhone ?? ''}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="additional-data">
				<h2>Additional data <span><i>( optional )</i></span></h2>
				<!-- source -->
				<div class="form-group">
					<div class="row">
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
								>If referred to the course by another person please specify?<span
									><i>( optional )</i></span
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
			</div>
			<div class="attending-opt">
				<h2>
					Attending options
					{#if courseData.in_person.is_active === true && courseData.online.is_active === true}
						<span>
							<i
								>Please select preferred option <span>( or both if you can attend either one )</span
								></i
							>
						</span>
					{:else}
						<span><i>(Please select option)</i></span>
					{/if}
				</h2>
				<!-- table -->
				<div class="table__w">
					<table>
						<thead>
							<tr>
								<th>Option</th>

								<th>Weekday</th>
								<th>Starts</th>
								<th>Ends</th>
								<th>From</th>
								<th>To</th>
							</tr>
						</thead>
						<tbody>
							{#if courseData.in_person?.is_active === true}
								<tr>
									<td>
										<label for="inPerson" class="ticker">
											<input
												type="checkbox"
												id="inPerson"
												name="inPerson"
												value="no"
												on:change={eventHandler}
											/>
											In person</label
										>
									</td>

									<td>{courseData.in_person.weekday}</td>
									<td>{monthNameDateYear(courseData.in_person.start_date)}</td>
									<td>{monthNameDateYear(courseData.in_person.end_date)}</td>
									<td>{formatTime12(courseData.in_person.start_date)}</td>
									<td>{formatTime12(courseData.in_person.end_date)}</td>
								</tr>
							{/if}

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

									<td>{courseData.online.weekday}</td>
									<td>{monthNameDateYear(courseData.online.start_date)}</td>
									<td>{monthNameDateYear(courseData.online.end_date)}</td>
									<td>{formatTime12(courseData.online.start_date)}</td>
									<td>{formatTime12(courseData.online.end_date)}</td>
								</tr>
							{/if}
						</tbody>
					</table>
				</div>
				{#if form?.errors?.inPerson}
					<span class="form-err-msg">{form?.errors.inPerson[0]}</span>
				{/if}
			</div>
			<div class="agreement">
				<label for="privacy">
					<input type="checkbox" id="privacy" name="privacy" value="yes" required />
					<p>Yes, I have read SHEPs privacy guidelines and agree to them</p>
				</label>
				<label for="consent">
					<input type="checkbox" id="consent" name="consent" value="yes" required />
					<p>
						Yes, I give consent to SHEP to hold these details for the purposes of sending
						information to me on this upcoming course and other SHEP courses and events.
					</p>
				</label>
			</div>
			<div hidden>
				<input type="hidden" name="courseId" value={courseData.ref} />
				<input type="hidden" name="courseCity" value={courseData.venue.city} />
				<input type="hidden" name="courseVenue" value={courseData.venue.venue_name} />
				<input type="hidden" name="courseTitle" value={courseData.event.title} />
				<input
					type="hidden"
					name="course_start"
					value={monthYear(courseData.in_person.start_date)}
				/>
				<input type="hidden" name="courseGroup" value={courseData.online.group} />
				<input type="hidden" name="sheetID" value={courseData.sheetID} />
				<input type="hidden" name="refName" value={courseData.refName} />
			</div>
			<div class="submit">
				<button type="submit" disabled={isSending}>
					{isSending ? 'Sending...' : 'Send'}
				</button>
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
		border-radius: 0.5rem;
		background: hsl(var(--hsl-brand) / 0.15);
		margin-bottom: 5rem;
	}
	form {
		padding-bottom: 2rem;
		& .form-header {
			padding: 1rem;
			margin-bottom: 1rem;
			border-radius: 0.25rem;
		}
		& h1 {
			margin-bottom: 0.25rem;
			color: hsl(var(--hsl-gray));
		}
		& h2 {
			font-family: var(--ff-fkg-regular);
			font-size: 1.5rem;
			margin-bottom: 1rem;
			padding: 1rem;
			background-color: hsl(var(--hsl-brand) / 0.15);
			border-radius: 0.25rem;
		}
		& p {
			margin: 0.25rem;
			& b {
				color: hsl(var(--hsl-gray));
			}
		}
		& p:first-child {
			margin-bottom: 1rem;
		}
		& span i {
			font-size: var(--sm);
			font-family: var(--ff-fkg-regular);
			color: hsl(var(--hsl-gray) / 0.5);
		}
		& .personal-data,
		& .additional-data,
		& .form-group {
			display: flex;
			flex-direction: column;
		
			margin-bottom: 1rem;
			& .input-group {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.5rem;
				width: 100%;
				& label {
					font-size: 1.2rem;
					margin-bottom: 0.25rem;
				}
				& input,
				textarea,
				select {
					padding: 0.5rem;
					border: 1px solid hsl(var(--hsl-gray) / 0.25);
					border-radius: 0.5rem;
					font-size: 1.5rem;
					color: hsl(var(--hsl-gray));
					
					margin-bottom: 1rem;
				}
				& textarea {
					resize: none;
					height: 10rem;
				}
			}
		}
		& .row {
			display: flex;
			gap: 1rem;
		}
		/* table */
		& .attending-opt {
			& table {
				width: 100%;
				border-collapse: collapse;
				& thead {
					& tr {
						& th {
							padding: 0.5rem;
							border-bottom: 1px solid hsl(var(--hsl-gray) / 0.25);
							font-size: 1.2rem;
						
							text-align: left;
						}
					}
				}
				& tbody {
					& tr {
						& td {
							padding: 0.5rem;
							border-bottom: 1px solid hsl(var(--hsl-gray) / 0.25);
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
			& button:disabled {
				cursor: not-allowed;
				background: hsl(var(--hsl-gray) / 0.5);
				border: transparent;
				opacity: 0.5;
			}
		}

		& .agreement {
			display: flex;
			flex-direction: column;
			padding: 3rem 0.5rem;
			& label {
				font-size: var(--sm);
				
				margin-bottom: 0.25rem;
				position: relative;
				cursor: pointer;
				& p {
					max-width: 100vw;
				}
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
			background: white;
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
			border: calc(var(--unit) * 0.4) solid hsl(var(--hsl-blue));
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
				background-color: hsl(var(--hsl-blue));
				border: none;
				border-radius: 0.5rem;
				font-size: 1.5rem;
				font-weight: 700;
				color: hsl(var(--hsl-white));
				cursor: pointer;
			}
		}
	}

	.form-err-msg {
		color: hsl(var(--hsl-red));
		font-size: var(--xs);
		font-weight: 400;
	}
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		box-shadow: none;

		background-image: none;
		background-color: transparent;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 400;
		color: hsl(var(--hsl-gray));
		margin-bottom: 1rem;
		padding: 0.5rem;
		border: 1px solid hsl(var(--hsl-gray) / 0.25) !important;
		border-radius: 0.5rem;
	}

	/* custom select arrow */
	select {
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='var(--fc-main)'><polygon points='0,0 16,0 8,16'/></svg>");
		background-repeat: no-repeat;
		background-position:
			right 0.7em top 50%,
			0 0;
		background-size:
			0.65em auto,
			100%;
	}

	.table__w {
		overflow-x: auto;
	}

	.agreement label {
		display: flex;
		padding-bottom: 1rem;
	}
	
	/* MediaQueries */

	@media (max-width: 768px) {
		.row {
			flex-direction: column;
		}
		td {
			text-wrap: nowrap;
		}
		.agreement label {
			display: flex;
			padding-bottom: 1rem;
		}
		.agreement label p {
			margin-block-start: -0.25rem;
		}
	}
</style>
