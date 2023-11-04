<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	export let direction = 'forwards'; // forwards, reverse,
	export let duration = 60;
	export let gap = 1;
	let isAnimated = true;
	/**
	 * @type {any[]}
	 */
	export let logos = [];
	// console.log("🚀 ~ file: Scroller.svelte:14 ~ data:", logos)
	
	onMount(() => {
		const scroller = document.querySelector('.scroller');

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			scroller.setAttribute('data-animated', isAnimated);
			addAnimation();
		} else {
			scroller.setAttribute('data-animated', !isAnimated);
		}

		function addAnimation() {
			// Make an array from the elements within `.scroller-inner`
			const scrollerInner = scroller.querySelector('.scroller__inner');
			const scrollerContent = Array.from(scrollerInner.children);

			// Duplicate the elements within `.scroller-inner`
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner.appendChild(duplicatedItem);
			});
		}
	});
</script>

<div class="scroller" data-animated={isAnimated}>
	<div
		class="scroller__inner"
		style="--gap:{gap}rem; --duration:{duration}s; --direction:{direction};"
		data-direction={direction}
		data-duration={duration}
	>
		{#each logos as logo}
			<div class="scroller__item">
				<img src={logo.url} alt={logo.title} />
			</div>
		{/each}
	</div>
</div>

<style>
	/* OS Reduced motion ON*/
	.scroller[data-animated='false'] {
		display: grid;
		grid-column: 1/-1;
		& .scroller__inner {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: var(--gap);
			& .scroller__item {
				border: 1px solid var(--gray-2);
				border-radius: 0.75rem;
				overflow: hidden;
				max-width: 300px;
				& img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
	/* OS Reduced motion OFF*/
	.scroller[data-animated='true'] {
		padding-block: 2rem;
		grid-column: 1/-1;
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		overflow-x: hidden;
		& .scroller__inner {
			width: max-content;
			display: flex;
			gap: var(--gap);
			width: max-content;
			flex-wrap: nowrap;
			& .scroller__item {
				border: 1px solid var(--gray-2);
				border-radius: 0.75rem;
				overflow: hidden;
				max-width: 300px;
				& img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}

	[data-animated='true'] .scroller__inner {
		animation: scroll var(--duration) var(--direction) linear infinite;
	}

	@keyframes scroll {
		to {
			transform: translateX(calc(-50% - var(--gap)));
		}
	}
	/* @keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-50% - var(--gap)));
  }
} */
</style>


<!-- +page.svelte -->
<!-- Duration gap and direction are predefined but thy can be set on Scroller individually   -->
<!-- 	<Scroller data={data.logos} duration={60} gap={1} direction={"forwards"} /> -->