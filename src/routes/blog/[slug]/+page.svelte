<script>
	// @ts-nocheck

	import Toc from '$lib/components/icons/Toc.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import clickOutside from '$lib/utils/clickoutside.js';
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data;
	const post = data.post;

	let isTocOpen = false;



	onMount(() => {
		//  create observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.getAttribute('id');
					if (entry.isIntersecting) {
						// console.log('intersecting');

						document.querySelector(`.toc__item a[href="#${id}"]`)?.classList.add('toc-active');
					} else {
						document.querySelector(`.toc__item a[href="#${id}"]`)?.classList.remove('toc-active');
					}
				});
			},
			{
				// rootMargin: '0px 0px -50% 0px',
				// root: main,
				rootMargin: '0px 0px -60% 0px',
				threshold: 0.25
			}
		);

		//  observe content
		post.content.forEach((/** @type {{ style: string; _key: any; }} */ item) => {
			if (item.style == 'h2' || item.style == 'h3') {
				let heading = document.getElementById(item._key);
				// console.log(item);
				observer.observe(heading);
			}
		});

		// run observer on toc-icon click
		// document.querySelector('.toc-icon__w').addEventListener('click', () => {
		//    console.log("first click");
		// post.content.forEach((/** @type {{ style: string; _key: any; }} */ item) => {
		//    if (item.style == 'h2' || item.style == 'h3') {
		//       let heading = document.getElementById(item._key);
		// 		// get url hash
		// 		let hash = window.location.hash;
		// 		console.log("🚀 ~ file: +page.svelte:57 ~ post.content.forEach ~ hash:", hash)

		// 		observer.observe(heading);
		// 	}
		// });
		// });
		function runObserver() {
			console.log('runObserver');
			post.content.forEach((/** @type {{ style: string; _key: any; }} */ item) => {
				if (item.style == 'h2' || item.style == 'h3') {
					let heading = document.getElementById(item._key);
					// console.log(item);
					return observer.observe(heading);
				}
			});
		}
	});
</script>

<h1 id="top">Article Page</h1>

<div>
	<h2>{post.article_title}</h2>
</div>
<main>
	{#if isTocOpen}
		<div
			class="toc"
			transition:fly={{ duration: 600, easing: quintOut, x: 300 }}
			use:clickOutside={() => (isTocOpen = false)}
		>
			<p class="toc-header">Table Of Content</p>
			<ul class="toc__c">
				{#each post.content as item}
					{#if item.style == 'h2' || item.style == 'h3'}
						<li class="toc__item">
							<a
								href="#{item._key}"
								role="button"
								on:click={() => (isTocOpen = !isTocOpen)}
								on:keydown={() => (isTocOpen = !isTocOpen)}
								on:keyup={() => (isTocOpen = !isTocOpen)}
							>
								{item.children[0].text}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
			<div class="toc__c__bottom">
				<a
					href="#top"
					role="button"
					on:click={() => (isTocOpen = !isTocOpen)}
					on:keydown={() => (isTocOpen = !isTocOpen)}
					on:keyup={() => (isTocOpen = !isTocOpen)}>Back to top</a
				>
			</div>
		</div>
	{/if}
	{#if !isTocOpen}
		<div
			class="toc-icon__w"
			role="button"
			tabindex="0"
			on:click={() => {
				isTocOpen = !isTocOpen;
				// runObserver();
			}}
			on:keyup={() => (isTocOpen = !isTocOpen)}
		>
			<Toc width={48} height={48} />
		</div>
	{/if}

	<PortableText
		value={post.content}
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

<style>
	/* style */
	.toc {
		position: fixed;
		bottom: 0;
		right: 0;
		overflow-y: auto;
		padding: 1.4rem;
		background: var(--color-bg);
		z-index: 1;
		background: var(--clr-white);
		border-radius: 1rem 0 0 0;
		border: 1px solid var(--gray-2);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		& p {
			margin: 0;
			padding: 0;
			margin-bottom: 0.5rem;
			font-size: 1.1rem;
			color: var(--fc-main);
			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				background: var(--gray-2);
				margin-top: 0.5rem;
			}
		}
		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
			& li {
				padding-block: 0.25rem;
			}
		}
		& a {
			display: block;
			text-decoration: none;
			color: var(--clr-gray-600);
			font-size: 1rem;
			font-weight: 500;
			&:hover {
				color: var(--clr-orange-600);
				text-decoration: underline;
			}
			/* & .active{
            color: var(--clr-red) !important;
            text-decoration: underline;
         } */
		}
	}

	.toc__c__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
	.toc-icon__w {
		position: fixed;
		bottom: 2rem;
		right: 3rem;
		width: auto;
		height: auto;
		z-index: 2;
		border-radius: 200px;
		cursor: pointer;
	}
</style>
