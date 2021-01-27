const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const hide = () => {
  contents.forEach((content) => content.classList.remove("show"));
  listItems.forEach((item) => item.classList.remove("active"));
};

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hide();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});
