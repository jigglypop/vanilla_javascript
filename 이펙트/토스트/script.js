const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = ["메세지 1", "메세지 2", "메세지 3", "메세지 4"];
const types = ["info", "success", "error"];

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const createNotification = (message = null, type = null) => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 2000);
};

button.addEventListener("click", () => createNotification());
