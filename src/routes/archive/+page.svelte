<script>
	import DotsCorner  from '$lib/components/icons/DotsCorner.svelte';
	// import LogoSimple from './../../lib/components/icons/LogoSimple.svelte';
	import Book from '$lib/components/icons/Book.svelte';
	export let data;

	const { allNuacht } = data.props;
	$: nuachtPDFs = allNuacht[0].pdfs;

	// // destructure title and split by space
	$: sortedPDFs = nuachtPDFs
		//@ts-ignore
		.sort((a, b) => a.title.split('-')[1] - b.title.split('-')[1])
		.reverse();
	/**
	 * @param {string} text
	 */
	function createListFromText(text) {
		const items = text.split(',');
		let list = '<ul>';
		items.forEach((item) => {
			list += `<li>${item.trim()}</li>`;
		});
		list += '</ul>';
		return list;
	}
</script>

<svelte:head>
	<title>Archive</title>
	<meta name="description" content="Archive of SHEP Nuacht and other documents" />
</svelte:head>
<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>SHEP Nuacht</h1>
				<div>
					<p>
						SHEP Nuacht is the internal newsletter for the entire SHEP community. It was first
						published in June 2009, and we continue to release new editions twice a year. These
						publications are conveniently available in PDF format for easy access. We hope you find
						them enjoyable!
					</p>
				</div>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/10daa90401309085e5b9da94ffea785e878731a9-789x422.webp"
					alt="pinky theme"
				/>
			</div>
		</div>
	</div>
	<main class="container">
		<div class="section">
			<h2>Nuacht Archive</h2>
			<div class="list__c">
				{#each sortedPDFs as pdf}
					<div class="card-pdf__c">
						<div class="card-pdf__data">
							<div class="pdf__title">
								<!-- <span><LogoSimple width={24} height={24} /></span> -->
								<div class="pdf__date">
									<span>{pdf.title.split('-')[2]} {pdf.title.split('-')[3]}</span>
									<span><DotsCorner width={24} height={24} currentColor="hsl(var(--hsl-blue) / .75)"/></span>
								</div>
								<div class="pdf__number">
									<span>{pdf.title.split('-')[0]}</span>
									{pdf.title.split('-')[1]}
								</div>
							</div>
							<div class="pdf-excerpt">
								{@html createListFromText(`${pdf.excerpt}`)}
								<p>and more...</p>
							</div>
						</div>
						<div class="card-pdf__link">
							<div class="pdf__link">
								<a href={pdf.url} target="_blank"><Book width={40} height={40} /></a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
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
		padding: 2rem 0;
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
		grid-column: 1/-1;
	}
	.section {
		margin-bottom: 5rem;
	}
	/* list */
	.list__c {
		list-style: none;
		display: grid;
		padding: 0;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	/* pdf card */
	.card-pdf__c {
		display: flex;
		flex-direction: column;
		align-content: space-between;
		justify-content: space-between;
		/* width: 100%; */
		padding: 1rem;
		border-radius: 0.5rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		background: hsl(var(--hsl-blue) / 0.15);
		& svg {
			& path {
				stroke: hsl(var(--hsl-blue));
			}
		}
		background-image: url();
	}
	.card-pdf__c:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 6px 20px -3px hsl(var(--hsl-gray) / 0.25);
		pointer-events: none;
		/* border-color: hsl(var(--hsl-brand) ) !important; */
	}

	.card-pdf__data {
		/* display: flex; */
		/* flex-direction: column; */
		/* justify-content: space-between; */
		/* padding: 1rem; */
		/* border-radius: 0.5rem; */
		/* background: hsl(var(--hsl-gray) / 0.1); */
		/* transition: all 0.3s ease-in-out; */
		/* pointer-events: none; */
		/* & svg { */
		/* 	& path { */
		/* 		stroke: hsl(var(--hsl-blue)); */
		/* 	} */
		/* } */
	}

	.pdf__title {
		margin-bottom: 1rem;
		font-size: 1.4rem;
		font-weight: 700;
		color: hsl(var(--hsl-brand));
		font-family: var(--ff-fkg-black);
	}

	.pdf__date {
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		font-weight: 100;
		color: hsl(var(--hsl-blue) / 0.75);
	}

	.pdf-excerpt {
		font-size: small;
		color: hsl(var(--hsl-gray));
		margin-bottom: 0.25rem;
		text-wrap: pretty;
		& ul {
			margin: 0;
			padding-left: 1rem;
			& li {
				margin-bottom: 0.05rem;
				/* padding:0.025rem */
			}
			/* padding: 0; */
		}
	}
	.card-pdf__link {
		display: flex;
		justify-content: end;
		/* align-items: flex-end; */
	}

	.pdf__number {
		font-size: 3rem;
		line-height: 1;
		font-family: var(--ff-fkg-black);
		color: hsl(var(--hsl-blue)/.75)
	}

	.pdf__link {
		font-size: 1rem;
		font-weight: 400;
		pointer-events: all;
		/* border: 1px solid red; */
		&:hover {
			& svg {
				& path {
					stroke: hsl(var(--hsl-brand));
					/* fill: var(--shep-green) !important; */
				}
			}
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
		.hero-data {
			display: block;
		}
		.hero-data h1 {
			margin-bottom: 2rem;
		}
	}
</style>
