import { Input } from "../../components/input/input.js";
import StyleSheets from "../../util/stylesheets.js";

export default class MainSection {
  constructor({ $target }) {
    // 메인
    this.mainContainer = document.createElement("section");
    $target.appendChild(this.mainContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 인풋
    new Input({
      $target: this.mainContainer,
    });
    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.mainContainer,
      Name: "sections/main",
    });
  }
}
