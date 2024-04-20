<script>
	import Facebook from './icons/Facebook.svelte';
	import Instagram from './icons/Instagram.svelte';
	import MainLogo from './icons/MainLogoNew.svelte';
	import Twitter from './icons/Twitter.svelte';

</script>

<!-- four section footer -->

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
			<form action="" id="newsletter-signup">
				<label for="newsletter">Sign up for newsletter</label>
				<input type="email" name="newsletter" id="newsletter" placeholder="Your email address" />
				<input type="submit" value="Sign up" />
			</form>
		</div>
	</div>
</div>

<style>
	.footer__w {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		max-width: 1474px;
		margin: 0 auto;
		gap: 2rem;
		padding: 1rem;
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
		/* color: #fff; */
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
			gap:0.5rem;
			margin-top: 2rem;
			& svg:hover {
				transition: 0.3s ease;
				& path {
					fill: hsl(var(--hsl-brand)) !important;
				}
			}
		}
	}

	form {
		width: 100%;
		& label {
			margin-bottom: 0.5rem;
			font-family: var(--ff-gilroy-smb);
			color: hsl(var(--hsl-gray) / 0.8);
			font-weight: 600;
		}
		& input[type='email'] {
			width: 100%;
			font-size: 1rem;
			padding: 0.5rem;
			border: 1px solid var(--gray-100);
			border-radius: 0.25rem;
			margin-bottom: 1rem;
		}

		& input[type='submit'] {
			width: 100%;
			padding: 1rem;
			border: none;
			border-radius: 0.25rem;
			background-color: hsl(var(--hsl-blue)/0.75 );
			font-weight: 600;
			font-size: var(--sm);
			letter-spacing: 0.05em;
			color: white;
			cursor: pointer;
			text-transform: uppercase;
		}
		& input[type='submit']:hover {
			background-color: hsl(var(--hsl-blue));
		}
	}
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
