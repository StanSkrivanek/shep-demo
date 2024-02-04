<script>
	import ArrowOpen from '$lib/components/icons/ArrowOpen.svelte';
	import DotsCorner from '$lib/components/icons/DotsCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	import { formatTime12, monthNameDate, monthNameDateYear } from '$lib/utils/datehelpers';
	import { PortableText } from '@portabletext/svelte';
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let data;
	// console.log('🚀 ~ file: +page.svelte:12 ~ data:', data);
	const { title, excerpt, type, full_price, funded_price, main_img, content, brochure, slug } =
		data.course;
	const openForApplication = data.allOpenCourses;
	// console.log('🚀 ~ file: +page.svelte:3 ~ openForApplication:', openForApplication);

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
		// return{
		// 	duration,
		// 	css:(/** @type {number} */ t)=>{
		// 		const eased = cubicOut(t);
		// 		return `
		// 			transform: rotate(${eased * 180}deg);
		// 		`;
		// 	}
		// }
	}
		/**
	 * @param {any} node
	 */
		function storeCourseData(node) {
		console.log('🚀 ~ file: +page.svelte:65 ~ storeCourseData ~ node', node);
		localStorage.setItem('courseData', JSON.stringify(node));
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={excerpt} />
</svelte:head>

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
			{#if openForApplication.length == 0}
				<div class="no-course">
					<div class="content">
						<p>
							We are sorry but this course in not currently open for applications in any facilities.
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
					{#each openForApplication as item, i}
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
										<a class="accordion-header--link" href="/venues/{item.venue.slug.current}"
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
											<!-- footer - week day & time-->
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
										<!-- <a href="/courses/{slug}/form" on:click={()=> storeCourseData(item)}> -->
										<a href="/courses/{slug}/form">
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
		background: var(--green-100);
	}
	.hero-img {
		grid-area: hero-img;
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
		grid-area: hero-price;
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
		grid-area: hero-btn;
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

	/* .main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside aside aside main main main main ';
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	} */

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
		--_base-color-private: var(--item-color, var(--clr-base));
		/* changing value of `--item-color` will change colors of each child element that contain `--_base-color-private`  */
		--item-color: var(--purple-800);
		margin-bottom: 1rem;
		background-color: var(--_bkc-color);
		border-radius: 1rem;
		background: color-mix(in oklab, var(--_base-color-private) 16%, white);
	}

	.accordion-header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& .accordion-header--link {
			/* --item-color: var(--clr-green); */
			/* text-decoration: none; */
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
		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas: 'aside aside aside main main main main main ';
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
			/* 'aside aside main main main main main main' */
		}

		.no-course {
			display: block;
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
		/* .hero {
			grid-template-rows: repeat(4, minmax(100px, max-content));
			grid-template-areas: 'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
					'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-price hero-price hero-price hero-price hero-price hero-price hero-price hero-price'
					'hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn';
		} */
		.main__c {
			grid-template-columns: subgrid;
			grid-template-areas:
				'main main main main main main main main'
				'aside aside aside aside aside aside aside aside';
		}
	}
	@media (max-width: 480px) {
		.hero {
			grid-template-rows: repeat(4, minmax(100px, max-content));
			grid-template-areas:
				'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img'
				'hero-data hero-data hero-data hero-data hero-data hero-data hero-data hero-data'
				'hero-price hero-price hero-price hero-price hero-price hero-price hero-price hero-price'
				'hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn hero-btn';
		}
	}
</style>
