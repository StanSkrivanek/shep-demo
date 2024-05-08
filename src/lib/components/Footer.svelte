<script>
	// @ts-nocheck
	import Facebook from './icons/Facebook.svelte';
	import Instagram from './icons/Instagram.svelte';
	import MainLogo from './icons/MainLogoNew.svelte';
	import Twitter from './icons/Twitter.svelte';
</script>

<div class="footer__w">
	<div class="footer__section">
		<div class="logo__w">
			<MainLogo />
			<div class="social">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" aria-label="Instagram" rel="nofollow noopener noreferrer">
					<Instagram currentColor="#3d4c5c" />
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" aria-label="Facebook" rel="nofollow noopener noreferrer">
					<Facebook currentColor="#3d4c5c" />
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" aria-label="Twitter" rel="nofollow noopener noreferrer">
					<Twitter currentColor="#3d4c5c" />
				</a>
			</div>
		</div>
	</div>
	<div class="footer__section">
		<div class="group">
			<h5>Office</h5>
			<p>The Old Primary School</p>
			<p>Ardmore Avenue</p>
			<p>Balinatemple</p>
			<p>Co. Cork | T25 XYD7</p>
		</div>
		<div class="group">
			<h5>PHONE</h5>
			<p>Cork - (022) 12 4455</p>
			<p>Mid-West - (081) 356 6698</p>
			<p>Kerry - (083) 155 7887</p>
		</div>
	</div>
	<div class="footer__section">
		<div class="group">
			<h5>Organization</h5>
			<div>
				<a class="footer__link" href="/about">About us</a>
			</div>
			<div>
				<a class="footer__link" href="/team">Our Team</a>
			</div>
			<div>
				<a class="footer__link" href="/contact">Contact</a>
			</div>
		</div>
		<div class="group">
			<h5>Other info</h5>
			<div>
				<a class="footer__link" href="/reports">Reports & Publications</a>
			</div>
			<div>
				<a class="footer__link" href="/jobs">Job opportunities</a>
			</div>
		</div>
	</div>
	<div class="footer__section">
		<div class="group">
			<div class="group">
				<h5>SHEP Nuacht</h5>
				<div>
					<a class="footer__link" href="/archive">Archive</a>
				</div>
			</div>
		</div>
		<div class="group">
			<h5>Newsletter</h5>
			<a class="button" href="/newsletter">Subscribe to newsletter</a>
		</div>
	</div>
</div>
<div class="copyright">
	<p>&copy; {new Date().getFullYear()} SHEP. All rights reserved.</p>
</div>

<style>
	.footer__w {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		max-width: 1474px;
		margin: 0 auto;
		gap: 2rem;
		padding-block: 3rem;
		padding-inline: 1.5rem;
		border-top: 1px solid hsl(var(--hsl-gray) / 0.1);
	}

	.footer__section {
		border-radius: 1rem;

		& .group {
			margin-bottom: 1rem;
			& h5 {
				margin-bottom: 0.75rem;
				font-family: var(--ff-gilroy-smb);
				max-width: max-content;
				line-height: 1.6rem;
			}
			& .img__w {
				max-width: 100%;

				border-radius: 0.5rem;
				overflow: hidden;

				& img {
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}
		}
		& p {
			margin: 0;
		}
	}

	.footer__link {
		text-decoration: none;
		transition: color 0.3s ease-in-out;
	}

	.footer__link:hover {
		color: hsl(var(--hsl-brand));
	}
	.logo__w {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		& .social {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			margin-top: 2rem;
			& svg:hover {
				transition: 0.3s ease;
				& path {
					fill: hsl(var(--hsl-brand)) !important;
				}
			}
		}
	}
	
	.copyright {
		padding: 1rem;
		background-color: hsl(var(--hsl-gray) / 0.05);
		text-align: center;
		& p {
			max-width: none;
			font-size: var(--xs);
		}
	}

	/* Media Queries */
	@media (max-width: 1280px) {
	}

	@media (max-width: 1024px) {
		.footer__w {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.footer__w {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
	}

	@media (max-width: 640px) {
		.footer__w {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
	}
</style>
