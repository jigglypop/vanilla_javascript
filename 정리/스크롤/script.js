const boxes = document.querySelectorAll(".box");
console.log(boxes);

checkBox();

function checkBox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    // getBoundingClientRect : 각종 좌표값이 들어있는 객체
    // top :  Viewport의 시작지점을 기준으로 한 상대좌표 Y 값.
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
window.addEventListener("scroll", checkBox);
