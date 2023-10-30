<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	// import { scroller } from 'src/lib/utils';

	// export let direction = 'forwards'; // forwards, reverse,
	export let duration = 0;
	export let gap = 1;
	/**
	 * @type {any[]}
	 */
	export let data = [];
	// export let onStart = () => {};
	// export let onEnd = () => {};
	onMount(() => {
		// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		// window.setInterval(animationLoop, duration);
		// scrollerInner.style.animation = 'none';
		// scrollerInner.style.webkitAnimation = 'none';
		// scrollerInner.style.flexWrap = "wrap";
		// scrollerInner.style.width = "100%";
		// scrollerInner.style.display = "grid";
		// }else{
		// console.log('reduced motion');
		// }
		const scroller = document.querySelector('.scroller');
		const scrollerInner = document.querySelector('.scroller__inner');
		const leftSideOfScroller = scroller?.getBoundingClientRect().left;

		// get site `rem` value
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
		scrollerInner.style.gap = `${gap}rem`;

		let currentLeftValue = 0;

		function animationLoop() {
			const firstItem = scrollerInner?.firstElementChild;
			const firstItemRight = firstItem?.getBoundingClientRect()?.right;

			if (firstItemRight < leftSideOfScroller) {
				currentLeftValue = -1;
				scrollerInner?.appendChild(firstItem);
			}
			scrollerInner.style.marginLeft = `${currentLeftValue + gap * rem}px`;
			currentLeftValue--;
		}

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			window.setInterval(animationLoop, duration);
		} else {
			scroller.style.mask = 'none';
			scrollerInner.style.flexWrap = 'wrap';
			scrollerInner.style.width = '90%';
			scrollerInner.style.margin = '0 auto';
		}
	});
</script>

<div class="scroller">
	<div class="scroller__inner">
		{#each data as item}
			<div class="scroller__item">
				<img src={item.url} alt={item.title} />
			</div>
		{/each}
	</div>
</div>

<style>
	.scroller {
		/* display: grid;
		grid-template-columns: subgrid; */
		padding-block: 5rem;
		grid-column: 1/-1;
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		overflow-x: hidden;
	}
	.scroller__inner {
		width: max-content;
		display: flex;
		/* gap: 1rem; */
		width: max-content;
		flex-wrap: nowrap;
		/* animation: scroll 40s forwards linear infinite; */
		/* -webkit-animation: scroll 40s forwards linear infinite; */
		/* animation: scroll var(--_animation-duration, 5s) var(--_animation-direction, forwards) linear
			infinite; */
		& .scroller__item {
			border: 1px solid var(--gray-2);
			border-radius: 0.75rem;
			overflow: hidden;
			max-width: 300px;
			& img {
				/* border: 1px solid lightcoral; */
				width: 100%;
				height: 100%;
				/* aspect-ratio: 3/1; */
				/* object-fit: cover; */
				display: block;
			}
		}
	}
	/* @keyframes scroll {
		to {
			transform: translate(calc(-100% - 0.5rem));
		}
	} */
	/* @-webkit-keyframes scroll {
		to {
			transform: translate(calc(-50% - 0.5rem));
		}
	} */
	/* @keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
} */
</style>
