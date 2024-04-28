<script>
	//@ts-nocheck
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	$: form = {};
	console.log("🚀 ~ form:", form)
</script>

<Navigation />
<slot />
<Footer {form} />
