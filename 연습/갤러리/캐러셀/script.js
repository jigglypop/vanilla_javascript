const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

let idx = 0;
const changeImage = () => {
  if (idx > img.length - 5) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 100}px)`;
};

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});
