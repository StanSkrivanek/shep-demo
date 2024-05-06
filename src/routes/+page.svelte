<script>
	import Scroller from '$lib/components/Scroller.svelte';
	import SliderMain from '$lib/components/Slider_main.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import LeavesCorner from '$lib/components/icons/LeavesCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/ToastStore.js';
	
	export let form;

	export let data;
	
	let { logos, slides } = data;

	$: if (form?.success) {
		toast.send({
			msg: 'Thank you for your application, we will be in contact soon',
			type: 'success'
		});

		goto('/');
	}
</script>

<div class="page__c">
	<div class="hero">
		<div class="title">
			<h1>We help building a healthy, loving, socially-just and sustainable way of living</h1>
		</div>
		<div class="img__w">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/1a823e800e23ac51c17affffb8858b6248869609-800x533.jpg"
				alt="women portrait"
			/>
		</div>
	</div>

	<div class="links-and-slider">
		<div class="links">
			<a href="./courses/overview" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-red) / .75)" />
					</div>
					<div class="link-body">
						<h3>Short Courses</h3>
						<p>In personal development and social awareness</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</a>

			<a href="./trainings/overview" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-purple) / .75)" />
					</div>
					<div class="link-body">
						<h3>Intensive Training</h3>
						<p>From fundation to specialised practitioner</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</a>
			<a href="/counselling" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-cyan) / .75)" />
					</div>
					<div class="link-body">
						<h3>Counselling</h3>
						<p>Confidential Low-cost counselling programme</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</a>
			<a href="/advocacy" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-blue) / .75)" />
					</div>
					<div class="link-body">
						<h3>Advocacy Project</h3>
						<p>Advocacy support and trainings</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</a>
		</div>
		<div class="slider__c">
			<SliderMain {slides} duration={5000} />
		</div>
	</div>

	<div class="mission">
		<div class="img_w">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/94d629ddacb12c2af68762fa41f02b30d812ab84-849x829.webp"
				alt=""
			/>
		</div>
		<div class="card-mission">
			<div class="content__w">
				<div class="body">
					<h2 class="section-header">Our Mission</h2>
					<p>
						In solidarity and partnership with others we seek to foster the well-being of people,
						families, communities and the wider world and to contribute to building a healthy,
						loving, socially-just and sustainable way of living
					</p>
				</div>
				<div class="footer">
					<img
						src="https://cdn.sanity.io/images/gkez65br/production/bc7300f90baa9a3e80cf1951d54342d15577ea71-225x225.jpg"
						alt="director"
					/>
					<div class="aside">
						<img
							src="https://cdn.sanity.io/images/gkez65br/production/0d2dea9c07ff8295c035cb63abf6c6b147e95133-654x753.svg"
							alt="logo"
						/>
						<div class="credits__w">
							<p>Dr. John Doe</p>
							<p>Director</p>
						</div>
					</div>
				</div>
			</div>
			<div class="links">
				<a href="./team" class="decorative_link__c">
					<div class="link-header">
						<div class="dots">
							<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-brand) / .75)" />
						</div>
						<div class="link-body">
							<h3>Our Team</h3>
							<p>is here for you</p>
						</div>
					</div>
					<div class="link">
						<Arrow width={24} height={24} />
					</div>
				</a>
				<a href="./venues" class="decorative_link__c">
					<div class="link-header">
						<div class="dots">
							<LeavesCorner width={24} height={24} currentColor="hsl(var(--hsl-brand) / .75)" />
						</div>
						<div class="link-body">
							<h3>Our Partners</h3>
							<p>who help us to provide courses across Ireland</p>
						</div>
					</div>
					<div class="link">
						<Arrow width={24} height={24} />
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="stories">
		<div class="info">
			<div>
				<h2 class="section-header">Wellbeing</h2>
				<p>
					When it comes to mental health, we all have our own unique stories to tell. But no matter
					what we are going through, there are other people experiencing it too.
				</p>
				<p>
					Read personal stories from community members who've shared how they managed to find their
					way through difficult times.
				</p>
			</div>
			<div class="card-footer">
				<a class="btn-link" href="/blog/personal-stories">
					<LinkCircle width={48} height={48} />
				</a>
			</div>
		</div>
		<div class="sec-img">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/1c2329656e503c3c7f9a503f36bdeec39f143db3-695x522.jpg?w=600&fit=max&auto=format"
				alt="Mindful woman portrait"
			/>
		</div>
	</div>
	<div class="scroller">
		<Scroller {logos} duration={40} gap={1} direction={'forwards'} />
	</div>
	<div class="activities">
		<div class="sec-img">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/58100e36e4fd7054abe2a5725247f1ca97b6fbdf-1024x512.jpg?w=900&fit=max&auto=format"
				alt="Mindful woman portrait"
			/>
		</div>
		<div class="info">
			<div>
				<h2 class="section-header">Our Activities</h2>
				<p>
					Besides our core initiatives, which include a unique training program, cost-effective
					counseling, and advocacy endeavors, SHEP manages a range of strategically developed
					projects aimed at furthering our mission.
				</p>
			</div>
			<div class="card-footer">
				<a class="btn-link" href="./activities">
					<LinkCircle width={48} height={48} />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		color: var(--clr-brand);
		margin-bottom: 1rem;
	}
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'data data data img img img img img ';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;

		& .title {
			grid-area: hero;
			grid-template-columns: subgrid;
			display: flex;
			flex-direction: column;
			justify-content: start;
			z-index: 1;
			grid-column: 1/4;
			grid-row: 1/-1;
			padding-top: 3rem;
			& .subtitle {
				font-size: var(--sm);
				color: var(--gray-500);
				margin-bottom: 1rem;
			}
			& h1 {
				margin: 0;
				margin-bottom: 2rem;
				color: var(--fc-mid);

				/* text-align: right; */
				& span {
					font-size: clamp(1.953rem, calc(1.6rem + 1vw), 3.52rem);
				}
			}
			& p {
				margin: 0;
				font-size: var(--sm);
				color: var(--gray-500);
				max-width: 24ch;
			}
		}
		& .img__w {
			position: relative;
			grid-column: 4/ -1;
			grid-row: 1/-1;
			& img {
				border-radius: 0.5rem;
				display: block;
				width: 100%;
				height: 100%;
				aspect-ratio: 2/1;
				object-fit: cover;
			}
		}
	}

	.links-and-slider {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'slider slider slider slider slider  links links links ';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;

		& .links {
			grid-area: links;
			& a:hover {
				transition: 0.3s ease;
				& circle {
					stroke: hsl(var(--hsl-brand)) !important;
				}

				& path {
					fill: hsl(var(--hsl-brand)) !important;
				}
			}
		}

		& .slider__c {
			grid-area: slider;
			display: block;
		}
	}

	.mission {
		display: grid;
		grid-template-columns: subgrid;

		grid-template-areas: ' img img img card card card card card ';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;
		& .img_w {
			grid-area: img;
			& img {
				display: block;
				width: 100%;
				height: 100%;
				aspect-ratio: 2/1;
				object-fit: contain;

				border-radius: 0.5rem;
			}
		}
		& .card-mission {
			grid-area: card;
			padding: 2.4rem;
			border-radius: 0.5rem;
			background: var(--clr-main-white);
			& p {
				padding: 0;
				margin: 0;
			}
			& .content__w {
				display: flex;
				flex-direction: row;
				gap: 1rem;

				@media screen and (max-width: 640px) {
					display: block;
				}
			}
			& .body {
				height: min-content;
				flex-basis: 50%;

				& p {
					font-size: var(--m);
					margin-bottom: 1rem;
					max-width: 30ch;
				}
			}
			& .footer {
				position: relative;
				display: flex;
				gap: 2rem;
				margin-bottom: 2rem;
				flex-basis: 50%;
				& > img {
					width: 100%;
					aspect-ratio: 1/1;
					object-fit: cover;
					border-radius: 0.5rem;
					display: block;
				}
				& .aside {
					position: absolute;
					/* width: 100%; */
					display: flex;
					bottom: 0;
					right: 0;
					padding: 1rem;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					& img {
						width: 60px;
						height: 60px;
						display: block;
					}
					& .credits__w {
						padding: 0.25rem 0.5rem;
						background-color: hsl(var(--hsl-gray) / 0.5);
						color: hsl(var(--hsl-brand));
						border-radius: 0.5rem;
					}
					& p {
						font-size: var(--sm);
						color: var(--fc-main);
					}
				}
			}
			& .links {
				grid-area: links;
				display: flex;
				gap: 1rem;
				margin-bottom: 0;
				& a {
					padding-bottom: 0.5rem;
					flex-basis: 50%;
					border-bottom: none;
					&:hover {
						transition: 0.3s ease;
						& path {
							fill: hsl(var(--hsl-brand)) !important;
						}
					}
				}
				@media screen and (max-width: 640px) {
					flex-direction: column;
				}
			}
		}
	}

	.stories {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'intro intro intro img img img img img ';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;
		& .sec-img {
			grid-area: img;
			& img {
				width: 100%;
				height: 100%;
				aspect-ratio: 2/1;
				object-fit: cover;
				border-radius: 0.5rem;
				display: block;
			}
		}

		& .info {
			grid-area: intro;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 2.4rem;

			background: var(--clr-main-white);
			border-radius: 0.5rem;
		}
		& .card-footer {
			display: flex;
			justify-content: flex-end;
			& svg:hover {
				transition: 0.3s ease;
				& circle {
					stroke: hsl(var(--hsl-brand)) !important;
				}
			}
		}
	}

	.scroller {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas:
			'intro intro intro intro intro intro intro intro'
			'scroller scroller scroller scroller scroller scroller scroller scroller';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;
		& h4 {
			grid-area: intro;
			padding: 2.4rem;
			text-align: center;
			border-radius: 0.5rem;
		}
		& .scroller {
			grid-area: scroller;
		}
	}

	.activities {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: ' img img img img img intro intro intro';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;

		& .info {
			grid-area: intro;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 2.4rem;
			background: var(--clr-main-white);
			border-radius: 0.5rem;
			& .card-footer {
				display: flex;
				justify-content: flex-end;
			}
			& svg:hover {
				transition: 0.3s ease;
				& circle {
					stroke: hsl(var(--hsl-brand)) !important;
				}

				& path {
					fill: hsl(var(--hsl-brand)) !important;
				}
			}
		}
		& .sec-img {
			grid-area: img;
			& img {
				width: 100%;
				height: 100%;
				aspect-ratio: 2/1;
				object-fit: cover;
				border-radius: 0.5rem;

				display: block;
			}
		}
	}

	.section-header {
		font-weight: 600;
		margin-bottom: 1rem;
	}

	@media (max-width: 1280px) {
		.links-and-slider {
			/* position: relative; */
			display: grid;
			grid-template-columns: subgrid;
			grid-template-areas:
				' links links links links links links links links'
				' slider slider slider slider slider slider slider slider';
			grid-column: 1/-1;
			grid-template-rows: 1fr 1.6fr;
			gap: 1rem;
		}
		.links {
			grid-area: links;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 1024px) {
		.mission {
			grid-template-areas:
				'img img img img img img img img'
				' card card card card card card card card ';
		}
		.stories {
			grid-template-areas: ' intro intro intro intro img img img img';
		}
		.activities {
			grid-template-areas: ' img img img img intro intro intro intro';
		}
	}

	@media (max-width: 768px) {
		.links {
			grid-template-columns: 1fr;
		}
		.stories {
			grid-template-areas:
				'img img img img img img img img'
				'intro intro intro intro intro intro intro intro';
		}
		.activities {
			grid-template-areas:
				'img img img img img img img img'
				'intro intro intro intro intro intro intro intro';
		}
	}

	@media (max-width: 640px) {
		.hero {
			display: block;
			position: relative;
		}
		.hero .title h1 {
			max-width: 20ch;
		}
	}
</style>
