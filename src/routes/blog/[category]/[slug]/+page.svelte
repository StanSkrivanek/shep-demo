<script>
	// @ts-nocheck

	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import Toc from '$lib/components/icons/Toc.svelte';
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte/index.js';
	import clickOutside from '$lib/utils/clickoutside.js';
	import { PortableText } from '@portabletext/svelte';
	import { afterUpdate, tick } from 'svelte';

	export let data;
	$: post = data.post;

	console.log('🚀 ~ file: +page.svelte:14 ~ post:', post);

	let isTocOpen = false;

	afterUpdate(() => {
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					let id = entry.target.getAttribute('id');
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						document.querySelector(`.toc__item a[href="#${id}"]`)?.classList.add('toc-active');

						updateHistory(`#${id}`);
					
					} else {
						document.querySelector(`.toc__item a[href="#${id}"]`)?.classList.remove('toc-active');
					}
				});
			},
			{
				rootMargin: '0% 0px -10% 0px',
				threshold: 0.5
			}
		);

		//  observe content
		post.content.forEach((/** @type {{ style: string; _key: any; }} */ item) => {
			if (item.style == 'h2' || item.style == 'h3') {
				let heading = document.getElementById(item._key);
				io.observe(heading);
			}
		});
	});

	/* Update the window URL `#hash` on scroll, this is throttled so that the history doesn't get filled with useless entries*/
	function updateHistory(hash) {
		console.log('🚀 ~ file: +page.svelte:65 ~ hash', hash);
		clearTimeout(updateHistory.timeout);
		updateHistory.timeout = setTimeout(function () {
			if (window.location.hash !== hash) {
				if (location.hash !== '') {
					history.pushState({}, window.title, hash);
				} else {
					// On first page load update the URL in place
					history.replaceState({}, window.title, hash);
				}
			}
		}, 1000);
	}

	async function handleTocClick() {
		// get hash from url
		const hash = window.location.hash;
		// wait for dom to update (add TOC to DOM)
		await tick();
		// get toc link with hash and add `toc-active` class
		document.querySelector(`.toc__item a[href="${hash}"]`).classList.add('toc-active');
		//  remove class on window scroll
		window.addEventListener('scroll', () => {
			document.querySelector(`.toc__item a[href="${hash}"]`).classList.remove('toc-active');
		});
	}
</script>

<div class="page__c">
	<div class="hero" id="top">
		<div class="hero-col-2__c">
			<div class="hero-data">
				<div>
					<h1><span>{post.title}</span></h1>
					<p class="excerpt">{post.excerpt}</p>
				</div>
				<p class="article_cat">{post.category}</p>
			</div>
			<div class="hero-img">
				<img src={post.main_img} alt={post.title} />
			</div>
		</div>
	</div>
	<div class="main__c">
		<aside class="toc" class:toc-open={isTocOpen} use:clickOutside={() => (isTocOpen = false)}>
			<ul class="toc__c">
				<li class="toc-header">Table Of Content</li>
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
				<li class="toc__c__bottom">
					<a
						href="#top"
						role="button"
						on:click={() => (isTocOpen = !isTocOpen)}
						on:keydown={() => (isTocOpen = !isTocOpen)}
						on:keyup={() => (isTocOpen = !isTocOpen)}>Back to top</a
					>
				</li>
			</ul>
		</aside>

		<main>
			{#if !isTocOpen}
				<div
					class="toc-icon__w"
					role="button"
					tabindex="0"
					on:click={() => {
						isTocOpen = !isTocOpen;
						handleTocClick();
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

		<aside class="side-links">
			<div class="links__c">
				<h4>Related Articles</h4>
				{#if data.catArticles.length == 0}
					<p>There are no related articles yet</p>
				{:else}
					{#each data.catArticles as post}
						<div class="link__w">
							<p>{post.title}</p>
							<div class="link-excerpt">
								<p>{post.excerpt}</p>
								<a href={`../${post.category_slug}/${post.slug}`}>
									<LinkCircle width={48} height={48} />
								</a>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</aside>
	</div>
</div>

<style>
	main {
		grid-area: main;
		padding-inline: 1rem;
	}
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		margin-bottom: 5rem;
	}
	.hero-col-2__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		grid-template-areas: 'hero-img hero-img hero-img hero-img hero-img hero-img hero-img hero-img';
		grid-template-rows: auto;
	}
	.hero-data {
		position: relative;
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		grid-row: 1/-1;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		border-radius: 1rem 0 0 1rem;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				90deg,
				rgba(21, 24, 48, 0.4) 0%,
				rgba(21, 24, 48, 0.3) 50%,
				rgba(11, 11, 11, 0.1) 100%
			);
			border-radius: 1rem;
			z-index: -1;
		}
		& h1 {
			color: var(--fc-white);
			max-width: 20ch;
		}
		& .excerpt {
			max-width: 40ch;
			color: var(--fc-white);
			font-size: 1.1rem;
		}
		& .article_cat {
			padding: 0.5rem 1rem;
			border-radius: 100px;
			border: 1px solid var(--gray-2);
			text-transform: uppercase;
			letter-spacing: 0.07rem;
			color: var(--gray-2);
			font-size: 0.9rem;
			font-weight: 500;
			align-self: flex-start;
		}
	}
	.hero-img {
		grid-area: hero-img;
		position: relative;
		border-radius: 1rem;
		background: var(--gray-1);
		max-height: 480px;
		& img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
			border-radius: 1rem;
		}
	}

	.main__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside aside main main main main news news ';
		grid-template-rows: auto;
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
	}
	/* TOC */
	.toc {
		grid-area: aside;
		/* position: sticky;
		top: 0; */
		/* background-color: lightgrey; */
		/* position: fixed;
		bottom: 0;
		right: 0;
		overflow-y: auto;
		padding: 1.4rem;
		background: var(--color-bg);
		z-index: 1;
		background: var(--clr-white);
		border-radius: 1rem 0 0 0;
		border: 1px solid var(--gray-2);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
		& .toc__c {
			position: sticky;
			top: 2rem;
		}
		& .toc-header {
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
				}
			}
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
		display: none;
	}

	/* ASIDE LINKS */

	.side-links {
		grid-area: news;
		/* background: lightgray; */
	}

	.links__c {
		padding-inline: 1rem;
		border-left: 1px solid var(--gray-2);
		margin-bottom: 2rem;
		/* dostuff */
	}

	.link__w {
		/* dostuff */
		border-bottom: 1px solid var(--clr-gray-600);
		& p {
			font-size: 1rem;
			color: var(--clr-black);
			text-transform: uppercase;
			margin-bottom: 1rem;
		}
		& .link-excerpt {
			/* dostuff */
			display: flex;
			justify-content: space-between;
			align-items: end;
			margin-bottom: 1rem;
			& p {
				margin: 0;
				font-size: 0.9rem;
				line-height: 1.3;
				text-transform: none;
				color: var(--clr-gray-400);
				max-width: 34ch;
			}
		}
	}

	/* Media Query */
	@media screen and (max-width: 1280px) {
		/* doostuff */
		.main__c {
			grid-template-areas:
				'aside aside aside main main main main main '
				'news news news news news news news news ';
		}
	}
	@media screen and (max-width: 1024px) {
		/* doostuff */
	}
	@media (max-width: 768px) {
		.hero-data::before {
			background: linear-gradient(
				90deg,
				rgba(21, 24, 48, 0.4) 0%,
				rgba(21, 24, 48, 0.3) 80%,
				rgba(11, 11, 11, 0.1) 100%
			);
		}
		.main__c {
			grid-template-areas:
				'main main main main main main main main '
				'news news news news news news news news ';
		}
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
			transform: translateX(100%);
		}
		.toc-open {
			animation: slide 0.5s forwards;
		}
		@keyframes slide {
			0% {
				transform: translateX(100%);
			}
			100% {
				transform: translateX(0%);
			}
		}
		.toc-icon__w {
			display: block;
		}
	}
	@media screen and (max-width: 640px) {
		/* doostuff */
		.hero-data::before {
			background: linear-gradient(
				90deg,
				rgba(21, 24, 48, 0.4) 0%,
				rgba(21, 24, 48, 0.3) 80%,
				rgba(11, 11, 11, 0.1) 100%
			);
		}
		.hero-data h1 {
			max-width: 24ch;
		}
		.hero-data .excerpt {
			max-width: 32ch;
		}
		.hero-img {
			max-height: 100%;
		}
	}
	@media screen and (max-width: 480px) {
		/* doostuff */
	}
</style>
