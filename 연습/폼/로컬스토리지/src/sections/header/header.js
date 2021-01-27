import StyleSheets from "../../components/stylesheets/stylesheets.js";

export default class HeaderSection {
  constructor({ $target }) {
    // 헤더 컨테이너
    this.headerContainer = document.createElement("nav");
    $target.appendChild(this.headerContainer);
    this.render();
  }

  // 렌더링
  render() {
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.innerText = "고양이 사진";
    this.headerContainer.appendChild(h1);

    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.headerContainer,
      Name: "sections/header",
    });
  }
}
