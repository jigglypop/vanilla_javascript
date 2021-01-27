import XMLrender from "../../util/XMLrender.js";

export default class MainSection extends XMLrender {
  constructor({ $target }) {
    super();
    this.$target = $target;
    this.render();
  }

  setState(items) {
    this.items = items;
    this.render();
  }

  // 렌더링
  render() {
    const h1 = this.Make(this.$target, "h1", "안녕하세요");
    const h2 = this.Make(this.$target, "h1", "반갑습니다");
    const p = this.Make(this.$target, "p", "하위");

    this.init(this.$target, "src/sections/main");
  }
}
