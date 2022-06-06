let selectedIndex = 0;

const carouselParent = document.querySelector(".carousel__parent");
const carousel = document.querySelector(".carousel");
const cells = [...carousel.querySelectorAll(".carousel__cell")];
const cellCount = cells.length;
const theta = 360 / cellCount;
const cellHeight = cells[selectedIndex].offsetHeight;
const radius = Math.round(cellHeight / 2 / Math.tan(Math.PI / cellCount));

cells.forEach((cell, i) => {
  cell.style.opacity = 1;
  const cellAngle = theta * i;
  cell.style.transform = `rotateX(${cellAngle}deg) translateZ(${radius}px)`;
  cell.style.top = '0.5rem';
  cell.style.bottom = '0.5rem';
});

function rotateCarousel() {
  const angle = theta * selectedIndex * -1;
  carousel.style.transform = `translateZ(${-radius}px) rotateX(${angle}deg)`;
  carouselParent.style.height = `${cellHeight}px`;
}

const prevButton = document.getElementById("carouselPrevious");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

const nextButton = document.getElementById("carouselNext");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});

rotateCarousel();
