import NgComponent from "../../util/NgComponent.js";

export default class Spinner extends NgComponent {
  constructor({ $target }) {
    super();
    this.$target = $target;
    this.render();
  }
  // 로딩 토글
  toggleLoading() {
    const spinner = document.querySelector(".spinner-container");
    spinner.classList.toggle("hidden");
  }
  // 렌더링
  render() {
    this.outer = this.init(this.$target, "src/components/spinner");
    this.outer.classList.add("hidden");
  }
}
