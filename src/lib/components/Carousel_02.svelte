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

next.onclick = function () {
  pauseSlides();
  nextSlide();
};

// previous
function prevSlide() {
  showSlide(currentSlide - 1);
}

prev.onclick = function () {
  pauseSlides();
  prevSlide();

};


// show current (next/prev) slide
function showSlide(num) {
  slides[currentSlide].className = "fds-slide";
  currentSlide = (num + slides.length) % slides.length;
  slides[currentSlide].className = "fds-slide is-visible";
  updateNav();
}


// [ === PAGINATION === ]

// create slider navigation based on number of slides
function createPagination(slides) {
  sliderNavContainer.innerHTML = `
  <ol class='fds-slider-navigation'>
  ${slides
    .map((item, idx) => {
      return `<li id="${idx}" class="fds-nav-item${
        item.className === "fds-slide is-visible" ? " selected" : ""
      }"><a href="#">${idx + 1}</a></li>`;
    })
    .join("")}
  </ol>`;
}

// updating slider nav 
function updateNav() {
  let [...list] = sliderNavContainer.children[0].children;
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
function keysNav(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37: // arr <
      clearInterval(slideInterval);
      prevSlide();
      break;
    case 39: // arr > 
      clearInterval(slideInterval);
      nextSlide();
      break;
      default: none;
  }
}

// [ === CLICK - GO TO THIS === ]

// invoke `thisSlide()` function on click event listener
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
sliderNavContainer.addEventListener("click", (event) => {
  const cEl = event.target;
  const pEl = cEl.parentElement
  const pId = pEl.id
  const [...list] = sliderNavContainer.children[0].children;
  
  list.forEach((item) => item.classList.remove("selected"));
  pEl.classList.add("selected");

  showSlectedSlide(pId);
});

mainContainer.addEventListener("mouseover", pauseSlides);
mainContainer.addEventListener("mouseout", playAgain);
window.addEventListener("keyup", keysNav);

</script>