const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const createToast = (message) => {
  const toasts = document.getElementById("toasts");

  const note = document.createElement("div");
  note.classList.add("toast");
  note.innerText = `${message} 완료!`;
  toasts.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 2000);
};

button.addEventListener("click", () => createToast("완료"));
