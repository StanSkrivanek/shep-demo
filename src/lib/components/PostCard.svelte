<script>
   import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
	import { trimText } from '$lib/utils/globalhelpers';
   // data passed in from `src/routes/blog/+page.svelte`
   export const category = '';
   export const catSlug = '';
   export const slug ="";
   export const title = '';
   export const excerpt = '';
   export const img = '';

</script>

<div class="card">
	<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
	<div class="card-subheading">
		<a class="btn-link" href={`/blog/${catSlug}`}>{category}</a>
	</div>
	<div class="card-img">
		<img src={img} alt={title} />
	</div>
	<div class="card-header">
		<h3>{title}</h3>
	</div>
	<div class="card-body">
		<p>{trimText(excerpt, 128)}</p>
	</div>
	<div class="card-footer">
		<a class="btn-link" href={`/blog/${catSlug}/${slug}`}>
			<LinkCircle width={42} height={42} />
		</a>
	</div>
</div>
