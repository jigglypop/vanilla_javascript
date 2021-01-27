import Header from "./section/header/header.js";
import Section from "./section/section/section.js";
import Image from "./section/image/image.js";

export default class App {
  $target = null;
  dashboard = null;

  constructor($target) {
    this.$target = $target;
    this.render();
    this.dashboard = $target;
  }

  render() {
    // 헤더
    new Header({
      $target: this.$target,
    });
    // 이미지
    new Image({
      $target: this.$target,
    });
    // 섹션
    new Section({
      $target: this.$target,
    });
  }
}
