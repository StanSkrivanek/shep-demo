<script>
	// @ts-nocheck

	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data;
	console.log('🚀 ~ data:', data);
	const cities = data.allUpcomingEvents.map(
		(/** @type {{ venue: { city: string; }; }} */ event) => event.venue.city
	);
	const uniqueCities = [...new Set(cities)];
	let city = '';
	// $: console.log('🚀 ~ let city:', city);

	/**
	 * @param {string} city
	 */
	// function filterByCity(city) {
		// console.log('🚀 ~ city:', city);
		// city = city;
	// }
	$: filteredList = data.allUpcomingEvents.filter(
		(/** @type {{ venue: { city: string; }; }} */ event) => {
			if (city === '') return true;
			return event.venue.city === city;
		}
	);
	// $: console.log('🚀 ~ filteredList:', filteredList);
</script>

<div class="page__c">
	<!-- ADD FILTER BY CITY -->

	{#if uniqueCities}
		<div class="filter">
			<label for="city">Filter by City</label>
			<div class="custom-select">
				<select id="city" bind:value={city}>
					<option value="">All</option>
					{#each uniqueCities as city}
						<option value={city}>{city}</option>
					{/each}
				</select>
			</div>
		</div>
	{/if}

	<main class="container">
		{#each filteredList as upcoming}
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
					{#if upcoming.globalType === 'course'}
						<a class="btn-link" href="/courses/{upcoming.event.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{/if}
					{#if upcoming.globalType === 'training'}
						<a class="btn-link" href="/trainings/{upcoming.event.slug.current}">
							<LinkCircle width={48} height={48} />
						</a>
					{/if}


					<!-- <a class="btn-link" href="/courses/{upcoming.event.slug.current}">
						<LinkCircle width={48} height={48} />
					</a> -->
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(300px,1fr));
		/* TODO: Refactor `min-heigh` to have footer on bottom if no upcoming or only 1row */
		min-height: 25vh;
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

	select {
		appearance: none;
		/* safari */
		-webkit-appearance: none;
		/* other styles for aesthetics */
		width: 100%;
		font-size: 1.15rem;
		padding: 0.675em 6em 0.675em 1em;
		background-color: #fff;
		border: 1px solid #caced1;
		border-radius: 0.25rem;
		color: #000;
		cursor: pointer;
		position: relative;
	}

	.custom-select {
		position: relative;
		min-width: 300px;
		height: 3rem;
		border: 1px solid var(--shep-orange);
		border-radius: 0.25rem;
		overflow: hidden;
		background-color: #fff;
		cursor: pointer;
		/* display: flex; */
		margin-bottom: 1rem;

	}
	.custom-select::before,
	.custom-select::after {
		--size: 0.5rem;
		position: absolute;
		content: '';
		right: .5rem;
		pointer-events: none;
	}

	/* .custom-select::before {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-bottom: var(--size) solid rgb(231, 139, 0);
		border-radius: 0.25rem;
		top: 10%;
	} */
	
	.custom-select::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid var(--shep-orange);
		border-radius: 1rem;
		top: 50%;
	}

	/* Media Quiries */
	/* @media (max-width: 996px) {
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
	} */
</style>
