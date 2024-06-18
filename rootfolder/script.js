const rcmdCarousel = document.querySelector(".recommendations-carousel");
const rcmdItemWidth = document.querySelector(".recommendations-card").offsetWidth;
const rcmdArrowBtns = document.querySelectorAll(".rcmd-btn");


rcmdArrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    rcmdCarousel.scrollLeft += btn.id === "rcmd-left" ? -rcmdItemWidth : rcmdItemWidth;
  })
})

