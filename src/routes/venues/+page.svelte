<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	export let data
	// console.log('🚀 ~ file: +page.svelte:3 ~ data:', data);
	// const { venue_name } = data.venues;
</script>

<div class="content">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>SHEP courses are held in local community facilities</h1>
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
	<h1>Our Partners</h1>
	{#each data.venues as venue}
		<div class="container">
			<div class="venue">
				<div class="data">
					<div class="data-header">
						<h2>{venue.venue_name}</h2>
						<p class="sm">{venue.city}</p>
					</div>
					<div class="address">
						<p>{venue.address_1}</p>
						{#if venue.address_2 == '' || venue.address_2 == null}
							<p>-</p>
						{:else}
							<p>{venue.address_2}</p>
						{/if}
						<p>{venue.eircode}</p>
					</div>
				</div>
				<div class="excerpt">
					<p>{venue.excerpt}</p>
				</div>
				<a class="link" href={venue.website} target="_blank">
					<div class="link-desc__w">
						<p class="small-title">Open Courses</p>
						<!-- <p>For more informations about us please visit our website</p> -->
						<p>See all SHEP courses open for application in our facilities</p>
					</div>
					<div class="link-icon">
						<LinkCircle width={60} height={60} />
					</div>
				</a>
			</div>
		</div>
		<!-- <img src={venue.logo} alt=""> -->
	{/each}
</div>

<style>
	/* TODO: style use SUBGRID that is not supported in older browsers */
	.content {
		max-width: 1680px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 0.5fr 0.5fr 1fr 1fr 0.5fr 0.5fr 1fr;
		/* padding: 1rem; */
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
		/* padding: 1rem; */
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
		/* max-height: max-content; */
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
		/* grid-row: 1/2; */
		/* padding: 1rem; */
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

	a {
		padding: 1rem;
		text-decoration: none;
		color: var(--text-base);
		font-size: 1rem;
		border: 2px solid var(--gray-1);
		border-radius: 1rem;
		transition: all 0.3s ease-in-out;
		&:hover {
			text-decoration: none;
			color: var(--text-base);
			background: var(--blue-light);
			border: 2px solid var(--blue-sha-2);
		}
	}
	.container {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		/* display: flex;
		flex-direction: column;*/
	}
	.venue {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		/* grid-template-columns: 1fr 2fr 0.5fr; */
		/* grid-template-rows: 1fr; */
		grid-template-areas: 'data data data excerpt excerpt excerpt excerpt link';
		gap: 16px 16px;
		margin-bottom: 1rem;
	}

	.data {
		grid-column: 1/4;
		grid-area: data;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--green-light);
		& .data-header {
			margin-bottom: 1rem;
		}
		& h2 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}
		& p {
			margin: 0;
			/* line-height: 1.6; */
			margin-bottom: 0.5rem;
			color: var(--fc-light);
		}
		& .address p {
			color: var(--fc-mid);
			margin-bottom: 0;
		}
	}

	.excerpt {
		grid-column: 4/8;
		padding: 2rem;
		grid-area: excerpt;
		background: var(--gray-1);
		border-radius: 1rem;
		font-size: 1rem;
		& p {
			line-height: 1.5;
			color: var(--fc-mid);
			max-width: 75ch;
		}
	}

	.link {
		grid-column: 8/-1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		grid-area: link;
		color: var(--fc-light);
		min-width: 160px;
	}

	.small-title {
		position: relative;
		margin-bottom: 1.2rem;
		font-family: var(--ff-gilroy-m);
		color: var(--fc-main);
		&::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 0;
			width: 75%;
			height: 2px;
			background: black;
		}
	}
	.link-icon {
		display: flex;
		justify-content: right;
		align-items: center;
	}
	.sm {
		font-size: var(--sm);
	}
	.address p {
		color: var(--fs-mid);
	}
	.link-desc__w {
		margin-bottom: 1.2rem;
		& p {
			line-height: 1.1;
		}
	}
	@media (max-width: 996px) {
		.venue {
			font-size: 1rem;
			grid-template-areas:
				'data data data data data data data link'
				'excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt';
		}

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
		.venue {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			grid-template-areas:
				'data'
				'link'
				'excerpt';
		}
		.link {
			/* grid-column: 8/-1; */
			display: flex;
			flex-direction: row;
			gap: 2rem;
			/* justify-content: space-between;
			padding: 2rem;
			grid-area: link;
			color: var(--fc-light);
			min-width: 160px; */
		}
	}
</style>
