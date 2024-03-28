<script>
	import { fade } from 'svelte/transition';
	import LinkCircle from './icons/LinkCircle.svelte';
	// import { quintOut, bounceInOut } from 'svelte/easing';
	/**
	 * @type {any[]}
	 */
	export let slides = [];
	/**
	 * @type {number}
	 */
	export let duration = 3000;

	let currentSlide = 0;

	const nextSlide = () => {
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		timer();
	};
	const prevSlide = () => {
		currentSlide--;
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
		timer();
	};
	const goToSlide = (/** @type {number} */ i) => {
		currentSlide = i;
		timer();
	};
	/**
	 * @type {number | undefined}
	 */
	let interval;

	const timer = () => {
		clearInterval(interval);
		interval = setInterval(nextSlide, duration);
	};
	timer();
</script>

<div class="slider">
	{#each slides as slide, i}
		{#if currentSlide === i}
			<div class="slide">
				<div class="slide-image" transition:fade={{ delay: 250, duration: 1000 }}>
					<img src={slide.main_img} alt={slide.title} />
					<span> {i + 1} / {slides.length}</span>
				</div>
				<div class="slide__content__w" transition:fade={{ delay: 250, duration: 1000 }}>
					<div class="slide__content">
						<h2 class="slide__title">{slide.title}</h2>
						<p class="slide__description">{slide.excerpt}</p>
					</div>

					<div class="slide-footer">
						<a class="btn-link" href="/blog/{slide.category_slug}/{slide.slug}">
							<LinkCircle width={48} height={48} />
						</a>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.slider {
		position: relative;
		width: 100%;
		height: 100%;

		& .slide {
			position: absolute;
			top: 0;
			left: 0;
			display: grid;
			grid-template-columns: 1.4fr 2fr;
			gap: 1rem;
			width: 100%;
			height: 100%;

			& .slide-image {
				position: relative;
				grid-column: 1/1;
				border-radius: 1rem;
				overflow: hidden;
				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				& span {
					position: absolute;
					bottom: 1rem;
					right: 1rem;
					padding: 0.25rem 0.5rem;
					background: hsla(0, 0%, 0%, 0.328);
					border-radius: calc(1rem - 0.5rem);
					color: white;
					font-size: 0.8rem;
					z-index: 1;
				}
			}
			& .slide__content__w {
				grid-column: 2/2;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 2rem;
				/* background: var(--gray-1); */
				border-radius: 1rem;
				height: 100%;
				background: var(--clr-main-white);
				& .slide__content {
					grid-column: 2/2;
					color: var(--fc-main);
					& h2 {
						margin: 0;
						line-height: 1.1;
						margin-bottom: 1rem;
						padding-bottom: 0.5rem;
						border-bottom: 1px solid hsl(var(--hsl-gray) / 0.25);
						font-family: var(--ff-fkg-regular);
						font-weight: 100;
						text-transform: uppercase;
						color: hsl(var(--hsl-gray) / 0.65);
					}
					& p {
						margin: 0;
						color: hsl(var(--hsl-gray) / 0.75);
					}
				}
				& .slide-footer {
					display: flex;
					justify-content: flex-end;

					& .btn-link {
						display: flex;
						align-items: center;
						justify-content: center;
						transition: 0.3s ease;
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
			}
		}
	}
	@media (max-width: 768px) {
		.slider .slide {
			display: flex;
			flex-direction: column;
		}
		.slide .slide-image {
			grid-column: 1/-1;
			flex-basis: 50%;
		}
		.slide .slide__content__w {
			grid-column: 1/-1;
			flex-basis: 50%;
		}
	}
</style>
