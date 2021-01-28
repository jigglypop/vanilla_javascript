import NgComponent from "../../util/NgComponent.js";

export default class Basic extends NgComponent {
  constructor({ $target }) {
    super();
    this.$target = $target;
    this.render();
  }
  // 렌더링
  render() {
    // 시작
    this.outer = this.init(this.$target, "src/components/basic", "article");
  }
}
