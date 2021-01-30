const itemList = document.querySelector(".itemList");

const func = () => {
  let value = [];
  return (e) => {
    const tag = e.target.tagName;
    if (tag === "INPUT") {
      if (value.length === 0) alert("성공");
      value = [];
    } else {
      value.push(tag);
    }
  };
};
let check = func();

itemList.addEventListener("click", (e) => check(e));

const li = document.createElement("li");
const input = document.createElement("input");
const label = document.createElement("label");
const labelText = document.createTextNode("이벤트 위임 학습");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
