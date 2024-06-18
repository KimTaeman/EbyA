const rcmdCarousel = document.querySelector(".recommendations-carousel");
console.log(rcmdCarousel.scrollLeft - 100)
const rcmdItemWidth = document.querySelector(".recommendations-card").offsetWidth;
const rcmdArrowBtns = document.querySelectorAll(".rcmd-btn");


rcmdArrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(rcmdCarousel.scrollLeft += btn.id === "rcmd-left" ? -rcmdItemWidth : rcmdItemWidth);
  })
})

