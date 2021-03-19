"use strict";

function productScroll() {
  const slider = document.getElementById("slider");
  const next = document.querySelector(".pro-next");
  const prev = document.querySelector(".pro-prev");
  const slides = document.querySelectorAll('img.item')

  slides.forEach(slide => slide.width = slider.offsetWidth/4);

  let position = 0; //slider postion

  prev.addEventListener("click", function() {
    //click previos button
    if (position > 0) {
      //avoid slide left beyond the first item
      position -= 1;
      moveSlide(position); //translate items
    }
  });

  next.addEventListener("click", function() {
    if (position >= 0 && position < (slides.length - 4)) {
      //avoid slide right beyond the last item
      position += 1;
      moveSlide(position); //translate items
    }
  });
}

function moveSlide(position) {
  const slides = document.querySelectorAll('img.item')
  const slideWidth = slides[0].offsetWidth;

  slide.style.transform = `translateX(${position*(-slideWidth)}px)`;
}
 