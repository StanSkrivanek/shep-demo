<script>
	//@ts-nocheck
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import '../app.css';
</script>

<Toast/>
<Navigation />
<slot />
<Footer />
