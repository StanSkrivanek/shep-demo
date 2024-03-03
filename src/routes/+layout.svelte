<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import TemporaryNav from '$lib/components/TemporaryNav.svelte';
	import '../app.css';
</script>

<!-- <TemporaryNav /> -->
<Navigation />
<slot />
<Footer />
