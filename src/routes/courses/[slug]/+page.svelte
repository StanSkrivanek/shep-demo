<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import ArrowOpen from '$lib/components/icons/arrowOpen.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	import { formatDateMonthName, formatTime12 } from '$lib/utils/datehelpers';
	import { PortableText } from '@portabletext/svelte';
	import { slide } from 'svelte/transition';

	export let data;
	const { title, excerpt, type, full_price, funded_price, main_img, content, brochure, slug } =
		data.course;
	const openCourses = data.allOpenCourses;
	console.log('🚀 ~ file: +page.svelte:3 ~ data:', openCourses);

	/**
	 * @type {number | boolean | null}
	 */
	let show = null;

	const toggleActive = (/** @type {number | boolean | null} */ i) => {
		i == show ? (show = null) : (show = i);
	};
</script>

<div class="page__c">
	<!-- hero -->
	<!-- TODO: update other Heros based on this principle 4 rows without 2-cols wrapper -->
	<div class="hero">
		<div class="hero-data">
			<h1>{title}</h1>
			<p>
				{excerpt}
			</p>
		</div>
		<div class="hero-img">
			<img src={main_img} alt="cover" />
		</div>

		<div class="hero-info__price">
			<p class="small-title">Course Fee</p>
			<div class="fee">
				{#if full_price != 'No Charge'}
					<p><span>In Full:</span>€ {full_price}</p>
				{:else}
					<p><span>In Full:</span>{full_price}</p>
				{/if}
				{#if funded_price != null}
					<p><span>Funded :</span>€ {funded_price}</p>
				{/if}
			</div>
		</div>
		<div class="link">
			<div class="link-desc__w">
				<p class="small-title">Brochure</p>
				<p>Feel free to access our course brochure in PDF format</p>
			</div>
			<a href={brochure} target="_blank">
				<div class="link-icon">
					<LinkCircle width={60} height={60} />
				</div>
			</a>
		</div>
	</div>

	<!-- wapper start -->
	<div class="main__c">
		<!-- aside -->
		<aside>
			<div class="accordion">
				{#each openCourses as item, i}
					<div
						class="accordion_item card"
						role="button"
						tabindex={i}
						on:click={() => toggleActive(i)}
						on:keydown={() => toggleActive(i)}
					>
						<div class="accordion-header">
							<div class="data">
								<div class="location">
									<p>{item.venue.venue_name}</p>
									<p>{item.venue.city}</p>
									<p>{formatDateMonthName(item.in_person.start_date)}</p>
									<p>{formatTime12(item.in_person.start_date)}</p>
								</div>
							</div>
							<div>
								<div class="link-icon">
									<ArrowOpen width={58} height={58} />
								</div>
							</div>
						</div>
						{#if show == i}
						<div class="body accordion-body" transition:slide>
							<div class="detail">
								<!-- header -->
								<div class="detail-header">
									<p>In Person</p>
									<p>refNo.</p>
								</div>
								<!-- trainers list -->
								<div class="detail-leader">
									<p>
										<span class="bold">Leaded by:</span>
										{#each item.in_person.leader as leader}
											{#if leader != item.in_person.leader[item.in_person.leader.length - 1]}
												<span>{leader.name}, </span>
											{:else}
												<span>{leader.name}</span>
											{/if}
										{/each}
									</p>
									<p><span class="bold">Group:</span> {item.in_person.group}</p>
								</div>
								<!-- footer - week day & time-->
								<div class="detail-schedule">
									<p>{item.in_person.weekday}</p>
									<div>
										<span>{formatTime12(item.in_person.start_date)}</span>
										<span class="schedule-spacer">-</span>
										<span>{formatTime12(item.in_person.end_date)}</span>
									</div>
								</div>
							</div>
							<div class="detail">
								<!-- header -->
								<div class="detail-header">
									<p>Online</p>
									<p>refNo.</p>
								</div>
								<!-- trainers list -->
								<div class="detail-leader">
									<p>
										Leaded by:
										{#each item.online.leader as leader}
											{#if leader != item.online.leader[item.online.leader.length - 1]}
												<span>{leader.name}, </span>
											{:else}
												<span>{leader.name}</span>
											{/if}
										{/each}
									</p>
									<p>Group: {item.online.group}</p>
								</div>
								<!-- footer - week day & time-->
								<div class="detail-schedule">
									<p>{item.online.weekday}</p>
									<div>
										<span>{formatTime12(item.online.start_date)}</span>
										<span class="schedule-spacer">-</span>
										<span>{formatTime12(item.online.end_date)}</span>
									</div>
								</div>
							</div>
							<div class="accordion-links">
								<!-- download brochure -->
								<a href={item.form.asset} target="_blank">
									<span>download form</span>
								</a>

								<!-- apply online -->
								<a href="#" target="_blank">
									<span>apply online</span>
								</a>
							</div>
						</div>
						{/if}
					</div>
				{/each}
			</div>
		</aside>
		<!-- main -->
		<main>
			<PortableText
				value={content}
				onMissingComponent={false}
				components={{
					block: {
						// blockquote: Quote,
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
		</main>
	</div>

	<!-- wrapper end -->

	<!-- footer -->

	<!-- <h1>{title}</h1> -->
	<!--TODO: take alt from original image name -->
	<!-- <img src={main_img} alt="course cover" /> -->
	<!-- <p>{excerpt}</p> -->
	<!-- <PortableText
		value={content}
		onMissingComponent={false}
		components={{
			block: {
				// blockquote: Quote,
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
		/> -->
</div>

<style>
	.page__c {
		max-width: 1680px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 0.5fr 0.5fr 1fr 1fr 0.5fr 0.5fr 1fr;
	}
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: repeat(4, minmax(6rem, 1fr));
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
		grid-template-areas:
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn';
	}

	/* Hero */
	.hero-data {
		grid-area: hero-data;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--green-light);
	}
	.hero-img {
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
	.hero-info__price {
		grid-area: hero-price;
		padding: 1.4rem;
		border-radius: 1rem;
		background: var(--gray-1);
	}

	/* Fee */
	.fee {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		& p {
			display: flex;
			justify-content: space-between;
			margin: 0;
			margin-bottom: 0.5rem;
			color: var(--fc-main);
			& span {
				color: var(--fc-light);
			}
		}
	}

	/* Brochure */
	.link {
		grid-area: hero-btn;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.4rem;
		border-radius: 1rem;
		color: var(--fc-light);
		background: var(--blue-light);
		min-width: 160px;
		/* & a {
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
		} */
	}
	.small-title {
		position: relative;
		margin-top: 0;
		/* margin-bottom: 1.2rem; */
		font-family: var(--ff-gilroy-m);
		font-size: var(--sm);
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
		/* border: 1px solid var(--fc-light); */
	}

	.link-desc__w {
		/* margin-bottom: 1.2rem; */
		& p {
			font-size: var(--sm);
			line-height: 1.1;
		}
	}

	/* === MAIN CONTENT === */

	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside aside aside main main main main ';
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}

	aside {
		grid-area: aside;
	}
	/* Accordion */
	.accordion_item {
		margin-bottom: 1rem;
		background-color: var(--green-light);
		border-radius: 1rem;
	}

	.accordion-header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background-color: var(--blue-light); */
		/* transition: background 200ms ease-in-out; */

		& p:first-child {
			margin-bottom: 0;
			font-size: 1.4rem;
			color: var(--fc-main);
		}

		& p:not(:first-child) {
			margin: 0;
			color: var(--fc-main);
			/* margin-bottom: 0.5rem; */
			font-size: var(--sm);
		}
		& p:nth-child(2) {
			color: var(--fc-light);
			margin-bottom: 0.5rem;
		}
		& .city {
			color: var(--fc-light);
			font-size: 1rem;
		}
		& .datetime {
			font-size: var(--sm);
			/* display: flex;
			flex-direction: column;
			justify-content: space-between; */
			& p {
				margin: 0;
				/* margin-bottom: 0.5rem; */
				color: var(--fc-main);
			}
		}
		& .link {
			display: flex;
			justify-content: right;
			align-items: center;
		}
		& .link-icon {
			display: flex;
			justify-content: right;
			align-items: center;
		}
	}

	.accordion-body {
		padding: 1rem;
		margin-bottom: 1rem;
		/* background-color: var(--blue-light); */
		& .detail {
			margin-bottom: 2rem;
		}
		& .detail-header {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			font-size: 1.4rem;
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: var(--fc-main);
			}
			& p:last-child {
				font-size: 1rem;
				color: var(--fc-light);
			}
		}
		& .detail-leader {
			display: flex;
			justify-content: space-between;
			& p {
				font-size: 1rem;
				margin: 0;
			}
		}
		& .detail-schedule {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 1.4rem;
			border-bottom: 1px solid var(--green-sha-1);
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: var(--fc-main);
			}
			& div {
				display: flex;
				justify-content: space-between;
				& span {
					margin: 0;
					margin-bottom: 0.5rem;
					color: var(--fc-main);
				}
				& .schedule-spacer {
					padding-inline: 0.5rem;
				}
			}
		}
		& .accordion-links {
			display: flex;
			justify-content: space-around;
			min-width: 160px;
			padding-bottom: 1rem;
			& a {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.7rem 1.4rem;
				font-family: var(--ff-gilroy-m);
				text-transform: uppercase;
				text-decoration: none;
				font-size: 1rem;
				line-height: 1;
				color: var(--text-base);
				margin: 0;
				border: 2px solid var(--green-sha-1);
				border-radius: 10rem;
				background: var(--green);
				transition: all 0.3s ease-in-out;
				&:hover {
					text-decoration: none;
					/* color: var(--gray-1); */
					border: 2px solid var(--green-sha-1);
					background-color: var(--green-sha-1);
				}
			}
		}
		& .bold {
			font-family: var(--ff-gilroy-m);
		}
	}

	main {
		grid-area: main;
	}

	/* Media Query */

	@media screen and (max-width: 996px) {
		.hero {
			/* grid-template-columns: subgrid; */
			grid-template-rows: repeat(4, minmax(6rem, 1fr));
			grid-template-areas:
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-price hero-price'
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-btn hero-btn';
		}
		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas:
				'main main main main main main main main'
				'aside aside aside aside aside aside aside aside';
		}
	}
	@media (max-width: 768px) {
		.hero {
			grid-template-rows: repeat(3, minmax(6rem, max-content));
			grid-template-areas:
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-price hero-price hero-price hero-price hero-btn hero-btn hero-btn hero-btn';
		}
	}
	@media (max-width: 576px) {
		.hero {
			grid-template-rows: repeat(4, minmax(100px, max-content));
			grid-template-areas:
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-price hero-price hero-price hero-price hero-price hero-price hero-price hero-price'
				'hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn';
		}
		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas:
				'main main main main main main main main'
				'aside aside aside aside aside aside aside aside';
		}
	}
</style>
