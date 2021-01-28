import { GetLocal, SetLocal } from "../../util/localStorage.js";
import StyleSheets from "../../util/stylesheets.js";

export class Input {
  constructor({ $target }) {
    this.todos = GetLocal("todos");
    this.input = document.createElement("input");
    this.input.addEventListener("input", (e) => this.onChange(e));

    this.button = document.createElement("button");
    this.button.innerText = "제출";
    this.button.addEventListener("click", () => this.onSubmit());

    this.listContainer = document.createElement("div");
    this.listContainer.className = "todos-container";

    $target.appendChild(this.input);
    $target.appendChild(this.button);
    $target.appendChild(this.listContainer);
    this.render(this.todos);
  }

  setState(data) {
    this.data = data;
  }

  onChange(e) {
    this.setState(e.target.value);
  }

  onRemove(id) {
    let todos = GetLocal("todos");
    todos = todos.filter((item) => item.id !== id);
    SetLocal("todos", todos);
    this.render(todos);
  }

  onSubmit() {
    if (this.data === undefined) return;
    let id = 0;
    if (this.todos.length > 0) {
      id = this.todos[this.todos.length - 1]["id"];
      id++;
    }
    this.todos.push({ id: id, data: this.data });
    SetLocal("todos", this.todos);
    this.render(this.todos);
  }

  render(todos) {
    this.listContainer.innerHTML = "";
    todos.map((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.className = "item-container";
      const items = document.createElement("div");
      items.innerText = `${item.id} : ${item.data}`;
      itemContainer.appendChild(items);

      const cancel = document.createElement("button");
      cancel.innerText = "X";

      cancel.addEventListener("click", () => {
        this.onRemove(item.id);
      });
      itemContainer.appendChild(cancel);
      this.listContainer.appendChild(itemContainer);
    });

    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.listContainer,
      Name: "components/input",
    });
  }
}
