<script>
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import DotsCorner from '$lib/components/icons/DotsCorner.svelte';
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

	// import { formatDate, formatTime12, monthNameDateYear } from '$lib/utils/datehelpers.js';
	// export let data;
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
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/8e3acee681de61aa2a8d5ea3656c553dfcd7269f-568x673.jpg"
				alt=""
			/>
			<div>
				<h4>SHEP</h4>
				<p>
					SHEP is a unique, not-for-profit, community-based training and development organisation
				</p>
			</div>
		</div>
	</div>
	<div class="sec-2">
		<div class="links">
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Short Courses</h3>
						<p>In personal development and social awareness</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
			<div class="decorative_link_c">
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
			</div>
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Counselling</h3>
						<p>Confidential Low-cost counselling programme</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Advocacy Project</h3>
						<p>Advocacy support and trainings</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
		</div>
		<div class="slider">
			<div class="slider-img">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/37507325793fdabad0ffe8e210e91f92c0b70a0d-800x400.jpg?w=600"
					alt=""
				/>
			</div>
			<div class="card">
				<div class="card-body">
					<p>Personal Stories</p>
					<p>
						Read personal stories from community members who've shared how they managed to find
						their way through difficult times.
					</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href="./courses">
						<LinkCircle width={48} height={48} />
					</a>
				</div>
			</div>
			<!-- <div class="slider-content">
				<h3>Slider Title</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. labore praesentium! Ab numquam
					temporibus, odit error cum eveniet reiciendis iste ullam debitis.
				</p>
			</div> -->
		</div>
	</div>
	<div class="sec-3">
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
				<!-- <a class="btn-link" href="./courses">
					<LinkCircle width={48} height={48} />
				</a> -->
			</div>
		</div>
		<div class="links">
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Our Team</h3>
						<p>Confidential Low-cost counselling programme</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Collaborative Partners</h3>
						<p>In personal development and social awareness</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
			<div class="decorative_link_c">
				<div class="link-header">
					<div class="dots">
						<DotsCorner width={24} height={24} currentColor="#b9dcfa" />
					</div>
					<div class="link-body">
						<h3>Activities</h3>
						<p>Confidential Low-cost counselling programme</p>
					</div>
				</div>
				<div class="link">
					<Arrow width={24} height={24} />
				</div>
			</div>
		</div>
	</div>
	<div class="sec-4">
		<div class="intro">
			<h2 class="page-header">Mental Health & Wellbeing</h2>
			<p>
				When it comes to mental health, we all have our own unique stories to tell. But no matter
				what we are going through, there are other people experiencing it too.
			</p>
			<p>Reading their stories of recovery can help you imagine your own journey.</p>
		</div>
		<div class="sec-img">
			<img
				src="https://cdn.sanity.io/images/gkez65br/production/eaa33a15152a7fb201512082ab3743a29de28151-626x417.jpg?w=600&fit=max&auto=format"
				alt="Mindful woman portrait"
			/>
		</div>
		<div class="card">
			<div class="card-body">
				<p>Personal Stories</p>
				<p>
					Read personal stories from community members who've shared how they managed to find their
					way through difficult times.
				</p>
			</div>
			<div class="card-footer">
				<a class="btn-link" href="./courses">
					<LinkCircle width={48} height={48} />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* .container {
		display: grid;
		grid-column: 1/-1;
	} */
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'data data data img img img img';
		grid-column: 1/-1;
		/* grid-row: 1/-1; */
		gap: 1rem;
		margin-bottom: 5rem;

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
				color: var(--gray-3);
				margin-bottom: 1rem;
			}
			& h1 {
				margin: 0;
				margin-bottom: 1rem;
				/* text-align: right; */
				& span {
					padding: 0.25em 0.25em;
					border-radius: 0.65rem;
					/* font-family: var(--ff-gilroy-l); */
					line-height: 1.25;
					/* text-transform: uppercase; */
					background: var(--orange-sha-2);
					-webkit-box-decoration-break: clone;
					-o-box-decoration-break: clone;
					box-decoration-break: clone;
				}
			}
			& p {
				margin: 0;
				font-size: var(--sm);
				color: var(--gray-3);
				max-width: 24ch;
			}
		}
		& .img {
			position: relative;
			grid-column: 2 / span 5;
			grid-row: 1/-1;
			border-radius: 1rem;
			overflow: hidden;
			width:95%;
			/* padding-right: 2rem;  */
			& img {
				/* position: absolute; */
				/* grid-column: 2 / span 4; */
				width: 100%;
				height: 100%;
				aspect-ratio: 3/2;
				object-fit: cover;
				/* aspect-ratio: 1.2/1; */
			}
		}
		& .section-sm {
			display: flex;
			flex-direction: column;
			gap: 0;
			justify-content: space-between;
			grid-column: 7/-1;
			grid-row: 1/-1;
			& img {
				width: 100%;
				/* height: 100%; */
				/* aspect-ratio: 1/2; */
				object-fit: cover;
				border-radius: 1rem;
				margin-bottom: 1rem;
			}
			& h4 {
				margin: 0;
				/* margin-bottom: .5rem; */
				display: inline-block;
				&:after {
					content: '';
					display: block;
					width: 5rem;
					height: 2px;
					background: var(--clr-gray-600);
					border-radius: 1rem;
					margin-bottom: 0.5rem;
				}
			}
			& p {
				margin: 0;
				font-size: var(--sm);
				color: var(--gray-3);
				max-width: 32ch;
			}
		}
	}

	.sec-2 {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'links links links slider slider slider slider slider';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 5rem;
		& .links {
			grid-area: links;
			/* border-bottom: 1px solid #ccc; */
		}
		& .slider {
			grid-area: slider;
			display: flex;
			/* display: grid;
			grid-template-columns: subgrid;
			grid-template-areas: 'img img content content content'; */
			gap: 1rem;
			& .slider-img {
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
			& .card {
				grid-area: content;
				display: flex;
				flex-direction: column;
				justify-content: center;
				& h3 {
					margin: 0;
					margin-bottom: 1rem;
				}
				& p {
					margin: 0;
					font-size: var(--sm);
					color: var(--gray-3);
				}
			}
		}
	}

	.sec-3 {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas:
			'img img img img --- card card card	'
			'img img img img --- links links links';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 5rem;
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
			background-color: var(--blue-sha-2);
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
						color: var(--gray-3);
					}
				}
			}
		}
		& .links {
			grid-area: links;
			/* border-bottom: 1px solid #ccc; */
		}
	}
	.sec-4 {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'intro intro intro img img img card card';
		grid-column: 1/-1;
		gap: 1rem;
		margin-bottom: 5rem;
	}

	.intro {
		grid-area: intro;
		padding: 2.4rem;
		background: var(--green-light);
		border-radius: 0.5rem;
	}
	.sec-img {
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

	.card {
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
	}
	/* Media Query */
	/**
* 640px - sm - small devices (mobile) 
* 768px - md - medium devices (tablet)
* 1024px - lg - large devices (desktops)
* 1280px - xl - extra large devices (large desktops)
* 1536px - xxl - extra extra large devices (larger desktops)
*/
	@media (max-width: 1280px) {
		.sec-4 {
			grid-template-areas:
				'img img img img intro intro intro intro '
				' img img img img card card card card';
		}
	}
	@media (max-width: 768px) {
		.sec-2 {
			/* magic */
		}
		.sec-4 {
			grid-template-areas:
				'intro intro intro intro intro intro intro intro'
				'img img img img card card card card';
		}
	}
	@media (max-width: 480px) {
		.sec-2 {
			/* magic */
		}
		.sec-4 {
			grid-template-areas:
				'intro intro intro intro intro intro intro intro'
				'img img img img img img img img'
				'card card card card card card card card';
		}
	}
</style>
