import StyleSheets from "../../util/stylesheets.js";

export default class MainSection {
  constructor({ $target, items }) {
    // 메인
    this.items = items;
    this.mainContainer = document.createElement("section");
    $target.appendChild(this.mainContainer);
    this.render();
  }

  setState(items) {
    this.items = items;
    this.render();
  }

  // 렌더링
  render() {
    // 스타일 시트 경로 삽입

    new StyleSheets({
      $target: this.mainContainer,
      Name: "sections/main",
    });
  }
}
