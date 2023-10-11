<script>
	// import { PortableText } from '@portabletext/svelte';
	// import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	export let data;
	const { title, excerpt, type, full_price, funded_price, main_img, content, brochure, slug } =
		data.course;
	console.log('🚀 ~ file: +page.svelte:3 ~ data:', data.course);
</script>

<div class="conetnt">
	<!-- hero -->
	<div class="hero">
		<div class="hero-col-3__c">
			<div class="hero-data">
				<h1>{title}</h1>
				<p>
					{excerpt}
				</p>
			</div>
			<div class="hero-img">
				<img src={main_img} alt="cover" />
			</div>
			<div class="hero-info">
				<div class="hero-info__price">
					<div class="hero-price__heading">
						<h3>Course Type</h3>
					</div>
					<div>
						<p>In Full: €{full_price}</p>
						<p>Funded : €{funded_price}</p>
					</div>
				</div>
			</div>
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
		grid-column: 1/-1;
		margin-bottom: 5rem;
		min-height: 24rem;
	}
	.hero-col-3__c {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1/-1;
		grid-template-areas: 'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-info';
		grid-template-rows: auto;
		gap: 1rem;
	}
	.hero-data {
		display: flex;
		flex-direction: column;
		grid-column: 1 / 4;
		grid-row: 1/1;
		grid-area: hero-data;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--orange-light);
	}
	.hero-img {
		grid-column: 4 / -1;
		grid-area: hero-img;
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
</style>
