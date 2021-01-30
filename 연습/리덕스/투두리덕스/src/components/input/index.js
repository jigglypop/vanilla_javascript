import NgComponent from "../../util/NgComponent.js";

export class Input extends NgComponent {
  constructor({ $target, store, state }) {
    super();
    this.$target = $target;
    this.outer = this.init(this.$target, "src/components/input");
    // 스토어 불러오기
    this.store = store;
    this.state = state;
    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  onChange(e) {
    this.value = e.target.value;
  }

  onSubmit() {
    this.store.dispatch({ type: "create", value: this.value });
  }

  render() {
    this.clear(this.outer, "src/components/input");
    const input = this.MakeInput(this.outer, (e) => this.onChange(e));
    const btn = this.MakeBtn(
      this.outer,
      () => {
        this.onSubmit();
      },
      "제출"
    );
  }
}
