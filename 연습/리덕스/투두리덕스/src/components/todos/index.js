import NgComponent from "../../util/NgComponent.js";
import { Todo } from "../todo/index.js";

export class Todos extends NgComponent {
  constructor({ $target, store, state }) {
    super();
    this.$target = $target;
    this.outer = this.init(this.$target, "src/components/todos");
    // 스토어 불러오기
    this.store = store;
    this.state = state;
    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.clear(this.outer, "src/components/todos");
    this.state.todos.map(
      (item) =>
        new Todo({
          $target: this.outer,
          todo: item,
          store: this.store,
          state: this.state,
        })
    );
    console.log("todos", this.state);
  }
}
