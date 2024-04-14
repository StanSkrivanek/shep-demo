<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Waves from '$lib/components/icons/waves.svelte';
	export let data;
	console.log('🚀 ~ data:', data);
	const cities = data.allUpcomingEvents.map(
		(/** @type {{ venue: { city: string; }; }} */ event) => event.venue.city
	);
	const types = data.allUpcomingEvents.map(
		(/** @type {{ event: { type: string; }; }} */ event) => event.event.type
	);
	const uniqueCities = [...new Set(cities)];
	const uniqueTypes = [...new Set(types)];
	let city = '';
	let type = '';

	$: filteredList = data.allUpcomingEvents.filter(
		(/** @type {{ venue: { city: string; }; }} */ event) => {
			// filter by type and or city
			if (city && type) {
				return event.venue.city === city && event.event.type === type;
			} else if (city) {
				return event.venue.city === city;
			} else if (type) {
				return event.event.type === type;
			} else {
				return event;
			}
		}
	);
	let newsletterInput = undefined;
	onMount(() => {
	newsletterInput = document.getElementById('newsletter');

	});
	function signupFocus() {
		newsletterInput.focus();
	}
</script>

<svelte:head>
	<title>Upcoming Events</title>
	<meta name="description" content="Upcoming Events" />
</svelte:head>

<div class="page__c">
	<!-- ADD FILTER BY CITY -->
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Upcoming Courses and Trainings</h1>
				<p>
					Find the upcoming course and training. Simply choose type of course or training and
					location to find the upcoming events near you. If you can't find what you are looking for,
					please sign up to our newsletter to be notified when new courses will open for
					application.
				</p>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/fc66a1c85ad2045f240a63b21454336c00f0a75a-1280x853.webp"
					alt="pinky theme"
				/>
			</div>
		</div>
	</div>

	<div class="filter__w">
		{#if uniqueCities}
			<!-- add radiobuttons to filter `all` `courses` `training`  -->
			<!-- <div class="filter__c"> -->
			<div class="filter">
				<label for="type">Type</label>
				<div class="custom-select">
					<select id="type" bind:value={type}>
						<option value="">All types</option>
						{#each uniqueTypes as type}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="filter">
				<label for="city">Location</label>
				<div class="custom-select">
					<select id="city" bind:value={city}>
						<option value="">All locations</option>
						{#each uniqueCities as city}
							<option value={city}>{city}</option>
						{/each}
					</select>
				</div>
			</div>
			<!-- </div> -->
		{/if}
	</div>

	<main class="container">
		{#if data.allUpcomingEvents.length === 0}
			<div class="no-upcoming__w">
				<div class="message">
					<p>Currently there is not any upcoming course or training open for application</p>
					<p>
						Please check back later or sing up to our newsletter to be notified when new courses
						will open for application
					</p>
				</div>
				<div>
					<p>Sign up to newsletter</p>
					<a href="#newsletter-signup" on:click={() => signupFocus()}>
							<LinkCircle width={48} height={48} />
						</a>
				</div>
			</div>
		{/if}
		{#if filteredList.length === 0}
			<!-- <div class="no-upcoming__w"> -->
			<div class="no-upcoming__w">
				<div class="message">
					<p>We are sorry but there is not any upcoming {type} in {city} at the moment</p>
					<p>
						Please check back later or sing up to our newsletter to be notified when new courses
						will open for application.
					</p>
					<div class="no-upcoming--link__c">
						<a href="#newsletter-signup" on:click={() => signupFocus()}>
							<LinkCircle width={48} height={48} />
						</a>
					</div>
				</div>
			</div>
			<!-- </div> -->
		{/if}
		{#each filteredList as upcoming}
			<div class="card" class:purple={upcoming.globalType === 'training'}>
				<div class="card-subheading">
					<p class:purple-text={upcoming.globalType === 'training'}>{upcoming.event.type}</p>
					<p class:purple-text={upcoming.globalType === 'training'}>{upcoming.venue.city}</p>
				</div>
				<div class="card-header">
					<h3>{upcoming.event.title}</h3>
				</div>
				<div class="card-body">
					<p>{upcoming.event.excerpt}</p>
				</div>
				<div class="card-footer">
					{#if upcoming.globalType === 'course'}
						<a class="btn-link" href="/courses/{upcoming.event.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{/if}
					{#if upcoming.globalType === 'training'}
						<a class="btn-link training" href="/trainings/{upcoming.event.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{/if}
				</div>
				<div class="bg">
					<Waves currentColor="hsl(var(--hsl-pink) / 0.35)" />
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
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 5rem;
	}

	.filter__w {
		display: flex;
		gap: 1rem;
		justify-content: left;
		align-items: center;
		/* 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'. */
		grid-area: 2/1/2/9;
		margin-bottom: 1rem;
	}

	.no-upcoming__w {
		/* position: relative; */
		display: grid;
		grid-column: 2/4;
		justify-content: center;
		align-items: center;
		height: 100%;
		text-align: center;
		color: hsl(var(--hsl-white));
		& p {
			margin: 0;
			text-align: center;
			/* display: block; */
			max-width: 100%;
		}
	}

	.message {
		position: relative;
		background: hsl(var(--hsl-red));
		padding: 2rem;
		border-radius: 0.5rem;
		margin-bottom: 1.6rem;

		& p:first-child {
			font-size: clamp(1.5rem, 4vw, 2rem);
			line-height: 1.2;
			margin-bottom: 1.6rem;
		}
		& svg {
			& circle {
				stroke: hsl(var(--hsl-white)) !important;
			}
			& path {
				fill: hsl(var(--hsl-white)) !important;
			}
		}
	}

	.no-upcoming--link__c {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}

	.card {
		position: relative;
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

		/* border: 1px solid hsl(var(--hsl-gray) / 0.05); */
		border-radius: 0.5rem;
		padding: 1rem;
		background: hsl(var(--hsl-brand) / 0.1);
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		overflow: hidden;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px hsl(var(--hsl-gray) / 0.25);

		& circle {
			stroke: hsl(var(--hsl-brand)) !important;
		}
		& .training {
			& circle {
				stroke: hsl(var(--hsl-purple)) !important;
			}
		}
	}

	.purple {
		background: hsl(var(--hsl-purple) / 0.15);
	}

	.card-header {
		grid-area: header;
		& h3 {
			font-size: 1.3rem;
			color: hsl(var(--hsl-gray));
			/* font-weight: 400; */
			letter-spacing: 0.02rem;
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
			color: hsl(var(--hsl-gray) / 0.8);
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
		align-items: flex-end;
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

	.bg {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		/* & svg {
			width: 100%;
		} */
	}
	select {
		appearance: none;
		/* safari */
		-webkit-appearance: none;
		/* other styles for aesthetics */
		width: 100%;
		font-size: 1.15rem;
		padding: 0.65em 0.65em;
		background-color: hsl(var(--hsl-white));
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		position: relative;
	}
	label {
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-family: var(--ff-fkg-bold);
	}
	.custom-select {
		position: relative;
		min-width: 240px;
		height: 3rem;
		border: 1px solid hsl(var(--hsl-gray));
		border-radius: 0.25rem;
		overflow: hidden;
		background-color: #fff;
		cursor: pointer;
		margin-bottom: 1rem;
	}
	.custom-select::before,
	.custom-select::after {
		--size: 0.5rem;
		position: absolute;
		content: '';
		right: 0.5rem;
		pointer-events: none;
	}

	.custom-select::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid hsl(var(--hsl-gray) / 0.75);
		border-radius: 1rem;
		top: 50%;
		/* background-color: red; */
	}
	@media (max-width: 1280px) {
		.no-upcoming__w {
			grid-column: 1/-1;
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
	}
	@media (max-width: 500px) {
		.filter__w {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.filter {
			margin-bottom: 0;
			width: 100%;
		}
	}
</style>
