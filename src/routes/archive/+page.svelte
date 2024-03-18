<script>
	import { onMount } from 'svelte';
	export let data;

	$: pdfsData = data.allPDFs[0].pdfs;

	onMount(() => {
		console.log('Footer mounted');
	});
</script>

<h1>SHEP Nuacht Archive</h1>
<p>
	SHEP Nuacht is an internal newsletter for all in the SHEP community, including SHEP’s learners,
	project participants and many friends. The first edition was in June 2009 and we issue the
	newsletter twice per year. We hope you enjoy reading it.
</p>
<p>
	In order to minimise administration costs, SHEP Nuacht is distributed electronically and is also
	posted to our website. If you would like to receive a copy of SHEP Nuacht by email please contact
	us.
</p>
<p>
	We hope you enjoy reading SHEP Nuacht and we welcome your feedback and contributions.
</p>
<ul>
	{#each pdfsData as pdf}
		<li>
			<a href={pdf.url} target="_blank">{pdf.title}</a>
		</li>
	{/each}
</ul>
