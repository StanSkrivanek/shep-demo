<script>
	import { CustomHeading, ImageRte, TextRte } from '$lib/components/sanityRte';
	import { PortableText } from '@portabletext/svelte';
	export let data;
	const {
		venue_name,
		address_1,
		address_2,
		city,
		eircode,
		email,
		phone,
		website,
		excerpt,
		content,
		logo,
		image
	} = data.venue;
</script>

<main>
	<h1>{venue_name}</h1>
	<p>{address_1}</p>
	<p>{address_2}</p>
	<p>{city}</p>
	<p>{eircode}</p>
	<p>{email}</p>
	<p>{phone}</p>
	<p>{website}</p>
	<p>{excerpt}</p>
	<main>
		<PortableText
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
		/>
	</main>
	<!-- <img src={logo} alt=""> -->
	<!-- <img src={image} alt=""> -->
</main>
