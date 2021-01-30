import NgComponent from "../../util/NgComponent.js";

export class Todo extends NgComponent {
  constructor({ $target, todo, store, state }) {
    super();
    this.$target = $target;
    this.todo = todo;
    // 스토어 불러오기
    this.store = store;
    this.state = state;
    this.outer = this.init(this.$target, "src/components/todo");
    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  onDelete(id) {
    this.store.dispatch({ type: "remove", id: id });
  }

  render() {
    this.clear(this.outer, "src/components/todo");
    this.Make(this.outer, "h3", `${this.todo.id} : ${this.todo.value}`);
    this.MakeBtn(
      this.outer,
      () => {
        this.onDelete(this.todo.id);
      },
      "X"
    );
  }
}
