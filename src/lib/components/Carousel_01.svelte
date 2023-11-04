<script>
	/**
	 * @type {any[]}
	 */
	export let slides = [];
	/**
	 * @type {number}
	 */
	export let duration = 3000;
	// const td = 1000;
	
	
	//js

	// const [...feed] = document.querySelectorAll('.w-dyn-item');
	// const sliderNav = [...document.querySelector('.sld-05-btns__w').children];
	// const infoContainer = document.querySelector('.sld-05-info__w');
	// const sub = document.querySelector('.sld-05-info--sub');
	// const title = document.querySelector('.sld-05-info--title');
	// const content = document.querySelector('.sld-05-info--txt');
	// const imgMain = document.querySelector('.sld-05-img__c img');

	// const btnPrev = sliderNav[0];
	// const btnNext = sliderNav[2];


	// add class `active` to first slide
	// feed[0].classList.add('active');
	// slides[0].classList.add('active');

	// function getNextPrev() {
	// 	const activeSlide = document.querySelector('.active');

	// 	let activeIndex = slides.indexOf(activeSlide);
	// 	let prev, next;

	// 	// imgMain.style.transition = `${td / 1000}s ease all`;
	// 	// imgMain.style.transform = 'translateX(25%)';
	// 	// imgMain.style.opacity = 0;

	// 	// infoContainer.style.opacity = 0;
	// 	// infoContainer.style.transform = 'translateY(10%)';

	// 	// NEXT
	// 	if (activeIndex === slides.length - 1) {
	// 		next = slides[0];
	// 	} else {
	// 		next = slides[activeIndex + 1];
	// 	}

	// 	// PREV
	// 	if (activeIndex === 0) {
	// 		prev = slides[slides.length - 1];
	// 	} else {
	// 		prev = slides[activeIndex - 1];
	// 	}
	// 	// slides Data
	// 	// getData(activeSlide, next, prev);

	// 	return [activeSlide, activeIndex, prev, next];
	// }

	// WITHOUT THIS fn it would not work (on first click)
	// function getCurrentSlide() {
	// 	const [activeSlide, activeIndex, prev, next] = getNextPrev();
	// 	if (activeSlide) {
	// 		// getData(activeSlide, next, prev);
	// 	}
	// }

	// function getData(slide, next, prev) {
	// 	// prevent 403 for imageholder
	// 	const imgSrcMain = slide.children[3].src;
	// 	//imgMain.src = imgSrcMain;

	// 	setTimeout(function () {
	// 		// imgMain.src = imgSrcMain;
	// 		// sub.innerText = slide.children[0].innerText;
	// 		// title.innerText = slide.children[1].innerText;
	// 		// content.innerText = slide.children[2].innerText;

	// 		// imgMain.style.transition = `all ${td / 1000}s ease`;
	// 		// imgMain.style.transform = 'translateX(0%)';
	// 		// imgMain.style.opacity = '1';

	// 		// infoContainer.style.opacity = 1;
	// 		// infoContainer.style.transition = `all ${td / 1000}s ease`;
	// 		// infoContainer.style.transform = 'translateY(0%)';
	// 	}, td);
	// }


	// function getPrevSlide() {
	// 	let [activeSlide, activeIndex, prev, next] = getNextPrev();

	// 	activeSlide.classList.remove('active');
	// 	prev.classList.add('active');

	// 	getCurrentSlide();
	// }

	// function getNextSlide() {
	// 	let [activeSlide, activeIndex, prev, next] = getNextPrev();

	// 	activeSlide.classList.remove('active');
	// 	next.classList.add('active');

	// 	getCurrentSlide();
	// }

	// getNextPrev();

	// // === LISTENERS ===
	// btnPrev.addEventListener('click', getPrevSlide, false);
	// btnNext.addEventListener('click', getNextSlide, false);
</script>
