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
			<!-- <div class="hero-price__heading"> -->
			<p class="small-title sm">Course Fee</p>
			<!-- </div> -->
			<div class="fee">
				{#if full_price != 'No Charge'}
					<p><span>In Full:</span>€ {full_price}</p>
				{:else}
					<p><span>In Full:</span>{full_price}</p>
				{/if}
				{#if funded_price != null}
					<p><span>Funded :</span>€ {funded_price}</p>
				{/if}
			</div>
		</div>
		<a class="link" href={brochure} target="_blank">
			<div class="link-desc__w">
				<p class="small-title">Brochure</p>
				<p>Feel free to access our course brochure in PDF format</p>
			</div>
			<div class="link-icon">
				<LinkCircle width={60} height={60} />
			</div>
		</a>
		<!-- <div class="hero-info__btn">
			<p>Course Brochure</p>
			<a class="btn-link" href="courses/{slug.current}">
				<LinkCircle width={64} height={64} />
			</a>
		</div> -->
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
		grid-template-rows: repeat(4, minmax(6rem, 1fr));
		grid-column: 1/-1;
		margin-bottom: 5rem;
		gap: 1rem;
		grid-template-areas:
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-price'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn'
			'hero-data hero-data hero-data hero-img hero-img hero-img hero-img hero-btn';
	}

	.hero-data {
		grid-area: hero-data;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--green-light);
	}
	.hero-img {
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

	.hero-info__price {
		grid-area: hero-price;
		padding: 1.4rem;
		border-radius: 1rem;
		background: var(--gray-1);
	}

	/* .hero-info__btn {
		grid-area: hero-btn;
		background: var(--blue-light);
		padding: 1.4rem;
		border-radius: 1rem;
		& p {
			margin: 0;
			margin-bottom: 0.5rem;
			color: var(--fc-light);
		}
	} */
	a {
		padding: 1rem;
		text-decoration: none;
		color: var(--text-base);
		font-size: 1rem;
		border: 2px solid var(--gray-1);
		border-radius: 1rem;
		transition: all 0.3s ease-in-out;
		&:hover {
			text-decoration: none;
			color: var(--text-base);
			background: var(--blue-light);
			border: 2px solid var(--blue-sha-2);
		}
	}
	.link {
		grid-area: hero-btn;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.4rem;
		border-radius: 1rem;
		color: var(--fc-light);
		background: var(--blue-light);
		min-width: 160px;
	}

	.small-title {
		position: relative;
		margin-bottom: 1.2rem;
		font-family: var(--ff-gilroy-m);
		color: var(--fc-main);
		&::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 0;
			width: 75%;
			height: 2px;
			background: black;
		}
	}
	.link-icon {
		display: flex;
		justify-content: right;
		align-items: center;
	}
	.sm {
		font-size: var(--sm);
	}
	/* .address p {
		color: var(--fs-mid);
	} */
	.link-desc__w {
		margin-bottom: 1.2rem;
		& p {
			line-height: 1.1;
		}
	}
	.fee {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		& p {
			display: flex;
			justify-content: space-between;
			margin: 0;
			margin-bottom: 0.5rem;
			color: var(--fc-main);
			& span {
				color: var(--fc-light);
			}
		}
	}
</style>
