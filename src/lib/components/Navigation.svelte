<script>
	import { onMount } from 'svelte';
	import Close from './icons/Close.svelte';
	import Facebook from './icons/Facebook.svelte';
	import Instagram from './icons/Instagram.svelte';
	import MainLogoNew from './icons/MainLogoNew.svelte';
	import NavBurger from './icons/NavBurger.svelte';
	import Twitter from './icons/Twitter.svelte';

	let isSubmenuOpen = false;
	let isMobileNavOpen = false;
	let isMobile = false;

	onMount(() => {
		const withChildren = [...document.querySelectorAll('.menu-item-has-children')];

		// Set initial value of isMobile
		isMobile = window.innerWidth < 991;

		withChildren.forEach((el) => {
			/**
			 * @type {Element | null | undefined}
			 */
			let sub = undefined;

			el.addEventListener('mouseenter', (e) => {
				sub = el.querySelector('.sub-menu');
				sub?.classList.add('active');

				const dropdownLinks = [...el.querySelectorAll('.sub-menu li a')];

				dropdownLinks?.forEach((link) => {
					link.addEventListener('click', (/** @type {{ preventDefault: () => void; }} */ e) => {
						sub?.classList.remove('active');
						isSubmenuOpen = false;
					});
				});
			});
			el.addEventListener('mouseleave', (e) => {
				e.preventDefault();
				// isSubmenuOpen = false;
				if (sub) {
					sub.classList.remove('active');
				}
			});
		});
	});
</script>

<!--  Update isMobile when the window is resized -->
<svelte:window on:resize={() => (isMobile = window.innerWidth <= 991)} />

<div class="header">
	<div class="row v-center">
		<div class="header-item item-left">
			<a href="/" class="logo">
				<MainLogoNew width={50} height={50} />
			</a>
		</div>
		<div class="header-item item-center">
			<div class="menu-overlay" class:active={isMobileNavOpen} />
			<div class="menu" class:active={isMobileNavOpen}>
				<div class="mobile-menu-head">
					<div class="current-menu-title" />
					<button
						class="mobile-menu-close"
						on:click={() => (isMobileNavOpen = !isMobileNavOpen)}
						aria-label="Close mobile menu"
					>
						<Close />
					</button>
				</div>

				<ul role="list" class="menu-main">
					<li>
						<a href="/" on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
							>Home</a
						>
					</li>
					<li class="menu-item-has-children">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="mm-nav-link">Courses</a>
						<div class="sub-menu">
							<div class="list-item">
								<ul role="list" class="">
									<li>
										<a
											href="/courses/overview"
											class="mega-nav-title"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Overview</a
										>
									</li>
									<li>
										<a
											href="/courses"
											class="mega-nav-title"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Our Courses</a
										>
									</li>
									<li>
										<a
											href="/upcoming"
											class="mega-nav-title"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Upcoming</a
										>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="menu-item-has-children">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="mm-nav-link">Trainings</a>
						<div class="sub-menu">
							<div class="list-item">
								<ul role="list" class="">
									<li>
										<a
											href="/trainings/overview"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Overview</a
										>
									</li>
									<li>
										<a
											href="/trainings"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Our trainings</a
										>
									</li>
									<li>
										<a
											href="/upcoming"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Upcoming</a
										>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="menu-item-has-children">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="mm-nav-link">Projects</a>
						<div class="sub-menu">
							<div class="list-item">
								<ul role="list" class="">
									<li>
										<a
											href="/advocacy"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Advocacy</a
										>
									</li>
									<li>
										<a
											href="/counselling"
											on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
											>Counselling</a
										>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a
							href="/venues"
							on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}>Venues</a
						>
					</li>

					<li>
						<a href="/blog" on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
							>Blog</a
						>
					</li>
					<!-- <li>
						<a href="/about" on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
							>About</a
						>
					</li> -->
					<!-- <li>
						<a
							href="/contact"
							on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}>Contact</a
						>
					</li> -->
				</ul>
			</div>
		</div>
		<div class="header-item item-right">
			<div class="social">
				<Twitter width={32} height={32} />

				<Facebook width={32} height={32} />

				<Instagram width={32} height={32} />
			</div>
			<button
				class="mobile-menu-trigger"
				on:click={isMobile ? () => (isMobileNavOpen = !isMobileNavOpen) : null}
				><NavBurger width={32} height={32} /></button
			>
		</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
	}
	.v-center {
		align-items: center;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		&:hover {
			color: var(--color-brand);
		}
	}
	/* header */
	.header {
		display: block;
		max-width: 1474px;
		margin-inline: auto;
		position: relative;
		z-index: 99;
		padding: 15px;
	}
	.header .item-left {
		flex: 0 0 17%;
	}
	.header .logo a {
		font-size: 30px;
		color: #000000;
		font-weight: 700;
		text-decoration: none;
	}
	.header .item-center {
		flex: 0 0 66%;
		text-align: center;
	}
	.header .item-right {
		flex: 0 0 17%;
		display: flex;
		justify-content: flex-end;
	}
	.header .item-right a {
		text-decoration: none;
		font-size: 16px;
		color: #555555;
		display: inline-block;
		margin-left: 10px;
		transition: color 0.3s ease;
	}
	.header .menu > ul > li {
		display: inline-block;
		line-height: 50px;
		margin-left: 8px;
	}
	.header .menu > ul > li > a {
		font-size: 1.25rem;
		font-weight: 500;
		color: #000000;
		position: relative;
		text-transform: capitalize;
		transition: color 0.3s ease;
	}

	.sub-menu {
		position: absolute;
		z-index: 100;
		background-color: #ffffff;
		box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
		padding: 20px 30px;
		margin-top: 1rem;
		opacity: 0;
		visibility: hidden;
		border-radius: 0.5rem;
		font-size: 1.25rem;
		text-align: left;
		transition: transform 0.5s ease;
	}

	.mm-nav-link {
		cursor: default;
	}
	.social {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (min-width: 992px) {
		.active {
			margin-top: 0;
			visibility: visible;
			opacity: 1;
			z-index: 200;
			transition: all 0.5s ease;
		}
	}

	.header .item-right a:hover,
	.header .menu > ul > li:hover > a {
		color: var(--color-brand);
	}

	.mobile-menu-head,
	.mobile-menu-trigger {
		display: none;
	}

	.menu-overlay {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1098;
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s ease;
	}
	/*responsive*/
	@media (max-width: 991px) {
		.header .item-center {
			order: 3;
			flex: 0 0 100%;
		}

		.header .item-left,
		.header .item-right {
			flex: 0 0 auto;
		}

		.v-center {
			justify-content: space-between;
		}

		.header .mobile-menu-trigger {
			border: none;
			background: none;
			display: flex;
			margin-left: 15px;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}

		.header .item-right {
			align-items: center;
		}

		.header .menu {
			position: fixed;
			width: 300px;
			background-color: #ffffff;
			left: 0;
			top: 0;
			height: 100%;
			overflow: hidden;
			left: -100%;
			transition: left 0.5s ease;
			z-index: 1099;
		}

		.header .menu.active {
			left: 0%;
			transition: left 0.5s ease;
			/* display: block; */
		}
		.header .menu > ul > li {
			line-height: 1;
			margin: 0;
			display: block;
		}

		.header .menu > ul > li > a {
			line-height: 50px;
			height: 50px;
			padding: 0 50px 0 1.6rem;
			display: block;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}

		.header .menu .mobile-menu-head {
			display: flex;
			height: 50px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			justify-content: space-between;
			align-items: center;
			position: relative;
			z-index: 501;
			position: sticky;
			background-color: #ffffff;
			top: 0;
		}

		.header .menu .mobile-menu-head .current-menu-title {
			font-size: 15px;
			font-weight: 500;
			color: #000000;
		}
		.header .menu .mobile-menu-head .mobile-menu-close {
			border: none;
			background: none;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 50px;
			width: 50px;
			border-left: 1px solid rgba(0, 0, 0, 0.1);
			cursor: pointer;
		}
		.header .menu .menu-main {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			text-align: left;
		}
		.menu-main > li:hover {
			background-color: var(--gray-1);
		}
		.sub-menu {
			visibility: visible;
			opacity: 1;
			text-align: left;
			position: absolute;
			box-shadow: none;
			margin: 0;
			padding-left: 2.4rem;
			width: 100%;
			height: 100%;
			max-width: none;
			min-width: auto;
			display: none;
			/* transform: translateX(0%); */
			overflow-y: auto;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}

		.sub-menu {
			/* padding: 0; */
			display: block;
			position: relative;
		}
		.sub-menu > .list-item li {
			display: block;
			padding-block: 0.75rem;
		}
		@keyframes slideLeft {
			0% {
				opacity: 0;
				transform: translateX(100%);
			}
			100% {
				opacity: 1;
				transform: translateX(0%);
			}
		}
		@keyframes slideRight {
			0% {
				opacity: 1;
				transform: translateX(0%);
			}
			100% {
				opacity: 0;
				transform: translateX(100%);
			}
		}

		.menu-overlay.active {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
