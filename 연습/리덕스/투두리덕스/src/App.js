import HeaderSection from "./sections/header/index.js";
import MainSection from "./sections/main/index.js";
import { GetLocal } from "./util/localStorage.js";

export default class App {
  $target = null;
  dashboard = null;
  items = null;

  constructor($target) {
    this.$target = $target;
    this.items = GetLocal("cats");

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
