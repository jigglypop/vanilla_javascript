const container = document.getElementById("container");
var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

// 랜덤
const getRandom = (objects) => {
  return objects[Math.floor(Math.random() * objects.length)];
};

// 색 넣기
const setColor = (el) => {
  const color = getRandom(colors);
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// 색 지우기
const removeColor = (el) => {
  el.style.background = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
