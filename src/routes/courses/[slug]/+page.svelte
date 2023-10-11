<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';

	// import { PortableText } from '@portabletext/svelte';
	// import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	export let data;
	const { title, excerpt, type, full_price, funded_price, main_img, content, brochure, slug } =
		data.course;
	console.log('🚀 ~ file: +page.svelte:3 ~ data:', data.course);
</script>

<div class="conetnt">
	<!-- hero -->
	<!-- TODO: update other Heros based on this principle 4 rows without 2-cols wrapper -->
	<div class="hero">
		<div class="hero-data">
			<h1>{title}</h1>
			<p>
				{excerpt}
			</p>
		</div>
		<div class="hero-img">
			<img src={main_img} alt="cover" />
		</div>

		<div class="hero-info__price">
			<div class="hero-price__heading">
				<p>Course Fee</p>
			</div>
			<div>
				<p>In Full: €{full_price}</p>
				<p>Funded : €{funded_price}</p>
			</div>
		</div>
		<div class="hero-info__btn">
			<p>Course Brochure</p>
			<a class="btn-link" href="courses/{slug.current}">
						<LinkCircle width={64} height={64} />
					</a>
			<!-- <a class="btn-link" href={brochure} target="_blank"> -->
			<!-- <Download width={64} height={64} /> -->
			<!-- </a> -->
		</div>
	</div>

	<!-- wapper start -->
	<!-- aside -->

	<!-- main -->
	<!-- wrapper end -->

	<!-- footer -->

	<!-- <h1>{title}</h1> -->
	<!--TODO: take alt from original image name -->
	<!-- <img src={main_img} alt="course cover" /> -->
	<!-- <p>{excerpt}</p> -->
	<!-- <PortableText
		value={content}
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
		/> -->
</div>

<style>
	.conetnt {
		max-width: 1680px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 0.5fr 0.5fr 1fr 1fr 0.5fr 0.5fr 1fr;
	}
	.hero {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: repeat(4, minmax(5rem, 1fr));
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
		/* min-height: 24rem; */
		grid-template-areas: 'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price',
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price',
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn',
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn';
		gap: 1rem;
	}

	.hero-data {
		grid-area: hero-data;
		display: flex;
		flex-direction: column;
		grid-column: 1 / 4;
		grid-row: 1/-1;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--orange-light);
	}
	.hero-img {
		grid-area: hero-img;
		grid-column: 4 / 8;
		grid-row: 1/-1;
		border-radius: 1rem;
		background: var(--gray-1);
		max-height: max-content;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			aspect-ratio: 2.4/1;
		}
	}

	.hero-info__price {
	
		grid-row: 1 / 3;
		padding: 1.4rem;
		border-radius: 1rem;
		background: var(--gray-1);
		& p {
			margin: 0;
			/* line-height: 1.6; */
			margin-bottom: 0.5rem;
			color: var(--fc-light);
		}
	}

	.hero-info__btn {

		grid-row: 3/5;
		background: var(--green-light);
		padding: 1.4rem;
		border-radius: 1rem;
		& p {
			margin: 0;
			/* line-height: 1.6; */
			margin-bottom: 0.5rem;
			color: var(--fc-light);
		}
	}
</style>
