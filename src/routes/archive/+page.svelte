<script>
	import LinkCircle from './../../lib/components/icons/LinkCircle.svelte';
	export let data;
	$: pdfsData = data.nuachtPDFs[0].pdfs;
	// $: console.log(
	// 	'🚀 ~ pdfsData:',
	// 	pdfsData.sort((a, b) => a.title.split('-')[2] - b.title.split('-')[2]).reverse()
	// );
	// destructure title and split by space
	$: sortedPDFs = pdfsData
		//@ts-ignore
		.sort((a, b) => a.title.split('-')[1] - b.title.split('-')[1])
		.reverse();
	$: console.log('🚀 ~ sortedPDFs:', sortedPDFs);
</script>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>SHEP Nuacht Archive</h1>
				<div>
					<p>
						SHEP Nuacht is an internal newsletter for all in the SHEP community, including SHEP’s
						learners, project participants and many friends. The first edition was in June 2009 and
						we issue the newsletter twice per year. We hope you enjoy reading it.
					</p>
					<p>
						In order to minimise administration costs, SHEP Nuacht is distributed electronically and
						is also posted to our website. If you would like to receive a copy of SHEP Nuacht by
						email please contact us.
					</p>
					<p>
						We hope you enjoy reading SHEP Nuacht and we welcome your feedback and contributions.
					</p>
				</div>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/479126b0eb6e14162016f648c77a88c95f550685-1680x933.webp"
					alt="pinky theme"
				/>
			</div>
		</div>
	</div>
	<main class="container">
		<div class="list__c">
			{#each sortedPDFs as pdf}
				<div class="card-pdf__c">
					<div class="card-pdf__data">
						<div class="pdf__title">{pdf.title.split('-')[0]}</div>
						<div class="pdf__date">
							{pdf.title.split('-')[2]} <span>{pdf.title.split('-')[3]}</span>
						</div>
					</div>
					<div class="card-pdf__link">
						<div class="pdf__number">
							{pdf.title.split('-')[1]}
						</div>
						<div class="pdf__link">
							<a href={pdf.url} target="_blank"><LinkCircle width={48} height={48} /></a>
						</div>
					</div>
				</div>
			{/each}
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
	.container {
		grid-column: 1/-1;
	}

	.list__c {
		list-style: none;
		display: grid;
		padding: 0;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}

	/* pdf card */
	.card-pdf__c {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		border: 1px solid white;
		border: 1px solid var(--gray-2);
		border-radius: 0.5rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		background: var(--purple-100);
		& svg {
			& circle {
				stroke: var(--shep-orange) !important;
			}
			& path {
				fill: var(--shep-orange) !important;
			}
		}
	}
	.card-pdf__c:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-2);
		pointer-events: none;
	}

	.card-pdf__data {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
		color: var(--purple-500);
	}

	.pdf__title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--purple-400);
	}

	.pdf__date {
		font-size: 1rem;
		font-weight: 400;
	}

	.card-pdf__link {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.pdf__number {
		font-size: 3rem;
		font-weight: 900;
		line-height: 1;
		color: var(--purple-500);
		font-family: var(--ff-gilroy-l);
	}

	.pdf__link {
		font-size: 1rem;
		font-weight: 400;
		pointer-events: all;
		&:hover {
			& svg {
				& circle {
					stroke: var(--shep-green) !important;
				}
				& path {
					fill: var(--shep-green) !important;
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