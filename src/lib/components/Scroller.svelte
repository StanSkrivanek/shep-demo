<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	// import { scroller } from 'src/lib/utils';

	// export let direction = 'forwards'; // forwards, reverse,
	export let duration = 30;
	export let gap = 1;
	/**
	 * @type {any[]}
	 */
	export let data = [];
	// export let onStart = () => {};
	// export let onEnd = () => {};
	onMount(() => {
		const scroller = document.querySelector('.scroller');
		const scrollerInner = document.querySelector('.scroller__inner');
		const leftSideOfScroller = scroller?.getBoundingClientRect().left;

		// get site `rem` value
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
		scrollerInner.style.gap = `${gap}rem`;

		let currentLeftValue = 0;

		function animationLoop() {
			const firstItem = scrollerInner?.firstElementChild;
			// console.log("🚀 ~ file: Scroller.svelte:30 ~ animationLoop ~ firstItem:", firstItem)
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
</style>
