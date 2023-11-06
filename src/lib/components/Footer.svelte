<script>
	// do stuff
</script>

<!-- four section footer -->

<div class="footer__w">
	<div class="footer__section">
		<!-- <h3 class="footer__title">SHEP</h3> -->
		<img
			src="https://cdn.sanity.io/images/gkez65br/production/d4881aa85a12a4b55de32a576068e958057fd27c-263x265.svg"
			alt="SHEP logo"
		/>
		<p>Facebook, twitter, instagram</p>
	</div>
	<div class="footer__section">
		<!-- <h3 class="footer__title">Contact</h3> -->
		<!-- office -->
		<div class="group">
			<h5>Office</h5>
			<p>The Old Primary School</p>
			<p>Ardfoyle Avenue</p>
			<p>Ballintemple</p>
			<p>Co. Cork | T12 XDH2</p>
		</div>
		<div class="group">
			<h5>PHONE</h5>
			<p>Cork - (021) 466 6180</p>
			<p>Mid-West - (086) 145 1408</p>
			<p>Kerry - (087) 772 8089</p>
		</div>
		<div>
			<h5>Email</h5>
			<p>info@socialandhealth.com</p>
		</div>
	</div>
	<div class="footer__section">
		<!-- <h3 class="footer__title">Locations</h3> -->
		<div class="group">
			<h5>Locations</h5>
			<p>SHEP Cork</p>
			<p>SHEP Kerry</p>
			<p>SHEP Mid West (Limerick, Clare, Tipperary)</p>
			<p>SHEP Waterford</p>
			<p>SHEP Dublin</p>
		</div>
		<div class="group">
			<h5>Accreditation</h5>
			<p>HSE logo</p>
		</div>
	</div>
	<div class="footer__section">
		<!-- <h3 class="footer__title">Other</h3> -->
		<div class="group">
			<h5>Publications & Reports</h5>
			<p>report and publications links</p>
		</div>
		<div class="group">
			<h5>Shep Newsletter</h5>
			<!-- Latest news and events -->
			<p>latest Nuacht</p>
			<p>Nuacht Archive link</p>
		</div>
		<div class="group">
			<form action="">
				<label for="newsletter">Sign up for our newsletter</label>
				<input type="email" name="newsletter" id="newsletter" placeholder="email address" />
				<input type="submit" value="submit" />
			</form>
		</div>
	</div>
</div>

<style>
	.footer__w {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		max-width: 1474px;
		margin: 0 auto;
		gap: 1rem;
		padding: 2rem 0;
	}

	.footer__section {
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid var(--gray-100);
		& .group {
			margin-bottom: 1rem;
		}
		& p {
			margin: 0;
		}
	}

	.footer__title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.footer__list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer__item {
		margin-bottom: 0.5rem;
	}

	.footer__link {
		color: #fff;
		text-decoration: none;
		transition: color 0.3s ease-in-out;
	}

	.footer__link:hover {
		color: #f26a2e;
	}
</style>
