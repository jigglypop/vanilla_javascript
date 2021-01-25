const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  // 클릭 이벤트
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart);
  // 횟수 이벤트
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};

// loveMe.addEventListener("click", (e) => {
//   // 더블클릭 이벤트 반응성보다 클릭 < 800을 추천
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

// 클릭
loveMe.addEventListener("click", (e) => {
  createHeart(e);
});
