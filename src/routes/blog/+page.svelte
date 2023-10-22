<script>
	import LinkCircle from '$lib/components/icons/LinkCircle.svelte';
import {trimText} from '$lib/utils/globalhelpers.js';
	export let data;
	let posts = data.posts;

</script>

<div class="page__c">
	<h1>All Blog Posts</h1>
	<main class="container">
		{#each posts as post}
			<div class="card">
				<!-- TODO: use Sanity image optimisation settings -> ?max=fit&xxx-->
				<div class="card-subheading">
					<a class="btn-link" href={`./blog/${post.category_slug}`}>{post.category}</a>
				</div>
				<div class="card-img">
					<img src={post.main_img} alt={post.title} />
				</div>
				<div class="card-header">
					<p>{post.title}</p>
				</div>
				<div class="card-body">
					<!-- <p>{post.author[0].name}</p> -->
					<p>{trimText(post.excerpt, 140)}</p>
				</div>
				<div class="card-footer">
					<a class="btn-link" href={`./blog/${post.category_slug}/${post.slug}`}>
						<LinkCircle width={40} height={40} />
					</a>
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}
	.card {
		display: grid;
		grid-template-areas:
			'subHeader '
			'image'
			'header '
			'body '
			'footer ';
		grid-template-rows:
			[subHeader] 2rem
			[image] 10rem
			[header] 3.6rem
			[body] auto
			[footer] 2.6rem;

		border: 1px solid var(--gray-2);
		border-radius: 1rem;
		padding: 1rem;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		gap: 0.25rem;
	}

	.card:hover {
		/* offset-horizontal | offset-vertical | blur-radius | spread-radius | color */
		box-shadow: 8px 10px 15px -3px var(--gray-2);
		/* background: var(--green-light); */
	}
	.card-header {
		grid-area: header;

		& h3 {
			font-size: 1.5rem;
			font-weight: 16rem;
		}

		& p {
			margin: 0;
			line-height: 1.1;
			font-family: var(--ff-gilroy-smb);
		}
	}
	.card-subheading {
		grid-area: subHeader;
		display: flex;
		justify-content: space-between;
		& p {
			font-size: var(--xs);
			color: var(--gray-3);
			line-height: 2;
		}
		& a {
			margin: 0;
			font-size: var(--xs);
			line-height: 2;
			pointer-events: all;
			color: var(--gray-3);
			&:hover {
				color: var(--clr-green);
			}
		}
	}
	.card-img {
		grid-area: image;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
		/* border: 2px solid red; */
		& img {
			object-fit: cover;
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 1rem;

			/* aspect-ratio: 2.4/1; */
		}
	}
	.card-body {
		grid-area: body;
		margin-bottom: 0.5rem;
		& p {
			margin: 0;
			font-size: 0.9rem;
			line-height: 1.1;
			color: var(--gray-3);
		}
	}
	.card-footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		/* & p {
			align-self: flex-end;
			margin: 0;
			font-size: var(--xs);
			color: var(--gray-3);
		} */
	}
	.btn-link {
		pointer-events: all;
	}
</style>
