import HeaderSection from "./sections/header/header.js";
import MainSection from "./sections/main/index.js";

export default class App {
  $target = null;
  dashboard = null;
  items = null;

  constructor($target) {
    this.$target = $target;

    // 헤더
    new HeaderSection({
      $target,
    });

    // 메인
    new MainSection({
      $target,
    });

    this.dashboard = $target;
  }
}
