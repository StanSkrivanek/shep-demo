<script>

// get slides from container
const mainContainer = document.querySelector(".fds-slider-container");
const sliderNavContainer = document.querySelector(".fds-slider-nav__c");
const [...slides] = document.querySelectorAll(".fds-slides_wrap .fds-slide");



// next / prev
const next = document.querySelector("#forth");
const prev = document.querySelector("#back");


let currentSlide = 0;
// set time in ms
let iTime = 5000;
// set interval 
let slideInterval = setInterval(nextSlide, iTime);

// if items exist dynamically create slider numbered nav 
if (slides.length >= 1) {
  createPagination(slides);
}

// next
function nextSlide() {
  showSlide(currentSlide + 1);
}

// @ts-ignore
next.onclick = function () {
  pauseSlides();
  nextSlide();
};

// previous
function prevSlide() {
  showSlide(currentSlide - 1);
}

// @ts-ignore
prev.onclick = function () {
  pauseSlides();
  prevSlide();

};


// show current (next/prev) slide
	/**
	 * @param {number} num
	 */
function showSlide(num) {
  slides[currentSlide].className = "fds-slide";
  currentSlide = (num + slides.length) % slides.length;
  slides[currentSlide].className = "fds-slide is-visible";
  updateNav();
}


// [ === PAGINATION === ]

// create slider navigation based on number of slides
	/**
	 * @param {any[]} slides
	 */
function createPagination(slides) {

  // @ts-ignore
  sliderNavContainer.innerHTML = `
  <ol class='fds-slider-navigation'>
  ${slides
    .map((/** @type {{ className: string; }} */ item, /** @type {number} */ idx) => {
      return `<li id="${idx}" class="fds-nav-item${
        item.className === "fds-slide is-visible" ? " selected" : ""
      }"><a href="#">${idx + 1}</a></li>`;
    })
    .join("")}
  </ol>`;
}

// updating slider nav 
function updateNav() {
  // @ts-ignore
  let [...list] = sliderNavContainer?.children[0].children;
  list.map((item, idx) => {
    item.classList.remove("selected");
    currentSlide === idx ? item.classList.add("selected") : "";
  });
}

// restart
function playAgain() {
  slideInterval = setInterval(nextSlide, iTime);
}

// break
function pauseSlides() {
  clearInterval(slideInterval);
}

// [ === KEYBOARD NAV === ]

// This functionality is only basic
	/**
	 * @param {{ keyCode: any; }} e
	 */
function keysNav(e) {
 
  switch (e.keyCode) {
    case 37: // arr <
      clearInterval(slideInterval);
      prevSlide();
      break;
    case 39: // arr > 
      clearInterval(slideInterval);
      nextSlide();
      break;
      // @ts-ignore
      default: none;
  }
}

// [ === CLICK - GO TO THIS === ]

// invoke `thisSlide()` function on click event listener
	/**
	 * @param {number} elmId
	 */
function showSlectedSlide(elmId) {
	slides.forEach((slide,i) => {
		slide.classList.remove("is-visible")
		if(i == elmId){
			showSlide(i)
		}
	})
}

// [ === EVENT LISTENERS === ]

// active numbered navigation
// @ts-ignore
sliderNavContainer.addEventListener("click", (event) => {
  const cEl = event.target;
  // @ts-ignore
  const pEl = cEl.parentElement
  const pId = pEl.id
  // @ts-ignore
  const [...list] = sliderNavContainer.children[0].children;
  
  list.forEach((item) => item.classList.remove("selected"));
  pEl.classList.add("selected");

  showSlectedSlide(pId);
});

// @ts-ignore
mainContainer.addEventListener("mouseover", pauseSlides);
// @ts-ignore
mainContainer.addEventListener("mouseout", playAgain);
window.addEventListener("keyup", keysNav);

</script>