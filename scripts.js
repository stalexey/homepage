function expandMenu() {
	var x = document.getElementById("NavigaionBarID");
  x.className = "NavigationBar Responsive";
}

function collapseMenu() {
	var x = document.getElementById("NavigaionBarID");
	x.className = "NavigationBar";
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("SlideDot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" SlideActive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " SlideActive";
}

function initializeSlides() {
  let slides = document.getElementsByClassName("Slides");
  let slideSelector = document.querySelector(".SlideSelector");
  slideSelector.innerHTML = "";
  for (i = 1; i <= slides.length; i++)
    slideSelector.innerHTML += `<SPAN class="SlideDot" onclick="currentSlide(` + i + `)"></SPAN>`
  currentSlide(1);
}