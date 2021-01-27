const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming";
let idx = 1;
let speed = 100;

const writeText = () => {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) idx = 1;
  setTimeout(writeText, speed);
};
writeText();
