import HeaderSection from "./sections/header/header.js";
import MainSection from "./sections/main/main.js";
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
      items: this.items,
    });

    this.dashboard = $target;
  }
}
