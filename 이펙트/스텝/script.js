const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle-test");

let cur = 1;
prev.addEventListener("click", () => {
  cur--;
  if (cur < 1) cur = 1;
  update();
});
next.addEventListener("click", () => {
  cur++;
  if (cur > circles.length) cur = circles.length;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < cur) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (cur === 1) {
    prev.disabled = true;
  } else if (cur === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
