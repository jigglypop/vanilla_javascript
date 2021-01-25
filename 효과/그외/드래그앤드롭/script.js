const fill = document.querySelector(".fill");
const emties = document.querySelectorAll(".empty");

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  // 기본 기능 풀기 (드래그앤드롭 기능 기본적으로 막음)
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function Drop() {
  this.className = "empty";
  this.append(fill);
}
// 드래그를 시작
fill.addEventListener("dragstart", dragStart);
// 드래그 놓음
fill.addEventListener("dragend", dragEnd);
for (let empty of emties) {
  // 드래그한 물체가 위에 있음
  empty.addEventListener("dragover", dragOver);
  // 드래그한 물체가 안에 진입
  empty.addEventListener("dragenter", dragEnter);
  // 드래그한 물체가 벗어남
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", Drop);
}
