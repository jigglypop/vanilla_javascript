import Header from "./section/header/header.js";
import Section from "./section/section/section.js";

export default class App {
  $target = null;
  dashboard = null;

  constructor($target) {
    this.$target = $target;
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.innerText = "헤더 컴포넌트 연습";

    // 헤더
    new Header({
      $target,
    });
    // 섹션
    new Section({
      $target,
    });
    this.$target.appendChild(h1);

    this.render();
    this.dashboard = $target;
  }

  render() {
    // this.$target.appendChild(cardsContainer);
  }
}
