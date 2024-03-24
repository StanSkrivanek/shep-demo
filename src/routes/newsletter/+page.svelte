<svelte:head>
	<title>Newsletter - Sign up</title>
	<meta name="description" content="Sign up to our Newsletter" />
</svelte:head>

<div class="content">
	<main class="main">
      <!-- TODO: make it modal -->
		<div class="form-container">
			<h1>Newsletter</h1>

			<p>Sign up to our newsletter to get the latest news and updates.</p>
			<form>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" />
				<button type="submit">Sign up</button>
			</form>
		</div>
	</main>
	<div class="decor">
		<img src="images/well-being.jpg" alt="pile of stones" />
	</div>
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		min-height: 100dvh;
		/* width: 100vw; */
		border: 1px solid red;
	}
	.main {
		grid-column: 1/2;
		& .form-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			padding: 2rem;
			& h1 {
				font-size: 2rem;
				margin-bottom: 1rem;
			}
			& p {
				font-size: 1.2rem;
				margin-bottom: 1rem;
			}
			& form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				& label {
					font-size: 1.2rem;
					margin-bottom: 1rem;
				}
				& input {
					width: 100%;
					padding: 0.5rem;
					margin-bottom: 1rem;
				}
				& button {
					width: 100%;
					padding: 0.5rem;
					margin-bottom: 1rem;
				}
			}
		}
	}
	.decor {
		grid-column: 2/-1;
	}

	.decor img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border: 1px solid red;
	}
</style>
