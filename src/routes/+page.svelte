<script>
	// import Carousel_01 from '$lib/components/Carousel_01.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
	import SliderMain from '$lib/components/Slider_main.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import DotsCorner from '$lib/components/icons/DotsCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

	// import { formatDate, formatTime12, monthNameDateYear } from '$lib/utils/datehelpers.js';
	export let data;
	let { logos, slides } = data;
	// console.log('🚀 ~ file: +page.svelte:11 ~ slides:', slides);
	// console.log("🚀 ~ file: +page.svelte:11 ~ logos:", logos)
</script>

<div class="page__c">
	<div class="hero">
		<div class="title">
			<!-- <span class="subtitle">SHEP</span> -->
			<h1><span>The place where your mental health flourishes</span></h1>
			<p>We help building a healthy, loving, socially-just and sustainable way of living</p>
		</div>
		<div class="img">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/1a823e800e23ac51c17affffb8858b6248869609-800x533.jpg"
				alt="pinky theme"
			/>
		</div>
		<div class="section-sm">
			<div class="header__c">
				<div class="txt__w">
					<h4>Who Are We</h4>
					<p>
						SHEP is a unique, not-for-profit, community-based training and development organisation
					</p>
				</div>
				<a href="/about" class="link-and-txt__w">
					<span>More about us</span>
					<LinkCircle width={56} height={56} />
				</a>
			</div>

			<img
				src="https://cdn.sanity.io/images/gkez65br/production/8e3acee681de61aa2a8d5ea3656c553dfcd7269f-568x673.jpg"
				alt=""
			/>
		</div>
	</div>

	<div class="links-and-slider">
		<div class="links">
			<a href="./courses" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b3ebd0" />
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

			<a href="./trainings" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
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
			<a href="./blog/counselling/shep-counselling" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#ffdcf8" />
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
			<a href="./advocacy" class="decorative_link__c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#fac7a3" />
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
				src="https://cdn.sanity.io/images/gkez65br/production/e22f9e770dc564915d3eceb55450eb06c24ecba0-849x829.jpg"
				alt=""
			/>
		</div>
		<div class="card-mission">
			<div class="body">
				<h2 class="body-header">Our Mission</h2>
				<p>
					In solidarity and partnership with others we seek to foster the well-being of people,
					families, communities and the wider world and to contribute to building a healthy, loving,
					socially-just and sustainable way of living
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
					<div>
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
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
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
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Collaborative Partners</h3>
						<p>who help us to provide courses across Ireland</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</a>
		</div>
	</div> 
	<div class="stories">
		<div class="info">
			<div>
				<h2 class="page-header">Mental Health & Wellbeing</h2>
				<p>
					When it comes to mental health, we all have our own unique stories to tell. But no matter
					what we are going through, there are other people experiencing it too.
				</p>
				<!-- <p>Personal Stories</p> -->
				<p>
					Read personal stories from community members who've shared how they managed to find their
					way through difficult times.
				</p>
			</div>
			<div class="card-footer">
				<a class="btn-link" href="./stories">
					<LinkCircle width={56} height={56} />
				</a>
			</div>
			<!-- <p>Reading their stories of recovery can help you imagine your own journey.</p> -->
		</div>
		<div class="sec-img">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/1c2329656e503c3c7f9a503f36bdeec39f143db3-695x522.jpg?w=600&fit=max&auto=format"
				alt="Mindful woman portrait"
			/>
		</div>
	</div>
	<div class="scroller">
		<!-- <h4 class="h1">Our partners</h4> -->
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
				<h2 class="page-header">Our Activities</h2>
				<p>
					When it comes to mental health, we all have our own unique stories to tell. But no matter
					what we are going through, there are other people experiencing it too.
				</p>
				<p>Reading their stories of recovery can help you imagine your own journey.</p>
			</div>
			<div class="card-footer">
				<a class="btn-link" href="./courses">
					<LinkCircle width={56} height={56} />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'data data data img img img img';
		grid-column: 1/-1;
		/* grid-row: 1/-1; */
		gap: 1rem;
		margin-bottom: 3rem;

		& .title {
			grid-area: hero;
			display: grid;
			grid-template-columns: subgrid;
			grid-column: 1 / span 3;
			display: flex;
			flex-direction: column;
			justify-content: start;
			z-index: 1;
			grid-column: 1/4;
			grid-row: 1/-1;
			padding-top: 3rem;
			& .subtitle {
				font-size: var(--sm);
				/* color: var(--gray-3); */
				color: var(--gray-500);
				margin-bottom: 1rem;
			}
			& h1 {
				margin: 0;
				margin-bottom: 2rem;
				/* text-align: right; */
				& span {
					font-size: clamp(1.953rem, calc(1.6rem + 1vw), 3.52rem);
					padding: 0.25em 0.25em;
					border-radius: 0.65rem;
					/* font-family: var(--ff-gilroy-l); */
					line-height: 1.25;
					/* text-transform: uppercase; */
					background: var(--green-100);
					-webkit-box-decoration-break: clone;
					-o-box-decoration-break: clone;
					box-decoration-break: clone;
				}
			}
			& p {
				margin: 0;
				font-size: var(--sm);
				color: var(--gray-500);
				max-width: 24ch;
			}
		}
		& .img {
			position: relative;
			grid-column: 2 / span 5;
			grid-row: 1/-1;
			& img {
				border-radius: 1rem;
				display: block;
				/* position: absolute; */
				/* grid-column: 2 / span 4; */
				width: 100%;

				aspect-ratio: 2.6/2;
				object-fit: cover;
				/* aspect-ratio: 1.2/1; */
			}
		}
		& .section-sm {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: end;
			grid-column: 7/-1;
			& .header__c {
				display: flex;
				gap: 1rem;
			}
			& .link-and-txt__w {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: end;
				text-decoration: none;
				gap: 1rem;
				& span {
					font-size: var(--xs);
					color: var(--gray-900);
					font-family: var(--ff-gilroy-smb);
					max-width: 10ch;
					line-height: 1;
					text-align: right;
				}
			}
			& img {
				display: block;
				width: 100%;
				object-fit: cover;
				aspect-ratio: 1/1;
				border-radius: 1rem;
			}
			& h4 {
				margin: 0;
				margin-bottom: 0.5rem;
				display: inline-block;
				/* text-transform: uppercase; */
				/* &:after {
					content: '';
					display: block;
					width: 5rem;
					height: 2px;
					background: var(--gray-500);
					border-radius: 1rem;
					margin-bottom: 0.5rem;
				} */
			}
			& p {
				margin: 0;
				margin-bottom: 2rem;
				font-size: var(--sm);
				color: var(--gray-500);
				max-width: 32ch;
			}
		}
	}
	.links-and-slider {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: ' links links links slider slider slider slider slider';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;
		& .links {
			grid-area: links;
		}
		& .slider__c {
			/* position:relative; */
			grid-area: slider;
			display: block;

			/* display: block; */
			/* width: 100%; */
			/* height: 100%; */
		}
	}

	.mission {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas:
			' img img img img --- card card card '
			' img img img img --- links links links ';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 3rem;
		& .img_w {
			grid-area: img;
			& img {
				width: 100%;
				height: 100%;
				/* aspect-ratio: 2/1; */
				object-fit: cover;
				border-radius: 0.5rem;
				/* min-height: 360px; */
				display: block;
			}
		}
		& .card-mission {
			grid-area: card;
			background-color: var(--blue-50);
			padding: 2.4rem;
			border-radius: 1rem;
			& .aside * p {
				padding: 0;
				margin: 0;
			}
			& .body {
				height: min-content;
				& p {
					font-size: var(--sm);
					margin-bottom: 1rem;
				}
			}
			& .footer {
				display: flex;
				gap: 2rem;
				& img {
					border-radius: 1rem;
				}
				& .aside {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					& img {
						display: block;
					}
					& p:last-child {
						font-size: var(--sm);
						color: var(--gray-400);
					}
				}
			}
		}
		& .links {
			grid-area: links;
			/* border-bottom: 1px solid #ccc; */
			/* color: var(--clr-gray-400); */
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
			background: var(--orange-300);
			border-radius: 0.5rem;
		}
		& .card-footer {
			display: flex;
			justify-content: flex-end;
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
			/* background: var(--blue-50); */
			border-radius: 0.5rem;
		}
		& .scroller {
			grid-area: scroller;
			/* border-bottom: 1px solid #ccc; */
			/* color: var(--clr-gray-400); */
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
			background: var(--purple-100);
			border-radius: 0.5rem;
			& .card-footer {
				display: flex;
				justify-content: flex-end;
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
				/* min-height: 360px; */
				display: block;
			}
		}
	}

	/* .card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		grid-area: card;
		background: var(--gray-1);
		padding: 2.4rem;
		border-radius: 0.5rem;
		& .card-body {
			height: min-content;
			& p {
				font-size: var(--sm);
				&:first-child {
					font-family: var(--ff-gilroy-smb);
					margin: 0;
					margin-bottom: 1rem;
					max-width: 10ch;
					line-height: 1;
					font-size: 1.2rem;
				}
			}
		}
		& .card-footer {
			display: flex;
			justify-content: flex-end;
		}
	} */
	/* Media Query */
	/**
* 640px - sm - small devices (mobile) 
* 768px - md - medium devices (tablet)
* 1024px - lg - large devices (desktops)
* 1280px - xl - extra large devices (large desktops)
* 1536px - xxl - extra extra large devices (larger desktops)
*/
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
			/* border-bottom: 1px solid #ccc; */
		}
	}
	@media (max-width: 1024px) {
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
	}
</style>
