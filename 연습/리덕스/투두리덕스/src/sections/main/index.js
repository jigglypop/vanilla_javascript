import { Input } from "../../components/input/index.js";
import { Todos } from "../../components/todos/index.js";
import { createStore } from "../../ngrx/store.js";
import NgComponent from "../../util/NgComponent.js";

export default class MainSection extends NgComponent {
  constructor({ $target }) {
    super();
    // 메인
    this.$target = $target;
    this.outer = this.init(this.$target, "src/sections/main", "section");
    // 스토어 등록
    this.store = createStore();
    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.render();
    });
  }

  // 렌더링
  render() {
    this.clear(this.outer, "src/sections/main");

    // 인풋
    new Input({
      $target: this.outer,
      store: this.store,
      state: this.state,
    });

    new Todos({
      $target: this.outer,
      store: this.store,
      state: this.state,
    });
  }
}
