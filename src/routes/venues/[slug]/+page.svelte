<script>
	// @ts-nocheck
	import ArrowOpen from '$lib/components/icons/ArrowOpen.svelte';
	import DotsCorner from '$lib/components/icons/DotsCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Location from '$lib/components/icons/Location.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import { singleEventStore } from '$lib/stores/forms';
	import { formatTime12, monthNameDate, monthNameDateYear } from '$lib/utils/datehelpers.js';
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let data;

	let isTraining = false;

	const {
		venue_name,
		address_1,
		address_2,
		city,
		eircode,
		email,
		phone,
		website,
		excerpt,
		content,
		logo,
		image
	} = data.venue;
	const upcoming = data.allUpcomingEvents;

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

	let newsletterInput = undefined;
	onMount(() => {
		newsletterInput = document.getElementById('newsletter');
	});
	function signupFocus() {
		newsletterInput.focus();
	}
</script>

<svelte:head>
	<title>{venue_name}</title>
	<meta name="description" content={excerpt} />
</svelte:head>

<div class="page__c">
	<div class="hero">
		<div class="hero-data">
			<h1>{venue_name}</h1>
			<p>
				{excerpt}
			</p>
		</div>
		<div class="hero-img">
			<img src={image} alt="cover" />
		</div>
		<div class="hero-sm-box-top">
			<p class="small-title">Address</p>

			<p>{address_1}</p>
			{#if address_2 != null}
				<p>{address_2}</p>
			{:else}
				<p>-</p>
			{/if}
			<p>{city}</p>
			<a href="https://www.google.com/maps/place/{eircode}" target="_blank"
				><span><Location width={24} height={24} /></span><span>View on Map</span></a
			>
		</div>
		<div class="hero-sm-box-bottom">
			<p class="small-title">Our Website</p>
			<p class="limited-char">To get more info about our activities visit our website</p>
			<a href="https://{website}" target="_blank">
				<div class="icon link">
					<LinkCircle width={48} height={48} />
				</div>
			</a>
		</div>
	</div>
	<!-- wapper start -->
	<div class="main__c">
		<!-- aside -->
		<aside>
			<!-- Courses -->
			{#if upcoming.length > 0}
				<h3>Apply for</h3>
			{/if}
			{#if upcoming.length == 0}
				<div class="no-course">
					<div class="content">
						<p>
							We are sorry but currently there are no SHEP courses open for applications in our
							facilities.
						</p>
						<p>
							You can sign to our newsletter to be notified when new Shep courses will open for
							applications.
						</p>
					</div>
					<div class="nlr-link">
						<div class="dots">
							<DotsCorner width={24} height={24} currentColor={'hsl(var(--hsl-white))'} />
						</div>
						<div class="newsletter-link">
							<p>Sign to newsletter</p>
							<a href="#newsletter-signup" on:click={() => signupFocus()}>
								<LinkCircle width={48} height={48} />
							</a>
						</div>
					</div>
				</div>
			{:else}
				<div class="accordion">
					{#each upcoming as item, i}
						<div
							class:training={item.generalType == 'training'}
							class:course={item.generalType == 'course'}
							class="accordion_item card"
							role="button"
							tabindex={i}
							on:click={() => toggleActive(i)}
							on:keydown={() => toggleActive(i)}
						>
							<div class="accordion-header">
								<div class="data">
									<div class="location">
										{#if item.event.type == 'Short course'}
											<a class="accordion-header--link" href="/courses/{item.event.slug.current}"
												>{item.event.title}</a
											>
										{:else}
											<a class="accordion-header--link" href="/trainings/{item.event.slug.current}"
												>{item.event.title}</a
											>
										{/if}
										<p>{item.event.type}</p>
										<p>{monthNameDateYear(item.in_person.start_date)}</p>
										<p>{formatTime12(item.in_person.start_date)}</p>
									</div>
								</div>
								<div class="icon" class:rotate={show == i}>
									<ArrowOpen width={48} height={48} />
								</div>
							</div>
							{#if show == i}
								<div class="body accordion-body" transition:slide>
									<div class="detail">
										<!-- header -->
										<div class="detail-header">
											<p class="back-underline-tilt">In Person</p>
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
												<p class="small">
													<span class="bold">Group:</span>
													{item.in_person.group}
												</p>
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
										<p>We do not currently offer an online version for this course.</p>
									{:else}
										<div class="detail">
											<!-- header -->
											<div class="detail-header">
												<p class="back-underline-tilt">Online</p>
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
													<p class="small">
														<span class="bold">Group:</span>
														{item.online.group}
													</p>
												</div>
												<div class="detail-schedule">
													<p>{item.online.weekday}</p>
													<div>
														<span>{formatTime12(item.online.start_date)}</span>
														<span class="schedule-spacer">-</span>
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
											{/if}
										</div>
									{/if}
									<div class="accordion-links">
										<!-- download brochure -->
										<a href={item.form.asset} target="_blank">
											<span>download form</span>
										</a>
										<!-- apply online -->
										<!-- "type": "Short course" -->
										{#if item.event.type == 'Short course'}
											<a
												href="/courses/{item.event.slug.current}/form"
												on:click={() => storeCourseData(item)}
											>
												<span>apply online</span>
											</a>
										{:else if item.event.type == 'Facilitator Training' || item.event.type == 'Fundation Training'}
											<!-- "type": "Fundation Training" - "type": "Facilitator Training", -->
											<a
												href="/trainings/{item.event.slug.current}/form"
												on:click={() => storeCourseData(item)}
											>
												<span>apply online</span>
											</a>
										{/if}
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</aside>
		<main>
			<article>
				<PortableText
					value={content}
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
			</article>
		</main>
	</div>
</div>

<style>
	/* Hero */
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}
	.hero-data {
		grid-column: 1 / 4;
		grid-row: 1/5;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		border-radius: 1rem;
		& h1 {
			margin-bottom: 1rem;
		}
		& p {
			color: hsl(var(--hsl-gray) / 0.75);
		}
	}
	.hero-img {
		grid-column: 4 / 8;
		grid-row: 1/5;
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
	.hero-sm-box-top {
		grid-column: 8/-1;
		grid-row: 1/3;
		padding: 1.4rem;
		border-radius: 1rem;
		& p {
			margin: 0;
			font-size: var(--sm);
		}
		& .small-title {
			position: relative;
			margin-top: 0;
			margin-bottom: 1.2rem;
			font-family: var(--ff-fkg-bold);
			font-size: var(--sm);
			width: fit-content;
			text-transform: uppercase;
			&::after {
				content: '';
				position: absolute;
				bottom: -4px;
				left: 0;
				width: 100%;
				height: 1px;
				background: hsl(var(--hsl-gray) / 0.25);
			}
		}
		& a {
			display: flex;
			align-items: end;
			gap: 0.5rem;
			text-decoration: none;
			line-height: 1;
			&:last-child {
				margin-top: 1.2rem;
				font-size: var(--sm);
				& svg {
					& path {
						stroke: hsl(var(--hsl-red));
					}
				}
			}
		}
	}

	.hero-sm-box-bottom {
		grid-column: 8/-1;
		grid-row: 3/5;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.4rem;
		border-radius: 1rem;
		min-width: 160px;
		& p {
			margin: 0;
			font-size: var(--sm);
		}
		& .small-title {
			position: relative;
			margin-top: 0;
			margin-bottom: 1.2rem;
			font-family: var(--ff-fkg-bold);
			font-size: var(--sm);
			text-transform: uppercase;

			width: fit-content;
			&::after {
				content: '';
				position: absolute;
				bottom: -4px;
				left: 0;
				width: 100%;
				height: 1px;
				background: hsl(var(--hsl-gray) / 0.25);
			}
		}
	}

	.limited-char {
		width: 16ch;
	}

	.icon {
		display: flex;
		justify-content: right;
		align-items: center;
	}

	/* === MAIN CONTENT === */

	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside aside aside main main main main main ';
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
		background: hsl(var(--hsl-red) / 0.8);
		& p {
			margin: 0;
			margin-bottom: 0.5rem;
			color: hsl(var(--hsl-white));
		}
		& .content {
			margin-right: 2rem;
		}
		& .nlr-link {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			&:first-child {
				margin-bottom: 1rem;
			}
			& p {
				text-align: right;
				font-size: var(--sm);
				line-height: 1;
				margin: 0;
				margin-bottom: 0.5rem;
				/* color: var(--fc-main); */
			}
			& a {
				display: flex;
				justify-content: end;
			}
		}
		& .dots {
			color: var(--clr-red);
		}
	}
	.newsletter-link {
		& svg {
			& circle {
				stroke: hsl(var(--hsl-white)) !important;
			}
			& path {
				fill: hsl(var(--hsl-white)) !important;
			}
		}
	}
	.course {
		--item-color: hsl(var(--hsl-brand));
		--_base-color-private: var(--item-color, var(--gray-500));
		margin-bottom: 1rem;
		background-color: var(--item-color);
		border-radius: 0.5rem;
		background: color-mix(in oklab, var(--item-color) 20%, white);
	}
	.training {
		--item-color: hsl(var(--hsl-purple));
		--_base-color-private: var(--item-color, var(--gray-500));
		margin-bottom: 1rem;
		background-color: var(--item-color);
		border-radius: 0.5rem;
		background: color-mix(in oklab, var(--item-color) 20%, white);
	}

	.accordion-header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& .accordion-header--link {
			display: inline-block;
			line-height: initial;
			text-decoration: none;
			color: color-mix(in oklab, var(--_base-color-private) 80%, black);
			font-size: 1.2rem;
			font-family: var(--ff-fkg-bold);
			transition: all 0.3s ease-in-out;
			&:hover {
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
		& .icon {
			display: flex;
			justify-content: right;
			align-items: center;
			transition: all 0.3s ease-in-out;
			& :hover {
				cursor: pointer;
			}
			& svg {
				& circle {
					stroke: color-mix(in oklab, var(--_base-color-private) 80%, black) !important;
				}
				& path {
					stroke: color-mix(in oklab, var(--_base-color-private) 80%, black) !important;
				}
			}
		}
		& .rotate {
			transform: rotate(180deg);
			transition: all 0.3s ease-in-out;
		}
	}
	.icon.link:hover {
		transition: 0.3s ease;
		& circle {
			stroke: hsl(var(--hsl-brand)) !important;
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
			font-family: var(--ff-fkg-bold);
		}
	}

	/* Media Query */
	@media screen and (max-width: 1280px) {
		.content {
			grid-template-columns: subgrid;
			grid-template-areas: 'aside aside aside main main main main main ';
		}
		.hero-img {
			grid-column: 1/-1;
			grid-row: 1/2;
		}
		.hero-data {
			grid-column: 1/7;
			grid-row: 3/5;
		}
		.hero-sm-box-top {
			grid-column: 7/-1;
			grid-row: 3/4;
		}
		.hero-sm-box-bottom {
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
		.hero-sm-box-top {
			grid-column: 1/5;
			grid-row: 3/5;
		}
		.hero-sm-box-bottom {
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
		.hero-sm-box-top {
			grid-column: 1/-1;
			grid-row: 3/4;
		}
		.hero-sm-box-bottom {
			grid-column: 1/-1;
			grid-row: 4/5;
		}
	}
</style>
