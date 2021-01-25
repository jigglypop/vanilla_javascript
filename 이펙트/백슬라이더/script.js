const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let idx = 0;

const setBgToBody = () => {
  body.style.backgroundImage = slides[idx].style.backgroundImage;
};

const setActive = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[idx].classList.add("active");
  body.style.backgroundImage = slides[idx].style.backgroundImage;
};

rightBtn.addEventListener("click", () => {
  idx++;
  if (idx > slides.length - 1) idx = 0;
  setActive();
});

leftBtn.addEventListener("click", () => {
  idx--;
  if (idx < 0) idx = slides.length - 1;
  setActive();
});

setBgToBody();
