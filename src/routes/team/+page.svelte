<script>
	import Facebook from '$lib/components/icons/FacebookMember.svelte';
	import Instagram from '$lib/components/icons/InstagramMember.svelte';
	import LinkedIn from '$lib/components/icons/LinkedInMember.svelte';
	import Mail from '$lib/components/icons/MailMember.svelte';
	import Phone from '$lib/components/icons/MobileMember.svelte';
	import Twitter from '$lib/components/icons/TwitterMember.svelte';

	export let data;
</script>

<svelte:head>
	<title>Our Team</title>
	<meta name="description" content="Meet our team of experts" />
</svelte:head>

<div class="page__c">
	<h1 class="separator-heading">Our Team</h1>
	<main class="container">
		{#each data.team as member}
			<div class="team-card">
				<div class="thumbnail">
					<img src={member.image} alt={member.alt} />
				</div>
				
				<div class="data-header">
					<h2>{member.name}</h2>
					<p>{member.designation}</p>
				</div>
				<div class="data-intro">
					<p>{member.intro}</p>
				</div>
				<div class="contact">
					<!-- Phone -->
					{#if member.phone}
						<a class="link" href="tel:{member.phone}" target="_self">
							<div class="link-icon">
								<Phone width={32} height={32} />
							</div>
						</a>
					{/if}
					<!-- Email -->
					{#if member.email}
						<a class="link" href="mailto:{member.email}">
							<div class="link-icon">
								<Mail width={32} height={32} />
							</div>
						</a>
					{/if}
					<!-- LinkedIn -->
					{#if member.linkedin}
						<a class="link" href={member.linkedin} target="_blank">
							<div class="link-icon">
								<LinkedIn width={32} height={32} />
							</div>
						</a>
					{/if}
					<!-- Facebook -->
					{#if member.facebook}
						<a class="link" href={member.facebook} target="_blank">
							<div class="link-icon">
								<Facebook width={32} height={32} />
							</div>
						</a>
					{/if}
					<!-- Twitter -->
					{#if member.instagram}
						<a class="link" href={member.instagram} target="_blank">
							<div class="link-icon">
								<Instagram width={32} height={32} />
							</div>
						</a>
					{/if}
					<!-- Instagram -->
					{#if member.twitter}
						<a class="link" href={member.twitter} target="_blank">
							<div class="link-icon">
								<Twitter width={32} height={32} />
							</div>
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1rem;
	}
	.separator-heading {
		text-wrap: nowrap;
	}

	.team-card {
		display: grid;
		grid-template-areas: 'thumbnail' 'header' 'intro' 'contact';
		grid-template-rows:
			[thumbnail] 16rem
			[header] 5rem
			[intro] auto
			[contact] 4rem;
		border: 1px solid hsl(var(--hsl-gray) / 0.15);
		transition: all 0.3s ease-in-out;
		border-radius: 1rem;

		&:hover {
			box-shadow: 8px 10px 15px -3px var(--gray-100);
		}
		& .thumbnail {
			grid-area: thumbnail;
			border-radius: 1rem;
			background: var(--gray-100);
			max-height: max-content;
			& img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 1rem 1rem 0 0;
				aspect-ratio: 16/9;
			}
		}

		& .data-header {
			grid-area: header;
			padding: 1rem;
			& h2 {
				font-size: var(--h4);
				font-weight: 500;
				margin-bottom: 0;
			}
			& p {
				font-size: var(--sm);
			margin:0;
				color: hsl(var(--hsl-brand) /.75);
			}
		}
		& .data-intro {
			grid-area: intro;
			padding: 0 1rem;
			& p {
				font-size: var(--sm);
				text-align: left;
				margin-bottom: 1rem;
				color: hsl(var(--hsl-gray) /.75);
			}
		}
		& .contact {
			display: flex;
			align-items: center;
			justify-content: center;
			border-top: 1px solid hsl(var(--hsl-gray) / 0.15);

			& .link-icon {
				margin-top: 0.5rem;
				padding: 0 0.25rem;
				& svg path {
					width: 1.5rem;
					height: 1.5rem;
					stroke: hsl(var(--hsl-gray));
				}

				&:hover path {
					 stroke: hsl(var(--hsl-brand));;
				}
			}
		}
	}
</style>
