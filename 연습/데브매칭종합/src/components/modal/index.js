import NgComponent from "../../util/NgComponent.js";

export default class Modal extends NgComponent {
  constructor({ $target, item }) {
    super();
    this.$target = $target;
    this.item = item;
    this.outer = this.init(this.$target, "src/components/modal");
    const modalcontainer = document.querySelector(".modal-container");
    modalcontainer.classList.add("hidden");
    this.render();
  }

  toggle() {
    const modalcontainer = document.querySelector(".modal-container");
    modalcontainer.classList.toggle("hidden");
  }

  setState(item) {
    this.item = item;
    this.render();
  }

  // 렌더링
  render() {
    // 오버레이, 콘텐츠
    this.outer.classList.toggle("hidden");
    this.Make(this.outer, "div", "", "overlay");
    const modalContent = this.Make(this.outer, "div", "", "modal-content");
    // 버튼
    this.MakeBtn(modalContent, this.toggle(), "취소");
  }
}
