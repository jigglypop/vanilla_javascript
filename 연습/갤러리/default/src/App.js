export default class App {
  $target = null;
  dashboard = null;
  constructor($target) {
    this.$target = $target;
    const $h1 = document.createElement("h1");
    $h1.innerText = "샘플 프로젝트";
    $target.appendChild($h1);
    this.dashboard = $target;
  }
}
