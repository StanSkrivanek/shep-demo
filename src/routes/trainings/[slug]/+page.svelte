<script>
	import ArrowOpen from '$lib/components/icons/ArrowOpen.svelte';
	import DotsCorner from '$lib/components/icons/DotsCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	import { singleEventStore } from '$lib/stores/forms';
	import { formatTime12, monthNameDate, monthNameDateYear } from '$lib/utils/datehelpers';
	import { PortableText } from '@portabletext/svelte';
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let data;
	// $: console.log('🚀 ~ file: +page.svelte:12 ~ CLIENT data.trainings:', data.upcomingTraning);
	const { title, excerpt, full_price, funded_price, main_img, content, brochure, slug } =
		data.traning;
	const upcoming = data.allUpcomingTrainings;
	// $: console.log("🚀 UPCOMING", upcoming)
	/**
	 * @type {number | boolean | null}
	 */
	let show = null;

	const toggleActive = (/** @type {number | boolean | null} */ i) => {
		i == show ? (show = null) : (show = i);
	};

	/**
	 * @param {any} node
	 */
	function rotate180(node, { duration = 300 }) {
		return {
			duration,
			css: (/** @type {number} */ t) => {
				const eased = cubicOut(t);
				return `
						transform: rotate(${eased * 180}deg);
					`;
			}
		};
	}

	/**
	 * @param {any} node
	 */
	function storeCourseData(node) {
		$singleEventStore = node;
		localStorage.setItem('singleEventStore', JSON.stringify(node));
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={excerpt} />
</svelte:head>

<div class="page__c">
	<!-- hero -->
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
				<p class="limited-char">Feel free to access our course brochure in PDF format</p>
			</div>
			<a href={brochure} target="_blank">
				<div class="link-icon">
					<LinkCircle width={48} height={48} />
				</div>
			</a>
		</div>
	</div>

	<!-- wapper start -->
	<div class="main__c">
		<!-- aside -->
		<aside>
			{#if upcoming.length == 0}
				<div class="no-course">
					<div class="content">
						<p>
							We are sorry but this course is not currently open for applications in any facilities.
						</p>
						<p>
							You can sign to our newsletter to be notified when new Shep courses will open for
							applications.
						</p>
					</div>
					<div class="nlr-link">
						<div class="dots">
							<DotsCorner width={24} height={24} />
						</div>
						<div>
							<p>Sign to newsletter</p>
							<a href="/newsletter">
								<LinkCircle width={48} height={48} />
							</a>
						</div>
					</div>
				</div>
			{:else}
				<div class="accordion">
					{#each upcoming as item, i}
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
										<!-- <p>{item.venue.venue_name}</p> -->
										<a class="accordion-header--link" href="../venues/{item.venue.slug.current}"
											>{item.venue.venue_name}</a
										>
										<p>{item.venue.city}</p>
										<p>{monthNameDateYear(item.in_person.start_date)}</p>
										<p>{formatTime12(item.in_person.start_date)}</p>
									</div>
								</div>
								<div class="link-icon" class:rotate={show == i}>
									<ArrowOpen width={48} height={48} />
								</div>
							</div>
							{#if show == i}
								<div class="body accordion-body" transition:slide>
									<div class="detail">
										<!-- header -->
										<div class="detail-header">
											<p class="back-underline-tilt">In Person</p>
											<!-- <p>refNo: {item.in_person.course_in_ref}</p> -->
										</div>
										{#if item.in_person.is_active == false}
											<p>Not available</p>
										{:else}
											<div class="date-group">
												<p class="small">
													{monthNameDate(item.in_person.start_date)} - {monthNameDateYear(
														item.in_person.end_date
													)}
												</p>
												<p class="small"><span class="bold">Group:</span> {item.in_person.group}</p>
											</div>
											<div class="detail-schedule">
												<p>{item.in_person.weekday}</p>
												<div>
													<span>{formatTime12(item.in_person.start_date)}</span>
													<span class="schedule-spacer">-</span>
													<span>{formatTime12(item.in_person.end_date)}</span>
												</div>
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
											</div>
										{/if}
									</div>

									{#if item.online.is_active == false}
										<!-- <p>We do not currently offer an online version for this course.</p> -->
										<p />
									{:else}
										<div class="detail">
											<!-- header -->
											<div class="detail-header">
												<p class="back-underline-tilt">Online</p>
												<!-- <p>refNo: {item.in_person.course_in_ref}</p> -->
											</div>
											{#if item.online.is_active == false}
												<p>Not available</p>
											{:else}
												<div class="date-group">
													<p class="small">
														{monthNameDate(item.online.start_date)} - {monthNameDateYear(
															item.online.end_date
														)}
													</p>
													<p class="small"><span class="bold">Group:</span> {item.online.group}</p>
												</div>
												<div class="detail-schedule">
													<p>{item.online.weekday}</p>
													<div>
														<span>{formatTime12(item.online.start_date)}</span>
														<span class="schedule-spacer">-</span>
														<span>{formatTime12(item.online.end_date)}</span>
													</div>
												</div>
												<!-- trainers list -->
												<div class="detail-leader">
													<p>
														<span class="bold">Leaded by:</span>
														{#each item.online.leader as leader}
															{#if leader != item.online.leader[item.online.leader.length - 1]}
																<span>{leader.name}, </span>
															{:else}
																<span>{leader.name}</span>
															{/if}
														{/each}
													</p>
												</div>
												<!-- footer - week day & time-->
											{/if}
										</div>
									{/if}
									<!-- TODO: responsiveness when form is narrow fold buttons in column -->
									<div class="accordion-links">
										<!-- download brochure -->
										<a href={item.form.asset} target="_blank">
											<span>download form</span>
										</a>

										<!-- apply online -->
										<!-- TODO: on click get data from this course and use these on Form page -->
										<!-- Use STORE? Local storage? On submit send to google sheet and delete storage (store)-->
										<a href="/trainings/{slug}/form" on:click={() => storeCourseData(item)}>
											<span>apply online</span>
										</a>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</aside>
		<!-- main -->
		<!-- TODO: expand main content to last column on -->
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


</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}

	/* Hero */
	.hero-data {
		/* grid-area: hero-data; */
		grid-column: 1 / 4;
		grid-row: 1/5;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--cyan-200);
	}
	.hero-img {
		/* grid-area: hero-img; */
		grid-column: 4 / 8;
		grid-row: 1/5;
		border-radius: 1rem;
		background: var(--gray-50);
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
		/* grid-area: hero-price; */
		grid-column: 8/-1;
		grid-row: 1/3;
		padding: 1.4rem;
		border-radius: 1rem;
		background: var(--blue-50);
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
	.limited-char {
		width: 16ch;
	}

	/* Brochure */
	.link {
		/* grid-area: hero-btn; */
		grid-column: 8/-1;
		grid-row: 3/5;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.4rem;
		border-radius: 1rem;
		color: var(--fc-light);
		background: var(--orange-100);
		min-width: 160px;
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
		grid-template-areas: 'aside aside aside main main main main main';
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}

	aside {
		grid-area: aside;
	}
	main {
		grid-area: main;
		padding-inline: 1rem;
	}

	/* Accordion */

	.no-course {
		position: relative;
		display: flex;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--red-200);
		& p {
			margin: 0;
			margin-bottom: 0.5rem;
			color: var(--fc-main);
		}
		& .content {
			margin-right: 2rem;
		}
		& .nlr-link {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			color: var(--red);
			&:first-child {
				margin-bottom: 1rem;
			}
			& p {
				text-align: right;
				font-size: var(--sm);
				line-height: 1;
				margin: 0;
				margin-bottom: 0.5rem;
				color: var(--fc-main);
			}
			& a {
				display: flex;
				justify-content: end;
			}
		}
		& .dots {
			color: var(--clr-red);
			/* transform: rotate(180deg); */
		}
	}
	.accordion_item {
		/* --_base-color-private: var(BASE COLOR, FALLBACK COLOR); */
		--item-color: var(--purple-800); /* default MAIN color */
		--_base-color-private: var(--item-color, var(--clr-base));
		/* changing value of `--item-color` will change colors of each child element that contain `--_base-color-private`  */
		margin-bottom: 1rem;
		background-color: var(--_bkc-color);
		border-radius: 1rem;
		background: color-mix(in oklab, var(--_base-color-private) 16%, white);
		& svg {
			& circle {
				stroke: var(--_base-color-private) !important;
			}
			& path {
				stroke: var(--_base-color-private) !important;
			}
		}
	}

	.accordion-header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& .accordion-header--link {
			/* --item-color: var(--clr-green); */
			text-decoration: none;
			color: color-mix(in oklab, var(--_base-color-private) 80%, black);
			font-size: 1.4rem;
			font-family: var(--ff-gilroy-m);
			transition: all 0.3s ease-in-out;
			&:hover {
				text-decoration: underline;
				color: color-mix(in oklab, var(--_base-color-private) 100%, white);
			}
		}
		& p:first-child {
			margin-bottom: 0;
			font-size: 1.4rem;
			color: color-mix(in oklab, var(--_base-color-private) 100%, white);
		}

		& p:not(:first-child) {
			margin: 0;
			color: color-mix(in oklab, var(--_base-color-private) 100%, white);
			/* margin-bottom: 0.5rem; */
			font-size: var(--sm);
		}
		& p:nth-child(2) {
			color: color-mix(in oklab, var(--_base-color-private) 85%, white);
			margin-bottom: 0.5rem;
		}

		& .city {
			color: color-mix(in oklab, var(--_base-color-private) 60%, white);
			font-size: 1rem;
		}
		& .datetime {
			font-size: var(--sm);
			& p {
				margin: 0;
				color: color-mix(in oklab, var(--_base-color-private) 80%, black);
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
			transition: all 0.3s ease-in-out;
			& :hover {
				cursor: pointer;
			}
		}
		& .rotate {
			transform: rotate(180deg);
			transition: all 0.3s ease-in-out;
		}
	}

	.accordion-body {
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 0 0 1rem 1rem;
		& .detail {
			margin-bottom: 2rem;
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: color-mix(in oklab, var(--_base-color-private) 80%, black);
			}
			& .small {
				font-size: var(--sm);
				color: color-mix(in oklab, var(--_base-color-private) 80%, black);
			}
		}
		& .detail-header {
			font-size: 1.4rem;
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: color-mix(in oklab, var(--_base-color-private) 60%, black);
			}
			& .back-underline-tilt {
				position: relative;
				z-index: 1;
				display: inline-block;
				&::after {
					content: '';
					display: block;
					position: absolute;
					bottom: 20%;
					left: 0;
					width: 100%;
					height: 40px;
					border-bottom: 0.5em solid color-mix(in oklab, var(--_base-color-private) 40%, white); /*#f9dd94*/
					transform: skew(-12deg) translateX(10%);
					z-index: -1;
				}
			}
		}
		& .date-group {
			display: flex;
			justify-content: space-between;
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: color-mix(in oklab, var(--_base-color-private) 80%, white);
			}
		}
		& .detail-leader {
			display: flex;
			justify-content: space-between;
			padding-bottom: 1rem;
			& p {
				font-size: 1rem;
				margin: 0;
				color: color-mix(in oklab, var(--_base-color-private) 85%, white);
			}
			border-bottom: 1px solid color-mix(in oklab, var(--_base-color-private) 36%, white);
		}
		& .detail-schedule {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 1.4rem;
			& p {
				margin: 0;
				margin-bottom: 0.5rem;
				color: color-mix(in oklab, var(--_base-color-private) 80%, black);
			}
			& div {
				display: flex;
				justify-content: space-between;
				& span {
					margin: 0;
					margin-bottom: 0.5rem;
					color: color-mix(in oklab, var(--_base-color-private) 80%, black);
				}
				& .schedule-spacer {
					padding-inline: 0.5rem;
				}
			}
		}
		& .accordion-links {
			display: flex;
			flex-wrap: wrap-reverse;

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
				margin: 0;
				border-radius: 10rem;
				transition: all 0.3s linear;
				color: color-mix(in oklab, var(--_base-color-private) 80%, black);
				border: 2px solid color-mix(in oklab, var(--_base-color-private) 40%, white);
				background-color: color-mix(in oklab, var(--_base-color-private) 30%, white);
				&:hover {
					text-decoration: none;
					border: 2px solid color-mix(in oklab, var(--_base-color-private) 60%, white);
					background: color-mix(in oklab, var(--_base-color-private) 60%, white);
					color: var(--fc-white);
				}
			}
		}
		& .bold {
			font-family: var(--ff-gilroy-m);
		}
	}

	/* Media Query */
	@media screen and (max-width: 1280px) {
		/* .main__c {
			grid-template-columns: subgrid;
			grid-template-areas: 'aside aside aside main main main main main';
		} */
		.hero-img {
			grid-column: 1/-1;
			grid-row: 1/2;
		}
		.hero-data {
			grid-column: 1/7;
			grid-row: 3/5;
		}
		.hero-info__price {
			grid-column: 7/-1;
			grid-row: 3/4;
		}
		.link {
			grid-column: 7/-1;
			grid-row: 4/5;
		}
		.accordion .accordion-links a {
			margin-bottom: 1rem;
		}
		.no-course {
			display: block;
		}
		.no-course .nlr-link {
			flex-direction: row;
		}
		.nlr-link .dots {
			transform: rotate(180deg);
		}
	}

	@media screen and (max-width: 996px) {

		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas:
				'main main main main main main main main'
				'aside aside aside aside aside aside aside aside';
			/* 'aside aside main main main main main main' */
		}

		.no-course {
			display: block;
		}
	}
	@media (max-width: 768px) {
		.hero-img {
			grid-column: 1/-1;
			grid-row: 1/2;
		}
		.hero-data {
			grid-column: 1/-1;
			grid-row: 2/3;
		}
		.hero-info__price {
			grid-column: 1/5;
			grid-row: 3/5;
		}
		.link {
			grid-column: 5/-1;
			grid-row: 3/5;
		}

	}
	@media (max-width: 576px) {

		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas:
				'main main main main main main main main'
				'aside aside aside aside aside aside aside aside';
		}
	}
	@media (max-width: 480px) {

		.hero-img {
			grid-column: 1/-1;
			grid-row: 1/2;
		}
		.hero-data {
			grid-column: 1/-1;
			grid-row: 2/3;
		}
		.hero-info__price {
			grid-column: 1/-1;
			grid-row: 3/4;
		}
		.link {
			grid-column: 1/-1;
			grid-row: 4/5;
		}
	}
</style>
