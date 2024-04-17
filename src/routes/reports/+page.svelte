<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

	export let data;
	// console.log('🚀 ~ data:', data);

	const { allPublications, annual, financial, independent } = data.pdfs;

	$: annualReports = annual[0].publications;
	$: sortedAnnual = annualReports
	
	$: financialReports = financial[0].publications;
	$: sortedFinancial = financialReports

	$: independentReports = independent[0].publications;
	$: sortedindependent = independentReports

	//@ts-ignore
	.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
	
	// console.log("🚀 ~ sortedAnnual:", sortedAnnual)


</script>

<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>SHEP Archive</h1>
				<div>
					<p>
						Welcome to the SHEP Archive! Within these page, you'll discover our most recent
						publications and reports, conveniently presented in PDF format for effortless access. We
						hope you find them enjoyable!
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
		<div class="section">
			<h2>Annual Reports</h2>
			<div class="list__c">
				{#each sortedAnnual as pdf}
					<!-- {pdf.tags} -->
					<!-- {#if pdf.tags.includes('annual')} -->
						<div class="card-pdf__c">
							<div class="card-pdf__data">
								<!-- <File width={40} height={40} /> -->
								<div class="pdf__title">{pdf.title}</div>
								<div class="pdf__date">
									<!-- {pdf.title.split('-')[2]} <span>{pdf.title.split('-')[3]}</span> -->
									<div class="pdf__link">
										<a href={pdf.url} target="_blank"><LinkCircle width={40} height={40} /></a>
									</div>
								</div>
							</div>
							<div class="card-pdf__link">
								<div class="pdf__number">
									<!-- {pdf.title.split('-')[1]} -->
								</div>
							</div>
						</div>
					<!-- {/if} -->
					<!--  update getPublicationsPDFs() get all PDF's except Nuacht. RENAME publications to REPORTS-->
				{/each}
			</div>
		</div>
		<div class="section">
			<h2>Financial Reports</h2>
			<!-- <p>SHEP is registered with the Company Registration Office as a company limited by guarantee. We are pleased to present below our most recent audited accounts.</p> -->
			<div class="list__c">
				{#each sortedFinancial as pdf}
					<!-- {pdf.tags} -->
					<!-- {#if pdf.tags.includes('annual')} -->
						<div class="card-pdf__c">
							<div class="card-pdf__data">
								<!-- <File width={40} height={40} /> -->
								<div class="pdf__title">{pdf.title}</div>
								<div class="pdf__date">
									<!-- {pdf.title.split('-')[2]} <span>{pdf.title.split('-')[3]}</span> -->
									<div class="pdf__link">
										<a href={pdf.url} target="_blank"><LinkCircle width={40} height={40} /></a>
									</div>
								</div>
							</div>
							<div class="card-pdf__link">
								<div class="pdf__number">
									<!-- {pdf.title.split('-')[1]} -->
								</div>
							</div>
						</div>
					<!-- {/if} -->
					<!--  update getPublicationsPDFs() get all PDF's except Nuacht. RENAME publications to REPORTS-->
				{/each}
			</div>
		</div>
		<!-- Independent Evaluation Reports -->
				<div class="section">
			<h2>Independent Evaluation Reports</h2>
			<!-- <p>SHEP is registered with the Company Registration Office as a company limited by guarantee. We are pleased to present below our most recent audited accounts.</p> -->
			<div class="list__c">
				{#each sortedindependent as pdf}
					<!-- {pdf.tags} -->
					<!-- {#if pdf.tags.includes('annual')} -->
						<div class="card-pdf__c">
							<div class="card-pdf__data">
								<!-- <File width={40} height={40} /> -->
								<div class="pdf__title">{pdf.title}</div>
								<div class="pdf__date">
									<!-- {pdf.title.split('-')[2]} <span>{pdf.title.split('-')[3]}</span> -->
									<div class="pdf__link">
										<a href={pdf.url} target="_blank"><LinkCircle width={40} height={40} /></a>
									</div>
								</div>
							</div>
							<div class="card-pdf__link">
								<div class="pdf__number">
									<!-- {pdf.title.split('-')[1]} -->
								</div>
							</div>
						</div>
					<!-- {/if} -->
					<!--  update getPublicationsPDFs() get all PDF's except Nuacht. RENAME publications to REPORTS-->
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
		/* display: flex; */
		/* flex-direction: column; */

		/* display: grid; */
		/* padding: 0; */
		/* width: 100%; */
		/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
		/* gap: .5rem; */
	}

	/* pdf card */
	.card-pdf__c {
		padding: 0.75rem;
		margin-bottom: 0.5rem;
		border: 1px solid hsl(var(--hsl-purple) / 0.25);
		border-radius: 0.25rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		background: hsl(var(--hsl-white));
		& svg {
			& path {
				fill: hsl(var(--hsl-gray));
			}
		}
	}
	.card-pdf__c:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 3px 3px 15px -3px hsl(var(--hsl-gray) / 0.25);
		pointer-events: none;
	}

	.card-pdf__data {
		display: flex;
		justify-content: space-between;
		align-items: center;
	
		color: hsl(var(--hsl-gray));
	}

	.pdf__title {
		font-size: 1rem;
		line-height: 1.2;
	}

	.pdf__date {
		font-size: 1rem;
		font-weight: 400;
	}

	.card-pdf__link {
		display: flex;
		justify-content: space-between;

		align-items: flex-end;
	}

	.pdf__link {
		font-size: 1rem;
		pointer-events: all;
		& svg:hover {
			transition: 0.3s ease;
			& circle {
				stroke: hsl(var(--hsl-brand)) !important;
			}

			/* & path {
				fill: hsl(var(--hsl-brand)) !important;
			} */
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
