<script>
	// MEGAMENU

	// const menu = document.querySelector('.menu');
	// const menuMain = menu?.querySelector('.menu-main');
	// @ts-ignore
	// const goBack = menu?.querySelector('.go-back');
	// const menuTrigger = document.querySelector('.mobile-menu-trigger');
	// const closeMenu = menu?.querySelector('.mobile-menu-close');
	// @ts-ignore
	// let subMenu = null;
	// @ts-ignore
	// menuMain.addEventListener('click', (e) => {
	// 	// @ts-ignore
	// 	if (!menu.classList.contains('active')) {
	// 		return;
	// 	}
	// 	// @ts-ignore
	// 	if (e.target.closest('.menu-item-has-children')) {
	// 		// @ts-ignore
	// 		const hasChildren = e.target.closest('.menu-item-has-children');
	// 		console.log(hasChildren);
	// 		showSubMenu(hasChildren);
	// 	}
	// });
	// goBack?.addEventListener('click', () => {
	// 	hideSubMenu();
	// });
	// @ts-ignore
	// menuTrigger.addEventListener('click', () => {
	// 	toggleMenu();
	// });
	// @ts-ignore
	// closeMenu.addEventListener('click', () => {
	// 	toggleMenu();
	// });
	// @ts-ignore
	// document.querySelector('.menu-overlay').addEventListener('click', () => {
	// 	toggleMenu();
	// });

	// function toggleMenu() {
	// 	// @ts-ignore
	// 	menu.classList.toggle('active');
	// 	// @ts-ignore
	// 	document.querySelector('.menu-overlay').classList.toggle('active');
	// }

	// @ts-ignore
	// function showSubMenu(hasChildren) {
	// 	subMenu = hasChildren.querySelector('.sub-menu');
	// 	subMenu.classList.add('active');
	// 	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	// 	const menuTitle = hasChildren.firstChild.innerText;
	// 	// @ts-ignore
	// 	menu.querySelector('.current-menu-title').innerHTML = menuTitle;
	// 	// @ts-ignore
	// 	menu.querySelector('.mobile-menu-head').classList.add('active');
	// }

	// function hideSubMenu() {
	// 	// @ts-ignore
	// 	subMenu.style.animation = 'slideRight 0.5s ease forwards';
	// 	setTimeout(() => {
	// 		// @ts-ignore
	// 		subMenu.classList.remove('active');
	// 	}, 300);
	// 	// @ts-ignore
	// 	menu.querySelector('.current-menu-title').innerHTML = '';
	// 	// @ts-ignore
	// 	menu.querySelector('.mobile-menu-head').classList.remove('active');
	// }

	// window.onresize = function () {
	// 	// @ts-ignore
	// 	if (this.innerWidth > 991) {
	// 		// @ts-ignore
	// 		if (menu.classList.contains('active')) {
	// 			toggleMenu();
	// 		}
	// 	}
	// };
</script>

<div class="header">
	<div class="row v-center">
		<div class="header-item item-left">
			<a href="/" class="logo">Logo</a>
		</div>
		<div class="header-item item-center">
			<div class="menu-overlay" />
			<div class="menu">
				<div class="mobile-menu-head">
					<div class="go-back">
						<!-- <i class="fa fa-angle-left" /> -->
						back
					</div>
					<div class="current-menu-title" />
					<div class="mobile-menu-close">
						<!-- <i class="fa fa-times" /> -->
						close
					</div>
				</div>

				<ul role="list" class="menu-main">
					<li><a href="/" class="mm-nav-link">Home</a></li>
					<li class="menu-item-has-children">
						<a href="#" class="mm-nav-link">Courses</a>
						<div class="sub-menu mega-menu mega-menu-column-3">
							<div class="list-item">
								<ul role="list" class="">
									<li class="mm-link-btn">
										<a href="#" class="mega-nav-title">Overview</a>
									</li>
									<li class="mm-link-btn">
										<a href="/courses" class="mega-nav-title">Our Courses</a>
									</li>
									<li class="mm-link-btn">
										<a href="/upcoming" class="mega-nav-title">Upcoming</a>
									</li>
								</ul>
								<div class="mm-img-w">
									<img src="https://via.placeholder.com/150" alt="" />
								</div>
							</div>
							<div class="list-item">
								<ul role="list" class="">
									
							</div>
						</div>
					</li>
					<li class="menu-item-has-children">
						<a href="#">Trainings</a>
						<ul class="sub-menu">
							<li><a href="#">Intensive Trainings 1</a></li>
							<li><a href="#">Intensive Trainings 2</a></li>
							<li><a href="#">Intensive Trainings 3</a></li>
						</ul>
					</li>
					<li><a href="/venues">Venues</a></li>
					<!-- <li><a href="#">Upcoming Courses</a></li> -->
					<li><a href="/blog">Blog</a></li>
					<li class="menu-item-has-children">
						<a href="#">About</a>

					</li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
		</div>
		<div class="header-item item-right">
			<span>social</span>
			<span class="mobile-menu-trigger">XXX</span>
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
	}
	/* header */
	.header {
		display: block;
		/* width: 100%; */
		max-width: 1474px;
		margin-inline: auto;
		position: relative;
		z-index: 99;
		padding: 15px;
		border: red 1px solid;
	}
	.header .item-left {
		border: red 1px solid;
		flex: 0 0 17%;
	}
	.header .logo a {
		font-size: 30px;
		color: #000000;
		font-weight: 700;
		text-decoration: none;
	}
	.header .item-center {
		border: red 1px solid;
		flex: 0 0 66%;
		text-align: center;
	}
	.header .item-right {
		border: red 1px solid;
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
		/*margin-left: 25px;*/
	}
	.header .menu > ul > li > a {
		font-size: 15px;
		font-weight: 500;
		color: #000000;
		position: relative;
		text-transform: capitalize;
		transition: color 0.3s ease;
	}
	.header .menu > ul > li .sub-menu {
		position: absolute;
		z-index: 500;
		background-color: #ffffff;
		box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
		padding: 20px 30px;
		transition: all 0.5s ease;
		margin-top: 25px;
		opacity: 0;
		visibility: hidden;
	}
	@media (min-width: 992px) {
		.header .menu > ul > li.menu-item-has-children:hover .sub-menu {
			margin-top: 0;
			visibility: visible;
			opacity: 1;
		}
	}
	.header .menu > ul > li .sub-menu > ul > li {
		line-height: 1;
	}
	.header .menu > ul > li .sub-menu > ul > li > a {
		display: inline-block;
		padding: 10px 0;
		font-size: 15px;
		color: #555555;
		transition: color 0.3s ease;
		text-decoration: none;
		text-transform: capitalize;
	}
	.header .menu > ul > li .single-column-menu {
		min-width: 280px;
		max-width: 350px;
	}
	.header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li {
		line-height: 1;
		display: block;
	}
	.header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
		padding: 10px 0;
		display: inline-block;
		font-size: 15px;
		color: #555555;
		transition: color 0.3s ease;
	}
	.header .menu > ul > li .sub-menu.mega-menu {
		left: 50%;
		transform: translateX(-50%);
	}

	.header .menu > ul > li .sub-menu.mega-menu-column-3 {
		max-width: 1100px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 20px 15px;
	}
	.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item {
		flex: 0 0 33.3333%;
		padding: 0 15px;
	}
	.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item .title {
		font-size: 16px;
		color: #ea4636;
		font-weight: 500;
		line-height: 1;
		padding: 10px 0;
	}
	.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item.text-center .title {
		text-align: center;
	}
	.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item img {
		max-width: 100%;
		width: 100%;
		vertical-align: middle;
		margin-top: 10px;
	}
	.header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a:hover,
	.header .menu > ul > li .sub-menu > ul > li > a:hover,
	.header .item-right a:hover,
	.header .menu > ul > li:hover > a {
		color: #ff4d6a;
	}
	/* banner section */
	.banner-section {
		/* background-image: url('../img/banner.jpg');*/
		background-size: cover;
		background-position: center;
		height: 700px;
		width: 100%;
		display: block;
	}
	.mobile-menu-head,
	.mobile-menu-trigger {
		display: none;
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
			display: flex;
			height: 30px;
			width: 30px;
			margin-left: 15px;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}
		.header .mobile-menu-trigger span {
			display: block;
			height: 2px;
			background-color: #333333;
			width: 24px;
			position: relative;
		}
		.header .mobile-menu-trigger span:before,
		.header .mobile-menu-trigger span:after {
			content: '';
			position: absolute;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #333333;
		}
		.header .mobile-menu-trigger span:before {
			top: -6px;
		}
		.header .mobile-menu-trigger span:after {
			top: 6px;
		}
		.header .item-right {
			align-items: center;
		}

		.header .menu {
			position: fixed;
			width: 320px;
			background-color: #ffffff;
			left: 0;
			top: 0;
			height: 100%;
			overflow: hidden;
			transform: translate(-100%);
			transition: all 0.5s ease;
			z-index: 1099;
		}
		.header .menu.active {
			transform: translate(0%);
			/* added block */
			display: block;
		}
		.header .menu > ul > li {
			line-height: 1;
			margin: 0;
			display: block;
		}
		.header .menu > ul > li > a {
			line-height: 50px;
			height: 50px;
			padding: 0 50px 0 15px;
			display: block;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}
		/*.header .menu > ul > li > a i{
		position: absolute;
		height: 50px;
		width: 50px;
		top:0;
		right: 0;
		text-align: center;
		line-height: 50px;
		transform: rotate(-90deg);
	}
  */
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
		.header .menu .mobile-menu-head .go-back {
			height: 50px;
			width: 50px;
			border-right: 1px solid rgba(0, 0, 0, 0.1);
			cursor: pointer;
			line-height: 50px;
			text-align: center;
			color: #000000;
			font-size: 16px;
			display: none;
		}
		.header .menu .mobile-menu-head.active .go-back {
			display: block;
		}
		.header .menu .mobile-menu-head .current-menu-title {
			font-size: 15px;
			font-weight: 500;
			color: #000000;
		}
		.header .menu .mobile-menu-head .mobile-menu-close {
			height: 50px;
			width: 50px;
			border-left: 1px solid rgba(0, 0, 0, 0.1);
			cursor: pointer;
			line-height: 50px;
			text-align: center;
			color: #000000;
			font-size: 25px;
		}
		.header .menu .menu-main {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.header .menu > ul > li .sub-menu.mega-menu,
		.header .menu > ul > li .sub-menu {
			visibility: visible;
			opacity: 1;
			position: absolute;
			box-shadow: none;
			margin: 0;
			padding: 15px;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding-top: 65px;
			max-width: none;
			min-width: auto;
			display: none;
			transform: translateX(0%);
			overflow-y: auto;
		}
		.header .menu > ul > li .sub-menu.active {
			display: block;
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
		.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item img {
			margin-top: 0;
		}
		.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item.text-center .title {
			margin-bottom: 20px;
		}
		.header
			.menu
			> ul
			> li
			.sub-menu.mega-menu-column-3
			> .list-item.text-center:last-child
			.title {
			margin-bottom: 0px;
		}
		.header .menu > ul > li .sub-menu.mega-menu-column-3 > .list-item {
			flex: 0 0 100%;
			padding: 0px;
		}
		.header .menu > ul > li .sub-menu > ul > li > a,
		.header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
			display: block;
		}
		.header .menu > ul > li .sub-menu.mega-menu > .list-item > ul {
			margin-bottom: 15px;
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
		.menu-overlay.active {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
