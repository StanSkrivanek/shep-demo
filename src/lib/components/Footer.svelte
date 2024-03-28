<script>
	import Facebook from './icons/Facebook.svelte';
	import Instagram from './icons/Instagram.svelte';
	import MainLogo from './icons/MainLogoNew.svelte';
	import Twitter from './icons/Twitter.svelte';

	// do stuff
</script>

<!-- four section footer -->

<div class="footer__w">
	<div class="footer__section">
		<div class="logo__w">
			<MainLogo />
			<div class="social">
				<a href="#">
					<Instagram currentColor="#3d4c5c" />
				</a>
				<a href="#">
					<Facebook currentColor="#3d4c5c" />
				</a>
				<a href="#">
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

		<!-- <p>info@socialhealth.ie</p> -->
	</div>
	<div class="footer__section">
		<!-- <h3 class="footer__title">Locations</h3> -->
		<div class="group">
			<h5>Organization</h5>
			<div>
				<a class="footer__link" href="/about">About us</a>
			</div>
			<div>
				<a class="footer__link" href="/team">Our Team</a>
			</div>
			<!-- <div>
				<a class="footer__link" href="/privacy">Privacy</a>
			</div> -->
			<!-- <div>
				<a class="footer__link" href="/cookies">Cookies</a>
			</div> -->
			<!-- <div>
				<a class="footer__link" href="/sitemap">Sitemap</a>
			</div> -->
			<div>
				<a class="footer__link" href="/contact">Contact</a>
			</div>
		</div>
		<div class="group">
			<h5>Accreditation</h5>
			<div class="img__w">
				<img
					src="https://cdn.sanity.io/images/gkez65br/production/fc6eb5bb90867b44c5bc99c430f66ec856077b04-450x250.jpg"
					alt="hse logo"
				/>
			</div>
		</div>
		<!-- <div class="group">
			<h5>Locations</h5>
			<p>SHEP Cork</p>
			<p>SHEP Kerry</p>
			<p>SHEP Mid West (Limerick, Clare, Tipperary)</p>
			<p>SHEP Waterford</p>
			<p>SHEP Dublin</p>
		</div> -->
	</div>
	<div class="footer__section">
		<div class="group">
			<h5>Other info</h5>
			<div>
				<a class="footer__link" href="/reports">Publications</a>
			</div>
			<div>
				<a class="footer__link" href="/jobs">Job opportunities</a>
			</div>
		</div>
		<div class="group">
			<h5>SHEP Nuacht</h5>
			<div>
				<a class="footer__link" href="/archive">Archive</a>
			</div>
		</div>
		<div class="group">
			<form action="">
				<label for="newsletter">Sign up for newsletter</label>
				<input type="email" name="newsletter" id="newsletter" placeholder="Your email address" />
				<input type="submit" value="submit" />
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

	/* .footer__title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	} */

	/* .footer__list {
		list-style: none;
		padding: 0;
		margin: 0;
	} */

	/* .footer__item {
		margin-bottom: 0.5rem;
	} */

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
		margin-bottom: 1rem;
		height: 100%;
		& .social {
			display: flex;
			justify-content: center;
			width: 100%;
			margin-top: 2rem;
		}
	}

	form {
		width: 100%;
		/* border: 1px solid red; */
		& label {
			margin-bottom: 0.5rem;
			font-family: var(--ff-gilroy-smb);
		}
		& input[type='email'] {
			/* all: unset; */
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
			background-color: hsl(var(--hsl-brand) / 0.5);
			font-weight: 600;
			font-size: var(--sm);
			letter-spacing: 0.05em;
			cursor: pointer;
			text-transform: uppercase;
		}
		& input[type='submit']:hover {
			background-color: hsl(var(--hsl-brand) / 0.75);
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
