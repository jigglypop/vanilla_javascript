import NgComponent from "../../util/NgComponent.js";

export default class Card extends NgComponent {
  constructor({ $target, item, setModal }) {
    super();
    this.$target = $target;
    this.item = item;
    this.setModal = setModal;
    this.outer = this.init(this.$target, "src/components/card", "article");
    this.render();
  }

  onModal() {
    const modalcontainer = document.querySelector(".modal-container");
    modalcontainer.classList.toggle("hidden");

    const modalcontent = document.querySelector(".modal-content");
    modalcontent.innerHTML = "";
    for (let key of Object.keys(this.item)) {
      const value = this.item[key];
      if (key === "url") {
        this.MakeImg(modalcontent, value, "modal-image");
      } else if (key === "breeds" || key === "id" || key === "categories") {
        continue;
      } else {
        this.Make(modalcontent, "div", value, `${key}`);
      }
    }
    this.MakeBtn(
      modalcontent,
      () => {
        modalcontainer.classList.toggle("hidden");
      },
      "취소",
      "modal-btn"
    );
  }

  // 렌더링
  render() {
    // 시작
    for (let key of Object.keys(this.item)) {
      const value = this.item[key];
      if (key === "url") {
        const catImage = this.MakeImg(this.outer, value, "card-image");
        catImage.addEventListener("click", () => this.onModal());
      } else if (key === "breeds" || key === "id" || key === "categories") {
        continue;
      } else {
        this.Make(this.outer, "div", value, `${key}`);
      }
    }
  }
}
