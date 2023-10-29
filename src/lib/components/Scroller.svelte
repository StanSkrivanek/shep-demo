<script>
	// import { scroller } from 'src/lib/utils';

	// export let direction = 'forwards'; // forwards, reverse,
	// export let duration = 40;
	// export let isAnimated = true;
	/**
	 * @type {any[]}
	 */
	export let data = [];
	// export let onStart = () => {};
	// export let onEnd = () => {};
	// onMount(() => {
	// 	if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	// 		isAnimated = true;
	// 	}
	// });
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
		/* -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent); */
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		overflow-x: hidden;
		& .scroller__inner {
			width: max-content;
			display: flex;
			gap: 2rem;
			width: max-content;
			flex-wrap: nowrap;
			animation: scroll 40s forwards linear infinite;
			/* -webkit-animation: scroll 40s forwards linear infinite; */
			/* animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
				infinite; */
			& .scroller__item {
				border: 1px solid #ccc;
				max-width: 300px;
				& img {
					border: 1px solid lightcoral;
					width: 100%;
					height: 100%;
					/* aspect-ratio: 3/1; */
					/* object-fit: cover; */
					display: block;
				}
			}
		}
	}
	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 0.5rem));
		}
	}
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
