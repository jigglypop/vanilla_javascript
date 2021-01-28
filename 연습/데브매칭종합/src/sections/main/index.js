import Scroll from "../../components/scroll/index.js";
import NgComponent from "../../util/NgComponent.js";

export default class MainSection extends NgComponent {
  constructor({ $target, data }) {
    super();
    // 메인
    this.data = data;
    // 준비
    this.$target = $target;
    this.outer = this.init(this.$target, "src/sections/main", "section");
    this.render();
  }

  setState(data) {
    if (data === false) {
      this.data = data;
      this.render();
    } else {
      this.error();
    }
  }

  // 렌더링
  render() {
    this.clear(this.outer, "src/sections/main");
    new Scroll({
      $target: this.outer,
      data: this.data,
    });
  }

  // 에러처리
  error() {
    this.clear(this.outer, "src/sections/main");
    this.Make(this.outer, "h1", "검색결과가 없습니다.", "error");
    this.MakeImg(this.outer, "src/img/emptybox.png", "error-img");
  }
}
