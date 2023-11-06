<script>
	import Footer from '$lib/components/Footer.svelte';
	import TemporaryNav from '$lib/components/TemporaryNav.svelte';
	import '../app.css';
</script>

<TemporaryNav />
<slot />
<Footer />
