<script>
	import ArrowOpen from '$lib/components/icons/ArrowOpen.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { monthNameDateYear } from '$lib/utils/datehelpers.js';
	import { PortableText } from '@portabletext/svelte';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let data;

	let jobs = data.props.allJobs;

	/**
	 * @type {number | boolean | null}
	 */
	let show = null;

	const toggleActive = (/** @type {number | boolean | null} */ i) => {
		i == show ? (show = null) : (show = i);
	};
</script>

<svelte:head>
	<title>Jobs</title>
	<meta name="description" content="Shep Job opportunities" />
</svelte:head>
<div class="page__c">
	<div class="hero">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<h1>Recruitment</h1>
				<div>
					<p>
						We continuously seek new experts to join our team, so be sure to check back regularly
						for updates on new opportunities. We eagerly await hearing from you!
					</p>
				</div>
			</div>
			<div class="hero-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/d56f01a1b3c55896bf63fcb61b4dd56c21db6b26-1600x900.webp"
					alt="Teamwork"
				/>
			</div>
		</div>
	</div>

	<main class="container">
		<div class="section">
			<h2>Job Opportunities</h2>
			{#if jobs.length == 0}
				<div class="no-job">
					<p>
						Currently, there are no vacant positions available. Kindly revisit for any future
						updates.
					</p>
				</div>
			{:else}
				<div class="accordion">
					{#each jobs as job, i}
						<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
						<article
							role="button"
							on:click={() => toggleActive(i)}
							on:keydown={() => toggleActive(i)}
						>
							<div class="job__c">
								<div class="job-header">
									<div>
										<h2 class="job-header__title">{job.title}</h2>
										<div class="job-header__sub">
											<p><b>Location:</b> {job.location}</p>
											<p><b>Apply by:</b> {monthNameDateYear(job.deadline)}</p>
										</div>
									</div>
									<div class="link-icon" class:rotate={show == i}>
										<ArrowOpen width={48} height={48} />
									</div>
								</div>
								{#if show == i}
									<div
										class="job-body"
										transition:slide={{ delay: 250, duration: 400, easing: quintOut }}
									>
										<div class="job-data">
											<p class="subtitle">Description</p>
											<PortableText
												value={job.description}
												onMissingComponent={false}
												components={{
													block: {
														h1: CustomHeading,
														h2: CustomHeading,
														h3: CustomHeading,
														h4: CustomHeading,
														h5: CustomHeading,
														normal: TextRte
													},
													types: {
														image: ImageRte
													}
												}}
											/>

											<p class="subtitle">Responsibilities</p>
											<PortableText
												value={job.responsibilities}
												onMissingComponent={false}
												components={{
													block: {
														h1: CustomHeading,
														h2: CustomHeading,
														h3: CustomHeading,
														h4: CustomHeading,
														h5: CustomHeading,
														normal: TextRte
													},
													types: {
														image: ImageRte
													}
												}}
											/>
											<p class="subtitle">Requirements</p>
											<PortableText
												value={job.requirements}
												onMissingComponent={false}
												components={{
													block: {
														h1: CustomHeading,
														h2: CustomHeading,
														h3: CustomHeading,
														h4: CustomHeading,
														h5: CustomHeading,
														normal: TextRte
													},
													types: {
														image: ImageRte
													}
												}}
											/>
											<p class="subtitle">Benefits</p>
											<PortableText
												value={job.benefits}
												onMissingComponent={false}
												components={{
													block: {
														h1: CustomHeading,
														h2: CustomHeading,
														h3: CustomHeading,
														h4: CustomHeading,
														h5: CustomHeading,
														normal: TextRte
													},
													types: {
														image: ImageRte
													}
												}}
											/>
										</div>

										<div class="job-footer">
											<div class="footer__section">
												<div class="group">
													<h4>Office</h4>
													<p>The Old Primary School</p>
													<p>Ardmore Avenue</p>
													<p>Balinatemple</p>
													<p>Co. Cork | T25 XYD7</p>
												</div>

												<div class="group">
													<h4>Contact person</h4>
													{#each job.contact as contact}
														{#if contact !== job.contact[job.contact.length - 1]}
															<p>{contact.name}</p>
														{:else}
															<p>{contact.name}</p>
														{/if}
													{/each}
												</div>
												<div class="group">
													<h4>Phone</h4>
													<p>Cork - (022) 12 4455</p>
												</div>
											</div>
										</div>
									</div>
								{/if}
								<!-- footer -->
							</div>
						</article>
					{/each}
				</div>
			{/if}
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
	.section {
		margin-bottom: 5rem;
	}
	.no-job {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 6rem 2rem;

		background: var(--gray-1);
		border-radius: 0.5rem;
		background: rgb(244, 164, 172);

		font-size: 1.5rem;

		& p {
			margin: 0;
		}
	}
	article {
		margin-bottom: 2rem;
		cursor: pointer;
		background: hsl(var(--hsl-white));
		transition: all 0.3s ease-in-out;
		& .rotate {
			transform: rotate(180deg);
			transition: all 0.4s ease-in-out;
		}
	}

	.job__c {
		width: 100%;
		border: 1px solid hsl(var(--hsl-brand) / 0.25);
		border-radius: 0.5rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;

		& svg {
			& circle {
				stroke: hsl(var(--hsl-brand)) !important;
			}
			& path {
				stroke: hsl(var(--hsl-brand)) !important;
			}
		}
	}

	.subtitle {
		font-size: var(--h4);
		color: var(--clr-brand);
		margin-bottom: 0.5rem;
		border-bottom: 1px solid var(--gray-100);
		padding-bottom: 0.5rem;
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		align-items: center;
		& .link-icon {
			transition: all 0.6s ease-in-out;
		}
		& .rotate {
			transform: rotate(180deg);
			transition: all 0.6s ease-in-out;
		}
	}
	.job-header__title {
		margin-bottom: 0;
		color: hsl(var(--hsl-brand) / 0.25);
	}
	.job-header__sub {
		display: flex;
		gap: 2rem;
		font-size: 1rem;
		font-weight: 400;
		color: hsl(var(--hsl-gray));
	}
	.job-body {
		padding-inline: 2rem;
	}
	.job-data {
		border-bottom: 1px solid hsl(var(--hsl-gray) / 0.25);
		margin-bottom: 3rem;
	}
	.job-footer {
		& .footer__section {
			display: flex;
			gap: 3rem;
			flex-wrap: wrap;
			padding-bottom: 2rem;
			& .group {
				display: flex;
				flex-direction: column;
				& h4 {
					margin-bottom: 1rem;
					line-height: 1;
					color: hsl(var(--hsl-gray));
				}
				& p {
					margin: 0.25rem;
					line-height: 1;
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
		.job-header,
		.job-body {
			padding: 1.4rem;
		}
		.job-header__sub {
			display: block;
			margin-top: 1rem;
		}
		.job-header__sub p {
			margin: 0rem;
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
