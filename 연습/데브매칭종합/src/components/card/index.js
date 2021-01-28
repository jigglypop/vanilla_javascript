import NgComponent from "../../util/NgComponent.js";

export default class Card extends NgComponent {
  constructor({ $target, item }) {
    super();
    this.$target = $target;
    this.item = item;
    this.outer = this.init(this.$target, "src/components/card", "article");
    this.render();
  }

  // 렌더링
  render() {
    // 시작
    for (let key of Object.keys(this.item)) {
      const value = this.item[key];
      if (key === "url") {
        this.MakeImg(this.outer, value, "card-image");
      } else if (key === "breeds" || key === "id" || key === "categories") {
        continue;
      } else {
        this.Make(this.outer, "div", value, `${key}`);
      }
    }
  }
}
