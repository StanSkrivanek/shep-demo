<script>
	import { toast } from '$lib/stores/ToastStore';
	//@ts-nocheck
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import '../app.css';
</script>

<Toast/>
<Navigation />
<button on:click={() => {
	toast.send({ msg: 'Hello', type: 'error' });
}}>TOAST</button>
<slot />
<Footer />
