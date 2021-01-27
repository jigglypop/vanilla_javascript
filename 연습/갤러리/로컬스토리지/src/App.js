import Scroll from "./scroll/scroll.js";

export default class App {
  $target = null;
  dashboard = null;

  constructor($target) {
    this.$target = $target;
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.innerText = "고양이 사진";
    this.$target.appendChild(h1);

    // 스크롤
    new Scroll({
      $target,
    });

    // 데이터
    this.render();
    this.dashboard = $target;
  }

  render() {}
}
